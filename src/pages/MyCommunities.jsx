// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { elections as dummyElections } from '../data';
// import Sidebar from '../components/SidebarLeft';
// import VerticalCard from '../components/VerticalCard';

// const MyCommunities = () => {
//   const navigate = useNavigate();
//   const [role, setRole] = useState('admin'); // 'admin' | 'voter'

//   return (
//     <section className="flex min-h-screen bg-gray-50">
//       {/* Sidebar on the left */}
//       <div className="w-64 border-r border-gray-200">
//         <Sidebar />
//       </div>

//       {/* Main content */}
//       <div className="flex-1 p-6">
//         <header className="flex justify-between items-center mb-8">
//           <div>
//             <h1 className="text-3xl font-bold text-blue-700">
//               {role === 'admin' ? 'My Created Communities' : 'My Joined Communities'}
//             </h1>
//             <div className="mt-4 space-x-3">
//               <button
//                 onClick={() => setRole('admin')}
//                 className={`px-4 py-2 rounded-lg transition ${
//                   role === 'admin'
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-gray-200 hover:bg-gray-300'
//                 }`}
//               >
//                 Admin
//               </button>
//               <button
//                 onClick={() => setRole('voter')}
//                 className={`px-4 py-2 rounded-lg transition ${
//                   role === 'voter'
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-gray-200 hover:bg-gray-300'
//                 }`}
//               >
//                 Voter
//               </button>
//             </div>
//           </div>
//         </header>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {dummyElections.map((election) => (
//             <VerticalCard key={election.id}>
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//                 {election.title}
//               </h2>
//               <button
//                 onClick={() =>
//                   role === 'admin'
//                     ? navigate(`/communities/${election.id}/manage`)
//                     : navigate(`/communities/${election.id}/elections`)
//                 }
//                 className="bg-blue-500 font-bold text-center text-white px-4 py-2 rounded-2xl
//                 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
//               >
//                 Enter Election
//               </button>
//             </VerticalCard>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MyCommunities;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/SidebarLeft';
import VerticalCard from '../components/VerticalCard';
import axios from 'axios';

const MyCommunities = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('admin'); // 'admin' | 'voter'
  const [communities, setCommunities] = useState({ admin: [], user: [] });

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5001/myCommunity', {
          headers: {
            'token': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        console.log(response.data);
        setCommunities(response.data);
      } catch (error) {
        console.error('Error fetching communities:', error);
      }
    };

    fetchCommunities();
  }, []);

  const getDisplayedCommunities = () => {
    if (role === 'admin') return communities.admin || [];
    // Merge admin + user communities for voter role
    return [...(communities.user || []), ...(communities.admin || [])];
  };

  const displayedCommunities = getDisplayedCommunities();

  return (
    <section className="flex min-h-screen bg-gray-50">
      {/* Sidebar on the left */}
      <div className="w-64 border-r border-gray-200">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-blue-700">
              {role === 'admin' ? 'My Created Communities' : 'My Joined Communities'}
            </h1>
            <div className="mt-4 space-x-3">
              <button
                onClick={() => setRole('admin')}
                className={`px-4 py-2 rounded-lg transition ${role === 'admin'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                  }`}
              >
                Admin
              </button>
              <button
                onClick={() => setRole('voter')}
                className={`px-4 py-2 rounded-lg transition ${role === 'voter'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                  }`}
              >
                Voter
              </button>
            </div>
          </div>
        </header>

        {displayedCommunities.length === 0 ? (
          <p className="text-gray-500 text-lg">
            No communities found for <span className="font-semibold">{role}</span> role.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedCommunities.map((community, index) => (
              <VerticalCard key={index}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {community.collectionName}
                </h2>
                <button
                  onClick={() => {
                    // Store selected community key in localStorage
                    localStorage.setItem('selectedCommunityKey', community.key);

                    // Navigate to the appropriate route
                    navigate(
                      role === 'admin'
                        ? `/communities/${community.collectionName}/manage`
                        : `/communities/${community.collectionName}/elections`
                    );
                  }}
                  className="bg-blue-500 font-bold text-center text-white px-4 py-2 rounded-2xl
      transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
                >
                  {role === 'admin' ? 'Start Election' : 'Enter Election'}
                </button>
              </VerticalCard>
            ))}

          </div>
        )}
      </div>
    </section>
  );
};

export default MyCommunities;
