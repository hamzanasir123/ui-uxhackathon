import React from "react";
import { Great_Vibes } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

function Chef() {
  return (
    <>
      <div className="text-center">
        <p className={`${greatVibes.className} text-[#FF9F0D] text-[25px]`}>
          Chefs
        </p>
        <p className="font-bold text-[48px]">
          <span className="text-[#FF9F0D]">Me</span>et Our Chef
        </p>
        <div className="flex flex-wrap justify-center items-center p-10 gap-4 relative">
          <Image
            src={"/leaf2.png"}
            alt="Food"
            width={444}
            height={532}
            className="absolute"
          />
          <Image
            src={"/Chef card.png"}
            alt="Food"
            width={305}
            height={320}
            className="relative"
          />
          <Image src={"/Card 2.png"} alt="Food" width={305} height={320} />
          <Image src={"/Card 3.png"} alt="Food" width={305} height={320} className="hidden md:block" />
          {/* <Image src={"/Card 4.png"} alt="Food" width={305} height={320}  className="hidden md:block"/> */}
        </div>
        <div>
          <Link
            href={""}
            className=" px-6 py-2 bg-transparent border-2 rounded-full border-[#FF9F0D] "
          >
            See More
          </Link>
        </div>
        <div className="md:text-left m-10 sm:m-16 lg:m-20 mt-10 sm:mt-16 lg:mt-20">
  <p className={`${greatVibes.className} text-[#FF9F0D] text-[20px] sm:text-[25px] lg:text-[30px]`}>
    Testimonials
  </p>
  <p className="font-bold text-[36px] sm:text-[48px]">What our client are saying</p>
</div>

<div className="mx-4 sm:mx-16 lg:mx-56 relative">
  <div className="w-full sm:w-[768px] lg:w-[868px] bg-white relative">
    <Image
      src={"/Ellipse 6.png"}
      alt="comma"
      height={133}
      width={114}
      className="absolute left-[50%] transform -translate-x-[50%]"
    />
    <div className="flex justify-center h-[150px] sm:h-[200px] relative items-end">
      <Image src={"/Quotes.png"} alt="comma" height={47} width={47} />
    </div>
    <Image
      src={"/leaf3.png"}
      alt="leafs"
      height={500}
      width={396}
      className="absolute right-0 lg:left-[600px] sm:left-[300px] transform -translate-x-[50%]"
    />
    <p className="text-center text-black mx-4 sm:mx-20 relative text-sm sm:text-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
      diam pellentesque bibendum non dui volutpat fringilla bibendum.
      Urna, elit augue urna, vitae feugiat pretium donec id elementum.
      Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
      eu velit in consequat.
    </p>
    <div className="flex justify-center relative items-center h-[70px] sm:h-[100px]">
      <Image src={"/star.png"} alt="comma" height={24} width={152} />
    </div>
    <p className="text-xl sm:text-2xl font-bold relative">Alamin Hasan</p>
    <p className="text-sm sm:text-base">Food Specialist</p>
  </div>
  <div className="flex justify-center items-center my-5 sm:my-10">
    <Image src={"/Dot.png"} alt="Dot" height={16} width={86} />
  </div>
</div>

      </div>
    </>
  );
}

export default Chef;
