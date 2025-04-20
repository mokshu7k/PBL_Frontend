// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { HiOutlineBars3 } from 'react-icons/hi2';

// const NavbarHome = () => {
//     return (
//         <nav className='w-full flex sticky top-0 left-0 bg-blue-600 p-4 z-10'>
//             <div className='flex w-full text-center'>
//                 <Link to="/" className="font-serif font-bold text-2xl text-white">
//                     CASTORA
//                 </Link>

//                 <div className='flex-grow'></div>

//                 <div className="flex items-center ml-auto gap-4">
//                     <div className='flex gap-4 list-none'>
//                         <NavLink 
//                           to="/home"
//                           className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-200"}
//                         >
//                           Home
//                         </NavLink>
//                         <NavLink 
//                           to="/about"
//                           className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-200"}
//                         >
//                           About
//                         </NavLink>
//                         <NavLink 
//                           to="/logout"
//                           className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-200"}
//                         >
//                           Logout
//                         </NavLink>
//                     </div>
                    
//                     {/* <button className='bg-transparent tracking-wide flex duration-200 ease-in-out hover:opacity-50'>
//                         <HiOutlineBars3 size={24} />
//                     </button> */}
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default NavbarHome;
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const NavbarHome = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setShowModal(false);
    navigate("/");
  };

  return (
    <>
      <nav className='w-full flex sticky top-0 left-0 bg-blue-600 p-4 z-10'>
        <div className='flex w-full text-center'>
          <Link to="/" className="font-serif font-bold text-2xl text-white">
            CASTORA
          </Link>

          <div className='flex-grow'></div>

          <div className="flex items-center ml-auto gap-4">
            <div className='flex gap-4 list-none'>
              <NavLink 
                to="/home"
                className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-200"}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about"
                className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-200"}
              >
                About
              </NavLink>
              <button
                onClick={() => setShowModal(true)}
                className="text-gray-200 hover:text-white"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Logout Modal in top-right corner */}
      {showModal && (
        <div className="fixed top-20 right-6 z-50">
          <div className="bg-white border shadow-lg rounded-lg p-4 w-80">
            <h2 className="text-md font-semibold mb-2">Are you sure you want to logout?</h2>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-white font-bold text-gray-700 border-2 border-gray-700 px-4 py-2 rounded-2xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 hover:scale-105"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="bg-blue-500 font-bold text-white px-4 py-2 rounded-2xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 hover:scale-105"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarHome;
