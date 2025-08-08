import React, { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [data, setData] = useState()
  const navigate = useNavigate();
  console.log(data)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  console.log(menuOpen)
  return (
    <div className="border-b-2 fixed z-50 top-0 w-full bg-white ">
      <div className="max-w-screen-xl mx-auto px-4 py-3 md:px-6">
        <div className="flex justify-between gap-x-2">
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="flex flex-col items-center justify-center gap-1.5 h-10 w-10 hover:bg-gray-100 active:bg-gray-200 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs font-semibold text-gray-500 hidden">
                Menu
              </span>
            </button>
          </div>

          <div className="hidden md:flex flex-1 justify-center gap-8 ">
            <span
              className="cursor-pointer hover:text-red-500 text-lg"
              onClick={() => navigate("/")}
            >
              Home
            </span>
            <span
              className="cursor-pointer hover:text-red-500 text-lg"
              onClick={() => navigate("/error")}
            >
              Contact
            </span>
            <span className="cursor-pointer hover:text-red-500 text-lg"
              onClick={() => navigate("/error")}>
              About
            </span>
            <span
              className="cursor-pointer hover:text-red-500 text-lg"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="px-4 py-2 text-sm bg-gray-100 rounded-md outline-none w-full sm:w-56 md:w-64"
              />
            </div>
            <div className="flex items-center gap-2">
              <IoIosHeartEmpty className="text-2xl cursor-pointer hover:text-red-500"
                onClick={() => navigate("/wishlist")} />
              <IoCartOutline
                className="text-2xl cursor-pointer hover:text-red-500"
                onClick={() => navigate("/cart")}
              />
              <CgProfile
                className="text-2xl cursor-pointer hover:text-red-500"
                onClick={() => navigate("/profile")}
              />
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="mt-3 space-y-4 md:hidden transition duration-300 ease-linear ">
            <span
              className="block cursor-pointer hover:text-red-500 text-lg"
              onClick={() => {
                navigate("/");
                setMenuOpen(false);
              }}
            >
              Home
            </span>
            <span
              className="block cursor-pointer hover:text-red-500 text-lg"
              onClick={() => navigate("/error")}
            >
              Contact
            </span>
            <span
              className="block cursor-pointer hover:text-red-500 text-lg"
              onClick={() => navigate("/error")}
            >
              About
            </span>
            <span
              className="block cursor-pointer hover:text-red-500 text-lg"
              onClick={() => {
                navigate("/signin");
                setMenuOpen(false);
              }}
            >
              Sign Up
            </span>
          </div>
        )}
      </div>
    </div>
  );
}