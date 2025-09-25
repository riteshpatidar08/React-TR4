import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ServicePage from './pages/ServicePage';
import Blogspage from './pages/Blogspage';
import Navbar from './components/Navbar';
import Loginpage from './pages/Loginpage';
import ProductPage from './pages/ProductPage';
import ProductDetail from './pages/ProductDetail';
import UserPage from './pages/UserPage';
import Dashboard from './pages/Dashboard';
import Overviewpage from './pages/Overviewpage';
function App() {
  return (
    <div>
      {/* setting up the routing  */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/products" element={<ProductPage />} />
        {/* //dynamic routes */}
        <Route path="/products/:name" element={<ProductDetail />} />
        <Route path="/blogs" element={<Blogspage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path='/dashboard' element={<Dashboard/>}>
        <Route path='overview' element={<Overviewpage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

//npm i react-router-dom
