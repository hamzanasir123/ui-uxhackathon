"use client"
import Image from 'next/image'
import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Components/Banner/Banner';

function Page() {
  return (
    <>
    <div className='bg-white'>
    <Navbar/>
    <Banner pageName="Shop"/>

<div className="grid grid-cols-1 lg:grid-cols-4 gap-4 m-5 p-4 text-black">
  <div className="lg:col-span-3">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
    {[
        { src: "/shop1.png", name: "Fresh Lime", price: "$38.00", oldPrice: "$45.00" },
        { src: "/shop2.png", name: "Chocolate Muffin", price: "$28.00" },
        { src: "/shop3.png", name: "Burger", price: "$21.00", oldPrice: "$45.00" },
        { src: "/shop4.png", name: "Country Burger", price: "$45.00" },
        { src: "/shop5.png", name: "Drink", price: "$23.00", oldPrice: "$45.00" },
        { src: "/shop6.png", name: "Pizza", price: "$43.00" },
        { src: "/shop7.png", name: "Cheese Butter", price: "$10.00" },
        { src: "/shop8.png", name: "Sandwiches", price: "$25.00" },
        { src: "/shop9.png", name: "Chicken Chup", price: "$12.00" },
        { src: "/shop1.png", name: "Fresh Lime", price: "$38.00", oldPrice: "$45.00" },
        { src: "/shop2.png", name: "Chocolate Muffin", price: "$28.00" },
        { src: "/shop3.png", name: "Burger", price: "$21.00", oldPrice: "$45.00" },
        { src: "/shop4.png", name: "Country Burger", price: "$45.00" },
        { src: "/shop1.png", name: "Fresh Lime", price: "$38.00", oldPrice: "$45.00" },
        { src: "/shop2.png", name: "Chocolate Muffin", price: "$28.00" },
      ]
        .map((item, index) => (
          <div key={index}>
            <Image src={item.src} alt={item.name} width={262} height={267} />
            <p className="font-bold text-lg mt-2">{item.name}</p>
            <div className="flex items-center gap-2">
              <p className="text-[#FF9F0D]">{item.price}</p>
              {item.oldPrice && <p className="line-through text-gray-400">{item.oldPrice}</p>}
            </div>
          </div>
        ))}
    </div>
  </div>

  {/* Sidebar */}
  <div className="hidden lg:block">
    <div className="flex items-center gap-2 m-4">
      <input
        type="text"
        placeholder="Search Product"
        className="flex-grow p-2 bg-[#FF9F0D] bg-opacity-50 text-black rounded-l"
      />
      <div className="flex justify-center items-center bg-[#FF9F0D] p-3 rounded-r">
        <Image src="/Vector (7).png" alt="Search Icon" width={20} height={20} />
      </div>
    </div>
    <p className="font-bold ml-4 text-xl">Category</p>
    <div className="flex flex-col ml-4 mt-2 space-y-2">
      {["Sandwiches", "Burger", "Chicken Chup", "Drink", "Pizza", "Thi", "Non Veg", "Uncategorized"].map(
        (category, index) => (
          <label key={index} className="flex items-center gap-2">
            <input type="checkbox" />
            <p>{category}</p>
          </label>
        )
      )}
    </div>
    <div className="relative h-[286px] w-[248px] mt-6">
      <div className="absolute inset-0 bg-[url('/bgimg5.png')] bg-cover bg-center opacity-100"></div>
      <p className="font-bold text-lg relative text-white mx-8 mt-5">Perfect Taste</p>
      <p className="font-bold text-lg relative text-white mx-8">Classic Restaurant</p>
      <p className="font-bold text-lg relative text-[#FF9F0D] mt-4 mx-8">45.00$</p>
      <p className="font-bold text-lg relative mt-28 text-white mx-8">Shop Now</p>
    </div>
    <p className="font-bold text-xl mt-6">Filter By Price</p>
    <p className="w-[243px] h-[5px] bg-[#FF9F0D] mt-2"></p>
    <div className="space-y-6 mt-4">
      {[
        { src: "/Vector (10).png", title: "Pizza", price: "35.00$" },
        { src: "/Vector (10).png", title: "Cupcake", price: "35.00$" },
        { src: "/Vector (10).png", title: "Cookies", price: "35.00$" },
        { src: "/Vector (10).png", title: "Burger", price: "35.00$" },
      ].map((item, index) => (
        <div key={index} className="grid grid-cols-[70px_1fr] items-center gap-4">
          <Image src={item.src} alt={item.title} height={69} width={70} />
          <div>
            <p className="font-semibold text-lg">{item.title}</p>
            <Image src={"/star (1).png"} alt="" width={63} height={9} />
            <p className="text-[#FF9F0D] text-[16px] font-bold">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
    <p className="font-bold text-xl mt-6">Product Tags</p>
    <div className="flex flex-wrap gap-8 text-lg mt-2">
      {["Services", "Our Menu", "Pizza", "Cupcake", "Burger", "Cookies", "Our Shop", "Tandoori Chicken"].map(
        (tag, index) => (
          <p key={index} className={tag === "Burger" ? "text-[#FF9F0D] underline" : ""}>
            {tag}
          </p>
        )
      )}
    </div>
  </div>
</div>


    </div>
    </>
  )
}

export default Page