import React from 'react'
import Card from '../components/Card'

const Candidate = ({image,id,fullName,motto}) => {
  return (
    <Card>
        <div class="aspect-square overflow-hidden mb-2 mx-auto ">
            <img src = {image} alt ={fullName}></img>
        </div>
        <h5 className='text-center font-bold'>{fullName?.length > 20? fullName.substring(0,20) + "..." : fullName}</h5>
        <small className='block font-light m-4 '>{motto?.length > 20? motto.substring(0,20) + "..." : motto}</small>
        <button className=' bg-blue-500 font-bold text-center text-white px-4 py-2 rounded-2xl'>Vote</button>
    </Card>
  )
}

export default Candidate