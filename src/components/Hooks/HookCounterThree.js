import React, { useState } from 'react'

function HookCounterThree() {
    const[name, setName] = useState({firstName:'', lastName:''})
  return (
    <div>
      <h4>Hooks with objects</h4>
      <input 
      type='text' 
      value={name.firstName} 
      onChange={e=>setName({...name,firstName:e.target.value})}/>
      <input 
      type='text' 
      value={name.lastName} 
      onChange={e=>setName({...name,lastName:e.target.value})}/>
      <h2>First name is - {name.firstName}</h2>
      <h2>Last name is - {name.lastName}</h2>
    </div>
  )
}

export default HookCounterThree
