import React from "react";
import { VscSend } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer class="body-font bg-black w-full md:ml-0 ml-2">
      <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <span class="ml-3 text-xl mt-8">Subscribe</span>
          </a>
          <p class="mt-4 ml-3 text-sm text-white">
            Get 10% off your first order
          </p>
          <div className="ml-3 mt-4">
            <div>
              <input type="text" placeholder="Enter Your email" className="bg-black border text-sm ps-4 py-1.5" />
            </div>
            <div className="absolute md:ms-40 ms-60">
              <VscSend className="text-white -mt-6" />
            </div>
          </div>
        </div>
        <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left md:-ml-20 text-center">
          <div class="lg:w-1/4 md:w-1/2 px-4 mx-auto">
            <h2 class="title-font font-medium text-white tracking-widest  mb-5">
              <span class="text-xl">Support</span>
            </h2>
            <nav class="list-none mb-10">
              <p class=" text-white mt-3 ">
                111 Bijoy sarani,Delhi,1515,india.
              </p>
              <p class=" text-white mt-3">jynos@gmail.com</p>
              <p class=" text-white mt-3 ">+91-88888-9999</p>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-white tracking-widest  mb-5">
              <span class="text-xl"> Account</span>
            </h2>
            <nav class="list-none mb-10">
              <p class=" text-white mt-3 cursor-pointer hover:text-red-600" onClick={() => navigate('/profile')}>My Account</p>
              <p class=" text-white mt-3 cursor-pointer hover:text-red-600" onClick={() => navigate('/login')}>Login / Register</p>
              <p class=" text-white mt-3 cursor-pointer hover:text-red-600" onClick={() => navigate('/cart')}>Cart</p>
              <p class=" text-white mt-3 cursor-pointer hover:text-red-600" onClick={() => navigate('/wishlist')}>Wishlist</p>
              <p class=" text-white mt-3 cursor-pointer hover:text-red-600">Shop</p>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-white tracking-widest mb-5">
              <span class="text-xl">Quick Link</span>
            </h2>
            <nav class="list-none mb-10">
              <p class=" text-white mt-3 cursor-pointer hover:text-red-600">Privacy Policy</p>
              <p class=" text-white mt-3 cursor-pointer hover:text-red-600">Terms of use</p>
              <p class=" text-white mt-3 cursor-pointer hover:text-red-600">FAQ</p>
              <p class=" text-white mt-3 cursor-pointer hover:text-red-600" onClick={() => navigate('/contact')}>Contact</p>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 px-4 mx-auto">
            <h2 class="title-font font-medium  text-white tracking-widest mb-5">
              <span class="text-xl">Download App</span>
            </h2>
            <nav class="list-none mb-10">
              <p class=" text-white mt-3 text-sm whitespace-wrap">
                save $3 with App New User Only
              </p>
            </nav>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start gap-5">
              <a class="text-white hover:text-blue-800">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-white hover:text-blue-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-white hover:text-pink-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3 text-white hover:text-blue-900">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div>
      </div>
    </footer>
  );
}

export default Footer;