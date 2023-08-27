import React, { useState } from 'react'

function CustomCounter(initialValue,value) {
    const[count,setCount] = useState(initialValue);
    const handleIncrement = () =>{
        setCount(prevCount=>prevCount+value)
    }
    const handleDecrement = () =>{
        setCount(prevCount=>prevCount-value)
    }
    const Reset = () =>{
        setCount(initialValue)
    }
    return[count,handleIncrement,handleDecrement,Reset]
}

export default CustomCounter

export function useUserForm(initialValue){
    const [value,setValue]=useState(initialValue);

    const reset=()=>{
        setValue(initialValue);
    }
    const bind ={
        value,
        onChange:e=>{
            setValue(e.target.value);
        }
    }

    return [value,bind,reset];
}