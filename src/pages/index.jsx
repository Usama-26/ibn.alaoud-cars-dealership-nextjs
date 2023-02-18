import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { Navigation, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Listbox, Transition } from "@headlessui/react";
import { HiChevronUpDown, HiCheck } from "react-icons/hi2";
import {
  GiSpeedometer,
  GiGearStickPattern,
  GiRoad,
  GiCargoShip,
} from "react-icons/gi";
import { BsChatSquareQuote } from "react-icons/bs";
import { TbEngine } from "react-icons/tb";
import { IoMdQuote } from "react-icons/io";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Footer } from "@/components/Footer";
import Card from "@/components/Card";
import carsData from "./../pages/data/cars-data.json";
import CategoryCard from "@/components/CategoryCard";
import { Navbar } from "@/components/Navbar";
const years = [
  { name: "1989" },
  { name: "1990" },
  { name: "1991" },
  { name: "1992" },
  { name: "1993" },
  { name: "1994" },
  { name: "1995" },
  { name: "1996" },
  { name: "1997" },
  { name: "1998" },
  { name: "1999" },
  { name: "2000" },
  { name: "2001" },
  { name: "2002" },
  { name: "2003" },
  { name: "2004" },
  { name: "2005" },
  { name: "2006" },
  { name: "2007" },
  { name: "2008" },
  { name: "2009" },
  { name: "2010" },
  { name: "2011" },
  { name: "2012" },
  { name: "2013" },
  { name: "2014" },
  { name: "2015" },
  { name: "2016" },
  { name: "2017" },
  { name: "2018" },
  { name: "2019" },
  { name: "2020" },
  { name: "2021" },
  { name: "2022" },
  { name: "2023" },
];

const brands = [
  { name: "Acura" },
  { name: "Alpha Romeo" },
  { name: "Alpine" },
  { name: "Apollo" },
  { name: "Aston Martin" },
  { name: "Audi" },
  { name: "Bentley" },
  { name: "BMW" },
  { name: "Bugatti" },
  { name: "Cadillac" },
  { name: "Chevrolet" },
  { name: "Citroen" },
  { name: "Chrysler" },
  { name: "Dodge" },
  { name: "DS" },
  { name: "Ferrari" },
  { name: "Fiat" },
  { name: "Ford" },
  { name: "Genesis" },
  { name: "GMC" },
  { name: "Gordon Murray" },
  { name: "Hennessey" },
  { name: "Holden" },
  { name: "Honda" },
  { name: "HSV" },
  { name: "Hyundai" },
  { name: "Infiniti" },
  { name: "Jaguar" },
  { name: "Jeep" },
  { name: "Kia" },
  { name: "Lamborghini" },
  { name: "Lancia" },
  { name: "Land Rover" },
  { name: "Lexus" },
  { name: "Lincoln" },
  { name: "Lotus" },
  { name: "Lucid" },
  { name: "Maserati" },
  { name: "Mazda" },
  { name: "McLaren" },
  { name: "Mercedes-Benz" },
  { name: "MG" },
  { name: "Mitsubishi" },
  { name: "Nissan" },
  { name: "Noble" },
  { name: "Opel" },
  { name: "Peugeot" },
  { name: "Polestar" },
  { name: "Porsche" },
  { name: "Radical" },
  { name: "Renault" },
  { name: "Rezvani" },
  { name: "Rimac" },
  { name: "Rolls-Royce" },
  { name: "Saleen" },
  { name: "SCG" },
  { name: "Scion" },
  { name: "Seat" },
  { name: "Shelby" },
  { name: "Singer" },
  { name: "SSC" },
  { name: "Subaru" },
  { name: "Suzuki" },
  { name: "Tesla" },
  { name: "TVR" },
  { name: "Toyota" },
  { name: "Ultima" },
  { name: "VinFast" },
  { name: "Volkswagon" },
  { name: "Volvo" },
  { name: "Wiesmann" },
  { name: "W Motors" },
  { name: "Zenvo" },
];

