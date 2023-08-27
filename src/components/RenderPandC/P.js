import React, { useReducer, useState } from 'react'
import C from './C';
const initialState = 0;

function P({children}) {
   const[count,setCount]= useState(initialState);
   console.log('Parent Rendered');
  return (
    <div>
      <h4>React Render using Reducer </h4>
      <h6>Count - {count}</h6>
      <button onClick={()=>setCount(count=>count+1)}>Increment</button> 
      <button onClick={()=>setCount(5)}>Increment by 5</button> 
      <button onClick={()=>setCount(count=>count-1)}>Decrement</button> 
      <button onClick={()=>setCount(initialState)}>Reset</button> 
      {/* <C /> */}
      {children}
    </div>
  )
}

export default P
