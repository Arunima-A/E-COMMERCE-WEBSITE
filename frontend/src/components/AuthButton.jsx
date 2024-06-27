import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../AuthContext';

import download from '../assets/download.png';

const AuthButton = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };
    
    return (
        <nav className="bg-white-800 p-4 text-white flex justify-between items-center">
            
            <div className="space-x-4">
                {user ? (
                    <>
                        <img src={download} alt="User" className="inline-block w-8 h-8 rounded-full" />
                        <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded">Sign Out</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded">Login</Link>
                        <Link to="/sign-up" className="px-4 py-2 bg-green-500 text-white rounded">Sign Up</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default AuthButton;
