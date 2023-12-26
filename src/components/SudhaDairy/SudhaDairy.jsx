// SudhaDairySection.js
import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../Others/BreadCrumb';

const SudhaDairySection = () => {
  return (
    <>
      <Breadcrumb/>
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Sudha Dairy Section</h2>
        {/* Category: Milk */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Milk Category Card */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-4">Milk</h3>
            <p className="text-gray-600">
              Explore our fresh and nutritious milk products.
              <Link to="/sudhadairy/sudhamilk" className="text-blue-500 hover:underline">
                See Sudha Milk products
              </Link>
            </p>
            {/* Add any additional content or links related to the Milk category */}
          </div>

          {/* Add more category cards as needed */}
        </div>
      </div>
    </section>
    </>
  );
};

export default SudhaDairySection;












