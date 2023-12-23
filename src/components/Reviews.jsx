import React from 'react';

const UserReviews = () => {
    // Sample user reviews data
    const userReviews = [
        {
            id: 1,
            user: 'Anish Kumar Singh',
            comment: 'Very good service!',
            rating: 5,
        },
        {
            id: 2,
            user: 'Saddam Hussain',
            comment: 'This shop is situated in Dumra Bazar. You can find all necessary stuff here. Stationary products are also available here at reasonable prices.',
            rating: 5,
        },
        {
            id: 3,
            user: 'Awanit Tiwari(riku)',
            comment: 'Good Service.',
            rating: 5,
        }
        
        // Add more reviews as needed
    ];

    return (
        <div className="bg-gray-100 py-8">
            <div className="max-w-screen-xl mx-auto">
                <h2 className="text-3xl text-center font-bold mb-8 text-gray-800">User Reviews</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {userReviews.map(review => (
                        <div key={review.id} className="bg-white p-6 rounded-md shadow-md">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xl font-semibold">{review.user}</span>
                                <span className="text-yellow-500">
                                    {/* Display star ratings */}
                                    {'★'.repeat(review.rating)}
                                </span>
                            </div>
                            <p className="text-gray-700">{review.comment}</p>
                        </div>
                    ))}
                </div>

                <p className="mt-4 text-gray-600 text-sm text-center">
                    Source : Google Maps.
                </p>

            </div>
        </div>
    );
};

export default UserReviews;
