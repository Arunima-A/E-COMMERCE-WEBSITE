// ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ProductDetail = ({ products }) => {
    const { productId } = useParams();
    const product = products.find(p => p.id === parseInt(productId));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 p-4">
                    <img className="w-full h-auto object-cover" src={product.image} alt={product.title} />
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                    <p className="text-xl text-gray-700 mb-4">${product.price}</p>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mb-4">
                        Add to Cart
                    </button>
                    <Link to="/" className="text-blue-500 underline">Back to Products</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
