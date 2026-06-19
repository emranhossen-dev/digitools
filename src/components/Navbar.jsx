import { useState } from 'react';

const Navbar = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="navbar max-w-300 mx-auto h-20 px-4 md:px-6 flex justify-between items-center relative">
        
        <div className="flex items-center">
          <a className="text-xl md:text-2xl font-extrabold text-[#7C3AED] tracking-tight">DigiTools</a>
        </div>
        
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-8 font-semibold text-gray-600 text-sm">
            <li><a className="hover:text-[#7C3AED] transition-colors">Products</a></li>
            <li><a className="hover:text-[#7C3AED] transition-colors">Features</a></li>
            <li><a className="hover:text-[#7C3AED] transition-colors">Pricing</a></li>
            <li><a className="hover:text-[#7C3AED] transition-colors">Testimonials</a></li>
          </ul>
        </div>
        
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-1.5 bg-purple-50 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-purple-100 text-[#7C3AED] font-bold text-xs md:text-sm">
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <span>Cart ({cartCount})</span>
          </div>

          <a className="hidden sm:inline-flex px-5 py-2 md:px-7 md:py-2.5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-full text-xs md:text-sm font-semibold shadow-sm cursor-pointer transition-colors">
            Get Started
          </a>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden p-2 text-gray-600 hover:text-[#7C3AED] transition-colors cursor-pointer"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg lg:hidden transition-all duration-200 z-50">
            <ul className="flex flex-col p-4 space-y-3 font-semibold text-gray-600 text-sm">
              <li><a className="block p-2 hover:bg-purple-50 hover:text-[#7C3AED] rounded-lg transition-colors">Products</a></li>
              <li><a className="block p-2 hover:bg-purple-50 hover:text-[#7C3AED] rounded-lg transition-colors">Features</a></li>
              <li><a className="block p-2 hover:bg-purple-50 hover:text-[#7C3AED] rounded-lg transition-colors">Pricing</a></li>
              <li><a className="block p-2 hover:bg-purple-50 hover:text-[#7C3AED] rounded-lg transition-colors">Testimonials</a></li>
              <li className="sm:hidden pt-2">
                <a className="block text-center py-2.5 bg-[#7C3AED] text-white rounded-xl font-semibold transition-colors">
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        )}

      </div>
    </div>
  );
};

export default Navbar;