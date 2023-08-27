import React from 'react'
import Child3 from './Child3'

function Child2({count,handleClick}) {
    return (
      <div>
         <h2>Child2</h2>
        <h4>Count - {count}</h4>
        {/* <Button onClick={()=>handleClick()}>Increase</Button> */}
        <Child3 count={count} handleClick={handleClick}></Child3>
      </div>
    )
  }
export default Child2
