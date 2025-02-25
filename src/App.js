import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Products from './pages/Products';
import Offers from './pages/Offers';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import OrderHistory from './pages/OrderHistory';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import Cart from './components/Cart';
import SearchBar from './components/SearchBar';
import Notification from './components/Notification';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [notification, setNotification] = useState({ message: '', isVisible: false });

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));

    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const addToCart = (product) => {
    if (!user) {
      setNotification({ message: 'Please log in to add items to your cart', isVisible: true });
      return;
    }

    setCartItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === product.id);
      if (existingItem) {
        return currentItems.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...currentItems, { ...product, quantity: 1 }];
    });

    setNotification({ message: `${product.name} added to cart!`, isVisible: true });
  };

  const removeFromCart = (productId) => {
    setCartItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        return currentItems.map(item => 
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return currentItems.filter(item => item.id !== productId);
    });
  };

  const updateCartItemQuantity = (productId, quantity) => {
    setCartItems(currentItems => {
      if (quantity > 0) {
        return currentItems.map(item => 
          item.id === productId ? { ...item, quantity } : item
        );
      }
      return currentItems.filter(item => item.id !== productId);
    });
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('loggedInUser', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    setCartItems([]);  // Clear the cart on logout
    localStorage.removeItem('loggedInUser');
    setNotification({ message: 'You have been logged out. Your cart has been cleared.', isVisible: true });
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const closeNotification = () => {
    setNotification({ ...notification, isVisible: false });
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header cartItemCount={cartItems.reduce((total, item) => total + item.quantity, 0)} toggleCart={toggleCart} />
        <NavBar isLoggedIn={!!user} onLogout={handleLogout} />
        <SearchBar onSearch={handleSearch} />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home products={filteredProducts} addToCart={addToCart} isLoggedIn={!!user} />} />
            <Route path="/products" element={<Products products={filteredProducts} addToCart={addToCart} isLoggedIn={!!user} />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Cart 
          isOpen={isCartOpen} 
          items={cartItems} 
          removeFromCart={removeFromCart} 
          updateQuantity={updateCartItemQuantity}
          toggleCart={toggleCart} 
        />
        <Footer />
        <Notification 
          message={notification.message}
          isVisible={notification.isVisible}
          onClose={closeNotification}
        />
      </div>
    </Router>
  );
}

export default App;

