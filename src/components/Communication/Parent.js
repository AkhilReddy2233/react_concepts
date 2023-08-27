import { Button } from '@mui/material'
import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2';

const Parent = () => {
    const [count,setCount] = useState(0);
    
    function handleClick(){
        setCount(count+1)
    }
  return (
    <div>
      <h2>Parent</h2>
      <h4>Count - {count}</h4>
      {/* <Button onClick={()=>setCount(count+1)}>Increase</Button> */}
      <Child1 count={count} handleClick={handleClick}></Child1>
      <Child2 count={count} handleClick={handleClick}></Child2>
    </div>
  )
}

export default Parent
