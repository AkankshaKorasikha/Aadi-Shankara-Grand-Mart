import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

function Header({ cartItemCount, toggleCart }) {
  return (
    <header className="bg-red-700 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <Link to="/" className="flex items-center">
            <img src="/Images/logo.png" alt="Aadi Shankara Grand Mart Logo" className="h-12 mr-4" />
            <h1 className="text-2xl font-bold">Aadi Shankara Grand Mart</h1>
          </Link>
          <button onClick={toggleCart} className="flex items-center">
            <ShoppingCart className="mr-2" />
            <span>{cartItemCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

