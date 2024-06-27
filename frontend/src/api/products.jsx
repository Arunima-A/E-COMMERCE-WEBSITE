export const fetchProductsByCategory = async (category) => {
    const response = await fetch(`http://localhost:3001/api/products/${category}`);
    const data = await response.json();
    return data;
  };
  