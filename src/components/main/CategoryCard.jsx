import React from 'react';
import categoriesData from '../../assets/Data/category-card.json';
import { Link } from 'react-router-dom';


const CategoryCard = () => {
    const categories = categoriesData;

    return (
        <React.Fragment>
            <h1 className="text-center text-3xl text-white font-bold py-8 m-4 rounded-xl bg-slate-700">
                Categories We Offer
            </h1>
            <div className="min-h-screen flex items-center justify-center bg-slate-800">
                <div className="grid grid-cols-1 rounded-xl sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-screen-xl p-4 ">
                    {categories.map(category => (
                        <Link key={category.id} to={`/${category.route.toLowerCase()}`}>
                            <div
                                key={category.id}
                                className={`${category.color} p-16 shadow-2xl rounded-xl text-white transition-transform transform`}
                            >

                                <h3 className="text-4xl my-3 font-semibold">{category.name}</h3>
                                <p className="text-xl ">
                                    {category.description}
                                </p>
                                <Link to={`/${category.route.toLowerCase()}`}>
                                    <button className=" text-blue-500  my-6 hover:underline rounded-2xl font-bold text-sm">
                                        Learn more
                                    </button>
                                </Link>
                                <img
                                    src={`${category.image}`}
                                    alt={category.name}
                                    className=" rounded-xl  object-cover w-full sm:h-96"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default CategoryCard;
