"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function page() {
    const [isClick, setIsClick] = useState(false);

      const toggleNavbar = () => {
        setIsClick(!isClick)
      }
  return (
    <>
    <div className='bg-white'>

         {/* This Is Header For Menu Page  */}
    
    <nav className='bg-black'>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex">
          <p className="font-bold text-2xl text-[#FF9F0D]">Food</p>
          <p className="font-bold text-2xl">tuck</p>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="ml-4 flex items-center space-x-4">
          <Link
                        href={"/"}
                        className=" rounded-lg p-2 font-semibold"
                      >
                        Home
                      </Link>
                      <Link
                        href={"/Menu"}
                        className=" rounded-lg p-2 font-semibold"
                      >
                        Menu
                      </Link>
                      <Link
                        href={"/"}
                        className=" rounded-lg p-2 font-semibold"
                      >
                        Blog
                      </Link>
                      <Link
                        href={"/"}
                        className=" rounded-lg p-2 font-semibold"
                      >
                        Pages
                      </Link>
                      <Link
                        href={"/"}
                        className=" rounded-lg p-2 font-semibold"
                      >
                        About
                      </Link>
                      <Link
                        href={"/Shop"}
                        className=" rounded-lg p-2 font-semibold"
                      >
                        Shop
                      </Link>
                      <Link
                        href={"/"}
                        className=" rounded-lg p-2 font-semibold"
                      >
                        Contact
                      </Link>
                      <Link href={""}>
                <Image src={"/MagnifyingGlass.png"} className='ml-[200px]' alt='' width={24} height={24}/>
                </Link>
                <Link href={""}>
                <Image src={"/User.png"} alt='' width={24} height={24}/>
                </Link>
                <Link href={""}>
                <Image src={"/Tote.png"} alt='' width={24} height={24}/>
                </Link>

          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white
          focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
          onClick={toggleNavbar}> 
          {isClick ? (
            <svg  className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor" >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"/>
</svg>
          ) : (
            <svg  className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"/>
</svg>
          )}
          </button>
        </div>
      </div>
    </div>
    {isClick && (
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link
                        href={"/"}
                        className="block rounded-lg p-2 font-semibold"
                      >
                        Home
                      </Link>
                      <Link
                        href={"/Menu"}
                        className="block rounded-lg p-2 font-semibold"
                      >
                        Menu
                      </Link>
                      <Link
                        href={"/"}
                        className="block rounded-lg p-2 font-semibold"
                      >
                        Blog
                      </Link>
                      <Link
                        href={"/"}
                        className="block rounded-lg p-2 font-semibold"
                      >
                        Pages
                      </Link>
                      <Link
                        href={"/"}
                        className="block rounded-lg p-2 font-semibold"
                      >
                        About
                      </Link>
                      <Link
                        href={"/"}
                        className="block rounded-lg p-2 font-semibold"
                      >
                        Shop
                      </Link>
                      <Link
                        href={"/"}
                        className="block rounded-lg p-2 font-semibold"
                      >
                        Contact
                      </Link>
        </div>
      </div>
    )}
    </nav>
    
    {/* This Is Banner For Menu Page */}

    <div>
  <div className="relative h-[310px] md:h-[300px] lg:h-[300px]">
    <div className="absolute inset-0 bg-[url('/bgimg4.png')] bg-cover bg-center md:bg-top lg:bg-cover"></div>
    <div className="relative">
      <div className="flex justify-center items-center">
        <p className="font-bold text-[28px] md:text-[38px] lg:text-[48px] mt-12 md:mt-16">Our Shop</p>
      </div>
      <div className="flex justify-center items-center gap-2 mt-2 md:mt-4">
        <Link href={"/"} className="text-sm md:text-base lg:text-lg">
          Home
        </Link>
        <Image src={"/Vector (9).png"} alt="" width={5} height={10} />
        <p className="text-[#FF9F0D] text-sm md:text-base lg:text-lg">Shop</p>
      </div>
    </div>
  </div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-4 gap-4 m-5 p-4 text-black">
  {/* Product List */}
  <div className="lg:col-span-3">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {/* Product Card */}
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
      ].map((item, index) => (
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
  <div className='hidden md:block'>
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
      {[
        "Sandwiches",
        "Burger",
        "Chicken Chup",
        "Drink",
        "Pizza",
        "Thi",
        "Non Veg",
        "Uncategorized",
      ].map((category, index) => (
        <label key={index} className="flex items-center gap-2">
          <input type="checkbox" />
          <p>{category}</p>
        </label>
      ))}
    </div>
  </div>
</div>

    </div>
    </>
  )
}

export default page