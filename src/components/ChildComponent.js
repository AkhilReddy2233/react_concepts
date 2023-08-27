import React from 'react'

export default function ChildComponent({greet}) {
  return (
    <div>
      <button onClick={()=>{greet('child')}}>Greet Parent</button>
    </div>
  )
}
