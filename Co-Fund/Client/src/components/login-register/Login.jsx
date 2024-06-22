import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Image from "../../assets/image.png";
import Logo from "../../assets/logo.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("auth")) || ""
  );
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email.trim() && password.trim()) {
      const formData = { email, password };
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/login",
          formData
        );
        localStorage.setItem("auth", JSON.stringify(response.data.token));
        toast.success("Login successful");
        navigate("/dashboard");
      } catch (err) {
        console.error(err);
        toast.error(err.response.data.message || "An error occurred");
      }
    } else {
      toast.error("Please fill in all inputs");
    }
  };

  useEffect(() => {
    if (token !== "") {
      toast.success("You are already logged in");
      navigate("/dashboard");
    }
  }, [token, navigate]);

  return (
    <div className="login-main flex">
      <div className="login-left sm:w-2/3 sm:block hidden">
        <img src={Image} alt="Background" />
      </div>
      <div className="login-right flex justify-center items-center flex-col sm:w-1/2 w-full py-10">
        <div className="login-center text-center">
          <h2 className="text-4xl pb-2">Welcome back!</h2>
          <p>Please enter your details</p>
          <form onSubmit={handleLoginSubmit} className="sm:w-96 w-full">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-96"
            />
            <div className="pass-input-div">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
              />
              {showPassword ? (
                <FaEyeSlash
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                />
              ) : (
                <FaEye
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                />
              )}
            </div>
            <div className="flex">
              <a href="#" className="text-blue-900 hover:font-semibold">
                Forgot password?
              </a>
            </div>
            <div className="login-center-buttons">
              <button type="submit" className="w-36 bg-blue-700 text-white my-5">
                Log In
              </button>
            </div>
          </form>
          <p className="login-bottom-p">
            Don't have an account? <Link to="/register" className="text-blue-800 hover:font-semibold">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
