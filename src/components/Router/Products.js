import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Products() {
  return (
    <div>
       <h2>Products</h2>
       <input placeholder='search item'></input>
       <nav>
       <NavLink to='featured'>Featured</NavLink>
       <NavLink to='New'>New</NavLink>
       </nav>
       <Outlet />
    </div>
    
  )
}

export default Products
