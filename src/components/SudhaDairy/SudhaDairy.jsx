// SudhaDairySection.js

import React from 'react';
import { Link } from 'react-router-dom';
import sudhaProducts from '../../assets/Data/Sudha-dairy.json';
import BreadCrumb from '../Others/BreadCrumb';


const SudhaDairySection = () => {
  return (
    <div className="bg-gray-100 p-4 sm:p-24">
      <BreadCrumb/>
      <h2 className="text-3xl font-bold mb-8 text-center">Explore Sudha Dairy Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {sudhaProducts.categories.map((category) => (
          <div key={category.name} className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
            <ul>
              {category.products.map((product) => (
                <li key={product.name} className="mb-2">
                  <Link to={`/sudhadairy/${category.name.toLowerCase()}/${product.name.toLowerCase()}`}>
                    <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2 rounded-md" />
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SudhaDairySection;
