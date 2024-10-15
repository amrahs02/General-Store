import React from "react";
import categoriesData from "../../assets/Data/category-card.json";
import { Link } from "react-router-dom";

const CategoryCard = () => {
  const categories = categoriesData;

  return (
    <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((category) => (
        <Link key={category.id} to={`/${category.route.toLowerCase()}`} className="group">
          <div className="relative bg-slate-700 p-8 m-4 shadow-lg rounded-2xl text-white transition-transform transform  group-hover:shadow-2xl">
            <div className="relative z-10">
              <h3 className="text-3xl my-3 font-bold">{category.name}</h3>
              <p className="text-lg font-medium mb-6">{category.description}</p>
              <button className="text-blue-500 hover:underline text-lg font-semibold">
                Learn more
              </button>
            </div>
            {/* <img
              src={`${category.image}`}
              alt={category.name}
              className="absolute top-0 left-0 w-full h-full object-cover opacity-20 rounded-2xl"
            /> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryCard;
