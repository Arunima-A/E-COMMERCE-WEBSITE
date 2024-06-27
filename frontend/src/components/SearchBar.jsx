import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          className="w-full px-2 py-1 pl-8 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Search..."
        />
        <button className="absolute inset-y-0 right-0 flex items-center pl-2 text-white bg-blue-500 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
