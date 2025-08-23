import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../config/api";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc"

const LoginPage = () => {
  const navigate = useNavigate();

  // 🔹 State for login data
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // 🔹 Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", loginData);
      toast.success(res.data.message || "Logged in successfully 🎉");

      // reset form
      setLoginData({
        email: "",
        password: "",
      });

      navigate("/dashboard"); // redirect to homepage/dashboard
    } catch (error) {
      toast.error(
        `Error : ${error.response?.status || error.message} | ${
          error.response?.data.message || ""
        }`
      );
    }
  };

  const GoogleLogin = () => {
    console.log('Google Login');
    
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 via-base-100 to-secondary/20 p-6">
      <motion.div
        className="w-full max-w-md p-10 rounded-3xl shadow-2xl backdrop-blur-lg bg-white/70 border border-gray-200"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center text-primary drop-shadow mb-6">
          Welcome Back 👋
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Login to continue chatting with your friends 🚀
        </p>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input"
              value={loginData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input"
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            {/* <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="checkbox checkbox-primary" />
              Remember Me
            </label> */}
            <Link to="/forgot-password" className="text-primary hover:underline">
              Forgot Password?
            </Link>
          </div>

          <motion.button
            type="submit"
            className="btn btn-primary w-full"
            whileTap={{ scale: 0.95 }}
          >
            🔑 Login
          </motion.button>
        </form>

        <div className="divider">OR</div>

        <div>
            <button
              type="submit"
              className="btn btn-secondary w-full flex items-center justify-center gap-2"
              onClick={GoogleLogin}
            >
             <FcGoogle className='text-2xl'/>
             Sign in with Google
            </button>
          </div>


        {/* Register */}
        <p className="text-center text-gray-600 mt-8">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-secondary font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
