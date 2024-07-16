import Image from "next/image";
import React from "react";
import { CarProps } from "@/Types";
interface carDeatilesProrps {
  car: CarProps;
  open: boolean;
  setOpen: (open: boolean) => void;
}
const CarDeatiles = ({ car, open, setOpen }: carDeatilesProrps) => {
  return (
    <>
      {open && (
        <div className="fixed bg-black bg-opacity-50 left-0 top-0 h-full w-full z-30">
          <div className="bg-white w-[80%] h-[80%] p-3 pb-5 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] overflow-y-scroll">
            <div className="flex flex-1 flex-col gap-3">
              <div className="bg-pattern w-full h-40 rounded-lg relative ">
                <div
                  className="w-[30px] h-[30px]  absolute z-50 right-2 top-2 bg-white rounded-full cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  <Image
                    src="/images/close.svg"
                    alt="close"
                    fill
                    className="p-1"
                  />
                </div>
                <Image
                  src="/images/hero.png"
                  className="object-contain p-2"
                  alt="car-img"
                  fill
                />
              </div>
              <div className="grid grid-cols-3 gap-3 relative">
                <div className="w-full">
                  <img
                    src="/images/hero.png"
                    alt="car-img"
                    className="object-contain"
                  />
                </div>
                <div className="w-full">
                  <img
                    src="/images/hero.png"
                    alt="car-img"
                    className="object-contain"
                  />
                </div>
                <div className="w-full">
                  <img
                    src="/images/hero.png"
                    alt="car-img"
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <p>city mpg</p>
                <span>{car.city_mpg}</span>
              </div>
              <div className="flex justify-between">
                <p>cylinders</p>
                <span>{car.cylinders}</span>
              </div>
              <div className="flex justify-between">
                <p>displacement</p>
                <span>{car.displacement}</span>
              </div>
              <div className="flex justify-between">
                <p>drive</p>
                <span>{car.drive}</span>
              </div>
              <div className="flex justify-between">
                <p>make</p>
                <span>{car.make}</span>
              </div>
              <div className="flex justify-between">
                <p>model</p>
                <span>{car.model}</span>
              </div>
              <div className="flex justify-between">
                <p>transmission</p>
                <span>{car.transmission}</span>
              </div>
              <div className="flex justify-between">
                <p>year</p>
                <span>{car.year}</span>
              </div>
              <div className="flex justify-between">
                <p>fuel_type</p>
                <span>{car.fuel_type}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CarDeatiles;
