import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const AuthComponent = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [authStatus, setAuthStatus] = useState(false);
  const [userExists, setUserExists] = useState(null);

  useEffect(() => {
    const checkUserExists = async () => {
      if (isAuthenticated && user) {
        try {
          const response = await axios.post('http://localhost:3001/api/user/checkUser', {
            auth0Id: user.sub,
            email: user.email,
          });
          setUserExists(response.data.exists);
        } catch (error) {
          console.error('Error checking user existence:', error);
        }
      }
    };

    checkUserExists();
  }, [isAuthenticated, user]);

  const handleSignup = async () => {
    if (userExists) {
      alert('User already exists. Please log in.');
      return;
    }
    await loginWithRedirect({ screen_hint: 'signup' });
  };

  
  if (isAuthenticated && userExists) {
    return (
      <div>
        <img
          src={user.picture}
          alt="Profile"
          style={{ borderRadius: '50%', width: '40px', height: '40px', marginRight: '10px' }}
        />
        <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => loginWithRedirect()}>Log In</button>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default AuthComponent;
