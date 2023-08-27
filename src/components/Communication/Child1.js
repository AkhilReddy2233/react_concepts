import { Button } from '@mui/material'
import React from 'react'

function Child1({count,handleClick}) {
  return (
    <div>
       <h2>Child1</h2>
      <h4>Count - {count}</h4>
      {/* <Button onClick={()=>handleClick()}>Increase</Button> */}
    </div>
  )
}

export default Child1
