import Image from "next/image";
import React from "react";
import { Great_Vibes } from "next/font/google";
import Link from "next/link";
import Header from "../Components/Header/Header";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

function Hero() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 bg-[url('/bgimg.png')] bg-cover bg-center opacity-10"></div>
        <Header />
        <div className="relative grid grid-cols-1 lg:grid-cols-2 md:gap-6 md:p-6">
          <div className="grid grid-cols-12 md:gap-4 md:p-6 p-1">
            <div className="col-span-2 lg:col-span-1 m-1 flex flex-col items-center">
              <div className="h-[50px] lg:h-[158px] w-[2px] bg-slate-600 mb-5"></div>
              <div className="flex flex-col items-center">
                <Image
                  src={"/f.png"}
                  alt="f"
                  width={7}
                  height={7}
                  className="my-4"
                />
                <Image
                  src={"/t.png"}
                  alt="t"
                  width={10}
                  height={10}
                  className="my-4"
                />
                <Image
                  src={"/p.png"}
                  alt="p"
                  width={10}
                  height={10}
                  className="my-4"
                />
              </div>
              <div className="h-[50px] lg:h-[158px] w-[2px] bg-slate-600 mt-5"></div>
            </div>
            <div className="col-span-10 lg:col-span-9 m-4 md:text-center lg:text-left">
              <p
                className={`${greatVibes.className} text-[#FF9F0D] text-[20px] md:text-[25px] animate-bounce`}
              >
                Its Quick & Amusing!
              </p>
              <p className="font-bold text-[30px] md:text-[50px] lg:text-[60px] ">
                <span className="text-[#FF9F0D]">Th</span>e Art of speed food
                Quality
              </p>
              <p className="my-4 mb-10 text-sm md:text-base lg:text-lg ">
                We Have Very Delicious Foods, Fast & Accurate Service And A Premium Quality.
              </p>
              <Link
                href={"/Menu"}
                className={`rounded-[30px] bg-[#FF9F0D] text-black font-semibold  px-4 py-2 md:px-5 md:py-3 animate-pulse hover:animate-none `}
              >
                See Menu
              </Link>
            </div>
          </div>
          <div className="flex justify-center p-5 md:p-0 items-center">
            <Image
              src={"/Image.png"}
              alt="Pic"
              width={877.8}
              height={670}
              className="w-full h-auto max-w-[500px] md:max-w-[700px] lg:max-w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
