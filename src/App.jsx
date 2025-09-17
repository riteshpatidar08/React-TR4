import React from 'react'
import { useState } from 'react'
function App() {
const [list , setList] = useState([1,2,3,4,5])
const [input , setInput] = useState('');

const handleChange = (e) => {
  console.log(e.target.value)
  setInput(e.target.value)
}
console.log(list)
  return (
    <div>
    {list.map((el)=>(
      <h1>{el}</h1>
    ))}
    <form>
      <input onChange={handleChange} type='text' placeholder='Add list item' name='text'/>
      <button>Add</button>
    </form>
    </div>
  )
}

export default App


//TASK CREATE A LIST AND SHOW ON THE UI TAKES INPUT FIELD AND A ADD BUTTON , GET THE INPUT VALUE AND ADD INTO THE LIST :