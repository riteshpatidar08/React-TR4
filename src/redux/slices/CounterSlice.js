import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 1 },
  reducers: {
    increment: (state, action) => {
      state.count += 1;
    },
    decrement: (state, action) => {
      state.count -= 1;
    },
  },
});

console.log(counterSlice);

export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;


//TASK convert the useReducer api calling logic in to redux toolkit

//todoslice 
//initial state {loading : falsee , todos : null  , error : null}
//reducers : => pending , fulfilled , rejected 
//export default todoSlice.reducer
//export const {pending , fulfilled , rejected} = todoSlice.actions 
//connect the todoReducer with store
