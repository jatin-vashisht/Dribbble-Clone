import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const SignupForm = () => {
  const [nameError, setNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    remember: false,
  });

  const handleSignup = () => {
    let isValid = true;

    // Validate name
    if (formData.name.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    // Validate username
    if (formData.username.trim() === "") {
      setUsernameError("Username is required");
      isValid = false;
    } else {
      setUsernameError("");
    }

    // Validate email
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      setEmailError("Invalid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validate password
    if (formData.password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      localStorage.setItem("user", JSON.stringify(formData));
      navigate("/profile");
    }
  };

  return (
    <div className="flex h-screen items-center justify-between">
      <div className="hidden md:block md:w-1/2 h-screen lg:w-1/3">
        <img src="/signup.png" alt="Signup" className="h-screen" />
      </div>
      <div className="flex flex-col px-12 md:px-8 md:py-12 rounded-md md:w-[40%] items-center justify-center md:items-start mx-auto h-screen">
        <p className="text-sm md:text-base absolute top-8 lg:top-10 right-20">
          Already a member?{" "}
          <Link to="#" className="text-blue-500">
            Sign In
          </Link>
        </p>
        <h1 className={`text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-start`}>
          Sign up to Dribbble
        </h1>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
            <div className="mb-4">
              <Input
                label={
                  <span className="inline-flex items-center">
                    {nameError && (
                      <AiOutlineExclamationCircle className="text-red-500 mr-1 text-xs" />
                    )}
                    Name
                  </span>
                }
                htmlFor="name"
                type="text"
                id="name"
                name="name"
                placeholder={nameError || "Enter your name"}
                formData={formData}
                setFormData={setFormData}
                error={nameError}
                errorMessage={nameError}
              />
            </div>
            <div className="mb-4">
              <Input
                label={
                  <span className="inline-flex items-center">
                    {usernameError && (
                      <AiOutlineExclamationCircle className="text-red-500 mr-1 text-xs" />
                    )}
                    Username
                  </span>
                }
                htmlFor="username"
                type="text"
                id="username"
                name="username"
                placeholder={usernameError || "Enter your username"}
                formData={formData}
                setFormData={setFormData}
                error={usernameError}
                errorMessage={usernameError}
              />
            </div>
          </div>
          <div className="mb-4">
            <Input
              label={
                <span className="inline-flex items-center">
                  {emailError && (
                    <AiOutlineExclamationCircle className="text-red-500 mr-1 text-xs" />
                  )}
                  Email
                </span>
              }
              htmlFor="email"
              type="email"
              id="email"
              name="email"
              placeholder={emailError || "Enter your email"}
              formData={formData}
              setFormData={setFormData}
              error={emailError}
              errorMessage={emailError}
            />
          </div>
          <div className="mb-4 md:mb-8">
            <Input
              label={
                <span className="inline-flex items-center">
                  {passwordError && (
                    <AiOutlineExclamationCircle className="text-red-500 mr-1 text-xs" />
                  )}
                  Password
                </span>
              }
              htmlFor="password"
              type="password"
              id="password"
              name="password"
              placeholder={passwordError || "6+ character"}
              formData={formData}
              setFormData={setFormData}
              error={passwordError}
              errorMessage={passwordError}
            />
          </div>
          <div className="relative flex gap-x-3 mb-4">
            <div className="flex h-6 items-center">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                onChange={(e) =>
                  setFormData({ ...formData, remember: e.target.checked })
                }
                required
              />
            </div>
            <div className="text-xs md:text-sm w-[85%]">
              <label htmlFor="comments" className="font-medium text-gray-500">
                Creating an account means you're okay with our{" "}
                <span className="text-purple-800 hover:cursor-pointer">
                  Terms of Service, Privacy Policy,
                </span>{" "}
                and our default{" "}
                <span className="text-purple-800 hover:cursor-pointer">
                  Notification Settings
                </span>
                .
              </label>
            </div>
          </div>
        </div>
        <button
          className="w-[40%] mt-4 mb-2 py-2 text-center text-white bg-pink-500 hover:bg-pink-700 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700"
          onClick={handleSignup}
        >
          Create Account
        </button>
        <p className="text-xs text-start text-gray-400 mt-4 lg:w-[60%] font-medium">
          This site is protected by reCAPTCHA and the Google{" "}
          <span className="text-purple-800 hover:cursor-pointer">
            Privacy Policy
          </span>{" "}
          and{" "}
          <span className="text-purple-800 hover:cursor-pointer">
            Terms of Service
          </span>{" "}
          apply.
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
