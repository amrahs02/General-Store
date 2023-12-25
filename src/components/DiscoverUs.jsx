import React from 'react';
import { useNavigate } from 'react-router-dom';
import shopData from '../assets/Data/Names.json'; // Adjust the path accordinglyu
import Breadcrumb from './Others/BreadCrumb';

const DiscoverUs = () => {
  const Navigate = useNavigate();

  return (
    <div className="discover-us-container p-8 bg-gray-100">
      <Breadcrumb/>

      <div className="discover-us-content sm:bg-white p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-500  p-4 rounded">
        <span className='text-sm'>Welcome to</span> <span className="block">{shopData.shopName}</span>
        </h1>

        <p className="text-gray-700 text-lg mb-6 p-4 rounded">
          Explore a world of distinction and convenience at{' '}
          <span className="font-bold">{shopData.shopName}</span>. We take pride in delivering an exceptional array of products and services meticulously tailored to meet your everyday needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="mb-6 bg-opacity-25 bg-green-300 p-4 rounded">
            <p className="text-green-500 font-bold mb-2">Premium Dairy</p>
            <p className="text-gray-700">
              Fresh <span className="text-yellow-500">milk</span>, rich <span className="text-red-500">gulab jamun</span>, and crisp <span className="text-green-500">Sprite</span>.
            </p>
          </div>

          <div className="mb-6 bg-opacity-25 bg-red-300 p-4 rounded">
            <p className="text-red-500 font-bold mb-2">Sweet Treats</p>
            <p className="text-gray-700">
              Indulge in exquisite <span className="text-red-500">paneer</span> and refreshing <span className="text-green-500">Coca-Cola</span>.
            </p>
          </div>

          <div className="mb-6 bg-opacity-25 bg-blue-300 p-4 rounded">
            <p className="font-bold text-blue-500 mb-2">Curated Collection</p>
            <p className="text-gray-700">
              From durable bottles to premium stationery, discover unique gifts at <span className="font-bold text-blue-500">{shopData.shopName}</span>.
            </p>
          </div>

          <div className="mb-6 bg-opacity-25 bg-purple-300 p-4 rounded">
            <p className="text-purple-500 font-bold mb-2">Gift Ideas</p>
            <p className="text-gray-700">
              Find perfect gifts for your loved ones at <span className="font-bold text-blue-500">{shopData.shopName}</span>.
            </p>
          </div>

          <div className="mb-6 bg-opacity-25 bg-teal-300 p-4 rounded">
            <p className="text-teal-500 font-bold mb-2">Stationery Essentials</p>
            <p className="text-gray-700">
              Explore our collection of notebooks, pens, and office supplies for work or school.
            </p>
          </div>

          <div className="mb-6 bg-opacity-25 bg-yellow-300 p-4 rounded">
            <p className="text-yellow-500 font-bold mb-2">Phone Recharge and SIM Cards</p>
            <p className="text-gray-700">
              Instantly recharge your phone and get discounted SIM cards with good validity for Jio and Airtel.
            </p>
          </div>
        </div>


        <p className="text-gray-700 text-lg mb-6 bg-opacity-25 bg-gray-200 p-4 rounded">
          Step into a world where quality meets convenience. Join us at <span className="font-bold text-blue-500">{shopData.shopName}</span> for exceptional products and services.
        </p>

        {/* Contact Details */}
        {/* Contact Details */}
        <div className="contact-section mt-8 bg-opacity-25 bg-gray-200 p-8 rounded">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            Visit us at{' '}
            <span className="font-bold text-blue-500">{shopData.address}, {shopData.city}, {shopData.state}, {shopData.pincode}</span>
            <br />
            Call us at{' '}
            <span className="font-bold text-blue-500">{shopData.phoneNumber}</span>
            <br />
            Email us at{' '}
            <span className="font-bold text-blue-500">{shopData.email}</span>
          </p>

          {/* Social Media Links */}
          <div className="social-media-links mt-6">
            <p className="text-gray-600">Connect with us on social media:</p>
            <ul className="list-disc ml-6 text-blue-500">
              <li>
                <a href={`https://${shopData.facebookLink}`} className="hover:underline" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href={`https://${shopData.twitterLink}`} className="hover:underline" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <a href={`https://${shopData.instagramLink}`} className="hover:underline" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverUs;
