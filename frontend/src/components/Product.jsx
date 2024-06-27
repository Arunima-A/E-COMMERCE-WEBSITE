import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Make sure to install axios using npm install axios
import ProductCard from './ProductCard';

const Product = () => {
  const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/products/all'); // Adjust the URL to your API endpoint
      const data = await response.data;
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    
    <div className="flex flex-wrap justify-center">
    {products.map(product => (
      <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
        <ProductCard product={product} />
      </div>
    ))}
    </div>
);
};

export default Product;
