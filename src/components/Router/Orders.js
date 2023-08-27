import React from 'react'
import { useNavigate } from 'react-router-dom'

function Orders() {
  const naviagte = useNavigate()
  return (
    <div>
      <h2>This is Orders page</h2>
      <button onClick={()=>{naviagte(-1)}}>Go Back</button>
    </div>
  )
}

export default Orders
