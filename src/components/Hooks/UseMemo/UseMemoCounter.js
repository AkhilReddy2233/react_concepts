import React, { useMemo, useState } from 'react'

function UseMemoCounter() {
   const[counter1,setCounter1] = useState(0)
   const[counter2,setCounter2] =  useState(0)

   const Even = useMemo(()=>{  //fror complex logics
    let i=1;
    while(i<2000000000) i++;
    return counter1 % 2 === 0;
   },[counter1])
   
   const handleCount1 =()=>{
    setCounter1(counter1+1);
   }
   const handleCount2 =()=>{
    setCounter2(counter2+1);
   }

  return (
    <div>
        <div>
        <button onClick={handleCount1}>Count1 : {counter1}</button>
        <span>{Even ? 'Even' : 'Odd'}</span>
        </div>
        <div>
        <button onClick={handleCount2}>Count2 : {counter2}</button>
        </div>
    </div>
  )
}

export default UseMemoCounter
