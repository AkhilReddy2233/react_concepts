import React, { useState } from 'react'
import { useUserForm } from './CustomCounter'

function UserForm() {
    // const [firstName,setFirstName]=useState('')
    // const [secondName,setSecondName] =useState('')

    const[firstName,bindFirstName,resetFirstName] = useUserForm('')
    const[secondName,bindSecondName,resetSecondName] = useUserForm('')

    const handleSubmit =(e)=>{
        e.preventDefault();
        alert(`Hello ${firstName} ${secondName}`)
        resetFirstName();
        resetSecondName();
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Firstname</label>
                <input type='text' value={firstName} {...bindFirstName}></input>
            </div>
            <div>
                <label>Secondname</label>
                <input type='text' value={secondName} {...bindSecondName}></input>
        </div>
        <button>Submit</button>
        </form>
    </div>
  )
}

export default UserForm
