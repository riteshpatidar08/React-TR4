import React from 'react';
import { useState, useReducer } from 'react';
function Reducer() {
  // const [count , setCount] = useState(0)
  //const [loading ,setLoading] = useState(false)
  const initialState = {
    count: 0,
    // loading : false
  };
  const countReducer = (state, action) => {
    console.log(state);
    console.log(action);
    if (action.type === 'Increment') {
      return { count: state.count + 1 };
    }else {
        return state
    }
  };

  const [state, dispatch] = useReducer(countReducer, initialState);
  console.log(state, dispatch);
  const handleIncrement = () => {
    dispatch({ type: 'Increment' });
  };
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Reducer;
