import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import SliderComponent from './SliderComponent';
const ProductSlider = ({ categoryName }) => {
    const [products, setProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/products', {
                    params: { categoryName }
                });
                const shuffledProducts = response.data.sort(() => Math.random() - 0.5);
                setProducts(shuffledProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [categoryName]);

    return (
        <div >
            <SliderComponent products={products}/>
        </div>
    );
};

export default ProductSlider;
