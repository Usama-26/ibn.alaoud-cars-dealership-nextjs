import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
export function Navbar({}) {
  const router = useRouter();
  return (
    <div className="container mx-auto w-full py-4 flex items-center justify-between ">
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
          <li className="hover:text-red-600">
            <Link
              href={"/"}
              className={`transition ${
                router.pathname === "/inventory" ? "active" : ""
              }`}
            >
              inventory
            </Link>
          </li>
          <li className="hover:text-red-600">
            <Link
              href={"/"}
              className={`transition ${
                router.pathname === "/auctions" ? "active" : ""
              }`}
            >
              auctions
            </Link>
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
