import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../main/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import LanguageToggle from "../../LanguageToggle/LanguageToggle";
import { useNavigate } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { toggleCart } from "../../LanguageToggle/cartSlice";
// import { BiSolidDrink } from "react-icons/bi";
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
    localStorage.clear(); // Clear all local storage
    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Set logged-in state based on token presence
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="bg-slate-700 min-h-screen font-sans overflow-x-hidden">
      <div className="flex z-10 mx-2 mt-2 p-2 sm:px-10 px-4 w-full rounded-2xl flex-row justify-between items-center bg-slate-800 text-white">
        <Link to="/" className="text-white text-lg font-bold">
          General Store
        </Link>

        <div className="md:mb-0">
          <ul
            className={`flex ${
              showMobileMenu ? "flex-col" : "md:flex-row"
            } p-4 items-center sm:flex-row sm:flex px-2 space-y-2 md:space-x-4 md:space-y-0 ${
              showMobileMenu ? "block" : "hidden"
            }`}
          >
            <li className="flex hover:text-blue-500 items-center">
              <HiOutlineHome className="mr-1" />
              <Link to="/" className="text-white font-bold hover:text-blue-500">
                Home
              </Link>
            </li>

            {/* <li className="flex hover:text-blue-500 items-center">
              <BiSolidDrink className="mr-1" />
              <Link
                to="/drink"
                className="text-white font-bold hover:text-blue-500"
              >
                Drinks
              </Link>
            </li> */}

            <li className="flex hover:text-blue-500 items-center">
              <LuSmartphone className="mr-1" />
              <Link
                to="/smartphone"
                className="text-white font-bold hover:text-blue-500"
              >
                Smartphone
              </Link>
            </li>
            <li className="flex hover:text-blue-500 items-center">
              <PiMouseSimpleLight className="mr-1" />
              <Link
                to="/gadgets"
                className="text-white font-bold hover:text-blue-500"
              >
                Gadgets
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-4 m-2">
          {isLoggedIn && (
            <li className="rounded-2xl py-3 px-4 my-4 mx-2 md:my-0 md:ml-4 flex items-center">
              <div>Hey {name}!</div>
            </li>
          )}

          <LanguageToggle />

          <button onClick={() => dispatch(toggleCart(true))} className="relative">
            <Link
              to="/cart"
              className="bg-blue-500 rounded-2xl py-3 px-4 my-4 mx-2 md:my-0 md:ml-4 flex items-center"
            >
              <FontAwesomeIcon icon={faCartShopping} className="mr-1" />
            </Link>
            {cartQuantity > 0 && (
              <span className="cart-quantity absolute top-0 right-0 text-xs bg-red-500 text-white rounded-2xl px-2 py-1">
                {cartQuantity}
              </span>
            )}
          </button>

          <Link
            to="/login"
            className="bg-blue-500 rounded-2xl py-3 px-4 my-4 mx-2 md:my-0 md:ml-4 flex items-center"
          >
            <Person2TwoTone className="mr-1" />
          </Link>

          <li className="bg-blue-500 rounded-2xl py-3 px-4 my-4 mx-2 md:my-0 md:ml-4 flex items-center">
            <button onClick={handleLogout}>
              <Logout />
            </button>
          </li>
        </div>
      </div>

      <div className="main-content m-2 overflow-x-hidden bg-slate-700">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
