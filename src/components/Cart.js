import React from 'react';
import { X, Plus, Minus } from 'lucide-react';

function Cart({ isOpen, items, removeFromCart, updateQuantity, toggleCart }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button onClick={toggleCart} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-4">
              {items.map(item => (
                <li key={item.id} className="flex justify-between items-center">
                  <div>
                    <span>{item.name}</span>
                    <div className="flex items-center mt-1">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-red-600 hover:text-red-800">
                        <Minus size={18} />
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-green-600 hover:text-green-800">
                        <Plus size={18} />
                      </button>
                    </div>
                  </div>
                  <div>
                    <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                    <button onClick={() => removeFromCart(item.id)} className="block mt-1 text-red-600 hover:text-red-800">
                      <X size={18} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t">
              <p className="text-lg font-semibold">Total: ₹{total.toFixed(2)}</p>
            </div>
            <button className="w-full mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300">
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;

