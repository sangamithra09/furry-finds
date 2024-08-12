import React, { useState, useEffect,Link } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './Cart/CartContext';
import './ProductDetailPage.css';
import dogf1 from '../../Assets/dogf1.webp'
import cat1 from '../../Assets/cat1.webp'


const fetchProductById = (id) => {
  const products = {
    1: {
      id: 1,
      name: 'Pedigree Chicken and Vegetables Dog Dry Food',
      image: dogf1,
      description: 'Nutritious dog food.',
      rating: 4.5,
      price: 3310,
      reviews: [
        // { username: 'User1', rating: 5, comment: 'Great product!' },
        // { username: 'User2', rating: 4, comment: 'Very good, but could be better.' }
      ]
    },
    2: {
      id: 1,
      name: 'HUFT Saras Doggie Treats Fruit & Veggie Trail Mix',
      image: "https://headsupfortails.com/cdn/shop/products/Fruitsandveggietrailmix_fd3d210e-2369-4984-b6ae-e79ecde59926.jpg?v=1672209134",
      description: 'Dog Treats',
      rating: 4.5,
      price: 349,
      reviews: [
        // { username: 'User1', rating: 5, comment: 'Great product!' },
        // { username: 'User2', rating: 4, comment: 'Very good, but could be better.' }
      ]
    }
  };
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products[id]);
    }, 500);
  });
};


const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try{
      const productData = await fetchProductById(id);
      setProduct(productData);
      }
      catch (error) {
        // Handle error
        console.error('Error fetching product data:', error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  const handleBuyNow = () => {
    if (product) {
      addToCart(product);
    }
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
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
