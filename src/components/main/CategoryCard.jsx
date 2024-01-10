import React from 'react';
import categoriesData from '../../assets/Data/category-card.json';
import { Link } from 'react-router-dom';


const CategoryCard = () => {
    const categories = categoriesData;

    return (
        <>
            <h1 className="text-center text-3xl text-white font-bold py-8 m-4 rounded-xl bg-slate-700">
                Categories We Offer
            </h1>
            <div className="min-h-screen flex items-center justify-center bg-slate-800">
                <div className="grid grid-cols-1 rounded-xl sm:grid-cols-2 bg-slate-900  md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-screen-3xl  m-4 p-4 ">
                    {categories.map(category => (
                        <Link key={category.id} to={`/${category.route.toLowerCase()}`}>
                            <div
                                key={category.id}
                                className={`${category.color} p-16 shadow-2xl rounded-xl text-white transition-transform transform`}
                            >
                                <h3 className="text-3xl my-3 font-semibold">{category.name}</h3>
                                <p className="text-2xl font-bold      ">
                                    {category.description}
                                </p>
                                <Link to={`/${category.route.toLowerCase()}`}>
                                    <button className=" text-blue-500  my-6 hover:underline text-lg rounded-xl font-bold">
                                        Learn more
                                    </button>
                                </Link>
                                <img
                                    src={`${category.image}`}
                                    alt={category.name}
                                    className="rounded-xl object-cover w-full sm:h-48 md:h-64 lg:h-64  "
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CategoryCard;
