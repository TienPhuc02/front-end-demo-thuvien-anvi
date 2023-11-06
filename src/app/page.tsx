"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import { Checkbox } from "antd";
import { useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Home() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="container-main-login-page grid grid-cols-2">
      <div className="content-left-main-login-page mx-auto my-auto max-w-[450px] max-h-[600px] w-full h-full ">
        <div className="content-left-header-logo flex mb-[40px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            className="mr-[10px]"
            viewBox="0 0 30 31"
            fill="none"
          >
            <rect
              x="-0.757812"
              y="19.7422"
              width="28"
              height="4"
              rx="2"
              transform="rotate(-45 -0.757812 19.7422)"
              fill="#3A57E8"
            />
            <rect
              x="7.72656"
              y="28.2266"
              width="28"
              height="4"
              rx="2"
              transform="rotate(-45 7.72656 28.2266)"
              fill="#3A57E8"
            />
            <rect
              x="10.5352"
              y="16.8945"
              width="16"
              height="4"
              rx="2"
              transform="rotate(45 10.5352 16.8945)"
              fill="#3A57E8"
            />
            <rect
              x="10.5566"
              y="-0.0546875"
              width="28"
              height="4"
              rx="2"
              transform="rotate(45 10.5566 -0.0546875)"
              fill="#3A57E8"
            />
          </svg>
          <span
            className={`${inter.variable} font-sans text-[33px] text-[#232D42] font-normal`}
          >
            Hope Ui
          </span>
        </div>
        <div className="content-left-header-title mb-[16px]">
          <p
            className={` ${inter.variable} text-[33px] font-semibold text-[#000]  title-sign-in text-center mb-[16px]`}
          >
            Sign In
          </p>
          <p
            className={`${inter.variable} text-center text-[16px] font-normal text-[#8A92A6]`}
          >
            Sign in to stay connected.
          </p>
        </div>
        <div className="content-left-form-login flex flex-start flex-col mb-[24px]">
          <div className="email-field mb-[16px] flex flex-start flex-col">
            <span
              className={` ${inter.variable}  text-[#8A92A6] text-[16px] font-normal mb-[8px] `}
            >
              Username
            </span>
            <input className="border focus:border-[#1677ff] focus:shadow-[#aac5eb] focus:shadow-sm border-[#8A92A6] text-[black]  bg-white py-[8px] px-[16px] rounded-[5px]"></input>
          </div>
          <div className="password-field mb-[16px] flex flex-start flex-col">
            <span
              className={` ${inter.variable}  text-[#8A92A6] text-[16px] font-normal mb-[8px] `}
            >
              Password
            </span>
            <input className="border focus:border-[#1677ff] focus:shadow-[#aac5eb] focus:shadow-sm border-[#8A92A6] text-[#8A92A6] bg-white py-[8px] px-[16px] rounded-[5px]"></input>
          </div>
          <div className="confirm-form-login flex justify-between">
            <div
              onClick={handleRememberMeChange}
              className="checkbox-confirm-form-login flex"
            >
              <input
                type="checkbox"
                checked={rememberMe}
                className="w-[16px] cursor-pointer h-[16px] mr-[6px] shadow-md "
                name=""
                id=""
              />
              <span
                className={` ${inter.variable}  cursor-pointer  text-[#8A92A6] text-[16px] font-normal `}
              >
                Remember me?
              </span>
            </div>
            <div
              className={` ${inter.variable}  cursor-pointer  text-[#3a57e8] text-[16px] font-normal mb-[8px] `}
            >
              Forgot Password
            </div>
          </div>
        </div>
        <div
          className={`button-sign-in-form-login ${inter.variable}  text-[#fff] text-[16px] font-light py-[8px] px-[24px] bg-[#3a57e8] text-center max-w-[190px] max-h-[250px] mx-auto cursor-pointer rounded-[4px] mb-[16px]`}
        >
          Sign in
        </div>
        <div
          className={`  ${inter.variable} navigate-sign-up-form-login text-center`}
        >
          Don’t have an account?{" "}
          <span className="text-[#3a57e8] cursor-pointer">
            Click here to sign up.
          </span>
        </div>
      </div>
      <div className="content-right-main-login-page relative min-h-screen">
        <Image
          layout="fill"
          objectFit="cover"
          alt="image-content right"
          src="/GraphicSide.jpg"
        />
      </div>
    </div>
  );
}
