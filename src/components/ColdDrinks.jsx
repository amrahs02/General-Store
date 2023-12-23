import React, { useState, useEffect } from 'react';
import BackButton from './Navigation/BackButton';
import productsData from '../assets/Data/cold-drinks.json';

const ColdDrinkComponent = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/918227080520', '_blank');
  };

  // State to hold the filtered products based on search input
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  // State to hold the user's search input
  const [searchInput, setSearchInput] = useState('');

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    const input = e.target.value.toLowerCase();
    setSearchInput(input);

    // Filter products based on the search input
    const filtered = productsData.filter((product) =>
      product.name.toLowerCase().includes(input)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="cold-drink-container p-0  bg-white text-gray-800">

      <BackButton />
      <div className="content-container p-4  rounded-lg shadow-lg text-center  ">
        {/* Bulk Order Section */}


        <div className="color-box bg-blue-200 rounded-lg p-6 mb-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            Explore Our Refreshing Collection
          </h1>
          <p className="text-gray-600 text-lg">
            Discover a variety of cold drinks, chocolates, and more. Special offers available from 7 AM to 9 PM daily!
          </p>
        </div>

        {/* Search Bar */}
        <div className="mt-8 p-1 bg-blue-200 rounded-lg  mb-4">
          <input
            type="text"
            placeholder="Search  for cold drinks..."
            className="p-2 border w-full sm:w-fit rounded-lg border-gray-300 "
            value={searchInput}
            onChange={handleSearchInputChange}
          />
        </div>

        {/* Display Filtered Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className={`item ${product.color} rounded-lg p-6`}>
              <p className="font-bold mb-2">{product.name}</p>
              <p className="text-gray-700">{`Price: ${product.price}`}</p>
              <p className="text-gray-700">{`Volume: ${product.volume}`}</p>
            </div>
          ))}
        </div>

        {/* Special Event Orders Section */}
        <div className="color-box bg-gray-200 rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4">Special Event Orders</h2>
          <p className="text-gray-700 mb-4">
            Planning a wedding, birthday, or another event? We offer special discounts on bulk orders for cold drinks. Contact us to customize your order and get the best deals for your special occasion!
          </p>
          <button
            className="btn bg-blue-500 hover:bg-blue-700 py-3 px-4 m-2 rounded-full text-white"
            onClick={openWhatsApp}
          >
            Order Now for Your Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColdDrinkComponent;
