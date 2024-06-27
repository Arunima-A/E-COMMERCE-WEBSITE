// CartItem component
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CartItem = ({ item, index }) => {
  const [product, setProduct] = useState(null);
  console.log(item);
  console.log(index);
  console.log(typeof(index));
  console.log(typeof(item));
  useEffect(() => {
    const fetchProducts = async (productId) => {
      try {
        const response = await axios.get(`http://localhost:3001/api/products/${productId}`);
        if (!response.data) {
          console.error('Product not found');
          return;
        }
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product items:', error);
      }
    };
    fetchProducts(item.productId);
  }, [item.productId]);

  return (
    <div key= {item._id} className="flex border-b border-gray-200 py-4">
  {product && (
    <>
      <img src={product.image} alt={product.name} className="w-24 h-24 object-contain mr-4" />
      <div className='flex-grow'>
      <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-500">Price: ${product.price}</p>
            <p className="text-gray-500">Quantity: {item.quantity}</p>
      </div>
      
    </>
  )}
</div>

  );
};

export default CartItem;
