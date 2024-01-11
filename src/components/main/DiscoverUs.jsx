import React from 'react';
import { useNavigate } from 'react-router-dom';
import shopData from '../../assets/Data/Names.json'; // Adjust the path accordinglyu
import Breadcrumb from '../Others/BreadCrumb';

const DiscoverUs = () => {
  const Navigate = useNavigate();

  return (
    <div className="discover-us-container p-4   bg-slate-800">
      <Breadcrumb />

      <div className="discover-us-content bg-slate-700 p-4 my-4 rounded-xl text-center">
        <h1 className="text-4xl font-bold mb-6 bg-slate-800 text-blue-500  p-4 rounded-xl">
          <span className='text-sm'>Welcome to</span> <span className="block">{shopData.shopName}</span>
        </h1>

        <p className="text-gray-300 bg-slate-800 text-lg mb-6 p-4 rounded-xl">
          Explore a world of distinction and convenience at{' '}
          <span className="font-bold">{shopData.shopName}</span>. We take pride in delivering an exceptional array of products and services meticulously tailored to meet your everyday needs.
        </p>
        <h1 className="text-4xl font-bold mb-4 bg-slate-800 text-gray-300  p-4 rounded-xl">
          <h1 className='text-lg'>Our Collections</h1>
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className=" bg-slate-800 p-4 rounded-xl">
            <p className="text-green-500 font-bold mb-2">1. Premium Dairy</p>
            <p className="text-gray-300">
              Fresh <span className="text-yellow-500">milk</span>, rich <span className="text-red-500">paneer</span>, curd, ghee and more.
            </p>
          </div>

          <div className=" bg-slate-800 p-4 rounded-xl">
            <p className="text-red-500 font-bold mb-2">2. Sweet Treats</p>
            <p className="text-gray-300">
              Indulge in exquisite <span className="text-red-500">GulabJamun</span>, Chamcham, Sudha Fresh Surbhi Rabri  and more.
            </p>
          </div>

          <div className=" bg-slate-800 p-4 rounded-xl">
            <p className="font-bold text-blue-500 mb-2">3. Curated Collection</p>
            <p className="text-gray-300">
              From durable bottles to premium stationery, discover unique gifts and essentials for your home and office.
            </p>
          </div>

          <div className=" bg-slate-800 p-4 rounded-xl">
            <p className="text-purple-500 font-bold mb-2">4. Gift Ideas</p>
            <p className="text-gray-300">
              Find perfect gifts for your loved ones. Explore our collection of premium chocolates, sweets, and more.
            </p>
          </div>



        </div>
        <div className=" p-4 my-4 bg-slate-800  rounded-xl">
          <p className="text-yellow-500 font-bold mb-2">5. Phone Recharge and SIM Cards</p>
          <p className="text-gray-300">
            Instantly recharge your phone and get discounted SIM cards with good validity for Jio and Airtel.
          </p>
        </div>

        {/* Contact Details */}
        {/* Contact Details */}
        <div className="contact-section mt-8  bg-slate-800 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-300">
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
            <p className="text-gray-300">Connect with us on social media:</p>
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
