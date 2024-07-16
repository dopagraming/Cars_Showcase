import React from "react";
import CustomButton from "./CustomButton";

const Header = () => {
  return (
    <header className="flex justify-between items-center m-4">
      <div>
        <img src="./images/logo.svg" alt="logo" className="w-[150px]" />
      </div>
      <CustomButton title="Sign in" styles={``} />
    </header>
  );
};

export default Header;
