import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="w-full bg-gray-50 py-20">
      <div className="max-w-300 mx-auto min-h-337.5 px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-900">Premium Digital Tools</h2>
          <p className="text-slate-600 mb-8">Choose from our curated collection of premium digital products.</p>
          
          <div className="bg-white p-1 rounded-full inline-flex shadow-sm border border-gray-200">
            <button className="px-8 py-2 bg-purple-600 text-white rounded-full">Products</button>
            <button className="px-8 py-2 text-slate-600">Cart (2)</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductSection;