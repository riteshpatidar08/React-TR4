import React from 'react';
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('TEST');
  const handleClick = () => {
    setFirstName('test-updated');
  };
  return (
    <div>
      <h1>{firstName}</h1>
      <button onClick={handleClick}>Change</button>
    </div>
  );
}

export default App;

//NOTE show name , email , password on the ui and updated all three values on a single click.
//NOTE create a button when i click on a button updates its title .



//hooks  => HOOKS ARE THE REACT FUNCTIONS
//NOTE HOOKS CAN ONLY BE CALLED INSIDE THE FUNCTIONAL COMPONENT AT TOP LEVEL
//NOTE hooks allow us to use react features like state
//NOTE State refers to that data which changes over the time
//NOTE TO SAVE this type of data we use state varible
//NOTE TO manage state data we use react's useState() hook 
//NOTE UseState accepts initial value as a argument 
//NOTE useState struture 
// const [stateVariableName , setStateVariableFnName] = useState(initialvalue of stateVariable)
//NOTE The work of stateVariableName is to show data on the ui.
//NOTE this state varaible only going to update using the setter function
//NOTE we can not directly update the state variable like this stateVariable = 'some value' ❌ always use the setter function to update the state variable
