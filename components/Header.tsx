"use client";
import React, { useEffect } from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase";
const Header = () => {
  const user = useAppSelector((state) => state.user.user);
  const router = useRouter();
  const handleSignOut = () => {
    auth.signOut();
  };
  return (
    <header className="flex justify-between items-center m-4">
      <div className="flex items-center">
        <Image
          src="/images/logo.svg"
          width={20}
          height={20}
          alt="logo"
          className="w-[150px]"
        />
      </div>
      <div>
        {user !== null ? (
          <div className="flex items-center">
            <img
              src={user?.photoURL}
              width={20}
              height={20}
              alt="user img"
              className="w-[40px] h-[40px] object-contain rounded-full me-3"
            />
            <CustomButton
              title="Logout"
              styles={"bg-primary-blue px-2 py-1 rounded-full text-white"}
              handleClick={handleSignOut}
            />
          </div>
        ) : (
          <CustomButton
            title="Login"
            styles={"bg-primary-blue px-2 py-1 rounded-full text-white"}
            handleClick={() => router.push("/login")}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
