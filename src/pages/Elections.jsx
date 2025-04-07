import React, { useState } from 'react';
import { elections as dummyElections } from '../data';
import Election from '../components/Election';
import Sidebar from '../components/SidebarLeft';
const Elections = () => {
  const [elections,setElections] = useState(dummyElections);
  const [filter, setFilter] = useState('ongoing'); // can be 'ongoing' or 'past'
  const filteredElections = elections.filter(e => e.status === filter);

  return (
    <section className="p-4">
      <Sidebar/>
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">{filter === 'ongoing' ? 'Ongoing Elections' : 'Past Elections'}</h1>
            <div className="mt-2 space-x-2">
              <button
                onClick={() => setFilter('ongoing')}
                className={`px-4 py-2 rounded-lg ${filter === 'ongoing' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                Ongoing
              </button>
              <button
                onClick={() => setFilter('past')}
                className={`px-4 py-2 rounded-lg ${filter === 'past' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                Past
              </button>
            </div>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">Create New Election</button>
        </header>

        <menu className="grid gap-6">
          {filteredElections.length > 0 ? (
            filteredElections.map((election) => (
              <Election key={election.id} {...election} />
            ))
          ) : (
            <p className="text-gray-500">No {filter} elections found.</p>
          )}
        </menu>
      </div>
    </section>
  );
};

export default Elections;
