import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductSection = ({ cart, addToCart, removeFromCart, proceedToCheckout, activeTab, setActiveTab }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0);

  return (
    <div className="w-full bg-[#F9FAFB] py-20 border-b border-gray-100">
      <div className="max-w-300 mx-auto min-h-100 px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900 tracking-tight">Premium Digital Tools</h2>
          <p className="text-gray-400 text-sm font-normal mb-8">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
          
          <div className="bg-white p-1 rounded-full inline-flex shadow-sm border border-gray-100">
            <button 
              onClick={() => setActiveTab('product')}
              className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${activeTab === 'product' ? 'bg-[#7C3AED] text-white' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Products
            </button>
            <button 
              onClick={() => setActiveTab('cart')}
              className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${activeTab === 'cart' ? 'bg-[#7C3AED] text-white' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>
        
        {activeTab === 'product' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                addToCart={addToCart} 
                isInCart={cart.some(item => item.id === product.id)} 
              />
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-100 p-10 shadow-sm text-left">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Your Cart</h3>
            
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 text-base font-medium">Your cart is currently empty.</p>
              </div>
            ) : (
              <div className="flex flex-col">
                <div className="space-y-4 mb-8">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between bg-[#F8FAFC] p-4 rounded-xl border border-gray-50/50">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-xl shadow-sm">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                          <p className="text-xs text-gray-400 font-medium">${item.price}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.name)}
                        className="text-[#FF3366] hover:text-red-700 text-xs font-semibold cursor-pointer px-2 py-1 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center mb-6 px-1">
                  <span className="text-gray-400 text-sm font-medium">Total:</span>
                  <span className="text-2xl font-extrabold text-gray-900">${totalPrice}</span>
                </div>

                <button 
                  onClick={proceedToCheckout}
                  className="w-full py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-full font-bold text-sm shadow-sm transition-colors cursor-pointer text-center"
                >
                  Proceed To Checkout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSection;