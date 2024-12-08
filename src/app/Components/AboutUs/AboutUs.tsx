import React from "react";
import { Great_Vibes } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

function AboutUs() {
  return (
    <>
      <div id="#AboutUs" className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-16">
          <div className="p-6">
            <p className={`${greatVibes.className} text-[#FF9F0D] text-[20px] md:text-[25px]`}>
              About us
            </p>
            <p className="font-bold text-[32px] md:text-[48px]">
              <span className="text-[#FF9F0D]">We</span> Create the best foody
              product
            </p>
            <p className="my-4 mb-10 text-sm md:text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>
            <div className="space-y-4 mb-10">
              <p className="flex items-center gap-2 text-sm md:text-base">
                <Image src={"/right.png"} alt="/" width={17} height={12} />
                Lacus nisi, et ac dapibus sit eu velit in consequat.
              </p>
              <p className="flex items-center gap-2 text-sm md:text-base">
                <Image src={"/right.png"} alt="/" width={17} height={12} />
                Quisque diam pellentesque bibendum non dui volutpat fringilla.
              </p>
              <p className="flex items-center gap-2 text-sm md:text-base">
                <Image src={"/right.png"} alt="/" width={17} height={12} />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <Link
              href={"/"}
              className="rounded-[30px] bg-[#FF9F0D] text-white px-4 py-2 md:px-5 md:py-3"
            >
              Read More
            </Link>
          </div>
          <div className="grid gap-4 mt-10">
            <div>
              <Image
                src={"/egg.png"}
                alt="egg"
                width={660}
                height={330}
                className="w-full h-auto max-h-[250px] md:max-h-[330px] object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={"/chk.png"}
                alt="chk"
                width={322}
                height={194}
                className="w-full h-auto object-cover"
              />
              <Image
                src={"/sandwich.png"}
                alt="sandwich"
                width={322}
                height={194}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
