import React, { useEffect } from 'react';
import { useState, useReducer } from 'react';
// function Reducer() {
//   // const [count , setCount] = useState(0)
//   //const [loading ,setLoading] = useState(false)
//   const initialState = {
//     count: 0,
//     // loading : false
//   };
//   const countReducer = (state, action) => {
//     console.log(state);
//     console.log(action);
//     if (action.type === 'Increment') {
//       return { count: state.count + action.payload };
//     } else {
//       return state;
//     }
//   };

//   const [state, dispatch] = useReducer(countReducer, initialState);
//   console.log(state, dispatch);

//   const handleIncrement = () => {
//     dispatch({ type: 'Increment', payload: 5 });
//   };

//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <button onClick={handleIncrement}>Increment +5</button>
//     </div>
//   );
// }

// export default Reducer;

// // const inititalState = {
// //     data : null ,
// //     loading : false ,
// //     error : null
// // }

//ways to fetch data from api
//loading , success , error
function Reducer() {
  const initialState = {
    loading: false,
    data: null,
    error: null,
  };
  const apiReducer = (state, action) => {
    if (action.type === 'FETCH_PENDING') {
      return { ...state, loading: true };
    }else if(action.type === 'FETCH_SUCCESS') {
return {...state , loading : false ,data : action.payload}
    } else {
      return state;
    }
  };

  const [state, dispatch] = useReducer(apiReducer, initialState);
  console.log(state);

  useEffect(()=>{
    const fetchData = async() => {
      try {
        dispatch({type : 'FETCH_PENDING'})
        const response = await fetch('https://jsonplaceholder.typicode.com/todos') ;
        const data = await response.json() ;
        dispatch({type : 'FETCH_SUCCESS', payload : data})
      } catch (error) {
        
      }
    }
    fetchData()
  },[])

  return (
    <div>
      {state.loading && <div>Loading...</div>}
      {state.data && !state.loading && <div>{JSON.stringify(state.data)}</div>}
    </div>
  ) }

export default Reducer;
