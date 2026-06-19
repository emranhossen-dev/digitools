const Navbar = () => (
  <div className="w-full bg-white">
    <div className="navbar max-w-300 mx-auto h-23">
      <div className="navbar-start">
        <a className="text-2xl font-bold text-violet-600">DigiTools</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 font-medium text-gray-700">
          <li><a>Products</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
        </ul>
      </div>
      <div className="navbar-end gap-6">
        <a className="btn bg-violet-600 text-white border-none rounded-full px-8">Get Started</a>
      </div>
    </div>
  </div>
);
export default Navbar;