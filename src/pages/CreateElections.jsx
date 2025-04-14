import { useState, useEffect } from "react";
import { ethers } from "ethers";
import axios from "axios";
import ElectionFactoryABI from "../abi/ElectionFactoryABI.json";

const ELECTION_FACTORY_ADDRESS = "0x8bAFD7901c313Ae24292B2D26eEf4dC362e2Ed7C";

export default function CreateElection() {
    const [electionName, setElectionName] = useState("");
    const [candidateDropdowns, setCandidateDropdowns] = useState([""]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch users from backend
    useEffect(() => {
        axios.get("http://localhost:5001/api/users/all")
            .then(res => setUsers(res.data))
            .catch(err => console.error("Error fetching users:", err));
    }, []);

    const handleAddCandidate = () => {
        setCandidateDropdowns([...candidateDropdowns, ""]);
    };

    const handleCandidateChange = (index, value) => {
        const updated = [...candidateDropdowns];
        updated[index] = value;
        setCandidateDropdowns(updated);
    };

    const handleCreateElection = async () => {
        try {
            if (!window.ethereum) return alert("Please install MetaMask");

            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const admin = await signer.getAddress();

            const candidates = candidateDropdowns.filter(id => id);
            if (candidates.length === 0) return alert("Select at least one candidate");

            const voters = users; // assuming all users can vote
            const depositAmount = ((voters.length + 1) * 0.01).toString();

            // Encode the data for createElection(name, voters, candidates)
            const iface = new ethers.Interface(ElectionFactoryABI);
            const encodedData = iface.encodeFunctionData("createElection", [
                electionName,
                voters.map(u => u.id), // or u.wallet if voter address is wallet
                candidates
            ]);

            const tx = await signer.sendTransaction({
                to: ELECTION_FACTORY_ADDRESS,
                data: encodedData,
                value: ethers.parseEther(depositAmount),
            });

            await tx.wait();
            alert("Election created! TX Hash: " + tx.hash);
        } catch (err) {
            console.error(err);
            alert("Error creating election: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Create Election</h2>

            <input
                className="w-full mb-3 p-2 border rounded"
                placeholder="Election Name"
                onChange={e => setElectionName(e.target.value)}
            />

            <label className="font-semibold">Select Candidates:</label>
            {candidateDropdowns.map((value, index) => (
                <select
                    key={index}
                    value={value}
                    onChange={e => handleCandidateChange(index, e.target.value)}
                    className="w-full mb-2 p-2 border rounded"
                >
                    <option value="">-- Select a user --</option>
                    {users.map(user => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>
            ))}

            <button
                className="mb-4 bg-gray-300 px-4 py-1 rounded"
                onClick={handleAddCandidate}
            >
                Add Another Candidate
            </button>

            <input
                className="w-full mb-3 p-2 border rounded"
                type="number"
                placeholder="Number of Voters"
                value={users.length}
                disabled
            />

            <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleCreateElection}
                disabled={loading}
            >
                {loading ? "Creating..." : "Create Election"}
            </button>
        </div>
    );
}
