import React from 'react'
import { useAuth } from './auth'
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const location = useLocation()
    const auth = useAuth();
    console.log(location)

    if(!auth.user){
        return <Navigate to='/login' state={{path:location.pathname}}/>
    }
  return children;
}

export default RequireAuth
