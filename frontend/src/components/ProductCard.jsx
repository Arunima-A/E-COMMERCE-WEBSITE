import React from 'react';
import { Link } from 'react-router-dom';
const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <Link to={`/productinfo/${product._id}`}>
      <img className="w-full h-48 object-cover" src={product.image} alt={product.title} />
      </Link>
      <div className="p-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-bold text-xl text-blue-600">${product.price}</span>
          <div className="flex items-center">
            <svg className="w-4 h-4 fill-current text-yellow-500 mr-1" viewBox="0 0 24 24">
              <path d="M12 .587l3.668 7.428 8.2 1.192-5.934 5.786 1.4 8.184L12 18.897l-7.334 3.858 1.4-8.184L.132 9.207l8.2-1.192L12 .587z" />
            </svg>
            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProductCard;
