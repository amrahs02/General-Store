// ReviewCard.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import BreadCrumb from '../Others/BreadCrumb';


const ReviewCard = ({ review, onDelete }) => (
    <div className="bg-white p-4 mb-4 rounded-md shadow-md">
        <BreadCrumb/>
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

export default ReviewCard;
