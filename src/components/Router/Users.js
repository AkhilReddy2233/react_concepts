import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

const Users = () => {
    const [searchParams,setSearchParams] = useSearchParams()
    console.log(searchParams);
    const showActiveUsers = searchParams.get('filter') === 'active';
    console.log(showActiveUsers)
  return (
    <div>
      <h3>user 1</h3>
      <h3>user 2</h3>
      <h3>user 3</h3>
      <div>
        <button onClick={()=>setSearchParams({filter:'active'})}>Active Users</button>
        <button  onClick={()=>setSearchParams({})}>Reset Users</button>
      </div>
      {
        showActiveUsers ? <h4>Showing Active Users</h4> : <h4>Showing All Users</h4>
      }
      <Outlet />
    </div>
  )
}

export default Users
