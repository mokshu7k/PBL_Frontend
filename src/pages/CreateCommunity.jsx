// import React from 'react'
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { field_slice_actions } from '../store/field_slice';
// import { useNavigate } from 'react-router-dom';
// import Sidebar from '../components/SidebarLeft';
// const dataTypes = ['string', 'numeric', 'alphanumeric']
// const CreateCommunity = () => {
  
//   const dispatch = useDispatch();
//   const fields = useSelector(state => state.fields.fields);
//   const navigate = useNavigate();

//   const handleUpdate = (id,key,value) =>{
//     dispatch(field_slice_actions.updateField({id,key,value}));
//   }
//   const handleSubmit = () => {
//     console.log("Submitted fields:", fields);
    
//     // For now, redirecting to admin path with dummy ID
//     const communityId = '123'; // Replace with real ID from backend later
//     navigate(`/communities/${communityId}/admin`);
//   };
//   return (
//     <div className="p-4 max-w-xl mx-auto bg-white rounded-xl shadow-md space-y-4">
//       <Sidebar />
//       <h2 className="text-xl font-semibold">Add Required Fields</h2>

//       {fields.map((field, idx) => (
//         <div key={field.id} className="flex items-center gap-4">
//           <input
//             type="text"
//             placeholder={`Field ${idx + 1}`}
//             value={field.name}
//             onChange={(e) => handleUpdate(field.id, "name", e.target.value)}
//             className="border border-gray-300 rounded-md p-2 flex-1"
//           />
//           <select
//             value={field.type}
//             onChange={(e) => handleUpdate(field.id, "type", e.target.value)}
//             className="border border-gray-300 rounded-md p-2"
//           >
//             {dataTypes.map((type) => (
//               <option key={type} value={type}>{type}</option>
//             ))}
//           </select>
//         </div>
//       ))}
//       <div className= 'flex justify-between items-center pt-2 '>
//       <button
//         onClick={() => dispatch(field_slice_actions.addField())}
//         className="bg-blue-500 font-bold text-center text-white px-4 py-2 rounded-2xl
//         transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105 "
//       >
//         + Add Field
//       </button>
//       <button
//     onClick={handleSubmit}
//     className="bg-blue-500 font-bold text-center text-white px-4 py-2 rounded-2xl
//     transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
//   >
//     Submit
//   </button>
//   </div>
//     </div>
//   )
// }

// export default CreateCommunity



import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { field_slice_actions } from '../store/field_slice';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/SidebarLeft';

const dataTypes = ['string', 'numeric', 'alphanumeric'];

const CreateCommunity = () => {
  const dispatch = useDispatch();
  const fields = useSelector(state => state.fields.fields);
  const navigate = useNavigate();

  const [communityName, setCommunityName] = useState('');
  const [error, setError] = useState(null);

  const handleUpdate = (id, key, value) => {
    dispatch(field_slice_actions.updateField({ id, key, value }));
  };

  const handleSubmit = () => {
    if (!communityName.trim()) {
      setError('Community name is required');
      return;
    }

    setError(null); // Clear errors if any
    console.log("Community Name:", communityName);
    console.log("Submitted fields:", fields);

    // Simulate backend call
    const communityId = '123'; // Replace with real ID
    navigate(`/communities/${communityId}`);
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-64 border-r border-gray-200">
        <Sidebar />
      </div>

      <div className="flex-1 p-8">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-6 p-6">
          <h2 className="text-2xl font-bold">Create Community</h2>

          <div className="space-y-2">
            <label htmlFor="communityName" className="block font-medium text-gray-700">
              Community Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="communityName"
              placeholder="Enter community name"
              value={communityName}
              onChange={(e) => setCommunityName(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Add the information that you want the voter to enter when joining the community(eg.name, Enrollment number etc)</h4>
            {fields.map((field, idx) => (
              <div key={field.id} className="flex items-center gap-4">
                <input
                  type="text"
                  placeholder={`Field ${idx + 1}`}
                  value={field.name}
                  onChange={(e) => handleUpdate(field.id, 'name', e.target.value)}
                  className="border border-gray-300 rounded-md p-2 flex-1"
                />
                <select
                  value={field.type}
                  onChange={(e) => handleUpdate(field.id, 'type', e.target.value)}
                  className="border border-gray-300 rounded-md p-2"
                >
                  {dataTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <div className="flex justify-between pt-4">
            <button
              onClick={() => dispatch(field_slice_actions.addField())}
              className="bg-blue-500 font-bold text-white px-4 py-2 rounded-xl transition hover:bg-blue-600 hover:shadow-lg"
            >
              + Add Field
            </button>
            <button
              onClick={handleSubmit}
              className="bg-green-500 font-bold text-white px-6 py-2 rounded-xl transition hover:bg-green-600 hover:shadow-lg"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCommunity;
