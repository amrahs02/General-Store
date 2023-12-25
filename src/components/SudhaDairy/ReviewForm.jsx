// ReviewForm.js
import { useState } from 'react';
import BreadCrumb from '../Others/BreadCrumb';

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
            <BreadCrumb/>
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

export default ReviewForm;
