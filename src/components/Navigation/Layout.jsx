// Layout.jsx

import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../main/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import LanguageToggle from '../../LanguageToggle/LanguageToggle';


const Layout = () => {
  const [showModal, setshowModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggle = () => {
    setshowModal(!showModal);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="bg-slate-700  min-h-screen font-sans overflow-x-hidden">
      <div className="flex z-10 mx-2  mt-2 p-2 rounded-lg flex-row md:flex-row justify-between items-center bg-slate-900  text-white">
        <h1 className="text-white text-lg font-bold">Anushka General Store</h1>

        <div className="md:mb-0 ">
          <ul className={`flex ${showMobileMenu ? 'flex-col' : 'md:flex-row'} p-4  items-center sm:flex-row sm:flex  px-2 space-y-2 md:space-x-4 md:space-y-0 ${showMobileMenu ? 'block' : 'hidden'}`}>
            <li>
              <Link to="/" className="text-white font-bold hover:text-blue-500 ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/xerox" className="text-white font-bold hover:text-blue-500 ">
                Xerox
              </Link>
            </li>
            <li>
              <Link
                to="/recharge"
                className="text-white font-bold  hover:text-blue-500 "
              >
                Recharge
              </Link>
            </li>
            <li>
              <Link
                to="/colddrinks"
                className="text-white font-bold  hover:text-blue-500 "
              >
                Cold Drinks
              </Link>
            </li>
            <li>
              <Link
                to="/sudhadairy"
                className="text-white font-bold hover:text-blue-500 ">
                Sudha Dairy
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white font-bold  hover:text-blue-500 "
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <LanguageToggle />
          {/* <Cart showModal={showModal} toggle={toggle} /> */}
          <button className="bg-blue-500 rounded-full py-2 px-4 my-4 md:my-0 md:ml-4"
            onClick={toggle}> <FontAwesomeIcon icon={faCartShopping} />
          </button>

        </div>
      </div>

      {/* Main Content */}
      <div className="main-content m-2 overflow-x-hidden bg-slate-700">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
