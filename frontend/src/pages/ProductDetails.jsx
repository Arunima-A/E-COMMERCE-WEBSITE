import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams<{ id };
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`http://localhost:5000/api/products/${id}`);
            const data = await response.json();
            setProduct(data);
        };

        fetchProduct();
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="container mx-auto my-8">
            <div className="max-w-4xl mx-auto">
                <img className="w-full" src={product.imageUrl} alt={product.name} />
                <div className="px-6 py-4">
                    <div className="font-bold text-2xl mb-2">{product.name}</div>
                    <p className="text-gray-700 text-base">{product.description}</p>
                    <p className="text-gray-700 text-base mt-4">${product.price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
