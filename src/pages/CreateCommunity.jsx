import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { field_slice_actions } from '../store/field_slice';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/SidebarLeft';
const dataTypes = ['string', 'numeric', 'alphanumeric']
const CreateCommunity = () => {
  
  const dispatch = useDispatch();
  const fields = useSelector(state => state.fields.fields);
  const navigate = useNavigate();

  const handleUpdate = (id,key,value) =>{
    dispatch(field_slice_actions.updateField({id,key,value}));
  }
  const handleSubmit = () => {
    console.log("Submitted fields:", fields);
    
    // For now, redirecting to admin path with dummy ID
    const communityId = '123'; // Replace with real ID from backend later
    navigate(`/communities/${communityId}/admin`);
  };
  return (
    <div className="p-4 max-w-xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <Sidebar />
      <h2 className="text-xl font-semibold">Add Required Fields</h2>

      {fields.map((field, idx) => (
        <div key={field.id} className="flex items-center gap-4">
          <input
            type="text"
            placeholder={`Field ${idx + 1}`}
            value={field.name}
            onChange={(e) => handleUpdate(field.id, "name", e.target.value)}
            className="border border-gray-300 rounded-md p-2 flex-1"
          />
          <select
            value={field.type}
            onChange={(e) => handleUpdate(field.id, "type", e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          >
            {dataTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      ))}
      <div className= 'flex justify-between items-center pt-2 '>
      <button
        onClick={() => dispatch(field_slice_actions.addField())}
        className="bg-blue-500 font-bold text-center text-white px-4 py-2 rounded-2xl
        transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105 "
      >
        + Add Field
      </button>
      <button
    onClick={handleSubmit}
    className="bg-blue-500 font-bold text-center text-white px-4 py-2 rounded-2xl
    transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
  >
    Submit
  </button>
  </div>
    </div>
  )
}

export default CreateCommunity
