// import axios from 'axios';
import React, { useEffect, useReducer } from 'react'

// const initialState={
//     loading:true,
//     error:'',
//     post:{}
// }

// const reducer = (state,action)=>{
//     switch(action.type){
//         case 'FETCH_RES': 
//             return {
//                 loading:false,
//                 error:'',
//                 post:action.payLoad
//             }
//         case 'FETCH_ERR':
//             return {
//                 loading:false,
//                 post:{},
//                 error:'SomeThing went wrong'   
//             }
//         default: return state
//     }
// }
// function DataFetchingUseReducer() {
//    const[state,dispatch] = useReducer(reducer,initialState);
//    useEffect(()=>{
//     axios
//     .get('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response=>{
//         dispatch({type:'FETCH_RES', payLoad:response.data});
//     })
//     .catch(error=>{
//         dispatch({type:'FETCH_ERR'})
//     })
// },[]);
// console.log(state);
//   return (
//     <div>
//     <h4>Fetch using UseReducer</h4>
//       {state.loading ? 'Loading..' : state.post.title}
//       {state.error ? state.error : null}
//     </div>
//   )
// }

// export default DataFetchingUseReducer

function CandyDispenser() {
    const initialCandies = ['snickers', 'skittles', 'twix', 'milky way']
    const [candies, setCandies] = React.useState(initialCandies)
    const dispense = candy => {
      setCandies(allCandies => allCandies.filter(c => c !== candy))
    }
    console.log(candies)
    return (
      <div>
        <h1>Candy Dispenser</h1>
        <div>
          <div>Available Candy</div>
          {candies.length === 0 ? (
            <button onClick={() => setCandies(initialCandies)}>refill</button>
          ) : (
            <ul>
              {candies.map(candy => (
                <li key={candy}>
                  <button onClick={() => dispense(candy)}>grab</button> {candy}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }

  export default CandyDispenser
