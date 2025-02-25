import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ isLoggedIn, onLogout }) {
  return (
    <nav className="bg-red-800 text-white">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center space-x-6 py-4">
          <li><Link to="/products" className="hover:text-red-200">Products</Link></li>
          <li><Link to="/offers" className="hover:text-red-200">Offers</Link></li>
          <li><Link to="/contact" className="hover:text-red-200">Contact Us</Link></li>
          <li><Link to="/about" className="hover:text-red-200">About Us</Link></li>
          <li><Link to="/order-history" className="hover:text-red-200">Order History</Link></li>
          {isLoggedIn ? (
            <li><button onClick={onLogout} className="hover:text-red-200">Logout</button></li>
          ) : (
            <>
              <li><Link to="/login" className="hover:text-red-200">Login</Link></li>
              <li><Link to="/register" className="hover:text-red-200">Register</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

