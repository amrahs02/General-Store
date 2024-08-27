import React from 'react';
import { Link } from 'react-router-dom';
import Products from '../../assets/Data/dairy.json';
import BreadCrumb from '../Others/BreadCrumb';
import Header from '../Others/Header';

const DairySection = () => {
  return (
    <>
      <div className="-dairy-container sm:m-10  text-white">
        <BreadCrumb />
        <Header />

        <div className=" text-center">
          <h2 className="text-4xl font-bold mb-8 text-center bg-slate-800 p-4 rounded-xl text-blue-500">
            Discover Dairy Products
          </h2>
          {Products.categories.map((category) => (
            <div key={category.name} className="-category relative rounded-xl w-fit bg-slate-800 text-gray-300 p-6 hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <ul>
                {category.products.map((product) => (
                  <li key={product.name} className="mb-4">
                    <Link to={`/dairy/${category.name.toLowerCase()}/${product.name.toLowerCase()}`}>
                      <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2 rounded-md" />
                      <p className="text-gray-300">{product.name}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DairySection;
