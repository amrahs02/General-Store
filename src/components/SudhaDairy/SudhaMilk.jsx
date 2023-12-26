// SudhaMilk.js
import React from 'react';
import Breadcrumb from '../Others/BreadCrumb';
import Sudhahealthy from '../../assets/images/sudha-healthy.png'

const SudhaMilk = () => {
  return (
    <div>
      <Breadcrumb />
      <h2 className="text-3xl font-bold mb-4">Sudha Milk Section</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Product 1 */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <img
            src={Sudhahealthy}
            alt="Sudha Milk Product 1"
            className="mb-4 rounded-md"
          />
          <h3 className="text-xl font-bold mb-2">Sudha Premium Milk</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
        </div>



        {/* Add more products as needed */}
      </div>
    </div>
  );
};

export default SudhaMilk;
