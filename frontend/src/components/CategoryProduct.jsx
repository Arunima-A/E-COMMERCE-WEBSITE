import React, { useState } from 'react';
import { Link} from "react-router-dom";

const CategoryProduct= ({product})=>{
    
    return (
        <div className="w-1/6 mx-auto p-4 border">
        <Link to={`/productinfo/${product._id}`}>
        <img src={product.image} alt="Product" className="w-full h-auto" />
        </Link>
        <div className="mt-2">
        <p className="text-lg font-bold">{product.name}</p>
        <p className="text-sm text-gray-500">{product.description}</p>
        <p className="text-lg font-bold text-green-500">₹{product.price}</p>
        </div>
</div>

    )
}
export default CategoryProduct;