"use client";
import React, { useState } from "react";
import { CarProps } from "../Types/index";
import { calculateCarRent } from "../utils/index";
import CustomButton from "./CustomButton";
import CarDeatiles from "./CarDeatiles";
import Image from "next/image";
interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const [open, setOpen] = useState(false);
  const carRent = calculateCarRent(car.city_mpg, car.year);
  return (
    <div className="car-card">
      <div className="car-card__content">
        <div className="car-card__content-title">
          <h2>
            {car.make} {car.model}
          </h2>
        </div>
        <p className="flex mt-6 text-[32px] font-semibold">
          <span className="self-start font-semibold text-[14px]">$</span>
          {carRent}
          <span className="self-end font-medium text-[14px]">/day</span>
        </p>
      </div>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/images/hero.png"
          fill
          alt="car model"
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-7">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/images/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">
              {car.transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/images/tire.svg"
              width={20}
              height={20}
              alt="steering tire"
            />
            <p className="text-[14px]">{car.drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/images/gas.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">{car.city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="view more"
            styles="w-full py-[16px] bg-primary-blue rounded-full"
            textStyles="text-white text-[14px] font-bold leading-[17px]"
            handleClick={() => setOpen(true)}
            rightIcon="/images/right-arrow.svg"
          />
        </div>
        <CarDeatiles car={car} open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default CarCard;
