import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import StatsSection from './components/StatsSection';
import ProductSection from './components/ProductSection';
import StepsSection from './components/StepsSection';
import PricingSection from './components/PricingSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <StatsSection />
      <ProductSection />
      <StepsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;