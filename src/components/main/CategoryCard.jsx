import React from 'react';
import categoriesData from '../../assets/Data/category-card.json';
import { Link } from 'react-router-dom';


const CategoryCard = () => {
    const categories = categoriesData;

    return (
        <React.Fragment>
            <h1 className="text-center text-3xl text-white font-bold py-8 bg-blue-500">
                Categories We Offer
            </h1>
            <div className="min-h-screen flex items-center justify-center bg-slate-800">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-screen-xl p-4">
                    {categories.map(category => (
                        <Link key={category.id} to={`/${category.route.toLowerCase()}`}>
                            <div
                                key={category.id}
                                className={`${category.color} p-6 shadow-2xl rounded-lg h-full text-white transition-transform transform hover:scale-105`}
                            >
                                <img
                                    src={`${category.image}`}
                                    alt={category.name}
                                    className="mb-4 rounded-md object-cover w-full h-48"
                                />

                                <h3 className="text-xl m-3 font-semibold">{category.name}</h3>
                                <p className="text-sm sm:text-base">
                                    {category.description}
                                </p>
                                <Link to={`/${category.route.toLowerCase()}`}>
                                    <button className="text-white bg-blue-500 px-6 m-3 hover:bg-blue-700 rounded-full py-2 font-bold text-sm">
                                        View
                                    </button>
                                </Link>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default CategoryCard;
