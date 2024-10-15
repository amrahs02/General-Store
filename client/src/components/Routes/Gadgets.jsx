import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../LanguageToggle/cartSlice"; // Adjust the import path as necessary
import { toast } from "react-toastify";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  const [error, setError] = useState(null); // For handling errors
  const dispatch = useDispatch();

  // Fetch gadgets from the API
  useEffect(() => {
    const fetchGadgets = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/gadgets"); // Ensure your backend server is running
        if (!response.ok) throw new Error("Failed to fetch gadgets");
        const data = await response.json();
        setGadgets(data);
      } catch (error) {
        console.error(error);
        setError("Failed to load gadgets. Please try again later.");
      }
    };

    fetchGadgets();
  }, []);

  const handleAddToCart = (gadget) => {
    dispatch(addItem({ ...gadget, quantity: 1 })); // Add gadget with initial quantity of 1
    toast.success("Item added to cart!"); // Show success toast
  };

  if (error) return <div>{error}</div>; // Display error if fetch fails

  if (!gadgets.length) return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Gadgets List</h1>
      <p>Loading...</p>
    </div>
  ); // Show loading until gadgets are fetched

  return (
    <div className="container flex flex-col justify-center items-center w-fit mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Gadgets List</h1>
      <ul className="space-y-4">
        {gadgets.map((gadget) => (
          <li key={gadget._id} className="bg-gray-600 rounded-2xl p-4">
            <h2 className="text-lg font-bold">
              {gadget.brand} {gadget.model}
            </h2>
            <p>Price: ${gadget.price}</p>
            <p>Specs: {gadget.specs}</p>
            {gadget.imageUrl && (
              <img
                src={gadget.imageUrl}
                alt={gadget.model}
                className="mt-2 w-32"
              />
            )}
            <button
              onClick={() => handleAddToCart(gadget)}
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-2xl"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gadgets;
