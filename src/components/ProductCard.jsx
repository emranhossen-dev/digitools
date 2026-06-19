const ProductCard = ({ product }) => {
  const getTagColor = (type) => {
    switch (type) {
      case 'popular': 
        return 'bg-purple-50 text-purple-600';
      case 'new': 
        return 'bg-green-50 text-green-600';
      case 'best-seller': 
        return 'bg-amber-50 text-amber-600';
      default: 
        return 'bg-gray-50 text-gray-600';
    }
  };

  return (
    <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between text-left">
      <div>
        <div className="flex justify-between items-start mb-5">
          <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-2xl shadow-sm">
            {product.icon}
          </div>
          <span className={`text-xs px-2.5 py-1 rounded-full font-semibold tracking-wide ${getTagColor(product.tagType)}`}>
            {product.tag}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
          {product.name}
        </h3>
        <p className="text-gray-400 text-[13px] leading-relaxed mb-5 font-normal">
          {product.description}
        </p>

        <div className="mb-6 flex items-baseline gap-0.5">
          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
          <span className="text-gray-400 text-xs font-medium">/{product.period}</span>
        </div>

        <ul className="space-y-3 mb-8">
          {product.features.map((feature, index) => (
            <li key={index} className="text-[13px] text-gray-500 font-normal flex items-start gap-2.5">
              <svg 
                className="w-4 h-4 text-green-500 mt-0.5 shrink-0" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="w-full py-3.5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl font-semibold text-sm shadow-sm transition-colors duration-200 cursor-pointer">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;