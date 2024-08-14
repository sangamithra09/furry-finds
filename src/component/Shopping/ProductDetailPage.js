import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from './Cart/CartContext';
import './ProductDetailPage.css';
import dogf1 from '../../Assets/dogf1.webp';
import cat1 from '../../Assets/cat1.webp';

const fetchProductById = async(id) => {
  try {
    const response = await fetch(`http://localhost:8080/prod/getProd/${id}`); 
    if (!response.ok) {
      throw new Error('Product not found');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    throw error; 
  }
  
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await fetchProductById(id);
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      navigate('/cart'); // Navigate to the Cart page after adding the item
    }
  };

  const handleBuyNow = () => {
    if (product) {
      addToCart(product);
      navigate('/cart'); // Navigate to the Cart page after adding the item
    }
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <div className="product-rating">
          <span>Rating: {product.rating} ★</span>
        </div>
        <p className="product-price">₹{product.price.toFixed(2)}</p>
        <button className="btn add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
        <button className="btn buy-now" onClick={handleBuyNow}>Buy Now</button>
        <div className="customer-reviews">
          <h2>Customer Reviews</h2>
          {product.reviews && product.reviews.length > 0 ? (
            product.reviews.map((review, index) => (
              <div key={index} className="review">
                <p><strong>{review.username}</strong> - {review.rating} ★</p>
                <p>{review.comment}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
