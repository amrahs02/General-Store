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
            id: 1,
            user: 'Anish Kumar Singh',
            comment: 'Very good service!',
            rating: 5,
        },
        {
            id: 1,
            user: 'Anish Kumar Singh',
            comment: 'Very good service!',
            rating: 5,
        },
        {
            id: 3,
            user: 'Awanit Tiwari(riku)',
            comment: 'Good Service.',
            rating: 5,
        },
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
        <div className="bg-gray-800 sm:h-screen py-8">
            <div className="py-8 bg-blue-500 text-3xl text-center font-bold mb-8 w-full text-white">User Reviews</div>
            <div className="max-w-screen-xl mx-auto flex items-center justify-center">

                <div className=" w-full max-w-screen-xl p-4 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {userReviews.map(review => (
                        <div key={review.id} className="bg-gray-700 p-6 rounded-md shadow-md">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xl text-white font-semibold">{review.user}</span>
                                <span className="text-yellow-500">
                                    {/* Display star ratings */}
                                    {'★'.repeat(review.rating)}
                                </span>
                            </div>
                            <p className="text-gray-200">{review.comment}</p>
                        </div>
                    ))}
                </div>


            </div>
            <p className="mt-4 text-gray-600 text-sm text-center">
                Source : Google Maps.
            </p>
        </div>
    );
};

export default UserReviews;
