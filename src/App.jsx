// import React  ,{useState} from 'react';
// import Header from './components/Header';
// import Profile from './components/Profile';

// function App() {
//     const [userData,setUserData] = useState('test')
//     console.log('app component')
//   return (
//     <div>
//       <h1 className="text-center font-bold text-3xl m-10">
//         PROPS DRILLING IN REACT
//       </h1>
//       <Header userData = {userData}/>
//       <Profile userData={userData}/>
//       <button onClick={()=>setUserData('newtest')}>CLick</button>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Reducer from './components/Reducer';

function App() {
  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl m-4 text-center">Use Reducer Hook</h1>
      <p className=" text-center text-2xl text-red-500 font-bold   ">
        Alternative Hook for State Management
      </p>
      <h1 className="text-xl font-bold text-center m-3">
        💡Terminology for useReducer Hook to remember
      </h1>
      <ul className="font-semibold flex flex-col gap-4 text-4xl text-emerald-600">
        <li>InitialState</li>
        <li>Reducer Function</li>
        <li>Action Object</li>
        <li>Dispatch Function</li>
      </ul>
      <Reducer/>
    </div>
  );
}

export default App;
