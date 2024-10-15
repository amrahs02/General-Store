import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const BASE_URL = window.location.hostname === "localhost" ? "http://localhost:5000" : "https://backend-8ry5.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(`${BASE_URL}/register`, {
        name,
        email,
        password,
      });

      console.log(result);

      if (result.data.message === "User_already_exists") {
        alert("User already exists");
      } else if (result.data.message === "Server error") {
        alert("Server error");
      } else if (result.data.message === "Success") {
        alert("User registered successfully");
        navigate("/login"); // Navigate only after successful registration
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again.");
    }
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-700">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h1 className="text-2xl text-slate-100 font-bold text-center mb-6">
          Signup
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-200 font-semibold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Username"
              className="w-full px-3 py-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200 font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="w-full px-3 py-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200 font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full px-3 py-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-2xl hover:bg-blue-600 transition duration-200"
          >
            Signup
          </button>
        </form>
        <p className="text-center text-slate-400 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
