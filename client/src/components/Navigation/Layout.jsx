import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../main/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import LanguageToggle from "../../LanguageToggle/LanguageToggle";
import { useNavigate } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { toggleCart } from "../../LanguageToggle/cartSlice";
import { Logout, Person2TwoTone } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { LuSmartphone } from "react-icons/lu";
import { PiMouseSimpleLight } from "react-icons/pi";

const Layout = () => {
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");

  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartQuantity = cartItems.length;

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="bg-slate-700  min-h-screen font-sans overflow-x-hidden">
      {/* Header */}
      <header className="flex items-center justify-between rounded-2xl m-2 p-4 bg-slate-800 text-white shadow-lg">
        <Link to="/" className="text-2xl font-bold">General Store</Link>
        <button className="md:hidden" onClick={toggleMobileMenu}>
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <Link to="/" className="flex items-center hover:text-blue-400">
            <HiOutlineHome className="mr-1" />
            Home
          </Link>
          <Link to="/smartphone" className="flex items-center hover:text-blue-400">
            <LuSmartphone className="mr-1" />
            Smartphone
          </Link>
          <Link to="/gadgets" className="flex items-center hover:text-blue-400">
            <PiMouseSimpleLight className="mr-1" />
            Gadgets
          </Link>
          <Link to="/login" className="flex items-center hover:text-blue-400">
            <Person2TwoTone className="mr-1" />
            Login
          </Link>
          {isLoggedIn && (
            <button onClick={handleLogout} className="flex items-center hover:text-blue-400">
              <Logout className="mr-1" />
              Logout
            </button>
          )}
        </nav>

        {/* User Greeting and Cart */}
        <div className="flex items-center space-x-4">
          {isLoggedIn && <span className="text-sm">Hey, {name}!</span>}
          <LanguageToggle />
          <button onClick={() => dispatch(toggleCart(true))} className="relative">
            <Link to="/cart">
              <FontAwesomeIcon icon={faCartShopping} className="text-xl text-white" />
              {cartQuantity > 0 && (
                <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-1 py-0.5">{cartQuantity}</span>
              )}
            </Link>
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${showMobileMenu ? "block" : "hidden"} bg-gray-800`}>
        <nav className="flex flex-col p-4 space-y-2">
          <Link to="/" className="flex items-center text-white hover:text-blue-400">
            <HiOutlineHome className="mr-1" />
            Home
          </Link>
          <Link to="/smartphone" className="flex items-center text-white hover:text-blue-400">
            <LuSmartphone className="mr-1" />
            Smartphone
          </Link>
          <Link to="/gadgets" className="flex items-center text-white hover:text-blue-400">
            <PiMouseSimpleLight className="mr-1" />
            Gadgets
          </Link>
          <Link to="/login" className="flex items-center text-white hover:text-blue-400">
            <Person2TwoTone className="mr-1" />
            Login
          </Link>
          {isLoggedIn && (
            <button onClick={handleLogout} className="flex items-center text-white hover:text-blue-400">
              <Logout className="mr-1" />
              Logout
            </button>
          )}
        </nav>
      </div>

      {/* Main Content */}
      <main className="m-2 bg-gray-800">
        <Outlet />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
