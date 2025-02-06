"use client"
import React, { useEffect, useState } from "react";
import { Great_Vibes } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import client from "../../../../client";
import { urlFor } from "../../../../image";
import MenuLoarder from "../MenuLoader/MenuLoarder";

interface Product {
  name : string,
  description : string,
  caregory : string,
  price : number,
  image : string,
  available : boolean,
}

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

function  Menu() {

  const [apiData, setApiData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetching = async () => {
      try{
        const query = `*[_type == 'food'][0..3]{
  name, description , price, id,
    image, 
}`;
        const response = await client.fetch(query);
        console.log("Fetched Data:", response); // Add logging to check data
        setApiData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }finally {
        setLoading(false); // Set loading to false when fetch is done
      }
    };
    fetching();
  }, []);

  return (
    <div className="my-20 px-4 lg:px-16">
      <div className="text-center mt-16">
        <p className={`${greatVibes.className} text-[#FF9F0D] text-[20px] md:text-[25px] animate-bounce`}>
          Choose & pick
        </p>
        <p className="font-bold text-[36px] md:text-[48px]">
          <span className="text-[#FF9F0D]">Fr</span>om Our Menu
        </p>
      </div>

      <div className="flex flex-wrap justify-center md:justify-start items-center gap-5 mt-10">
        <p className="font-bold text-[18px] md:text-[20px] text-[#FF9F0D]">Breakfast</p>
        <p className="text-[16px] md:text-[18px]">Lunch</p>
        <p className="text-[16px] md:text-[18px]">Dinner</p>
        <p className="text-[16px] md:text-[18px]">Dessert</p>
        <p className="text-[16px] md:text-[18px]">Drink</p>
        <p className="text-[16px] md:text-[18px]">Snack</p>
        <p className="text-[16px] md:text-[18px]">Soups</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        <div className="hidden md:block relative">
          <Image
            src="/leafs.png"
            alt="Food"
            height={406}
            width={515}
            className="absolute"
          />
          <Image
            src="/plate.png"
            alt="Food"
            height={362}
            width={366}
            className="absolute p-4 "
          />
        </div>

        <div className="space-y-6">
          { loading ? (
            <>
            <div className="gap-20 opacity-30">
            <MenuLoarder/>
            <br/>
            <br/>
            <MenuLoarder/>
            </div>
            <div className="hidden md:block">
            <div className="flex gap-20 opacity-30 flex-nowrap">
                <MenuLoarder/>
                <MenuLoarder/>
                <MenuLoarder/>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="flex gap-20 opacity-30 flex-nowrap">
            <MenuLoarder/>
            <MenuLoarder/>
            <MenuLoarder/>
        </div>
        </div>
        </>
          ) : apiData.map((item, index) => (
            <Link key={index} href={"/Menu"}>
            <div className="grid grid-cols-[70px_1fr] my-5 items-center gap-4">
              <Image src={urlFor(item.image).url()} alt={item.name} height={69} width={70} className="rounded" />
              <div>
                <p className="font-semibold text-lg">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {item.description.slice(0, 36)}...
                </p>
                <p className="text-[#FF9F0D] text-[16px] font-bold">{item.price}$</p>
              </div>
            </div>
            </Link>
          ))}
        </div>

        <div className="hidden md:block space-y-6">
        {apiData.map((item, index) => (
          <Link key={index} href={"/Menu"}>
            <div  className="grid grid-cols-[70px_1fr] my-5 items-center gap-4">
              <Image src={urlFor(item.image).url()} alt={item.name} height={69} width={70} className="rounded" />
              <div>
                <p className="font-semibold text-lg">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {item.description.slice(0, 36)}...
                </p>
                <p className="text-[#FF9F0D] text-[16px] font-bold">{item.price}$</p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
