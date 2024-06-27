import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';

import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

import MainPage from './pages/MainPage';
import Product from './components/Product';
import ProductInfoCard from './components/ProductInfo';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import AdminLogin from './components/AdminLogin';
import AdminPage from './components/AdminPage';

const App= () => {
    return (
        /*<Router>
            <Navbar/>
            
        </Router>*/
        <>
        <AuthProvider>
        
            <Routes>
                <Route path="/productinfo/:productId" element={<ProductInfoCard />} />
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/products" element={<Product/>}/>
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/admin" element={<AdminLogin/>}/>
                <Route path="/adminpage" element={<AdminPage/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
            
        </AuthProvider>
        </>
        
    );
};

export default App;
