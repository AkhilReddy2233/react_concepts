import React, { useEffect, useState } from 'react'

function UseEffectExample2() {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0);
    const logMousePosition = (e) => {
        console.log('Mouse Event');
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('UseEffece called');
        window.addEventListener('mousemove',logMousePosition)

        return () =>{
            console.log('Component Unmount');
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[]) // EMPTY ARRAY -  USEEFFECT DOES NOT DEPEND ON ANY OTHRT STATE AND PROPS, CALLS ONLY ON  FIRST RENDER
  return (
    <div>
      <h4>Restrict UseEffect only Once</h4>
      Mouse Position  (X,Y) - ({x},{y})
    </div>
  )
}

export default UseEffectExample2
