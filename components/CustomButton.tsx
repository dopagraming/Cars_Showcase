"use client";
import React from "react";
import { CustomButtonProps } from "../Types/index";
import Image from "next/image";
const CustomButton = ({
  title,
  styles,
  handleClick,
  textStyles,
  rightIcon,
  btnType,
}: CustomButtonProps) => {
  return (
    <button
      type={btnType}
      className={`custom-btn ${styles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            fill
            alt="arrow-icon"
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
