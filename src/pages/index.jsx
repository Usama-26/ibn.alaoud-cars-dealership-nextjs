import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { GiSpeedometer, GiGearStickPattern, GiRoad } from "react-icons/gi";
import { TbEngine } from "react-icons/tb";
import { Navigation, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Ibn Alaoud - Car Dealership</title>
      </Head>
      <div>
        <div className="container relative mx-auto">
          {/* Navbar */}
          <div className=" w-full py-4 flex items-center justify-between ">
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
        </div>
        {/* Hero Slider */}
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          rewind={true}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="relative h-screen">
              <Image
                src={"/images/cars/2018-BMW-M140i-001-1080.jpg"}
                width={1920}
                height={1080}
                alt="Image"
                className="h-full w-full object-cover"
              />
              <div className="absolute h-full w-full bg-gradient-to-b from-black/30 to-transparent top-0 left-0">
                <div className="container max-w-6xl mx-auto my-48">
                  <div className="max-w-md">
                    <div className="p-4 bg-black/50 font-black font-arial">
                      <h1 className="text-6xl   text-red-600">2018 BMW</h1>
                      <span className="text-gray-100 text-3xl">M140i</span>
                    </div>
                    <div className="mt-4 bg-gray-900/70 font-medium text-sm text-gray-50">
                      <div className="flex justify-between p-4">
                        <div className="flex w-1/2 items-center gap-2 p-2">
                          <span className="rounded-full p-2 bg-gray-100">
                            <TbEngine className="w-8 h-8 stroke-red-600 stroke-1" />
                          </span>
                          <span>3.0L Inline 6 Twin Turbo</span>
                        </div>
                        <div className="flex w-1/2 items-center gap-2 p-2">
                          <span className="rounded-full p-2 bg-gray-100">
                            <GiSpeedometer className="w-8 h-8 fill-red-600 stroke-1" />
                          </span>
                          <span>250 kph / 155 mph</span>
                        </div>
                      </div>
                      <div className="flex justify-between p-4">
                        <div className="flex w-1/2 items-center gap-2 p-2">
                          <span className="rounded-full p-2 bg-gray-100">
                            <GiGearStickPattern className="w-8 h-8 fill-red-600 stroke-1" />
                          </span>
                          <span>Automatic</span>
                        </div>
                        <div className="flex w-1/2 items-center gap-2 p-2">
                          <span className="rounded-full p-2 bg-gray-100">
                            <GiRoad className="w-8 h-8 fill-red-600 stroke-1" />
                          </span>
                          <span>4.4 Seconds</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-screen">
              <Image
                src={
                  "/images/cars/2015-Mitsubishi-Lancer-Evolution-X-Final-Edition-004-1080.jpg"
                }
                width={1920}
                height={1080}
                alt="Image"
                className="h-full w-full object-cover"
              />
              <div className="absolute h-full w-full bg-gradient-to-b from-black/30 to-transparent top-0 left-0">
                <div className="container max-w-6xl mx-auto my-48">
                  <div className="max-w-md">
                    <div className="p-4 bg-black/50 font-black font-arial">
                      <h1 className="text-6xl text-red-600">2015 Mitsubishi</h1>
                      <span className="text-gray-100 text-3xl">
                        Lancer EVO X FE
                      </span>
                    </div>
                    <div className="mt-4 bg-gray-900/70 font-medium text-sm text-gray-50">
                      <div className="flex justify-between p-4">
                        <div className="flex w-1/2 items-center gap-2 p-2">
                          <span className="rounded-full p-2 bg-gray-100">
                            <TbEngine className="w-8 h-8 stroke-red-600 stroke-1" />
                          </span>
                          <span>2.0L Inline 4 Turbo</span>
                        </div>
                        <div className="flex w-1/2 items-center gap-2 p-2">
                          <span className="rounded-full p-2 bg-gray-100">
                            <GiSpeedometer className="w-8 h-8 fill-red-600 stroke-1" />
                          </span>
                          <span>250 kph / 155 mph</span>
                        </div>
                      </div>
                      <div className="flex justify-between p-4">
                        <div className="flex w-1/2 items-center gap-2 p-2">
                          <span className="rounded-full p-2 bg-gray-100">
                            <GiGearStickPattern className="w-8 h-8 fill-red-600 stroke-1" />
                          </span>
                          <span>Automatic</span>
                        </div>
                        <div className="flex w-1/2 items-center gap-2 p-2">
                          <span className="rounded-full p-2 bg-gray-100">
                            <GiRoad className="w-8 h-8 fill-red-600 stroke-1" />
                          </span>
                          <span>6 Seconds</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-screen">
              <Image
                src={"/images/cars/2021-Hyundai-i30-N-001-1080.jpg"}
                width={1920}
                height={1080}
                alt="Image"
                className="h-full w-full object-cover"
              />
              <div className="absolute h-full w-full bg-gradient-to-b from-black/30 to-transparent top-0 left-0">
                <div className="container max-w-6xl mx-auto my-48">
                  <div className="max-w-md">
                    <div className="p-4 bg-black/50 font-black font-arial">
                      <h1 className="text-6xl text-red-600">2021 Hyundai</h1>
                      <span className="text-gray-100 text-3xl">i30 N</span>
                    </div>
                    <div className="mt-4 bg-gray-900/70 font-medium text-sm text-gray-50">
                      <div className="flex justify-between p-4">
                        <div className="flex w-1/2 items-center gap-2 p-2">
                          <span className="rounded-full p-2 bg-gray-100">
                            <TbEngine className="w-8 h-8 stroke-red-600 stroke-1" />
                          </span>
                          <span>2.0L Inline 4 Turbo</span>
                        </div>
                        <div className="flex w-1/2 items-center gap-2 p-2">
                          <span className="rounded-full p-2 bg-gray-100">
                            <GiSpeedometer className="w-8 h-8 fill-red-600 stroke-1" />
                          </span>
                          <span>250 kph / 155 mph</span>
                        </div>
                      </div>
                      <div className="flex justify-between p-4">
                        <div className="flex w-1/2 items-center gap-2 p-2">
                          <span className="rounded-full p-2 bg-gray-100">
                            <GiGearStickPattern className="w-8 h-8 fill-red-600 stroke-1" />
                          </span>
                          <span>Automatic</span>
                        </div>
                        <div className="flex w-1/2 items-center gap-2 p-2">
                          <span className="rounded-full p-2 bg-gray-100">
                            <GiRoad className="w-8 h-8 fill-red-600 stroke-1" />
                          </span>
                          <span>5.9 Seconds</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Services */}
        <div className="w-full flex -translate-y-2 py-4"></div>
        {/* Footer */}
        <footer class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <Link
                href={"/"}
                class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
              >
                <Image
                  src={"/images/logo.png"}
                  width={100}
                  height={50}
                  alt={"Ibn Aloud Logo"}
                />
              </Link>
              <p class="mt-2 text-sm text-gray-500">
                Any questions? Let us know in store at Saham, Sultanate Of Oman
                or call us on{" "}
                <a
                  className="hover:underline underline-offset-2 text-red-600"
                  href="tel:+96871555171"
                >
                  (+968) 71555171
                </a>
              </p>
            </div>
            <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav class="list-none mb-10">
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">First Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                  </li>
                </nav>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav class="list-none mb-10">
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">First Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                  </li>
                </nav>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav class="list-none mb-10">
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">First Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                  </li>
                </nav>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav class="list-none mb-10">
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">First Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div class="bg-gray-100">
            <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p class="text-gray-500 text-sm text-center sm:text-left">
                © 2023 Ibn Aloud — All rights reserved
              </p>
              <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a class="text-gray-500">
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
                <a class="ml-3 text-gray-500">
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
                <a class="ml-3 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
