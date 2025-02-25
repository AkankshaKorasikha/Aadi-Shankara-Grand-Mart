import React from 'react';

function Offers() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Special Offers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Weekend Sale</h2>
          <p className="text-gray-600 mb-4">Get 20% off on all fruits and vegetables this weekend!</p>
          <span className="inline-block bg-red-100 text-red-800 px-2 py-1 rounded">Valid: Sat-Sun</span>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Buy 1 Get 1 Free</h2>
          <p className="text-gray-600 mb-4">On selected household items. Limited time offer!</p>
          <span className="inline-block bg-red-100 text-red-800 px-2 py-1 rounded">Valid: This Week</span>
        </div>
        {/* Add more offer cards as needed */}
      </div>
    </div>
  );
}

export default Offers;