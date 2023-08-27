import React, { useCallback, useState } from 'react'
import Title from './Title';
import Count from './Count';
import ButtonCounter from './ButtonCounter';
function MainCallback() {
   const [age,setAge] = useState(20);
   const [salary,setSalary] = useState(50000);

   const handleAge = useCallback(()=>{
    setAge(age+1);
   },[age])

   const handleSalary =  useCallback(() =>{
    setSalary(salary+1000);
   },[salary]);

  return (
    <div>
      <Title>Counter by UseCallback</Title>
      <Count age={age}/>
      <ButtonCounter onClick={handleAge}>Increase Age</ButtonCounter>
      <Count age={salary}/>
      <ButtonCounter onClick={handleSalary}>Increase Salary</ButtonCounter>
    </div>
  )
}

export default MainCallback
