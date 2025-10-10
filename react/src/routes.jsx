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
import IntegrationPage from './pages/IntegrationPage';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoutes from './components/ProtectedRoutes';
function App() {
  return (
    //to access the protected routes make the isLoggedIN variable true in the protectEDroUTES FILE
    <div>
      {/* setting up the routing  */}

      <Routes>
        <Route path="/login" element={<Loginpage />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/products" element={<ProductPage />} />
          {/* dynamic routes */}
          <Route path="/products/:name" element={<ProductDetail />} />

          <Route path="/blogs" element={<Blogspage />} />

          <Route path="/users" element={<UserPage />} />
          {/* nested routing */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Overviewpage />} />
            <Route path="overview" element={<Overviewpage />} />
            <Route path="integrations" element={<IntegrationPage />} />
          </Route>
        </Route>
        {/* not found route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;

//npm i react-router-dom
