// AdvertisementComponent.js

import React from 'react';
import BackButton from './Navigation/BackButton';

const AdvertisementComponent = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/918227080520', '_blank');
  };

  return (
    <div className="recharge-container  p-0 bg-gray-100 text-gray-800">
      <BackButton />

      <div className="content-container bg-white p-4  rounded-lg shadow-md text-center">
        <div className="color-box bg-blue-200 rounded-lg p-6 mb-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            Exclusive Recharge Offers
          </h1>
          <p className="text-gray-600 text-lg">
            Recharge with us and enjoy exclusive benefits on Jio, Airtel, and Vi networks. Don't miss out on our special offers available from 7 AM to 9 PM daily!
          </p>
        </div>

        {/* Recharge Offers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Jio Recharge Offer */}
          <div className="color-box bg-red-100 rounded-lg p-6">
            <p className="text-red-600 font-bold mb-2">Jio Recharge Offer</p>
            <p className="text-gray-700 text-xl">
              Enjoy exclusive benefits on Jio recharges between 7 AM and 9 PM. Don't miss out on these exciting offers!
            </p>
          </div>

          {/* Airtel Recharge Offer */}
          <div className="color-box bg-green-100 rounded-lg p-6">
            <p className="font-bold mb-2 text-green-600">Airtel Recharge Offer</p>
            <p className="text-gray-700 text-xl">
              Avail special benefits on Airtel recharges during the specified time window. Recharge now and save big!
            </p>
          </div>

          {/* Vi Recharge Offer */}
          <div className="color-box bg-purple-100 rounded-lg p-6">
            <p className="font-bold mb-2 text-purple-600">Vi Recharge Offer</p>
            <p className="text-gray-700 text-xl">
              Exclusive offers on Vi recharges from 7 AM to 9 PM every day! Recharge now and enjoy the perks.
            </p>
          </div>
        </div>

        {/* SIM Card Special */}
        <div className="color-box bg-gray-200 rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4">Get a New SIM Card</h2>
          <p className="text-gray-700 mb-4">
            Purchase a new SIM card with data and unlimited calls for 30 days absolutely free! Limited-time offer.
          </p>
        </div>

        {/* Recharge from Home */}
        <div className="color-box bg-gray-200 rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4">Recharge from Home</h2>
          <p className="text-gray-700 mb-4">
            Recharge from the comfort of your home! Simply send a screenshot of your payment to our WhatsApp number +91-8227080520 between 7 AM to 9 PM daily.
          </p>
          <button
            className="btn bg-green-500 hover:bg-green-700 py-3 px-4 m-2 rounded-full text-white"
            onClick={openWhatsApp}
          >
            Contact Us on WhatsApp
          </button>
        </div>

        {/* Additional Content */}
        <div className="color-box bg-gray-200 rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4">More Services Await You</h2>
          <p className="text-gray-700 mb-4">
            Explore additional services such as bill payments, mobile top-ups, and more. We provide hassle-free solutions to meet all your communication needs.
          </p>
        </div>

        {/* Note about the Offer */}
        <div className="color-box bg-gray-200 rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4">Important Note</h2>
          <p className="text-gray-700 mb-4">
            The mentioned offer is a company service for hassle-free recharges on Jio, Airtel, and Vi networks from 7 AM to 9 PM daily. It does not include additional discounts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementComponent;
