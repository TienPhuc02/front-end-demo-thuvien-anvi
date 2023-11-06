import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export default function Home() {
  return (
    <div className="container-main-login-page grid grid-cols-2">
      <div className="content-left-main-login-page mx-auto my-auto w-[450px] h-[600px] border border-blue-500">
        <div className="header-content-left-logo flex mb-[40px]">
          <Image
            width={28}
            height={28}
            alt="logo-content-left"
            src="/Logo.png"
          />
          <span
            className={`${inter.variable} font-sans text-[33px] text-[#232D42] font-normal`}
          >
            Hope Ui
          </span>
        </div>
        <div className="header-content-left-title mb-[16px]">
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
