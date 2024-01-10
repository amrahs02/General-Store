import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-slate-700 rounded-s-3xl rounded-e-3xl text-white">
      <div className="container sm:mx-auto py-8 grid grid-cols-1 mx-4 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-2">

        <div className="mb-8 md:mb-0">
          <h4 className="text-2xl font-bold mb-4">EXPLORE</h4>
          <ul>
            <li className="mb-2">
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li className="mb-2">
              <Link to="/products" className="hover:underline">Products</Link>
            </li>
            <li className="mb-2">
              <Link to="/contact" className="hover:underline">Contact Us</Link>
            </li>
            <li className="mb-2">
              <Link to="/about" className="hover:underline">About Us</Link>
            </li>
          </ul>
        </div>

        <div className="mb-8 md:mb-0">
          <h4 className="text-2xl font-bold mb-4">POLICIES</h4>
          <ul>
            <li className="mb-2">
              <Link to="/faq" className="hover:underline">FAQ</Link>
            </li>
            <li className="mb-2">
              <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
            </li>
            <li className="mb-2">
              <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            </li>
            <li className="mb-2">
              <Link to="/returns" className="hover:underline">Returns & Refunds</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-2xl font-bold mb-4">CONNECT</h4>
          <div className="flex space-x-4 mb-4">
            <a href="https://www.facebook.com/anushkastore" target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:text-gray-400">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com/anushkastore" target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:text-gray-400">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/anushkastore/" target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:text-gray-400">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <p className="mb-4 ">Shop with confidence at Anushka General Store. We guarantee the authenticity of our products.</p>
          <p>Easy returns within 14 days of receiving your order.</p>
        </div>
      </div>

      <div className="bg-slate-700 py-4 text-center">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Anushka General Store. All rights reserved.</p>
        <p className="text-sm text-gray-400">Quality you can trust. Visit us again soon!</p>
        <p className="text-sm text-gray-400">Designed and Developed by <a href="https:/sandeepsharma.vercel.app" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">Sandeep Kumar Sharma</a></p>
      </div>
    </footer>
  );
};

export default Footer;
