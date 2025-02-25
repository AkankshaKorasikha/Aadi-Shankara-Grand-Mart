import React from 'react';

function ProductList({ products, addToCart, isLoggedIn }) {
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryProducts.map(product => (
              <div key={product.id} className="border rounded-lg p-4 flex flex-col">
                <img src={product.image_path} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-gray-800 font-bold mb-4">₹{parseFloat(product.price).toFixed(2)}</p>
                <button
                  onClick={() => addToCart(product)}
                  className={`py-2 px-4 rounded transition duration-300 mt-auto ${
                    isLoggedIn
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!isLoggedIn}
                >
                  {isLoggedIn ? 'Add to Cart' : 'Login to Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

