import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import StatsSection from './components/StatsSection';
import ProductSection from './components/ProductSection';
import StepsSection from './components/StepsSection';
import PricingSection from './components/PricingSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('product');

  const addToCart = (product) => {
    const isExist = cart.find(item => item.id === product.id);
    if (isExist) {
      toast.warning('Product already added to cart!');
      return;
    }
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`);
  };

  const removeFromCart = (id, name) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    toast.error(`${name} removed from cart!`);
  };

  const proceedToCheckout = () => {
    setCart([]);
    toast.success('Purchase successful! Thank you for buying.');
  };

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <Banner />
      <StatsSection />
      <ProductSection 
        cart={cart} 
        addToCart={addToCart} 
        removeFromCart={removeFromCart} 
        proceedToCheckout={proceedToCheckout}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <StepsSection />
      <PricingSection />
      <CTASection />
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;