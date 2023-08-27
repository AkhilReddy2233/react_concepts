import React, { useEffect, useState } from 'react'

function HookCounterUseEffect() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(()=>{
        console.log('UseEffect - Updating document title');
        document.title = `You clicked ${count} times`
    },[count]) // USING 2 ARGUMENT WE CAN RESTRICT UPDATING TITLE ONLY CHANGE IN COUNT VALUE RATHER THAN NAME VALUE
  return (
    <div>
      <h4>UseEffect topic</h4>
      <input type='text' value={name} onChange={e=>setName(e.target.value)}/>
      <button onClick={()=>setCount(count+1)}>Click {count} times</button>
    </div>
  )
}

export default HookCounterUseEffect
