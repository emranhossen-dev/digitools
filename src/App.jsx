import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import StatsSection from './components/StatsSection';
import ProductSection from './components/ProductSection';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <StatsSection />
      <ProductSection />
    </div>
  );
}

export default App;