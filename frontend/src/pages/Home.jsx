// Example Home Component
import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Our Store!</h1>
        <p className="text-lg text-center mb-4">
          Explore our latest collections and find your perfect items.
        </p>
         <Link to="/shop" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">Go To the Shop</Link>
      </div>
    </div>
  );
};

export default Home;
