// ProductPage.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sudhaProducts from '../assets/Data/Sudha-dairy.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

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
    <div className="container mx-auto mt-8 p-4 md:p-8 bg-gray-100 rounded-md shadow-md">
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <div className="mb-4 md:mb-0 md:mr-8 md:w-2/3">
          <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
          <p className="text-gray-600">{category.name}</p>
        </div>
        <p className="text-2xl font-semibold text-blue-600 md:w-1/3">{`$${product.price}`}</p>
      </div>

      <div className="mt-6 flex flex-col md:flex-row">
        <div className="mb-4 md:mb-0 md:pr-8 md:w-2/3">
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md shadow-md" />
          <p className="mt-4 text-gray-800">{product.description}</p>
        </div>

        <div className="md:w-1/3">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Customer Reviews</h3>
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

const ReviewCard = ({ review, onDelete }) => (
  <div className="bg-white p-4 mb-4 rounded-md shadow-md">
    <div className="flex items-center justify-between">
      <p className="text-gray-800">
        <strong>{review.author}</strong>: {review.comment}
      </p>
      <button onClick={onDelete} className="text-red-500 hover:text-red-700 focus:outline-none">
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </div>
  </div>
);

const ReviewForm = ({ onReviewSubmit }) => {
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (author.trim() !== '' && comment.trim() !== '') {
      const newReview = { author, comment };
      onReviewSubmit(newReview);
      setAuthor('');
      setComment('');
    }
  };

  return (
    <form className="mt-8">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Write a Review</h3>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
          Your Name:
        </label>
        <input
          type="text"
          id="author"
          className="w-full border p-2 rounded-md"
          placeholder="John Doe"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">
          Your Review:
        </label>
        <textarea
          id="comment"
          className="w-full border p-2 rounded-md"
          placeholder="Write your review here..."
          rows="4"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <button
        type="submit"
        onClick={handleFormSubmit}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Submit Review
      </button>
    </form>
  );
};

export default ProductPage;
