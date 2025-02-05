import React from "react";
import { footerLinks } from "../constants/index";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-t-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <img
            src="./images/logo.svg"
            className="object-contain"
            width={120}
            alt="logo"
          />
          <p className="text-base text-gray-700">
            Dopagraming 2024 All rights reserved
          </p>
        </div>
        <div className="footer-links">
          {footerLinks?.map((link) => (
            <div className="footer-link" key={link.title}>
              <h3 className="font-bold">{link.title}</h3>
              {link.links?.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2024 Dopagraming. All Rights Reserved</p>

        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