const colors = [
  { name: "red" },
  { name: "blue" },
  { name: "black" },
  { name: "gray" },
  { name: "cyan" },
  { name: "silver" },
  { name: "yellow" },
  { name: "fuchsia" },
  { name: "magenta" },
  { name: "white" },
];

const categories = [
  { name: "Coupe", photo: "coupe" },
  { name: "Hatchback", photo: "hatchback" },
  { name: "CUV", photo: "cuv" },
  { name: "Pickup", photo: "pickup" },
  { name: "Sedan", photo: "sedan" },
  { name: "Convertible", photo: "convertible" },
  { name: "SUV", photo: "suv" },
  { name: "Sport", photo: "sport" },
];
export default function Home() {
  const router = useRouter();
  console.log(carsData);
  const [releaseYear, setReleaseYear] = useState(years[years.length - 1]);
  const [brand, setBrand] = useState(brands[0]);
  const [color, setColor] = useState(colors[0]);
  return (
    <>
      <Head>
        <title>Ibn Alaoud - Car Dealership</title>
      </Head>
      <div>
        <div className="relative mx-auto">
          {/* Navbar */}
          <Navbar />
          {/* Hero Slider */}
          <div className="relative 2xl:container mx-auto">
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
                <div className="relative max-h-[700px]">
                  <Image
                    src={"/images/cars/2018-BMW-M140i-001-1080.jpg"}
                    width={1920}
                    height={1080}
                    alt="Image"
                    className="h-full w-full object-cover zoom-in"
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
                              <span>4.4</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative max-h-[700px]">
                  <Image
                    src={
                      "/images/cars/2015-Mitsubishi-Lancer-Evolution-X-Final-Edition-004-1080.jpg"
                    }
                    width={1920}
                    height={1080}
                    alt="Image"
                    className="h-full w-full object-cover zoom-in"
                  />
                  <div className="absolute h-full w-full bg-gradient-to-b from-black/30 to-transparent top-0 left-0">
                    <div className="container max-w-6xl mx-auto my-48">
                      <div className="max-w-md">
                        <div className="p-4 bg-black/50 font-black font-arial">
                          <h1 className="text-6xl text-red-600">
                            2015 Mitsubishi
                          </h1>
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
                              <span>6</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative max-h-[700px]">
                  <Image
                    src={"/images/cars/2021-Hyundai-i30-N-001-1080.jpg"}
                    width={1920}
                    height={1080}
                    alt="Image"
                    className="h-full w-full object-cover zoom-in"
                  />
                  <div className="absolute h-full w-full bg-gradient-to-b from-black/30 to-transparent top-0 left-0">
                    <div className="container max-w-6xl mx-auto my-48">
                      <div className="max-w-md">
                        <div className="p-4 bg-black/50 font-black font-arial">
                          <h1 className="text-6xl text-red-600">
                            2021 Hyundai
                          </h1>
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
                              <span>5.9</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* Car Search Section */}
            <div className="absolute clipped top-0 right-0 z-10 w-1/2 h-full bg-red-700/90">
              <h1 className="text-2xl text-center capitalize mt-20 ml-10 p-4 bg-white text-red-700">
                {"Let's find your dream car"}
              </h1>
              <div className=" w-1/2 mx-auto mt-8 border-white p-4">
                {/* Release Year Select */}
                <div className="my-4 max-w-sm mx-auto">
                  <label htmlFor="year" className="text-white">
                    Year
                  </label>
                  <Listbox value={releaseYear} onChange={setReleaseYear}>
                    <div className="relative mt-1">
                      <Listbox.Button
                        id="year"
                        className="relative z-10  w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-red-300 sm:text-sm"
                      >
                        <span className="block truncate">
                          {releaseYear.name}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <HiChevronUpDown
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-5"
                      >
                        <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {years.map((year, yearIdx) => (
                            <Listbox.Option
                              key={yearIdx}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-red-100 text-red-900"
                                    : "text-gray-900"
                                }`
                              }
                              value={year}
                            >
                              {({ releaseYear }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      releaseYear
                                        ? "font-medium"
                                        : "font-normal"
                                    }`}
                                  >
                                    {year.name}
                                  </span>
                                  {releaseYear ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-red-600">
                                      <HiCheck
                                        className="h-5 w-5 stroke-red-600"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>

                {/* Brand Select */}
                <div className="my-4 max-w-sm mx-auto">
                  <label htmlFor="brand" className="text-white">
                    Brand
                  </label>
                  <Listbox value={brand} onChange={setBrand}>
                    <div className="relative mt-1">
                      <Listbox.Button
                        id="brand"
                        className="relative z-10  w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-red-300 sm:text-sm"
                      >
                        <span className="block truncate">{brand.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <HiChevronUpDown
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-5"
                      >
                        <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {brands.map((el, brandIdx) => (
                            <Listbox.Option
                              key={brandIdx}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-red-100 text-red-900"
                                    : "text-gray-900"
                                }`
                              }
                              value={el}
                            >
                              {({ brand }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      brand ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {el.name}
                                  </span>
                                  {brand ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-red-600">
                                      <HiCheck
                                        className="h-5 w-5 stroke-red-600"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>

                {/* Color Select */}
                <div className="my-4 max-w-sm mx-auto">
                  <label htmlFor="color" className="text-white">
                    Color
                  </label>
                  <Listbox value={color} onChange={setColor}>
                    <div className="relative mt-1">
                      <Listbox.Button
                        id="brand"
                        className="relative z-10  w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-red-300 sm:text-sm"
                      >
                        <span className="block truncate capitalize">
                          {color.name}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <HiChevronUpDown
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-5"
                      >
                        <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base capitalize shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {colors.map((el, colorIdx) => (
                            <Listbox.Option
                              key={colorIdx}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-red-100 text-red-900"
                                    : "text-gray-900"
                                }`
                              }
                              value={el}
                            >
                              {({ color }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      color ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {el.name}
                                  </span>
                                  {color ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-red-600">
                                      <HiCheck
                                        className="h-5 w-5 stroke-red-600"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
                <div className="m-4 max-w-xs mx-auto">
                  <button className="w-1/2 font-bold btn border-none focus:outline-white/50 hover:bg-red-200/90 py-4 uppercase text-red-600 rounded-md bg-white">
                    find vehicle
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Services */}
          <div className="text-center py-20">
            <h1 className="text-4xl font-light text-gray-700">
              Services We Offer
            </h1>
            <p className="my-4">Services with excellence is our top priority</p>
            <span className="dashes inline-block h-[1px] w-10 bg-red-600"></span>
          </div>
          <div className="max-w-6xl mx-auto shadow-[0px_0px_5px_1px_rgb(0,0,0)] shadow-gray-300 flex bg-gray-100">
            <div className="w-1/4 text-gray-700 transition duration-200 hover:shadow-md hover:scale-110 px-8 py-16 bg-gray-50">
              <div className="py-4">
                <Image
                  src={"/images/icons/icons8-car-rental-64.png"}
                  width={64}
                  height={64}
                  alt="Car Sale"
                />
              </div>
              <h1 className="font-bold text-xl my-4">Sale Cars</h1>
              <p className=" leading-7">
                We have special team to help you to buy or sale your car.
              </p>
            </div>
            <div className="w-1/4 text-gray-700 transition duration-200 hover:shadow-md hover:scale-110 px-8 py-16 bg-gray-100">
              <div className="py-4">
                <GiCargoShip className="w-16 h-16 fill-gray-600" />
              </div>
              <h1 className="font-bold text-xl my-4">Cars Shipping</h1>
              <p className=" leading-7">
                We provide free account to access to the USA auction and we will
                manage all you shipment to you door to door
              </p>
            </div>

            <div className="w-1/4 text-gray-700 transition duration-200 hover:shadow-md hover:scale-110 px-8 py-16 bg-gray-50">
              <div className="py-4">
                <Image
                  src={"/images/icons/icons8-maintenance-64.png"}
                  width={64}
                  height={64}
                  alt="Car Maintenance"
                />
              </div>
              <h1 className="font-bold text-xl my-4">Car Maintenance</h1>
              <p className=" leading-7">
                We have a dedicated car repair and maintenance team
              </p>
            </div>
            <div className="w-1/4 text-gray-700 transition duration-200 hover:shadow-md hover:scale-110 px-8 py-16 bg-gray-100">
              <div className="py-4">
                <Image
                  src={"/images/icons/icons8-customer-support-64.png"}
                  width={64}
                  height={64}
                  alt="Customer Support"
                />
              </div>
              <h1 className="font-bold text-xl my-4">24/7 Support</h1>
              <p className=" leading-7">
                Support team in all section ( Sale cars, Shipping, Spare parts,
                Car Glass and Maintenance )
              </p>
            </div>
          </div>

          {/* Categories */}
          <div className="text-center py-20">
            <h1 className="text-4xl font-light text-gray-700">
              Search by Categories
            </h1>
            <p className="my-4">Search your favourite car of specific style</p>
            <span className="dashes inline-block h-[1px] w-10 bg-red-600"></span>
          </div>
          <div className="container max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-4 md:gap-2">
              {categories.map((el, elIdx) => (
                <Link key={elIdx} href={"/"}>
                  <CategoryCard category={el} />
                </Link>
              ))}
            </div>
          </div>
          {/* Top Vehicles */}
          <div className="text-center py-20">
            <h1 className="text-4xl font-light text-gray-700">Top Vehicles</h1>
            <p className="my-4">Featured Vehicles Suggested by Dealers</p>

            <span className="dashes inline-block h-[1px] w-10 bg-red-600"></span>
          </div>
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-2">
              {carsData.map((el, elIdx) => (
                <Link key={elIdx} href="/">
                  <Card car={el} />
                </Link>
              ))}
            </div>
          </div>
          {/* Customer Feedback */}
          <div className=" relative feedback-background my-20">
            <div className="text-center py-10">
              <h1 className="text-4xl font-light text-gray-700">
                Customer Feedback
              </h1>
              <p className="my-4">
                {"Here's what our customers have to say about us"}
              </p>

              <span className="dashes inline-block h-[1px] w-10 bg-red-600"></span>
            </div>
            <IoMdQuote className="w-24 h-24 absolute-center fill-red-600/20" />
            <Swiper
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              grabCursor
            >
              <SwiperSlide>
                {" "}
                <div className="review max-w-5xl mx-auto pb-10 text-gray-600">
                  <p className="max-w-xl mx-auto text-center tracking-wide  italic">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Minima rem consequatur natus ipsam vitae voluptas incidunt
                    expedita, nesciunt quae, cum aliquam in quibusdam, nemo
                    optio?
                  </p>
                  <h1 className="font-bold text-2xl text-center my-4 ">
                    <span className="border-y py-2">Jenny Shoobert</span>
                  </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="review max-w-5xl mx-auto pb-10 text-gray-600">
                  <p className="max-w-xl mx-auto text-center tracking-wide  italic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit numquam ut illo, doloremque accusamus natus dolorem
                    quisquam at labore corrupti et harum! Ratione sunt iste
                    voluptatibus quis error illo labore veniam, voluptatum harum
                    at debitis, doloremque earum temporibus totam consequuntur
                    dolores aliquid voluptate sit in necessitatibus, enim
                    deleniti.
                  </p>
                  <h1 className="font-bold text-2xl text-center my-4 ">
                    <span className="border-y py-2">Andrew Woodman</span>
                  </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="review max-w-5xl mx-auto pb-10 text-gray-600">
                  <p className="max-w-xl mx-auto text-center tracking-wide  italic">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sequi tempore suscipit nostrum enim fugiat ad ea iure
                    aspernatur ducimus libero aliquam accusantium dolore, optio
                    voluptatum deleniti reiciendis nihil qui assumenda illum.
                    Sed repellendus eius suscipit.
                  </p>
                  <h1 className="font-bold text-2xl text-center my-4 ">
                    <span className="border-y py-2">Elijah Sommervile</span>
                  </h1>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}
