import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "../Others/BreadCrumb";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      if (response.data.message === "Success") {
        const token = response.data.token;
        localStorage.setItem("token", token);

        // Fetch user details with the token
        const userResponse = await axios.get("http://localhost:5000/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Store user data in local storage or state
        localStorage.setItem("name", userResponse.data.name);
        navigate("/"); // Redirect to the home page
      } else {
        handleLoginError(response.data.message);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
      console.error("Login error:", error);
    }
  };

  const handleLoginError = (message) => {
    switch (message) {
      case "Invalid_Credentials":
        alert("Invalid Credentials");
        break;
      case "User_not_found":
        alert("User not found");
        break;
      default:
        alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen fixed inset-0 bg-slate-700 bg-opacity-100 backdrop-blur-sm">
      <div className="w-full max-w-md">
        <div className="absolute top-20 left-20">
          <Breadcrumb />
        </div>
        <div className="bg-slate-800 bg-opacity-90 p-8 rounded-2xl shadow-md backdrop-blur-md">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-100">Login</h1>
          <form onSubmit={handleSubmit}>
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
              Login
            </button>
          </form>
          <p className="text-center mt-4 text-gray-400">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Signup
            </Link>
          </p>
          <div className="text-center mt-4 text-gray-300">
            <p className="font-semibold">Test Credentials:</p>
            <p>Email: <span className="text-blue-500">test123@gmail.com</span></p>
            <p>Password: <span className="text-blue-500">test123</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
