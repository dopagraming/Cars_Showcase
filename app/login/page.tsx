"use client";
import CustomButton from "@/components/CustomButton";
import React, { useState } from "react";
import { auth } from "@/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { setUser } from "@/rtk/features/user/user";
import { useAppDispatch } from "../../rtk/hooks";
const page = () => {
  const dispatch = useAppDispatch();
  const provider = new GoogleAuthProvider();
  const router = useRouter();
  const login = (e: any) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  const loginWithGoogle = (e: any) => {
    signInWithPopup(auth, provider).then((result) => {
      const credential: any = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      const payload = {
        userName: user.displayName,
        userEmail: user.email,
        userImg: user.photoURL,
      };
      dispatch(setUser(payload));
      router.push("/");
    });
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <form className="max-w-sm mx-auto bg-neutral-100 p-3 rounded-md">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="name@flowbite.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <CustomButton
          title="Login"
          btnType="submit"
          styles="mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          handleClick={(e) => login(e)}
        />
        <hr className="my-5" />
        <button
          onClick={(e) => loginWithGoogle(e)}
          className="flex items-center border border-blue-500 rounded-full py-1 px-4 mx-auto"
        >
          <Image
            src="/images/google.png"
            width={20}
            height={20}
            alt="google icon"
          />{" "}
          <span className="ms-3">Login With Google</span>
        </button>
      </form>
    </>
  );
};

export default page;
