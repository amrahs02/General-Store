import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleCart,
  removeItem,
  incrementItem,
  decrementItem,
} from "../LanguageToggle/cartSlice";

const Cart = () => {
  const { isCartOpen, cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleCloseCart = (close) => {
    dispatch(toggleCart(close));
  };

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleIncrement = (itemId) => {
    dispatch(incrementItem(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementItem(itemId));
  };

  useEffect(() => {
    const docBody = document.body;
    isCartOpen
      ? docBody.classList.add("overflow-hidden")
      : docBody.classList.remove("overflow-hidden");
  }, [isCartOpen]);

  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      {isCartOpen && (
        <div
          id="cart"
          className="fixed inset-0 flex items-center text-white justify-center bg-black bg-opacity-50 z-50 backdrop-blur-lg"
        >
          <div className="bg-slate-700 shadow-2xl rounded-3xl w-full md:w-1/3 max-w-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-100">
                Your Cart <span className="text-gray-100">({cartQuantity})</span>
              </h2>
              <button
                className="text-gray-100 hover:text-gray-100"
                onClick={() => handleCloseCart(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              {cartQuantity === 0 ? (
                <h2 className="text-gray-100 text-center">
                  Your cart is empty
                </h2>
              ) : (
                cartItems.map((item) => (
                  <div
                    className="flex justify-between items-center p-4 border-b border-gray-300"
                    key={item.id}
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-16 h-16 rounded-md object-cover"
                      />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-700">{item.title}</h4>
                        <p className="text-gray-100">₹ {item.price.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button
                        className="bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center text-gray-100 hover:bg-gray-900"
                        onClick={() => handleDecrement(item.id)}
                      >
                        -
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        className="bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center text-gray-100 hover:bg-gray-900"
                        onClick={() => handleIncrement(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleRemove(item.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                ))
              )}
            </div>
            <div className="mt-4 border-t border-gray-300 pt-4 flex justify-between items-center">
              <h3 className="text-xl font-bold">
                Total: ₹ {cartTotal.toLocaleString()}
              </h3>
              <button
                className={`text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out ${
                  cartQuantity === 0
                    ? "cursor-not-allowed bg-gray-400"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
