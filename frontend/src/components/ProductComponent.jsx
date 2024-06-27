// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import ProductCard from './ProductCard';
import ProductDetail from './ProductDetail';
import ProductDetailCard from './ProductDetailCard';
const ProductComponent = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/products/all');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <Router>
            <div className="container mx-auto p-4">
                <Switch>
                    <Route exact path="/">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {products.map(product => (
                                <ProductDetailCard key={product.id} product={product} />
                            ))}
                        </div>
                    </Route>
                    <Route path="/products/:productId">
                        <ProductDetail products={products} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default ProductComponent;
