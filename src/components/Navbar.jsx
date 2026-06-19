const Navbar = ({ cartCount }) => (
  <div className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
    <div className="navbar max-w-[1200px] mx-auto h-20 px-6">
      <div className="navbar-start">
        <a className="text-2xl font-extrabold text-[#7C3AED] tracking-tight">DigiTools</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-8 font-semibold text-gray-600 text-sm">
          <li><a className="hover:text-[#7C3AED]">Products</a></li>
          <li><a className="hover:text-[#7C3AED]">Features</a></li>
          <li><a className="hover:text-[#7C3AED]">Pricing</a></li>
          <li><a className="hover:text-[#7C3AED]">Testimonials</a></li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <div className="flex items-center gap-1.5 bg-purple-50 px-4 py-2 rounded-full border border-purple-100 text-[#7C3AED] font-bold text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          <span>Cart ({cartCount})</span>
        </div>
        <a className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white border-none rounded-full px-7 text-sm font-semibold shadow-sm cursor-pointer">Get Started</a>
      </div>
    </div>
  </div>
);

export default Navbar;