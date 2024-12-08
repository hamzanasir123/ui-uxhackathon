"use client"
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'

function Menu() {
  
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
                        href={"/"}
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
  <div className="relative h-[310px] md:h-[400px] lg:h-[500px]">
    <div className="absolute inset-0 bg-[url('/bgimg4.png')] bg-cover bg-center md:bg-top lg:bg-cover"></div>
    <div className="relative">
      <div className="flex justify-center items-center">
        <p className="font-bold text-[28px] md:text-[38px] lg:text-[48px] mt-12 md:mt-16">Our Menu</p>
      </div>
      <div className="flex justify-center items-center gap-2 mt-2 md:mt-4">
        <Link href={"/"} className="text-sm md:text-base lg:text-lg">
          Home
        </Link>
        <Image src={"/Vector (9).png"} alt="" width={5} height={10} />
        <p className="text-[#FF9F0D] text-sm md:text-base lg:text-lg">Menu</p>
      </div>
    </div>
  </div>
</div>


    {/* This is Starter Menu */}

    <div className="m-8 md:m-16 lg:m-20 text-black">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div className="lg:col-span-1 flex justify-center">
      <Image src={"/Rectangle 8874.png"} alt="" width={348} height={626} />
    </div>
    <div className="lg:col-span-2 lg:m-10">
      <p className="font-bold mb-4 text-2xl md:text-3xl lg:text-[38px]">Starter Menu</p>
      <div className="flex justify-between">
        <p className="text-lg md:text-xl font-semibold">Alder Grilled Chinook Salmon</p>
        <p className="text-lg md:text-xl font-semibold text-[#FF9F0D]">32$</p>
      </div>
      <p className="text-sm md:text-base">Toasted French bread topped with romano, cheddar</p>
      <p className="text-sm md:text-base">560 CAL</p>
      <div className="flex justify-between mt-4">
        <p className="text-lg md:text-xl font-semibold text-[#FF9F0D]">Berries and creme tart</p>
        <p className="text-lg md:text-xl font-semibold text-[#FF9F0D]">43$</p>
      </div>
      <p className="text-sm md:text-base">Gorgonzola, ricotta, mozzarella, taleggio</p>
      <p className="text-sm md:text-base">700 CAL</p>
      <div className="flex justify-between mt-4">
        <p className="text-lg md:text-xl font-semibold">Tormentoso Bush Pizza Pintoage</p>
        <p className="text-lg md:text-xl font-semibold text-[#FF9F0D]">14$</p>
      </div>
      <p className="text-sm md:text-base">Ground cumin, avocados, peeled and cubed</p>
      <p className="text-sm md:text-base">1000 CAL</p>
      <div className="flex justify-between mt-4">
        <p className="text-lg md:text-xl font-semibold">Spicy Vegan Potato Curry</p>
        <p className="text-lg md:text-xl font-semibold text-[#FF9F0D]">35$</p>
      </div>
      <p className="text-sm md:text-base">Spreadable cream cheese, crumbled blue cheese</p>
      <p className="text-sm md:text-base">560 CAL</p>
    </div>
  </div>
</div>

<div className="m-8 md:m-16 lg:m-20 text-black">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div className="lg:col-span-2 lg:m-10">
      <p className="font-bold mb-4 text-2xl md:text-3xl lg:text-[38px]">Main Course</p>
      <div className="flex justify-between">
        <p className="text-lg md:text-xl font-semibold">Optic Big Breakfast Combo Menu</p>
        <p className="text-lg md:text-xl font-semibold text-[#FF9F0D]">32$</p>
      </div>
      <p className="text-sm md:text-base">Toasted French bread topped with romano, cheddar</p>
      <p className="text-sm md:text-base">560 CAL</p>
      <div className="flex justify-between mt-4">
        <p className="text-lg md:text-xl font-semibold text-[#FF9F0D]">Cashew Chicken With Stir-Fry</p>
        <p className="text-lg md:text-xl font-semibold text-[#FF9F0D]">43$</p>
      </div>
      <p className="text-sm md:text-base">Gorgonzola, ricotta, mozzarella, taleggio</p>
      <p className="text-sm md:text-base">700 CAL</p>
      <div className="flex justify-between mt-4">
        <p className="text-lg md:text-xl font-semibold">Vegetables & Green Salad</p>
        <p className="text-lg md:text-xl font-semibold text-[#FF9F0D]">14$</p>
      </div>
      <p className="text-sm md:text-base">Ground cumin, avocados, peeled and cubed</p>
      <p className="text-sm md:text-base">1000 CAL</p>
      <div className="flex justify-between mt-4">
        <p className="text-lg md:text-xl font-semibold">Spicy Vegan Potato Curry</p>
        <p className="text-lg md:text-xl font-semibold text-[#FF9F0D]">35$</p>
      </div>
      <p className="text-sm md:text-base">Spreadable cream cheese, crumbled blue cheese</p>
      <p className="text-sm md:text-base">560 CAL</p>
    </div>
    <div className="lg:col-span-1 flex justify-center">
      <Image src={"/burgerwithknife.png"} alt="" width={348} height={626} />
    </div>
  </div>
</div>


        <div className='relative bg-black'>
    <div className="absolute inset-0 bg-[url('/bgimg2.png')] bg-cover bg-center md:bg-top lg:bg-cover opacity-50"></div>
        <div className='relative flex flex-wrap p-24 gap-20'>
                <div className='flex flex-wrap w-[218px] justify-center items-center'>
                <Image src={"/Group (3).png"} alt='' width={116} height={120} />
                <p className=' font-semibold md:text-xl  mt-2'>Professional Chefs</p>
                <p className=' font-bold text-[40px]'>420</p>
                </div>
                <div className='flex flex-wrap w-[190px] justify-center items-center'>
                <Image src={"/Group (2).png"} alt='' width={116} height={120} />
                <p className=' font-semibold md:text-xl mt-2'>Items Of Food</p>
                <p className=' font-bold text-[40px]'>320</p>
                </div>
                <div className='flex flex-wrap w-[218px] justify-center items-center'>
                <Image src={"/Group (1).png"} alt='' width={116} height={120} />
                <p className=' font-semibold md:text-xl mt-2 text-sm'>Years Of Experienced</p>
                <p className=' font-bold text-[40px]'>30+</p>
                </div>
                <div className='flex flex-wrap w-[218px] justify-center items-center'>
                <Image src={"/Group (4).png"} alt='' width={116} height={120} />
                <p className=' font-semibold md:text-xl mt-2'>Professional Chefs</p>
                <p className=' font-bold text-[40px]'>420</p>
                </div>
        </div>
    </div>

    <div className="m-5 md:m-10 lg:m-20 text-black">
  {/* Dessert Section */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
    <div className="lg:col-span-1 flex justify-center">
      <Image src="/icecream.png" alt="" width={348} height={626} />
    </div>
    <div className="lg:col-span-2">
      <p className="font-bold text-[28px] lg:text-[38px] mb-4">Dessert</p>
      <div className="space-y-4">
        {[
          { name: "Fig and lemon cake", price: "32$", desc: "Toasted French bread topped with romano, cheddar", cal: "560 CAL" },
          { name: "Creamy mascarpone cake", price: "43$", desc: "Gorgonzola, ricotta, mozzarella, taleggio", cal: "700 CAL" },
          { name: "Pastry, blueberries, lemon juice", price: "14$", desc: "Ground cumin, avocados, peeled and cubed", cal: "1000 CAL" },
          { name: "Pain au chocolat", price: "35$", desc: "Spreadable cream cheese, crumbled blue cheese", cal: "560 CAL" },
        ].map((item, index) => (
          <div key={index}>
            <div className="flex justify-between">
              <p className="text-lg lg:text-xl font-semibold">{item.name}</p>
              <p className="text-lg lg:text-xl font-semibold text-[#FF9F0D]">{item.price}</p>
            </div>
            <p>{item.desc}</p>
            <p>{item.cal}</p>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Drinks Section */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
    <div className="lg:col-span-2">
      <p className="font-bold text-[28px] lg:text-[38px] mb-4">Drinks</p>
      <div className="space-y-4">
        {[
          { name: "Caffè macchiato", price: "32$", desc: "Toasted French bread topped with romano, cheddar", cal: "560 CAL" },
          { name: "Aperol Spritz Capacianno", price: "43$", desc: "Gorgonzola, ricotta, mozzarella, taleggio", cal: "700 CAL" },
          { name: "Caffe Latte Campuri", price: "14$", desc: "Ground cumin, avocados, peeled and cubed", cal: "1000 CAL" },
          { name: "Tormentoso BushTea Pintoage", price: "35$", desc: "Spreadable cream cheese, crumbled blue cheese", cal: "560 CAL" },
        ].map((item, index) => (
          <div key={index}>
            <div className="flex justify-between">
              <p className="text-lg lg:text-xl font-semibold">{item.name}</p>
              <p className="text-lg lg:text-xl font-semibold text-[#FF9F0D]">{item.price}</p>
            </div>
            <p>{item.desc}</p>
            <p>{item.cal}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="lg:col-span-1 flex justify-center">
      <Image src="/drink.png" alt="" width={348} height={626} />
    </div>
  </div>

  {/* Partners Section */}
  <div className="text-center mt-10 text-black">
    <p className="text-lg">Partners & Clients</p>
    <p className="font-bold text-xl lg:text-3xl">We work with the best people</p>
    <div className="flex flex-wrap justify-center gap-5 lg:gap-10 mt-5">
      {["/image 2.png", "/image 60.png", "/image 56.png", "/image 58.png", "/image 57.png", "/image 59.png"].map(
        (src, index) => (
          <Image key={index} src={src} alt="" width={200} height={100} className='w-[100px]' />
        )
      )}
    </div>
  </div>
</div>


    </div>
    </>
  )
}

export default Menu