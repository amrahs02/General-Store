  import React, { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import {
    addItem,
    incrementItem,
    decrementItem,
  } from "../../LanguageToggle/cartSlice";
  import { toast } from "react-toastify";

  const ProductsCard = (props) => {
    const { img, title, price, id } = props;
    const [isAdded, setIsAdded] = useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems); // Access cart items from Redux

    const handleAddToCart = () => {
      const item = { ...props, quantity: 1 }; // Add initial quantity
      dispatch(addItem(item));
      setIsAdded(true);
      toast.success("Item added to cart!"); // Show success toast
    };

    const handleIncrement = () => {
      if (!isAdded) {
        toast.error("Please add items to cart first!"); // Show error toast
        return;
      }
      dispatch(incrementItem(id));
    };

    const handleDecrement = () => {
      if (!isAdded) {
        toast.error("Please add items to cart first!"); // Show error toast
        return;
      }

      const currentItem = cartItems.find((item) => item.id === id);
      if (currentItem && currentItem.quantity > 1) {
        dispatch(decrementItem(id));
      } else if (currentItem && currentItem.quantity === 1) {
        toast.info("Item removed from cart."); // Notify user about removal
        dispatch(decrementItem(id)); // This will remove it as per your logic
      }
    };

    const currentItem = cartItems.find((item) => item.id === id);
    const Quantity = currentItem ? currentItem.quantity : 0; // Get the quantity from cart

    return (
      <div className="bg-slate-800 text-white rounded-2xl m-4 w-80 shadow-lg p-6 transition-transform transform hover:scale-105">
        <img
          src={img}
          alt={title}
          className="w-full h-40 object-cover rounded-t-2xl"
        />
        <h2 className="text-lg font-semibold mt-2">{title}</h2>
        <p className="text-xl font-bold mt-1">₹{price.toLocaleString()}</p>
        <div className="flex items-center justify-between my-4">
          <button
            onClick={handleDecrement}
            className="bg-gray-600 hover:bg-gray-500 text-white rounded-2xl w-10 h-10 transition duration-300 flex items-center justify-center"
          >
            -
          </button>
          <span className="text-lg font-semibold">{Quantity}</span>
          <button
            onClick={handleIncrement}
            className="bg-gray-600 hover:bg-gray-500 text-white rounded-2xl w-10 h-10 transition duration-300 flex items-center justify-center"
          >
            +
          </button>
        </div>
        <button
          type="button"
          className={`mt-4 rounded-2xl w-full bg-blue-600 text-white py-2 transition duration-300 ${
            isAdded ? "bg-gray-500 cursor-not-allowed" : "hover:bg-blue-700"
          }`}
          onClick={handleAddToCart}
          disabled={isAdded}
        >
          {isAdded ? "Added" : "Add to Cart"}
        </button>
      </div>
    );
  };

  export default ProductsCard;
