import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../components/SidebarLeft';

const JoinCommunity = () => {
  const [communityId, setCommunityId] = useState('');
  const [formData, setFormData] = useState({});
  const fields = useSelector((state) => state.fields.fields);

  const handleChange = (id, value) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!communityId.trim()) {
      alert('Community ID is required.');
      return;
    }

    console.log('Joining community:', communityId);
    console.log('Submitted data:', formData);
    // You can send this to the backend here
  };

  return (
    <div className="p-4 max-w-xl mx-auto bg-white rounded-xl shadow-md space-y-6">
      <Sidebar />
      <h2 className="text-2xl font-semibold text-center">Join Community</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-medium">Community ID<span className="text-red-500">*</span></label>
          <input
            type="text"
            placeholder="Enter Community ID"
            value={communityId}
            onChange={(e) => setCommunityId(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>

        {communityId.trim() && fields.length > 0 && (
          <>
            {fields.map((field) => (
              <div key={field.id} className="flex flex-col">
                <label className="font-medium">{field.name}</label>
                <input
                  type="text"
                  placeholder={`Enter ${field.name}`}
                  value={formData[field.id] || ''}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  className="border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
            ))}
          </>
        )}

        <button
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Join Community
        </button>
      </form>
    </div>
  );
};

export default JoinCommunity;
