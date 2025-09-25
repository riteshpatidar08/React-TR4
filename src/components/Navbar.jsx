import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="h-20 flex items-center justify-center bg-gray-100">
      <nav className="flex gap-10 text-lg font-bold">
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/services">Services</Link>
        <Link to='/products'>Products</Link>
        <Link to='/users'>Users</Link>
        <Link to='/dashboard'>Dashboard</Link>
      </nav>
    </div>
  );
}

export default Navbar;

//on homepage create a link logout when i click on the logout navigate to /login