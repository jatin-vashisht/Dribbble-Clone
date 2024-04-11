import React, { useEffect } from "react";
import { TbShoppingBagX } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import {
  FaDribbble,
  FaFacebookSquare,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { BsEnvelopeCheck } from "react-icons/bs";

const HomePage = ({avatarImage}) => {
  useEffect(() => {
    if (localStorage.getItem("user") == null) {
      window.location.href = "/signup";
    }
  }, []);
  return (
    <div className="flex flex-col justify-between h-screen">
      <header className="text-gray-600 body-font border-b border-gray-300">
        <div className="container mx-auto flex flex-wrap p-5 flex-row justify-between items-center">
          <a className="flex title-font font-medium items-center text-gray-900">
            <span className="ml-3 text-xl cursor-pointer">
              <img src="blackLogo.png" alt="Nav Logo" className="w-28" />
            </span>
          </a>
          <nav className="hidden md:mr-auto md:ml-4 md:py-1 md:pl-4 lg:flex flex-wrap items-center text-sm justify-center font-bold">
            <a className="mr-6 text-gray-500 hover:text-gray-900 cursor-pointer">Inspiration</a>
            <a className="mr-6 text-gray-500 hover:text-gray-900 cursor-pointer">Find Work</a>
            <a className="mr-6 text-gray-500 hover:text-gray-900 cursor-pointer">Learned Design</a>
            <a className="mr-6 text-gray-500 hover:text-gray-900 cursor-pointer">Go Pro</a>
            <a className="mr-6 text-gray-500 hover:text-gray-900 cursor-pointer">Hire Designers</a>
          </nav>
          <div className="flex gap-5 items-center">
            <div className="relative hidden md:flex">
              <CiSearch className="absolute top-3 left-2 text-lg font-bold" />
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                className="bg-gray-100 w-32 px-8 py-2 rounded-lg"
              />
            </div>
            <TbShoppingBagX className="text-3xl cursor-pointer hidden md:block" />
            {console.log(avatarImage)}
            <img src={avatarImage && avatarImage.name != null? avatarImage.name : avatarImage} alt="Avatar" className="w-8 cursor-pointer" />
            <button className="hidden md:inline-flex items-center text-white bg-pink-500 border-0 px-4 py-2 focus:outline-none hover:bg-pink-600 rounded-lg text-sm mt-4 md:mt-0">
              Upload
            </button>
          </div>
        </div>
      </header>
      <main className="flex flex-col justify-center items-center my-10 md:my-20 text-center max-w-[625px] mx-auto px-4">
        <h1 className="text-xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">Please verify your email...</h1>
        <BsEnvelopeCheck className="text-6xl my-6 sm:text-7xl md:text-8xl lg:text-9xl" />
        <p className="text-gray-600 text-xs sm:text-sm">Please verify your email address. We've sent a confirmation email to:</p>
        <p className="my-4 font-extrabold text-sm sm:text-base">account@refero.design</p>
        <p className="text-gray-600 mb-4 text-xs sm:text-sm">Click the confirmation link in that email to begin using Dribbble.</p>
        <p className="text-gray-600 text-xs sm:text-sm">Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can <span className="font-bold text-pink-500 hover:text-pink-600 hover:cursor-pointer">resend the confirmation email.</span></p>
        <p className="text-gray-600 mt-4 text-xs sm:text-sm">Wrong email address? <span className="font-bold text-pink-500 hover:text-pink-600 hover:cursor-pointer">Change it.</span></p>
      </main>
      <footer className="text-gray-600 bg-gray-100 flex flex-col justify-start">
        <div className="py-16 flex md:items-center lg:items-start lg:flex-row md:flex-nowrap flex-wrap flex-col border-b justify-center pl-8">
          <div className="flex flex-col justify-center items-center md:items-start w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left mb-10">
            <span className="text-xl">
              <img src="pinkLogo.png" alt="Brand Logo" className="w-28 mix-blend-darken" />
            </span>
            <p className="mt-2 text-xs text-gray-500 sm:text-sm">
              Dribbble is the world's leading community for creatives to share,
              grow, and get hired.
            </p>
            <div className="flex gap-3 mt-3">
              <FaDribbble className="cursor-pointer" />
              <FaTwitter className="cursor-pointer" />
              <FaFacebookSquare className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
              <FaPinterest className="cursor-pointer" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-center sm:text-left">
            <div className="px-4 mr-4 text-xs sm:text-sm">
              <h2 className="title-font font-bold text-gray-900 tracking-widest mb-3">
                For designers
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-3">
                <li className="cursor-pointer hover:underline">
                  <a className="text-gray-600 hover:text-gray-800">Go Pro!</a>
                </li>
                <li className="cursor-pointer hover:underline">
                  <a className="text-gray-600 hover:text-gray-800">
                    Explore design work
                  </a>
                </li>
                <li className="cursor-pointer hover:underline">
                  <a className="text-gray-600 hover:text-gray-800">Design blog</a>
                </li>
                <li className="cursor-pointer hover:underline">
                  <a className="text-gray-600 hover:text-gray-800">
                    Overtime podcast
                  </a>
                </li>
                <li className="cursor-pointer hover:underline">
                  <a className="text-gray-600 hover:text-gray-800">Playoffs</a>
                </li>
                <li className="cursor-pointer hover:underline">
                  <a className="text-gray-600 hover:text-gray-800">
                    Weekly Warm-Up
                  </a>
                </li>
                <li className="cursor-pointer hover:underline">
                  <a className="text-gray-600 hover:text-gray-800">
                    Refer a Friend
                  </a>
                </li>
                <li className="cursor-pointer hover:underline">
                  <a className="text-gray-600 hover:text-gray-800">
                    Code of conduct
                  </a>
                </li>
              </nav>
            </div>
            <div className="mr-4 text-xs sm:text-sm">
              <div className="px-4">
                <h2 className="title-font font-bold text-gray-900 tracking-widest mb-3">
                  Hire designers
                </h2>
                <nav className="list-none mb-10 flex flex-col gap-3">
                  <li className="cursor-pointer hover:underline">
                    <a className="text-gray-600 hover:text-gray-800">
                      Post a job opening
                    </a>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <a className="text-gray-600 hover:text-gray-800">
                      Post a freelance project
                    </a>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <a className="text-gray-600 hover:text-gray-800">
                      Search for designers
                    </a>
                  </li>
                </nav>
              </div>
              <div className="px-4">
                <h2 className="title-font font-bold text-gray-900 tracking-widest mb-3">
                  Brands
                </h2>
                <nav className="list-none mb-10">
                  <li className="cursor-pointer hover:underline">
                    <a className="text-gray-600 hover:text-gray-800">
                      Advertise with us
                    </a>
                  </li>
                </nav>
              </div>
            </div>
            <div className="px-4 mr-4 text-xs sm:text-sm">
              <h2 className="title-font font-bold text-gray-900 tracking-widest mb-3">
                Company
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-3">
                <li className="cursor-pointer hover:underline">
                  <a className="text-gray-600 hover:text-gray-800">About</a>
                </li>
                <li className="cursor-pointer hover:underline">
                  <a className="text-gray-600 hover:text-gray-800">Careers</a>
                </li>
                <li className="cursor-pointer hover:underline">
                  <a className="text-gray-600 hover:text-gray-800">Support</a>
                </li>
                <li className="cursor-pointer hover:underline">
                  <a className="text-gray-600 hover:text-gray-800">Media kit</a>
                </li>
                <li className="cursor-pointer hover:underline">
                  <a className="text-gray-600 hover:text-gray-800">Testimonials</a>
                </li>
                <li className="cursor-pointer hover:underline">
                  <a className="text-gray-600 hover:text-gray-800">API</a>
                </li>
                <li className="cursor-pointer hover:underline">
                  <a className="text-gray-600 hover:text-gray-800">
                    Terms of service
                  </a>
                </li>
                <li className="cursor-pointer hover:underline">
                  <a className="text-gray-600 hover:text-gray-800">
                    Privacy policy
                  </a>
                </li>
                <li className="cursor-pointer hover:underline">
                  <a className="text-gray-600 hover:text-gray-800">Cookie policy</a>
                </li>
              </nav>
            </div>
            <div className="mr-4 text-xs sm:text-sm">
              <div className="px-4">
                <h2 className="title-font font-bold text-gray-900 tracking-widest mb-3">
                  Directories
                </h2>
                <nav className="list-none mb-10 flex flex-col gap-3">
                  <li className="cursor-pointer hover:underline">
                    <a className="text-gray-600 hover:text-gray-800">Design jobs</a>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <a className="text-gray-600 hover:text-gray-800">
                      Designers for hire
                    </a>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <a className="text-gray-600 hover:text-gray-800">
                      Freelance designers for hire
                    </a>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <a className="text-gray-600 hover:text-gray-800">Tags</a>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <a className="text-gray-600 hover:text-gray-800">Places</a>
                  </li>
                </nav>
              </div>
              <div className="px-4 mr-4">
                <h2 className="title-font font-bold text-gray-900 tracking-widest mb-3">
                  Design assets
                </h2>
                <nav className="list-none mb-10 flex flex-col gap-3">
                  <li className="cursor-pointer hover:underline">
                    <a className="text-gray-600 hover:text-gray-800">
                      Dribbble Marketplace
                    </a>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <a className="text-gray-600 hover:text-gray-800">
                      Creative market
                    </a>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <a className="text-gray-600 hover:text-gray-800">Fontsprint</a>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <a className="text-gray-600 hover:text-gray-800">
                      Font Squirrel
                    </a>
                  </li>
                </nav>
              </div>
            </div>
            <div className="px-4 mr-4 text-xs sm:text-sm">
              <h2 className="title-font font-bold text-gray-900 tracking-widest mb-3">
                Design Resources
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-3">
                <li className="cursor-pointer hover:underline">
                  <a className="text-gray-600 hover:text-gray-800">Freelancing</a>
                </li>
                <li className="cursor-pointer hover:underline">
                  <a className="text-gray-600 hover:text-gray-800">Design Hiring</a>
                </li>
                <li className="cursor-pointer hover:underline">
                  <a className="text-gray-600 hover:text-gray-800">
                    Design Portfolio
                  </a>
                </li>
                <li className="cursor-pointer hover:underline">
                  <a className="text-gray-600 hover:text-gray-800">
                    Design Education
                  </a>
                </li>
                <li className="cursor-pointer hover:underline">
                  <a className="text-gray-600 hover:text-gray-800">
                    Creative Process
                  </a>
                </li>
                <li className="cursor-pointer hover:underline">
                  <a className="text-gray-600 hover:text-gray-800">
                    Design Industry Trends
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="container mx-auto py-4 flex flex-wrap flex-col sm:flex-row justify-between">
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
              © 2023 Dribbble. All rights reserved.
            </p>
            <span className="inline-flex text-xs sm:text-sm sm:ml-auto sm:mt-0 mt-2 justify-center items-center">
              <span className="font-bold">20,501,853</span> &nbsp;shots
              dribbbled <FaDribbble className="ml-2 bg-red-500 rounded-full cursor-pointer" />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
