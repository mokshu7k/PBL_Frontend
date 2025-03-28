import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { IoIosMoon } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";
import { HiOutlineBars3 } from 'react-icons/hi2';
import {AiOutlineClose } from 'react-icons/ai';
import Image from '../assets/castora_logo.png'
const Navbar = () => {
  return (
    <nav>
        <div className='flex items-center fixed top-0 left-0 '>
            <Link to="/" className="">
            <img link = '/' className=' max-w-sm md:max-w-md lg:max-w-lg'
                    src = {Image} alt= "Castora Logo"/>
            </Link>
            <div>
                <menu>
                    <NavLink to= "/elections">Elections</NavLink>
                    <NavLink to="/results">Results</NavLink>
                    <NavLink to="/logout">Logout</NavLink>
                </menu>
                <button className=''><IoIosMoon /></button>
                <button className=''><HiOutlineBars3 /></button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar