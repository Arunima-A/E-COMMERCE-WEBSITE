// ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetailCard = ({ product }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <Link to={`/products/${product.id}`}>
                <img className="w-full h-48 object-cover" src={product.image} alt={product.title} />
            </Link>
            <div className="p-4">
                <div className="font-bold text-xl mb-2">{product.title}</div>
                <p className="text-gray-700 text-base">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                    <span className="font-bold text-xl text-blue-600">${product.price}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailCard;
