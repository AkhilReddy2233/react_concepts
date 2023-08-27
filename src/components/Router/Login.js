import React, { useState } from 'react'
import { useAuth } from './auth'
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const[user,setUser] = useState('')
    const auth = useAuth();
    const naviagte = useNavigate();
    const location = useLocation()
    const redirectedPath = location.state?.path || '/'
    console.log(redirectedPath)

    const handleLogin = ()=>{
        auth.login(user);
        naviagte(redirectedPath,{replace:true})
    }
  return (
    <div>
      Username: {''}
      <input type="text" onChange={e=>setUser(e.target.value)}></input>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
