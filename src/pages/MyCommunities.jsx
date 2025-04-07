import React from 'react';
import VerticalCard from '../components/VerticalCard';
import Sidebar from '../components/SidebarLeft';
import { useNavigate } from 'react-router-dom';
import { elections } from '../data';

export const MyCommunitiesAdmin = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-64 p-6 w-full">
        <h1 className="text-4xl font-bold mb-8 text-blue-700">My Created Communities</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {elections.map((election) => (
            <VerticalCard key={election.id}>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{election.title}</h2>
              <button
                onClick={() => navigate(`/elections`)}
                className="bg-blue-500 font-bold text-center text-white px-4 py-2 rounded-2xl
                transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
              >
                Enter Election
              </button>
            </VerticalCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export const MyCommunitiesVoter = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-64 p-6 w-full">
        <h1 className="text-4xl font-bold mb-8 text-blue-700">My Joined Communities</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {elections.map((election) => (
            <VerticalCard key={election.id}>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{election.title}</h2>
              <button
                onClick={() => navigate(`/election/${election.id}`)}
                className="bg-blue-500 font-bold text-center text-white px-4 py-2 rounded-2xl
        transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
              >
                Enter Election
              </button>
            </VerticalCard>
          ))}
        </div>
      </div>
    </div>
  );
};
