import React from "react";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300"],
  variable: "--font-robot",
});
const HeaderLogo = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <>
      <div className="content-header-logo flex mb-[40px] ">
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
        <span className={` font-sans text-[33px] text-[#232D42] font-light`}>
          Hope Ui
        </span>
      </div>
      <div className="content-header-title mx-auto mb-[16px]">
        <p
          className={` ${roboto.variable} text-[33px] font-semibold text-[#000]  title-sign-in text-center mb-[16px]`}
        >
          {title}
        </p>
        <p
          className={`${roboto.variable} font-light text-[black] text-center text-[16px] `}
        >
          {description}
        </p>
      </div>
    </>
  );
};

export default HeaderLogo;
