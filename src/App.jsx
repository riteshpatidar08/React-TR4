import React  ,{useState} from 'react';
import Header from './components/Header';
import Profile from './components/Profile';

function App() {
    const [userData,setUserData] = useState('test')
    console.log('app component')
  return (
    <div>
      <h1 className="text-center font-bold text-3xl m-10">
        PROPS DRILLING IN REACT
      </h1>
      <Header userData = {userData}/>
      <Profile userData={userData}/>
      <button onClick={()=>setUserData('newtest')}>CLick</button>
    </div>
  );
}

export default App;
