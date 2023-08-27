import React, { useState } from 'react'
import CustomCounter from './CustomCounter';

function C1() {
    const[count,handleIncrement,handleDecrement,Reset]  = CustomCounter(0,1)
  return (
    <div>
      <h4>Counter1 - {count}</h4>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={Reset}>reset</button>
    </div>
  )
}

export default C1
