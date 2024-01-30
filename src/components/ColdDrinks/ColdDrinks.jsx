import React from 'react';
import productsData from '../../assets/Data/cold-drinks.json';
import Header from '../Others/Header';
import Breadcrumb from '../Others/BreadCrumb';

const ColdDrinkComponent = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/918227080520', '_blank');
  };

  return (
    <div className="cold-drink-container sm:m-10 text-white">
      <Breadcrumb />
      <Header />
      <div className="cold-drink-content bg-slate-700  rounded-xl shadow-md text-center">
        <h1 className="text-4xl font-bold mb-6 bg-slate-800 text-blue-500 p-4 rounded-xl">
          Explore Our Refreshing Collection at{' '}
          <span className="block">Your Cold Drinks Shop</span>
        </h1>

        <p className="text-gray-300 bg-slate-800 text-lg mb-6 p-4 rounded-xl">
          Discover a variety of cold drinks, chocolates, and more. Special offers available from 7 AM to 9 PM daily at{' '}
          <span className="font-bold text-blue-500">Your Cold Drinks Shop</span>.
        </p>

        {/* Display Filtered Products */}
        <h2 className='text-gray-300 bg-slate-800 w-full text-2xl my-4 rounded-xl p-4 font-bold'>Our Collection</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {productsData.map((product) => (
            <div key={product.id} className="relative rounded-xl" style={{
              backgroundSize: 'cover',
              minHeight: '200px',
            }}>
              <div className="absolute top-0 right-0 bottom-0 overflow-hidden left-0 bg-slate-800 text-gray-300 bg-opacity-80 backdrop-filter backdrop-blur-sm p-6 rounded-xl hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                <p className="font-bold mb-2 bg-opacity-50 rounded-xl">
                  {product.name}
                </p>
                <p className="text-gray-300 text-xl">
                  Price: {product.price}
                </p>
                <p className="text-gray-300 text-xl">
                  Volume: {product.volume}
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* Special Event Orders Section */}
      <h2 className='text-gray-300 bg-slate-800 w-full text-2xl my-4 rounded-xl p-4 font-bold'>Special Event Orders</h2>
      <div className='flex gap-2'>
        <div className="document-submission w-full bg-slate-800 text-gray-300 p-8 rounded-xl">
          <h2 className="text-xl font-bold mb-4">Bulk Orders for Events</h2>
          <p className="text-gray-300 mb-4">
            Planning a wedding, birthday, or another event? Avail special discounts on bulk orders for cold drinks. Contact us to customize your order and get the best deals for your special occasion!
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
    </div >
  );
};

export default ColdDrinkComponent;
