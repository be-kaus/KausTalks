import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../config/Api";
import { toast } from "react-hot-toast";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OTPModal from "../components/modals/OTPModal";

const SignupPage = () => {
  const navigate = useNavigate();

  // 🔹 State for form data
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isOTPModalOpen, setIsOTPModalOpen] = useState(false);

  // 🔹 Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add registration logic here
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match");
      return;p
    }
    console.log("Register form submitted:",signupData);

    try {
      const res = await api.post("/api/auth/sendOtpRegister",signupData);
      toast.success(res.data.message);
      setIsOTPModalOpen(true);
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Registration failed");
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 via-base-100 to-secondary/20 p-6">
        <motion.div
          className="w-full max-w-md p-10 rounded-3xl shadow-2xl backdrop-blur-lg bg-white/70 border border-gray-200"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <h1 className="text-4xl font-extrabold text-center text-primary drop-shadow mb-6">
            Create Account ✨
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Join us and start your chat journey today 🚀
          </p>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your name"
                className="input"
                value={signupData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input"
                value={signupData.email}
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
                placeholder="Create a password"
                className="input"
                value={signupData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter your password"
                className="input"
                value={signupData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary w-full"
              whileTap={{ scale: 0.95 }}
            >
              🚀 Sign Up
            </motion.button>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-600 mt-8">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-secondary font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </motion.div>
      </div>

      <OTPModal
        isOpen={isOTPModalOpen}
        onClose={() => setIsOTPModalOpen(false)}
        callingPage="register"
        data={signupData}
      />
    </>
  );
};

export default SignupPage;
