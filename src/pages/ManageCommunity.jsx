import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../components/SidebarLeft';

const ManageCommunity = () => {
  const { id } = useParams();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch members of this community
    axios.get(`http://localhost:5000/api/communities/${id}/members`)
      .then((res) => {
        setMembers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching members:', err);
        setLoading(false);
      });
  }, [id]);

  return (
    <section className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-200">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Members of Community ID: {id}
        </h1>

        {loading ? (
          <p className="text-gray-500">Loading members...</p>
        ) : members.length === 0 ? (
          <p className="text-gray-500">No members found in this community.</p>
        ) : (
          <ul className="space-y-4">
            {members.map((member) => (
              <li
                key={member.id}
                className="bg-white p-4 rounded-xl shadow border border-gray-200"
              >
                <p className="text-lg font-semibold text-gray-800">{member.name}</p>
                <p className="text-sm text-gray-600">{member.email}</p>
                <p className="text-sm text-gray-500">Role: {member.role}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default ManageCommunity;
