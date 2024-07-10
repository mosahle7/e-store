import React, { useEffect, useState } from 'react';

const Pr = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const productId = 1; // Example product ID, replace with actual ID as needed

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:8000/v1/products/product/${productId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const productData = await response.json();
        console.log('Product data:', productData);
        setProduct(productData[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>No product found</p>;

  return (
    <article>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} />
      <p>Price: &pound;{product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Stock: {product.stock}</p>
      <p>Description: {product.description}</p>
    </article>
  );
};

export default Pr;

