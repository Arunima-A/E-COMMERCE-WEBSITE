import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Logo from '../assets/Logo.jpg'

import AuthButton from './AuthButton';
import CartItem from './CartItem';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg py-2">
      <div className="max-w-6xl mx-2 px-2 flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          <img src={Logo} alt="Logo" className="h-12 w-13 mx-1 my-auto" />
          <div>
            <a href="#" className="flex items-center py-4 px-2 text-gray-700 hover:text-gray-900">
              <svg
                className="h-6 w-6 mr-1 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 7a2 2 0 012-2h14a2 2 0 012 2M3 7v14a2 2 0 002 2h14a2 2 0 002-2V7M7 10h10M7 14h6" />
              </svg>
              <span className="font-bold">SHOPCART</span>
            </a>
          </div>
          {/* Primary Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/home" className="py-3 px-3 text-gray-700 hover:text-gray-900 font-bold inline-block  rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">Home</Link>
            <Link to="/shop" className="py-3 px-3 text-gray-700 hover:text-gray-900 font-bold inline-block rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">Shop</Link>
            <Link to="/about" className="py-3 px-3 text-gray-700 hover:text-gray-900 font-bold inline-block rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">About</Link>
            <Link to="/contact" className="py-3 px-3 text-gray-700 hover:text-gray-900 font-bold inline-block rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">Contact</Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          
          {/* Shift AuthButton component to the extreme right */}
          <div >
            <AuthButton></AuthButton>
          </div>
          <div>
            <Link to="/cart" className="relative flex items-center text-gray-700 hover:text-gray-900">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-2 10H5L3 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 18a2 2 0 110 4 2 2 0 010-4zm10 0a2 2 0 110 4 2 2 0 010-4z" />
              </svg>
              <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
            </Link>
            
          </div>
          <div>
            <Link to="/admin" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Admin
            </Link>
          </div>
          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-button">
              <svg
                className="w-6 h-6 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Home</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Shop</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">About</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Contact</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Login</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
