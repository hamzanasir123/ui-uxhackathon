"use client"
import React, { useEffect, useState } from "react";
import { Great_Vibes } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface Chef {
  name : string,
  description : string,
  caregory : string,
  experience : number,
  image : string,
  available : boolean,
  position : string,
  specialty : string,
}

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

function Chef() {
  
    const [apiData, setApiData] = useState<Chef[]>([]);
  
    const query = `*[_type == 'chef'][0..3]{
  name, experience, image, specialty,
    available, description, position
}`;
  
    useEffect(()=>{
      const fetching = async () => {
        const response = await client.fetch(query);
        setApiData(response);
      }
      fetching();
    }, [query])
  return (
    <>
      <div className="text-center">
        <p className={`${greatVibes.className} text-[#FF9F0D] text-[25px]`}>
          Chefs
        </p>
        <p className="font-bold md:text-[48px] text-[30px]">
          <span className="text-[#FF9F0D]">Me</span>et Our Chef
        </p>
        <div className="flex flex-wrap justify-center items-center p-10 gap-4 relative">
          {apiData.map((item, index) => (
          <Image key={index} src={urlFor(item.image).url()} alt="Food" width={305} height={320} className="w-[100px] md:w-[305px]"/>
          ))}
        </div>
        <div>
          <Link
            href={"/OurChefs"}
            className=" px-6 py-2 bg-transparent border-2 rounded-full border-[#FF9F0D] "
          >
            See More
          </Link>
        </div>
        <div className="md:text-left m-10 sm:m-16 lg:m-20 mt-10 sm:mt-16 lg:mt-20">
  <p className={`${greatVibes.className} text-[#FF9F0D] text-[20px] sm:text-[25px] lg:text-[30px]`}>
    Testimonials
  </p>
  <p className="font-bold text-[30px] sm:text-[48px]">What our client are saying</p>
</div>

<div className="mx-4 sm:mx-16 lg:mx-56 relative">
  <div className="w-full sm:w-[768px] lg:w-[868px] bg-white relative">
    <Image
      src={"/Ellipse 6.png"}
      alt="comma"
      height={133}
      width={114}
      className="absolute left-[50%] transform -translate-x-[50%] w-[80px] md:w-[114px]"
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
