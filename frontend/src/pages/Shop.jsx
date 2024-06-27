// Example Shop Component
import React from 'react';
import Product from '../components/Product';

const Shop = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
           <Product/>
      </div>
    </div>
  );
};

export default Shop;
