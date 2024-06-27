import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [view, setView] = useState('buttons'); // 'buttons', 'login', 'signUp'

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/login', { email, password });
            setUser(response.data.user);
            setView('buttons');
        } catch (error) {
            alert('Invalid credentials');
        }
    };

    const handleSignUp = async () => {
        try {
            await axios.post('http://localhost:5000/api/sign-up', { username, email, password });
            handleLogin();
        } catch (error) {
            alert('User already exists');
        }
    };

    const handleLogout = () => {
        setUser(null);
        setUsername('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className="flex justify-center items-center h-screen">
            {!user ? (
                view === 'buttons' ? (
                    <div className="space-x-4">
                        <button onClick={() => setView('login')} className="px-4 py-2 bg-blue-500 text-white rounded">Login</button>
                        <button onClick={() => setView('signUp')} className="px-4 py-2 bg-green-500 text-white rounded">Sign Up</button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {view === 'signUp' && (
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="px-4 py-2 border rounded w-full"
                            />
                        )}
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-4 py-2 border rounded w-full"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="px-4 py-2 border rounded w-full"
                        />
                        <div className="space-x-4">
                            {view === 'login' && (
                                <button onClick={handleLogin} className="px-4 py-2 bg-blue-500 text-white rounded">Login</button>
                            )}
                            {view === 'signUp' && (
                                <button onClick={handleSignUp} className="px-4 py-2 bg-green-500 text-white rounded">Sign Up</button>
                            )}
                            <button onClick={() => setView('buttons')} className="px-4 py-2 bg-gray-500 text-white rounded">Back</button>
                        </div>
                    </div>
                )
            ) : (
                <div className="flex items-center space-x-4">
                    <img src="/default-user-pic.png" alt="User" className="w-10 h-10 rounded-full" />
                    <span>{user.username}</span>
                    <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded">Sign Out</button>
                </div>
            )}
        </div>
    );
};

export default Auth;
