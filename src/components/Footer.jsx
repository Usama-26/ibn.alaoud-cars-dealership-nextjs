import Image from "next/image";
import Link from "next/link";
import React from "react";
export function Footer({}) {
  return (
    <footer className="text-gray-600">
      <div className="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link
            href={"/"}
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <Image
              src={"/images/logo.png"}
              width={100}
              height={50}
              alt={"Ibn Aloud Logo"}
            />
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            Any questions? Let us know in store at Saham, Sultanate Of Oman or
            call us on{" "}
            <a
              className="hover:underline underline-offset-2 text-red-600"
              href="tel:+96871555171"
            >
              (+968) 71555171
            </a>
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Services
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 transition duration-200 hover:text-red-600 cursor-pointer">
                  Vehicle Finder
                </a>
              </li>
              <li>
                <a className="text-gray-600 transition duration-200 hover:text-red-600 cursor-pointer">
                  For Sale
                </a>
              </li>
              <li>
                <a className="text-gray-600 transition duration-200 hover:text-red-600 cursor-pointer">
                  Spare Parts
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Pages
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 transition duration-200 hover:text-red-600 cursor-pointer">
                  Blog
                </a>
              </li>

              <li>
                <a className="text-gray-600 transition duration-200 hover:text-red-600 cursor-pointer">
                  Support
                </a>
              </li>
              <li>
                <a className="text-gray-600 transition duration-200 hover:text-red-600 cursor-pointer">
                  Track Shipment
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Quick Links
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 transition duration-200 hover:text-red-600 cursor-pointer">
                  Live Auctions
                </a>
              </li>

              <li>
                <a className="text-gray-600 transition duration-200 hover:text-red-600 cursor-pointer">
                  Contact
                </a>
              </li>
              <li>
                <a className="text-gray-600 transition duration-200 hover:text-red-600 cursor-pointer">
                  About
                </a>
              </li>
            </nav>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
            SUBSCRIBE
          </h2>
          <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
              <label
                htmlFor="footer-field"
                class="leading-7 text-sm text-gray-600"
              >
                Your Email Address
              </label>
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-red-200 focus:border-red-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 btn rounded">
              Subscribe
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
            Subscribe to our monthly newsletter
            <br className="lg:block hidden" />
          </p>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2023 Ibn Alaoud — All rights reserved
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
