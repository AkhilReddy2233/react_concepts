import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'

const Nav = () => {
    const navStyles = ({isActive}) =>{
        return{
            fontWeight: isActive ? 'bold' :'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }

    const auth = useAuth()
  return (
    <nav>
      <NavLink to='/' style={navStyles}>Home</NavLink>
      <NavLink to='about' style={navStyles}>About</NavLink>
      <NavLink to='products' style={navStyles}>Products</NavLink>
      <NavLink to='profile' style={navStyles}>Profile</NavLink>
      {
        !auth.user && <NavLink to='login' style={navStyles}>Login</NavLink>
      }
    </nav>
  )
}

export default Nav
