import React from 'react';
import Slider from '../components/Slider';
import ProductList from '../components/ProductList';

function Home({ products, addToCart, isLoggedIn }) {
  return (
    <div>
      <Slider />
      <h1 className="text-3xl font-bold mb-6">Welcome to Aadi Shankara Grand Mart</h1>
      <p className="text-lg mb-8">Discover our wide range of high-quality products at great prices!</p>
      <ProductList products={products} addToCart={addToCart} isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default Home;

