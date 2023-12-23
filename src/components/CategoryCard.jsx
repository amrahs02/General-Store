import React from 'react';
import categoriesData from '../assets/Data/category-card';
import { Link } from 'react-router-dom';

const CategoryCard = () => {
    const categories = categoriesData;

    return (
        <React.Fragment  > 
         <h1 className="btn bg-blue-500 text-center text-3xl text-white font-bold py-8 px-8">
                Categories We Offer
            </h1>  
            <div className="min-h-screen flex items-center justify-center  bg-slate-800">
                <div className="grid grid-cols-1 sm:grid-cols-2 m-4 md:grid-cols-3  lg:grid-cols-3 gap-4 w-full max-w-screen-xl p-4">
                    {categories.map(category => (
                        <Link key={category.id} to={`/${category.route.toLowerCase()}`}>
                            <div
                                key={category.id}
                                className={`${category.color} p-6 shadow-2xl  rounded-lg h-full text-white`}
                            >
                                <img
                                    src={`${category.image}`}
                                    alt={category.name}
                                    className="mb-4 rounded-md object-cover w-full h-48" // Adjust the width and height values as needed
                                />

                                <h3 className="text-xl m-3 font-semibold">{category.name}</h3>
                                <p className="text-sm sm:text-base">
                                    {category.description}
                                </p>
                                <span className="text-green-300 font-semibold text-xs sm:text-sm">
                                    Special Discounts Available!
                                </span>
                                <Link className='flex items-center justify-center ' to={`/${category.route.toLowerCase()}`} >
                                    <button className="text-white bg-blue-500 px-10 m-5 hover:bg-blue-700 shadow-2xl rounded-full py-2 font-bold block  text-xs sm:text-sm"  >
                                        View
                                    </button>
                                </Link>
                            </div>
                        </Link>
                    ))}
                </div>
            </div >
        </React.Fragment>
    );
};

export default CategoryCard;
