import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const naviagte = useNavigate()
  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={()=>naviagte('orders',{replace:true})}>orders page</button>
    </div>
  )
}

export default Home
