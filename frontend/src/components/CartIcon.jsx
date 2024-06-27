import { Link } from 'react-router-dom';

const CartIcon = () => {
  // Check if user is logged in based on localStorage or any other authentication method
  const isLoggedIn = !!localStorage.getItem('user'); // Modify this based on your actual authentication logic

  return (
    <div>
      {isLoggedIn ? (
        <Link to="/cart" className="relative flex items-center text-gray-700 hover:text-gray-900">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-2 10H5L3 3z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 18a2 2 0 110 4 2 2 0 010-4zm10 0a2 2 0 110 4 2 2 0 010-4z" />
          </svg>
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
        </Link>
      ) : (
        <div>
          Please <Link to="/login" className="text-blue-500 hover:underline">login</Link> or <Link to="/signup" className="text-blue-500 hover:underline">sign up</Link> first.
        </div>
      )}
    </div>
  );
};

export default CartIcon;
