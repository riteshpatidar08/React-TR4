import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ServicePage from './pages/ServicePage';
import Blogspage from './pages/Blogspage';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      {/* setting up the routing  */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/blogs" element={<Blogspage />} />
      </Routes>
    </div>
  );
}

export default App;

//npm i react-router-dom
