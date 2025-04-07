import React from "react";
import Sidebar from "../components/SidebarLeft"; // adjust path if needed
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [createdCount, setCreatedCount] = useState(0);
  const [joinedCount, setJoinedCount] = useState(0);
  const [votedCount, setVotedCount] = useState(0);
  const [activeElections, setActiveElections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [createdRes, joinedRes, votedRes, activeRes] = await Promise.all([
          axios.get("/api/elections/created"),
          axios.get("/api/elections/joined"),
          axios.get("/api/elections/voted"),
          axios.get("/api/elections/active"),
        ]);
  
        setCreatedCount(createdRes.data?.count || 0);
        setJoinedCount(joinedRes.data?.count || 0);
        setVotedCount(votedRes.data?.count || 0);
        setActiveElections(activeRes.data?.elections || []);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 mt-16 p-6 w-full">
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-8">
          <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
            <p className="text-xl font-semibold text-blue-600">🏛️ {createdCount}</p>
            <p className="text-gray-600">Communities Created</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
            <p className="text-xl font-semibold text-green-600">🤝 {joinedCount}</p>
            <p className="text-gray-600">Communities Joined</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
            <p className="text-xl font-semibold text-purple-600">🗳️ {votedCount}</p>
            <p className="text-gray-600">Votes Cast</p>
          </div>
        </div>

        {/* Active Elections Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Active Elections</h2>
          {activeElections.length > 0 ? (
            <ul className="space-y-3">
              {activeElections.map((election) => (
                <li
                  key={election.id}
                  className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500"
                >
                  <p className="font-semibold">{election.title}</p>
                  <p className="text-sm text-gray-500">
                    Ends on: {new Date(election.endDate).toLocaleDateString()}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No active elections right now.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
