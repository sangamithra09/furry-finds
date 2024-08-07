import React from 'react';
import { useParams } from 'react-router-dom';
import productsReviewData from './ProductsReviewData'; // Assuming you have this file
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { productId } = useParams();
  console.log(productsReviewData);
  const product = productsReviewData.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail-page">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <p className="description">{product.description}</p>
        <p className="price">₹{product.price.toFixed(2)}</p>
        <div className="rating">
          {/* Assuming you have a function to display stars */}
          {renderStars(product.rating)}
          <span>({product.reviews.length} reviews)</span>
        </div>
        <div className="reviews">
          {product.reviews.map((review, index) => (
            <div key={index} className="review">
              <p><strong>{review.user}</strong></p>
              <p>{review.comment}</p>
              <p><em>{review.date}</em></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper function to render star ratings
const renderStars = (rating) => {
  const stars = Array(5).fill(false).map((_, index) => index < rating);
  return stars.map((filled, index) => (
    <span key={index} className={filled ? 'star filled' : 'star'}>★</span>
  ));
};

export default ProductDetailPage;
