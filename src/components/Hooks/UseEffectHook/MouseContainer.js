import React, { useState } from 'react'
import UseEffectExample2 from './UseEffectExample2';

function MouseContainer() {
    const [display,setDispaly] = useState(true);
  return (
    <div>
      <h4>remove listeners when component unmount</h4>
      <button onClick={()=>setDispaly(!display)}>Toggle Below Component</button>
      {
        display && <UseEffectExample2 />
      }
    </div>
  )
}

export default MouseContainer
