import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="bg-gray-50 text-center border-r-gray-100 rounded-2xl top-0 py-2 shadow-xl">
      {children}
    </div>
  );
};

export default Card;
