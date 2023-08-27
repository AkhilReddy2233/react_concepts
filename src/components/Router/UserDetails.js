import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const params = useParams();
    console.log(params)
  return (
    <div>
        User Details {params.id}
    </div>
  )
}

export default  UserDetails
