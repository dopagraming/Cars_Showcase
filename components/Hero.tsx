"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 padding-x">
        <h1 className="hero_title">
          Find, book, or rent a car - quickly and easily!
        </h1>
        <p className="hero_subtitle ">
          streamline your car rental experience with our efftortless booking
          process
        </p>
        <CustomButton
          title={"Expolore Cars"}
          styles={"bg-primary-blue px-2 py-1 rounded-full text-white mt-10"}
          handleClick={handleScroll}
        />
      </div>
      <div className="hero-image-container">
        <div className="hero-image">
          <Image
            src="/images/hero.png"
            alt="hero"
            className="object-contain"
            fill
          />
        </div>
        <img src="./images/hero-bg.png" className="hero-image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
