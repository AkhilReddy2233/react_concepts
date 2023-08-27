import React, { useState } from 'react'

function HookWithArray() {
    const [items, setItems] = useState([]);
    const addItem = ()=>{
        setItems([...items,{
            id:items.length,
            value: Math.floor(Math.random()*10) + 1
        }])
    }
  return (
    <div>
        <h4>Hook with arrays</h4>
        <button onClick={addItem}>AddItem</button>
        <ul>
            {
                items?.map(item=><li key={item.id}>{item.value}</li>)
            }
        </ul>
    </div>
  )
}

export default HookWithArray
