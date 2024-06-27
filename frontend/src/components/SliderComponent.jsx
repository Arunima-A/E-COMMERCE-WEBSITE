import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const SliderComponent = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Number of products to show per page

  const next = () => {
    if (currentIndex < products.length - itemsPerPage) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };
  
  return (
    
    <div className="relative flex items-center justify-center w-full py-8 mt-0">
      <button onClick={prev} className="absolute left-0 z-10">
        <ChevronLeftIcon className="w-10 h-10 text-gray-800" />
      </button>
      <div className="grid grid-cols-4 gap-4 bg-white p-4 w-full mx-16">
        {products.slice(currentIndex, currentIndex + itemsPerPage).map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg">
            
            <Link to={`/productinfo/${product._id}`}>
              <img className="w-full h-72 object-cover" src={product.image} alt={product.title} />
            </Link>
            <div className="p-4">
              <h2 className="font-bold text-lg">{product.title}</h2>
            </div>
          </div>
        ))}
      </div>
      <button onClick={next} className="absolute right-0 z-10">
        <ChevronRightIcon className="w-10 h-10 text-gray-800" />
      </button>
    </div>
  );
  
};

export default SliderComponent;
