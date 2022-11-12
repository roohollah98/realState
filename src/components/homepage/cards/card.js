import React from 'react'
import { useNavigate } from 'react-router-dom'
const Card = ({address,id}) => {
  const navigate =useNavigate();
  
  return (
    <div className='card' onClick={()=>{navigate(`/details/${id}`)}}>
      <h2 className='CardTitle'>Address</h2>
      <p>{address}</p>
      <div className='cardBorder'></div>
    </div>
  )
}

export default Card