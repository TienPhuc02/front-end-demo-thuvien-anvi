"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FormLogin from "@/components/AuthPage/FormLogin";
import { Roboto } from "next/font/google";
import HeaderLogo from "@/components/AuthPage/HeaderLogo";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300"],
  variable: "--font-robot",
});
export default function Home() {
  const router = useRouter();

  return (
    <main className={roboto.className}>
      <div className="container-main-login-page grid grid-cols-2">
        <div className="content-left-main-login-page mx-auto my-auto max-w-[450px] max-h-[600px] w-full h-full max-[00px]:p-3  ">
          <HeaderLogo
            title={"Đăng Nhập"}
            description={" Sign in to stay conntected."}
          />
          <FormLogin />
          <div
            className={` ${roboto.variable} font-medium navigate-sign-up-form-login text-center`}
          >
            Don’t have an account?{" "}
            <span
              className="text-[#3a57e8] cursor-pointer"
              onClick={() => router.push("/sign-up")}
            >
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
    </main>
  );
}
