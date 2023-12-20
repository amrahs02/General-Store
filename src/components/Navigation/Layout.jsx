import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Others/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faHeart,
  faUser,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart';
import LanguageToggle from '../LanguageToggle';

const Layout = () => {
  const [showModal, setshowModal] = useState(false);

  const toggle = () => {
    setshowModal(!showModal);
  };

  return (
    <div className="bg-gray-700 min-h-screen font-sans">
      <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-4 bg-gray-900 rounded-b-lg text-white">
        <div className="mb-4 md:mb-0">
          <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-x-4 md:space-y-0">
            <li>
              <Link to="/" className="text-gray-300 hover:text-yellow-500">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/sudhadairy"
                className="text-gray-300 hover:text-yellow-500"
              >
                Sudha Dairy
              </Link>
            </li>
            <li>
              <Link to="/xerox" className="text-gray-300 hover:text-yellow-500">
                Xerox
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-yellow-500"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-white text-xl">Anushka General Store</h1>
        </div>

        <div className="flex items-center space-x-4">
          <LanguageToggle />
          <Link to="/profile" className="text-white">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <Cart showModal={showModal} toggle={toggle} />
          <button
            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={toggle}
          >
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
          <div className="md:hidden">
            <button className="text-white">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content bg-gray-200">
        <Outlet />
      </div>
      <div>
        <Footer />

      </div>
    </div>
  );
};

export default Layout;
