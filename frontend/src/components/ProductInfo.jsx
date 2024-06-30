import React, { useEffect, useState } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import axios from 'axios';
import CategoryProduct from './CategoryProduct';
import {loadStripe} from '@stripe/stripe-js';


import  {Elements, CardElement, useStripe, useElements}  from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51PVfpJJrqad1KMIGdVG46nburTnQKn8AmjEgQ4uRcoKck2Kai3ImO8DxfR3fOTGClMKF5rdV8UpPSSd1Y0AXvpJ100KivAJyzr');

const CheckoutForm = ({ product, quantity }) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (error) {
            console.error(error);
        } else {
            try {
                const response = await axios.post('http://localhost:3001/api/payment', {
                    amount: product.price * quantity,
                    paymentMethodId: paymentMethod.id,
                });
                console.log('Payment successful:', response.data);
                // Optionally handle success message or redirect
            } catch (error) {
                console.error('Payment error:', error);
                // Handle error display or logging
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" className="bg-yellow-500 hover:bg-yellow-700 text-black py-2 px-4 rounded-full mt-4">
                Buy Now
            </button>
        </form>
    );
};

const ProductInfoCard = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [product, setProduct] = useState(null);
    
    const addToCart = async () => {
        
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user || !user.id) {
          console.error('User not found in localStorage');
          return;
        }
        console.log('User ID:', user.id);
        console.log('Product ID:', productId);
        try {
          const token = localStorage.getItem('token');
          console.log(typeof(user.id));
          const response = await axios.put('http://localhost:3001/api/user/cart', {
            userId: user.id,
            productId: productId,
            quantity: quantity
          },{
            headers: { Authorization: `Bearer ${token}` },
          });
          console.log('Product added to cart:', response.data);
          // Fetch updated cart items
        } catch (error) {
          console.error('Error adding product to cart:', error);
        }
      };
      
      
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/products/${productId}`);
                const data = response.data;
                setProduct(data);
                // Fetch related products
                fetchRelatedProducts(data.category._id);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        const fetchRelatedProducts = async (categoryId) => {
            try {
                const response = await axios.get(`http://localhost:3001/api/products/related`, {
                    params: { categoryId }
                });
                const data = response.data;
                setRelatedProducts(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching related products:', error);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);
    
    if (loading) {
    return (
    <div className="flex items-center justify-center h-screen style={{ backgroundImage: 'https://img.freepik.com/free-photo/arrangement-black-friday-shopping-carts-with-copy-space_23-2148667047.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718928000&semt=ais_user' }}">
    <div role="status" className="flex items-center justify-center">
        <svg
            aria-hidden="true"
            className="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
            />
            <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
            />
        </svg>
        <span className="sr-only">Loading...</span>
    </div>
    </div>

    )


    }

    if (!product) {
        return <div>Product not found</div>;
    }

  return (
    <>
    <div className="max-w-screen-xl mx-auto flex mt-10">
    <div className="w-[35%]">
        <img src={product.image} alt={product.name} className="w-full h-auto max-h-96 object-contain" />
    </div>
    <div className="w-[50%] px-6 py-2">
        <div className="font-bold italic text-5xl text-gray-900 dark:text-black mb-4">{product.name}</div>
        <p className="text-gray-700 italic  underline-offset-auto text-3xl text-gray-900 dark:text-black mb-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
        
        <div className="flex items-center">
    <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    
       
       <p className="ms-1 text-lg font-medium text-red-500 dark:text-gray-400">4.95</p>
    <p className="ms-1 text-lg font-medium text-red-500 dark:text-gray-400">out of</p>
    <p className="ms-1 text-lg font-medium text-red-500 dark:text-gray-400">5</p>
      
       <span class="ml-4 ms-1 text-lg font-medium text-red-500 dark:text-gray-400 ">13 ratings</span>

       
    </div>
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"/> 
        <div className='flex'>
            <div className="text-3xl text-red-900 dark:text-red mb-4 mt-2">-50%</div>    
            <div className="text-3xl text-gray-900 dark:text-black mb-4 mt-2 ml-4"> ₹{product.price}/-</div>    
        </div>
        
        <div className="text-1xl text-black-900 dark:text-black mb-4 mt-2">Inclusive of all taxes</div>    
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"/> 
        <div className='flex space-x-4'>
            <div className='flex flex-col items-center'>
            <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png" alt="" className='h-8 w-8'/>
            <p className='text-xs text-center'>7-days Replacement</p>
            </div>
            <div className='flex flex-col items-center'>
            <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png" alt="" className='h-8 w-8'/>
            <p className='text-xs text-center'>Free Delivery</p>
            </div>
            <div className='flex flex-col items-center'>
            <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png" alt="" className='h-8 w-8'/>
            <p className='text-xs text-center'>6-month Warranty</p>
            </div>
            <div className='flex flex-col items-center'>
            <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png" alt="" className='h-8 w-8'/>
            <p className='text-xs text-center'>Pay On Delivery</p>
            </div>
            <div className='flex flex-col items-center'>
            <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB617044271_.png" alt="" className='h-8 w-8'/>
            <p className='text-xs text-center'>Top Brand</p>
            </div>
            <div className='flex flex-col items-center'>
            <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png" alt="" className='h-8 w-8'/>
            <p className='text-xs text-center'>ShopCart Delivered</p>
            </div>
        </div>
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"/>
        <div>
            <h1 className='font-bold'>About this item</h1>
            <ul className="list-disc list-inside">
            <li className='text-black-500 text-1xl italic dark:text-black-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit tempora ea, veniam aspernatur harum eveniet reiciendis nesciunt dignissimos earum iste ex, fuga beatae fugit! Nisi magni ab eligendi accusamus.</li>
            </ul>
            
            <ul className="list-disc list-inside">
            <li className='text-black-500 text-1xl italic dark:text-black-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit tempora ea, veniam aspernatur harum eveniet reiciendis nesciunt dignissimos earum iste ex, fuga beatae fugit! Nisi magni ab eligendi accusamus.</li>
            </ul>
            <ul className="list-disc list-inside">
            <li className='text-black-500 text-1xl italic dark:text-black-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores reprehenderit tempora ea, veniam aspernatur harum eveniet reiciendis nesciunt dignissimos earum iste ex, fuga beatae fugit! Nisi magni ab eligendi accusamus.</li>
            </ul>
            
        </div>
        </div>
        <div className='w-[15%] border border-gray p-4' style={{ height: '500px' }}>
            <div className="text-3xl text-gray-900 dark:text-black mb-4 mt-2"> ₹{product.price}/-</div>    
            <div className="text-1xl text-black-900 italic dark:text-black mb-4 mt-2">FREE DELIVERY- On orders dispatched by ShopCart over ₹499</div>
            <div className="text-2xl text-black-900 dark:text-black mb-4 mt-2">
                {product.stock>0 ? (
                    <>
                      <p>In Stock</p>
                    </>
                ) : (
                    <>
                      <p>Out of Stock</p>
                    </>
                )}
            </div>
            <div className="mt-4 flex mb-4">
                <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold mb-2 mx-2">Quantity:</label>
                <select
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="block appearance-none w-8 bg-white border border-gray-400 hover:border-gray-500 px-2 py-auto rounded shadow leading-tight focus:outline-none focus:shadow-outline w-8 h-6"
                >
                    {[1, 2, 3, 4, 5].map(q => (
                        <option key={q} value={q}>{q}</option>
                    ))}
                </select>
            </div>
            <div className="flex items-center justify-center mb-3">
                <button className="bg-yellow-500 hover:bg-yellow-700 text-black py-2 px-6 rounded-full w-full" onClick={addToCart}>
                    Add to Cart
                </button>
                
                
            </div>
            <Elements stripe={stripePromise}>
              <CheckoutForm product={product} quantity={quantity} />
            </Elements>
            
        </div>
        
    </div>
    <div className="text-4xl text-black-900 dark:text-black mb-4 ml-4">Products related to this item</div>
    
    <div className='flex flex-wrap'>
    {relatedProducts.map((product) => (
            <CategoryProduct product={product}/>
        ))}
    </div>
    
    </>
  );
};

export default ProductInfoCard;
