import Image from "next/image";
import {
  GiCard2Diamonds,
  GiFuelTank,
  GiGasPump,
  GiGearStick,
  GiGearStickPattern,
  GiRoad,
  GiSpeedometer,
  GiSteeringWheel,
} from "react-icons/gi";
import { TbCar, TbEngine, TbRoad, TbRoadOff } from "react-icons/tb";
import { IoCarSportSharp } from "react-icons/io5";

export default function Card({ car }) {
  return (
    <div className=" card shadow-md hover:shadow-lg transition duration-100">
      <div class="block relative rounded overflow-hidden cursor-pointer ">
        <Image
          alt="ecommerce"
          className="object-cover object-center w-full h-full transition duration-300 ease-in-out "
          src={`/images/cars/${car.gallery[0]}.jpg`}
          width={1920}
          height={1080}
        />
        <div className="bg-red-600 rounded-tl-xl w-1/4 py-4 px-2 text-center absolute bottom-0 right-0 text-white">
          <span className="font-bold">${car.price}</span>
        </div>
      </div>
      <div class="m-4">
        <h3 class="text-red-600 text-sm tracking-widest uppercase mb-1">
          {car.make}{" "}
        </h3>
        <h2 class="text-gray-900 title-font text-xl font-bold">
          {car.year} {car.model}
        </h2>
      </div>
      <div className="border-t p-4">
        <table className="w-full">
          <tbody>
            <tr className="flex items-center my-2">
              <td className="flex w-1/3 gap-2 items-center">
                <TbEngine className="w-8 h-8 stroke-1 stroke-gray-500 fill-gray-500" />
                <span className="text-xs w-full text-gray-500">
                  {car.engine}
                </span>
              </td>
              <td className="flex w-1/3 gap-2 items-center">
                <GiGasPump className="w-8 h-8 stroke-1 stroke-gray-500 fill-gray-500" />
                <span className="text-xs w-full text-gray-500">{car.fuel}</span>
              </td>
              <td className="flex w-1/3 gap-2 items-center">
                <GiGearStickPattern className="w-8 h-8 stroke-1 stroke-gray-500 fill-gray-500" />
                <span className="text-xs w-full text-gray-500">
                  {car.transmission}
                </span>
              </td>
            </tr>
            <tr className="flex items-center">
              <td className="flex w-1/3 gap-2 items-center">
                <TbRoad className="w-8 h-8 stroke-2 stroke-gray-500 fill-gray-500" />
                <span className="text-xs w-full text-gray-500">
                  {car.mileage}
                </span>
              </td>
              <td className="flex w-1/3 gap-2 items-center">
                <GiSpeedometer className="w-8 h-8 stroke-1 stroke-gray-500 fill-gray-500" />
                <span className="text-xs w-full text-gray-500">
                  {car.topSpeed}
                </span>
              </td>
              <td className="flex w-1/3 gap-2 items-center">
                <IoCarSportSharp className="w-8 h-8 stroke-1 stroke-gray-500 fill-gray-500" />
                <span className="text-xs w-full capitalize text-gray-500">
                  {car.type}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
