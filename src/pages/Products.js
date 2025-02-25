import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';

function Products({ products, addToCart, isLoggedIn }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState(['All']);

  useEffect(() => {
    const uniqueCategories = ['All', ...new Set(products.map(product => product.category))];
    setCategories(uniqueCategories);
  }, [products]);

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded ${
                selectedCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <ProductList products={filteredProducts} addToCart={addToCart} isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default Products;

