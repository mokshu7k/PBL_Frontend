import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineBars3 } from 'react-icons/hi2';

const NavbarHome = () => {
    return (
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
                        <NavLink 
                          to="/logout"
                          className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-200"}
                        >
                          Logout
                        </NavLink>
                    </div>
                    
                    {/* <button className='bg-transparent tracking-wide flex duration-200 ease-in-out hover:opacity-50'>
                        <HiOutlineBars3 size={24} />
                    </button> */}
                </div>
            </div>
        </nav>
    );
}

export default NavbarHome;
