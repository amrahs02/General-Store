// ProductPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sudhaProducts from '../../assets/Data/Sudha-dairy.json';
import ReviewCard from './ReviewCard';
import ReviewForm from './ReviewForm';
import BreadCrumb from '../Others/BreadCrumb';


const ProductPage = () => {
  const { categoryName, productName } = useParams();

  const category = sudhaProducts.categories.find((cat) => cat.name.toLowerCase() === categoryName.toLowerCase());
  const product = category.products.find((prod) => prod.name.toLowerCase() === productName.toLowerCase());

  const reviewsKey = `productReviews_${categoryName.toLowerCase()}_${productName.toLowerCase()}`;
  const initialReviews = JSON.parse(localStorage.getItem(reviewsKey)) || [];
  const [reviews, setReviews] = useState(initialReviews);

  useEffect(() => {
    localStorage.setItem(reviewsKey, JSON.stringify(reviews));
  }, [reviews, reviewsKey]);

  const handleReviewSubmit = (review) => {
    setReviews([...reviews, review]);
  };

  const handleReviewDelete = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews.splice(index, 1);
    setReviews(updatedReviews);
  };

  return (
    <div className="container mx-auto w-fit mt-8 p-4 md:p-8 bg-gray-100 rounded-md shadow-md">
      <BreadCrumb/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-2">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">{product.name}</h2>
          <p className="text-gray-600 text-lg mb-4">{category.name}</p>
          <img src={product.image} alt={product.name} className="w-fit  object-cover rounded-md shadow-md mb-4" />
          <p className="text-gray-800 text-lg">{product.description}</p>
        </div>
        <div>
          <p className="text-3xl font-semibold text-blue-600 mb-4">{`$${product.price}`}</p>
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Customer Reviews</h3>
            {reviews.length === 0 ? (
              <p className="text-gray-600">No reviews yet. Be the first to review!</p>
            ) : (
              <div>
                {reviews.map((review, index) => (
                  <ReviewCard key={index} review={review} onDelete={() => handleReviewDelete(index)} />
                ))}
              </div>
            )}
          </div>
          <ReviewForm onReviewSubmit={handleReviewSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
