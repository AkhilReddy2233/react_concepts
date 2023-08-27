import React, { useState } from 'react'
import CustomCounter from './CustomCounter'

function C2() {
  const[count,handleIncrement,handleDecrement,Reset]  = CustomCounter(10,10)

  return (
    <div>
      <h4>Counter2 - {count}</h4>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={Reset}>reset</button>
    </div>
  )
}

export default C2