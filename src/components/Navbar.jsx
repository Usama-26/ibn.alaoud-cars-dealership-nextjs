import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { HiBars3BottomRight } from "react-icons/hi2";
export function Navbar({}) {
  const router = useRouter();
  return (
    <div className=" sticky top-0 z-30 bg-white px-10 mx-auto py-4 flex items-center justify-between ">
      {/* Logo Section */}
      <div>
        <Image
          src={"/images/logo.png"}
          width={100}
          height={50}
          alt={"Ibn Aloud Logo"}
        />
      </div>

      {/* Links Section */}
      <div>
        <ul className="nav-list flex gap-4 font-medium capitalize text-gray-900">
          <li className="hover:text-red-600">
            <Link
              href={"/"}
              className={`transition ${
                router.pathname === "/" ? "active" : ""
              }`}
            >
              home
            </Link>
          </li>
          <li>
            <div className="dropdown dropdown-hover">
              <label
                tabIndex={0}
                className="inline-flex gap-1 items-center hover:text-red-600"
              >
                {" "}
                <span>Inventory</span>{" "}
                <BsChevronDown className="h-3 w-3 stroke-1" />{" "}
              </label>
              <div tabIndex={0} className="dropdown-content menu  w-52">
                <ul className="bg-white mt-7 shadow font-light">
                  <li className="hover:bg-red-600 hover:text-white">
                    <Link href="/vehicleFinder">Vehicle Finder</Link>
                  </li>
                  <li className="hover:bg-red-600 hover:text-white">
                    <Link href="/forSale">Car For Sale</Link>
                  </li>
                  <li className="hover:bg-red-600 hover:text-white">
                    <Link href="/sold">Sold Cars</Link>
                  </li>
                  <li className="hover:bg-red-600 hover:text-white">
                    <Link href="/parts">Spare Parts</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown dropdown-hover">
              <label
                tabIndex={0}
                className="inline-flex gap-1 items-center hover:text-red-600"
              >
                {" "}
                <span>Auctions</span>{" "}
                <BsChevronDown className="h-3 w-3 stroke-1" />{" "}
              </label>
              <div tabIndex={0} className="dropdown-content menu w-52">
                <ul className="bg-white mt-7 shadow font-light">
                  <li className="hover:bg-red-600 hover:text-white">
                    <Link href="/liveAuctions">Live Auctions</Link>
                  </li>
                  <li className="hover:bg-red-600 hover:text-white">
                    <Link href="/auctionCalendar">Auction Calendar</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown dropdown-hover">
              <label
                tabIndex={0}
                className="inline-flex gap-1 items-center hover:text-red-600"
              >
                {" "}
                <span>Pages</span>{" "}
                <BsChevronDown className="h-3 w-3 stroke-1" />{" "}
              </label>
              <div tabIndex={0} className="dropdown-content menu w-52">
                <ul className="bg-white mt-7 shadow font-light">
                  <li className="hover:bg-red-600 hover:text-white">
                    <Link href="/liveAuctions">Support</Link>
                  </li>
                  <li className="hover:bg-red-600 hover:text-white">
                    <Link href="/auctionCalendar">Blog</Link>
                  </li>
                  <li className="hover:bg-red-600 hover:text-white">
                    <Link href="/auctionCalendar">Shipment</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="hover:text-red-600">
            <Link
              href={"/"}
              className={`transition ${
                router.pathname === "/about" ? "active" : ""
              }`}
            >
              about
            </Link>
          </li>
          <li className="hover:text-red-600">
            <Link
              href={"/"}
              className={`transition ${
                router.pathname === "/contact" ? "active" : ""
              }`}
            >
              contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Side Panel Button */}
      <div>
        <button>
          <HiBars3BottomRight className="transition w-8 h-8 hover:fill-red-600 fill-gray-900" />
        </button>
      </div>
    </div>
  );
}
