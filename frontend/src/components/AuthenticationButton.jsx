import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// Optional: Use Material-UI for styling


const AuthButton = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  console.log(user);
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [name, setName]= useState("");


  return (
    <div className="ml-auto flex items-center space-x-1">
      {!isAuthenticated ? (
        <div className="hidden md:flex items-center space-x-1 px-auto">
          <button className="py-3 px-3 text-gray-700 hover:text-gray-900" variant="contained" color="primary" onClick={()=>loginWithRedirect()}>
            Log In
          </button>
          
          <button className="py-2 px-3 bg-blue-500 text-white rounded hover:bg-blue-400" variant="contained" color="secondary" onClick={() => loginWithRedirect({ screen_hint: 'signup' })}>
            Sign Up
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={user.picture}
            alt="Profile"
            style={{ borderRadius: '50%', width: '40px', height: '40px', marginRight: '10px' }}
          />
          <button className="py-2 px-3 bg-blue-500 text-white rounded hover:bg-blue-400" variant="contained" color="secondary" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
        </div>
      )}
    </div>
  );
};

export default AuthButton;
