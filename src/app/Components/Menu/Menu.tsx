import React from "react";
import { Great_Vibes } from "next/font/google";
import Image from "next/image";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

function Menu() {
  return (
    <div className="my-20 px-4 lg:px-16">
      <div className="text-center mt-16">
        <p className={`${greatVibes.className} text-[#FF9F0D] text-[20px] md:text-[25px]`}>
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
            className="absolute p-4"
          />
        </div>

        <div className="space-y-6">
          {[
            { src: "/m1.png", title: "Lettuce Leaf", price: "12.5$" },
            { src: "/m2.png", title: "Fresh Breakfast", price: "14.5$" },
            { src: "/m3.png", title: "Mild Butter", price: "12.5$" },
            { src: "/m4.png", title: "Fresh Bread", price: "12.5$" },
          ].map((item, index) => (
            <div key={index} className="grid grid-cols-[70px_1fr] items-center gap-4">
              <Image src={item.src} alt={item.title} height={69} width={70} />
              <div>
                <p className="font-semibold text-lg">{item.title}</p>
                <p className="text-sm text-gray-500">
                  Lacus nisi, et ac dapibus velit in consequat.
                </p>
                <p className="text-[#FF9F0D] text-[16px] font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:block space-y-6">
          {[
            { src: "/m5.png", title: "Glow Cheese", price: "12.5$" },
            { src: "/m6.png", title: "Italian Pizza", price: "14.5$" },
            { src: "/m7.png", title: "Sllice Beef", price: "12.5$" },
            { src: "/m8.png", title: "Mushaom Pizza", price: "12.5$" },
          ].map((item, index) => (
            <div key={index} className="grid grid-cols-[70px_1fr] items-center gap-4">
              <Image src={item.src} alt={item.title} height={69} width={70} />
              <div>
                <p className="font-semibold text-lg">{item.title}</p>
                <p className="text-sm text-gray-500">
                  Lacus nisi, et ac dapibus velit in consequat.
                </p>
                <p className="text-[#FF9F0D] text-[16px] font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
