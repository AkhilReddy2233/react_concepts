import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Router/Home'
import About from './Router/About'
import Nav from './Router/Nav'
import Orders from './Router/Orders'
import Products from './Router/Products'
import Featured from './Router/Featured'
import New from './Router/New'
import Users from './Router/Users'
import UserDetails from './Router/UserDetails'
import Admin from './Router/Admin'
import Profile from './Router/Profile'
import Login from './Router/Login'
import { AuthProvider } from './Router/auth'
import RequireAuth from './Router/RequireAuth'
import Parent from './Communication/Parent'

// console.log(Routes)
// console.log(Route)
function Layout() {
  return (
    <AuthProvider>
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='orders' element={<Orders/>}></Route>
        <Route path='products' element={<Products/>}>
          <Route index element={<Featured/>}/>
          <Route path='featured' element={< Featured/>}/>
          <Route path='new' element={<New/>}/>
        </Route>
        <Route path='users' element={< Users/>}>
          <Route path=':id' element={<UserDetails/>}></Route>
          <Route path='admin' element={<Admin/>}></Route>
        </Route>
        <Route path='profile' element={<RequireAuth><Profile/></RequireAuth>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='communication' element={<Parent/>}></Route>
      </Routes>
    </div>
    </AuthProvider>
  )
}

export default Layout
