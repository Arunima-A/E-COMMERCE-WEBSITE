import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    image: '',
    category: ''
  });
  const [isUpdating, setIsUpdating] = useState(false); // Track if updating or adding

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/products/all');
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value
    });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/products/add', productData);
      setProducts([...products, response.data]);
      clearForm();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateProduct = async (id) => {
    try {
      console.log('Hi');
      const response = await axios.put(`http://localhost:3001/api/products/update/${id}`, productData);
      setProducts(products.map((product) => (product._id === id ? response.data : product)));
      clearForm();
      setIsUpdating(false); // Reset updating state after successful update
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/products/delete/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const clearForm = () => {
    setProductData({
      name: '',
      description: '',
      price: '',
      stock: '',
      image: '',
      category: ''
    });
  };

  const startUpdate = (product) => {
    // Set product data for update
    setProductData({
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
      image: product.image,
      category: product.category._id // Assuming category is nested with _id
    });
    setIsUpdating(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Page</h1>
      <form onSubmit={isUpdating ? () => handleUpdateProduct(productData._id) : handleAddProduct} className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold mb-4">{isUpdating ? 'Update Product' : 'Add Product'}</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <input
            type="text"
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Stock</label>
          <input
            type="number"
            name="stock"
            value={productData.stock}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            name="image"
            value={productData.image}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={productData.category}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">
          {isUpdating ? 'Update Product' : 'Add Product'}
        </button>
      </form>
      <h2 className="text-xl font-bold mb-4">Products</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        {products.map((product) => (
          <div key={product._id} className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <div>
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <p>Stock: {product.stock}</p>
                <p>Category: {product.category.name}</p>
              </div>
              <div>
                <button
                  onClick={() => startUpdate(product)} // Set product for update
                  className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDeleteProduct(product._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="border-b border-gray-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
