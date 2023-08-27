import React, { useState } from 'react'

function HookCounter() {    
    const [count, setCount]=  useState(0)
  return (
    <div>
      <h4>Hook Counter</h4>
      <button onClick={()=>{setCount(count+1)}}>Clikced {count} times</button>
    </div>
  )
}

export default HookCounter
