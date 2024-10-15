import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsCard from "../Routes/ProductsCard";
import { useDispatch } from "react-redux";
import { addItem } from "../../LanguageToggle/cartSlice";
import { toast } from "react-toastify";

function ProductsPage() {
  const [smartphones, setSmartphones] = useState([]);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/smartphones")
      .then((response) => {
        setSmartphones(response.data);
      })
      .catch((error) => {
        console.error("Error fetching smartphones:", error);
        setError("Failed to load smartphones. Please try again later.");
      });
  }, []);

  const handleAddToCart = (smartphone) => {
    dispatch(addItem({ ...smartphone, quantity: 1 }));
    toast.success("Smartphone added to cart!");
  };

  if (error)
    return (
      <div className="text-center mt-10 text-red-600">
        {error}
      </div>
    );

  if (!smartphones.length)
    return (
      <div className="flex justify-center items-center h-screen">
        <div>
          <h1 className="text-3xl font-bold mb-5 text-gray-800">Smartphones List</h1>
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">Smartphones Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {smartphones.map((smartphone) => (
          <div
            key={smartphone._id}
            className="bg-slate-800 shadow-lg rounded-2xl p-6 transform transition  hover:shadow-2xl"
          >
            {smartphone.imageUrl && (
              <img
                src={smartphone.imageUrl}
                alt={smartphone.model}
                className="w-full h-48 object-cover rounded-2xl mb-4"
              />
            )}
            <h2 className="text-xl font-semibold text-gray-100">
              {smartphone.brand} {smartphone.model}
            </h2>
            <p className="text-lg text-gray-100 mt-2">Price: ${smartphone.price}</p>
            <p className="text-gray-100 mt-1">Specs: {smartphone.specs}</p>
            <button
              onClick={() => handleAddToCart(smartphone)}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-2xl text-lg font-medium transition hover:bg-blue-500"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
