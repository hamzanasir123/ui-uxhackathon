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

    <div className='grid grid-cols-4 m-10 p-4 text-black'>
        <div className='col-span-3'>
            <div className='flex flex-wrap gap-5'>
                <div>
                    <Image src={"/shop1.png"} alt='' width={262} height={267}/>
                    <p className='font-bold text-lg'>Fresh Lime</p>
                    <div className='flex gap-2'>
                        <p className='text-[#FF9F0D]'>$38.00</p>
                        <p className='line-through text-gray-400'>$45.00</p>
                    </div>
                </div>
                <div>
                    <Image src={"/shop2.png"} alt='' width={262} height={267}/>
                    <p className='font-bold text-lg'>Chocolate Muffin</p>
                    <div className='flex gap-2'>
                        <p className='text-[#FF9F0D]'>$28.00</p>
                        {/* <p className='line-through'>$45.00</p> */}
                    </div>
                </div>
                <div>
                    <Image src={"/shop3.png"} alt='' width={262} height={267}/>
                    <p className='font-bold text-lg'>Burger</p>
                    <div className='flex gap-2'>
                        <p className='text-[#FF9F0D]'>$21.00</p>
                        <p className='line-through text-gray-400'>$45.00</p>
                    </div>
                </div>
                <div>
                    <Image src={"/shop4.png"} alt='' width={262} height={267}/>
                    <p className='font-bold text-lg'>Country Burger</p>
                    <div className='flex gap-2'>
                        <p className='text-[#FF9F0D]'>$45.00</p>
                        {/* <p className='line-through'>$45.00</p> */}
                    </div>
                </div>
                <div>
                    <Image src={"/shop5.png"} alt='' width={262} height={267}/>
                    <p className='font-bold text-lg'>Drink</p>
                    <div className='flex gap-2'>
                        <p className='text-[#FF9F0D]'>$23.00</p>
                        <p className='line-through text-gray-400'>$45.00</p>
                    </div>
                </div>
                <div>
                    <Image src={"/shop6.png"} alt='' width={262} height={267}/>
                    <p className='font-bold text-lg'>Pizza</p>
                    <div className='flex gap-2'>
                        <p className='text-[#FF9F0D]'>$43.00</p>
                        {/* <p className='line-through'>$45.00</p> */}
                    </div>
                </div>
                <div>
                    <Image src={"/shop7.png"} alt='' width={262} height={267}/>
                    <p className='font-bold text-lg'>Cheese Butter</p>
                    <div className='flex gap-2'>
                        <p className='text-[#FF9F0D]'>$10.00</p>
                        {/* <p className='line-through'>$45.00</p> */}
                    </div>
                </div>
                <div>
                    <Image src={"/shop8.png"} alt='' width={262} height={267}/>
                    <p className='font-bold text-lg'>Sandwiches</p>
                    <div className='flex gap-2'>
                        <p className='text-[#FF9F0D]'>$25.00</p>
                        {/* <p className='line-through'>$45.00</p> */}
                    </div>
                </div>
                <div>
                    <Image src={"/shop9.png"} alt='' width={262} height={267}/>
                    <p className='font-bold text-lg'>Chicken Chup</p>
                    <div className='flex gap-2'>
                        <p className='text-[#FF9F0D]'>$12.00</p>
                        {/* <p className='line-through'>$45.00</p> */}
                    </div>
                </div>
                <div>
                    <Image src={"/shop1.png"} alt='' width={262} height={267}/>
                    <p className='font-bold text-lg'>Fresh Lime</p>
                    <div className='flex gap-2'>
                        <p className='text-[#FF9F0D]'>$38.00</p>
                        <p className='line-through text-gray-400'>$45.00</p>
                    </div>
                </div>
                <div>
                    <Image src={"/shop2.png"} alt='' width={262} height={267}/>
                    <p className='font-bold text-lg'>Chocolate Muffin</p>
                    <div className='flex gap-2'>
                        <p className='text-[#FF9F0D]'>$28.00</p>
                        {/* <p className='line-through'>$45.00</p> */}
                    </div>
                </div>
                <div>
                    <Image src={"/shop3.png"} alt='' width={262} height={267}/>
                    <p className='font-bold text-lg'>Burger</p>
                    <div className='flex gap-2'>
                        <p className='text-[#FF9F0D]'>$21.00</p>
                        <p className='line-through text-gray-400'>$45.00</p>
                    </div>
                </div>
                <div>
                    <Image src={"/shop4.png"} alt='' width={262} height={267}/>
                    <p className='font-bold text-lg'>Country Burger</p>
                    <div className='flex gap-2'>
                        <p className='text-[#FF9F0D]'>$45.00</p>
                        {/* <p className='line-through'>$45.00</p> */}
                    </div>
                </div>
                <div>
                    <Image src={"/shop5.png"} alt='' width={262} height={267}/>
                    <p className='font-bold text-lg'>Drink</p>
                    <div className='flex gap-2'>
                        <p className='text-[#FF9F0D]'>$23.00</p>
                        <p className='line-through text-gray-400'>$45.00</p>
                    </div>
                </div>
                <div>
                    <Image src={"/shop6.png"} alt='' width={262} height={267}/>
                    <p className='font-bold text-lg'>Pizza</p>
                    <div className='flex gap-2'>
                        <p className='text-[#FF9F0D]'>$43.00</p>
                        {/* <p className='line-through'>$45.00</p> */}
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='m-4 text-black flex'>
                <input type='text' placeholder='Search Product' className='p-4 bg-[#FF9F0D] bg-opacity-50 text-black h-[46px]'/>
                <div className='flex justify-center items-center w-[46px] h-[46px] bg-[#FF9F0D]'>
                    <Image src={"/Vector (7).png"} alt='' width={20} height={20}/>
                </div>
            </div>
                <p className='font-bold ml-4 text-xl'>Category</p>
                <div className='flex m-4 gap-2'>
                    <input type='checkbox'/>
                    <p>Sandwiches</p>
                </div>
                <div className='flex m-4 gap-2'>
                    <input type='checkbox'/>
                    <p>Burger</p>
                </div>
                <div className='flex m-4 gap-2'>
                    <input type='checkbox'/>
                    <p>Chicken Chup</p>
                </div>
                <div className='flex m-4 gap-2'>
                    <input type='checkbox'/>
                    <p>Drink</p>
                </div>
                <div className='flex m-4 gap-2'>
                    <input type='checkbox'/>
                    <p>Pizza</p>
                </div>
                <div className='flex m-4 gap-2'>
                    <input type='checkbox'/>
                    <p>Thi</p>
                </div>
                <div className='flex m-4 gap-2'>
                    <input type='checkbox'/>
                    <p>Non Veg</p>
                </div>
                <div className='flex m-4 gap-2'>
                    <input type='checkbox'/>
                    <p>Uncategorized</p>
                </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default page