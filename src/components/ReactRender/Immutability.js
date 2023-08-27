import React, { useState } from 'react'
// const initialState = {
//     fName:'Akhil',
//     lName:'Reddy'
// }
// function Immutability() {
//     const[name,setName] = useState(initialState);

//     const handleClick = ()=>{
//         name.fName = 'Reddy';
//         name.lName = 'Akhil'
//         const newName = {...name} // WHILE UPDTING STATE,THE STATE VALUE SHOULD RETURN/BE REFERENCE OF OBJECT OR ARRAY ORELSE A PRIMITIVE VALUE
//         setName(newName);         // IF WE MUTATE THE STATE DIRECTLY, RE RENDER WONT HAPPEN LIKE ABOVE TWO LINES
//     }
//   return (
//     <div>
//       <button onClick={handleClick}>{name.fName} {name.lName}</button>
//     </div>
//   )
// }

// export default Immutability

const initialState = [
    'Akhil',
    'Reddy'
];
function Immutability() {
    const[name,setName] = useState(initialState);

    const handleClick = ()=>{
        name.push('Reddy')
        name.push('Akhil')
        const newName = [...name] // WHILE UPDTING STATE,THE STATE VALUE SHOULD RETURN/BE REFERENCE OF OBJECT OR ARRAY ORELSE A PRIMITIVE VALUE
        setName(newName);         // IF WE MUTATE THE STATE DIRECTLY, RE RENDER WONT HAPPEN LIKE ABOVE TWO LINES
    }
  return (
    <div>
      <button onClick={handleClick}>ADD</button>
      {
        name.map((n,i)=>(<div key={i}>{n}</div>))
      }
    </div>
  )
}

export default Immutability