import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <article className='bg-gray-50 text-center border-r-gray-100 rounded-2xl  top-0 py-2 shadow-xl '>
        
        <h5 className='text-center font-bold'>{fullName?.length > 20? fullName.substring(0,20) + "..." : fullName}</h5>
        <small className='block font-light m-4 '>{motto?.length > 20? motto.substring(0,20) + "..." : motto}</small>
        <button className=' bg-blue-500 font-bold text-center text-white px-4 py-2 rounded-2xl'>Vote</button>
    </article>
  )
}

export default Home