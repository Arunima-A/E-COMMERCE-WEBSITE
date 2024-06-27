import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      fetchCartItems(user._id);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const fetchCartItems = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user || !user.id) {
        console.error('User is not logged in or user ID is missing');
        return;
      }
      
      const response = await axios.post('http://localhost:3001/api/user/cart', {
        userId: user.id,
      });
      setCartItems(response.data.cartItems);
      console.log(response.data.cartItems);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };
  

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item, index) => (
              
              <CartItem  item={item} index= {index}/>
            ))}
          </div>
        )}
      </div>
    
  );
};

export default Cart;
