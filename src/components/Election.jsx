import React from 'react'
import { Link } from 'react-router-dom'
const Election = ({id,title,description, thumbnail}) => {
  return (
    <article>
        <div>
            <img src={thumbnail} alt={title} />
        </div>
        <div>
            <Link to={`/elections/${id}`}><h4>{title}</h4></Link>
            <p>{description?.length>255? description.substring(0,255) +"...":description}</p>
            <div>
                <Link to={`elections/${id}`}>View</Link>
                <button className='bg-blue-500 font-bold text-center text-white px-4 py-2 rounded-2xl
        transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105'>Edit</button>
            </div>
        </div>
        
    </article>
  )
}

export default Election