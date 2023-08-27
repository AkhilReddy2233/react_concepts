import React, { useReducer, useState } from 'react'
const initialState = 0;
const reducer = (state,action)=>{
    switch(action){
        case 'increment': return state + 1;
        case 'decrement': return state - 1;
        case 'reset':return initialState;
        default : return state
    }
}
function UseReducerRender() {
   const[count,dispatch]= useReducer(reducer,initialState);
//    const[count,setCount]= useState(initialState);
   console.log('Component Rendered');
  return (
    <div>
      <h4>React Render using Reducer </h4>
      <h6>Count - {count}</h6>
      {/* <button onClick={()=>setCount(count=>count+1)}>Increment</button> 
      <button onClick={()=>setCount(5)}>Increment by 5</button> 
      <button onClick={()=>setCount(count=>count-1)}>Decrement</button> 
      <button onClick={()=>setCount(initialState)}>Reset</button>  */}
      <button onClick={()=>dispatch('increment')}>Increment</button> 
      <button onClick={()=>dispatch('decrement')}>Decrement</button> 
      <button onClick={()=>dispatch('reset')}>Reset</button> 
    </div>
  )
}

export default UseReducerRender
