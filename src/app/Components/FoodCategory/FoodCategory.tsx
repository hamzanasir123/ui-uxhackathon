import React from "react";
import { Great_Vibes } from "next/font/google";
import Image from "next/image";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

function FoodCategory() {
  return (
    <>
      <div className="text-center p-6 lg:p-10">
        <p className={`${greatVibes.className} text-[#FF9F0D] text-[20px] md:text-[25px] animate-bounce `}>
          Food Category
        </p>
        <p className="font-bold text-[32px] md:text-[48px]">
          <span className="text-[#FF9F0D]">Ch</span>oose Food Item
        </p>
        <div className="flex flex-wrap justify-center gap-6 relative mt-10">
          <Image
            src={"/sweet.png"}
            alt="Food"
            width={305}
            height={320}
            className="w-[100px] md:w-[150px] lg:w-[250px] h-auto"
          />
          <Image
            src={"/burger.png"}
            alt="Food"
            width={305}
            height={320}
            className="w-[100px] md:w-[200px] lg:w-[250px] h-auto"
          />
          <Image
            src={"/pasta.png"}
            alt="Food"
            width={305}
            height={320}
            className="w-[100px] md:w-[200px] lg:w-[250px] h-auto"
          />
          <Image
            src={"/donut.png"}
            alt="Food"
            width={305}
            height={320}
            className="w-[100px] md:w-[200px] lg:w-[250px] h-auto relative"
          />
          <Image
            src={"/leaf.png"}
            alt="Decoration"
            width={444}
            height={532}
            className="absolute top-0 right-0 w-[150px] md:w-[300px] lg:w-[444px] h-auto opacity-75"
          />
        </div>
      </div>
    </>
  );
}

export default FoodCategory;
