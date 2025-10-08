import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/slices/CounterSlice';

function App() {
  const { count } = useSelector((state) => {
    console.log(state);
    return state.count;
  });
  const dispatch = useDispatch();
  return (
    <div className="h-screen gap-10 flex justify-center m-20 items-center">
      <h1 className="text-2xl font-bold">{count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
        className="px-10 py-2 bg-yellow-600 text-2xl font-bold text-white"
      >
        Increment
      </button>
      <button className="px-10 py-2 bg-yellow-600 text-2xl font-bold text-white">
        Decrement
      </button>
    </div>
  );
}

export default App;
