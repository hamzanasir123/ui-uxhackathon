"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };
  return (
    <>
      <div className="relative">
        <div className=" hidden md:block bg-transparent">
          <div className="flex justify-center bg-transparent items-center">
            <p className="font-bold text-2xl text-[#FF9F0D]">Food</p>
            <p className="font-bold text-2xl">tuck</p>
          </div>
        </div>
        <nav className="bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="md:hidden">
                    <div className="flex justify-center bg-transparent items-center">
                      <p className="font-bold text-2xl text-[#FF9F0D]">Food</p>
                      <p className="font-bold text-2xl">tuck</p>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center space-x-2">
                      <Link
                        href={"/Home"}
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
                        href={"/Blog"}
                        className=" rounded-lg p-2 font-semibold"
                      >
                        Blog
                      </Link>
                      <Link
                        href={"/Shop"}
                        className=" rounded-lg p-2 font-semibold"
                      >
                        Shop
                      </Link>
                      <Link
                        href={"/ShopDetails"}
                        className=" rounded-lg p-2 font-semibold"
                      >
                        Shop Details
                      </Link>
                      <Link
                        href={"/ShoppingCart"}
                        className=" rounded-lg p-2 font-semibold"
                      >
                        Shopping Cart
                      </Link>
                      <Link
                        href={"/Signin"}
                        className=" rounded-lg p-2 font-semibold"
                      >
                        Sign In
                      </Link>
                      <Link
                        href={"/SignUp"}
                        className=" rounded-lg p-2 font-semibold"
                      >
                        Sign Up
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="relative ml-4 flex items-center space-x-4">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-[310px]  relative h-[54px] rounded-[27px] p-2 text-center  border-[#FF9F0D] border-2 bg-transparent text-xl  "
                  />
                  <Image
                    src={"/Vector (7).png"}
                    alt="Search.."
                    width={24}
                    height={24}
                    className="absolute"
                  />
                  <Link href={"/CheckoutPage"}>
                  <Image
                    src={"/Handbag.png"}
                    alt="Cart"
                    width={24}
                    height={24}
                    className=""
                  />
                  </Link>
                </div>
              </div>
              <div className="md:hidden flex items-center">
                <button
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white
          focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={toggleNavbar}
                >
                  {isClick ? (
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
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
                        href={"/Home"}
                        className="block text-center rounded-lg p-2 font-semibold"
                      >
                        Home
                      </Link>
                      <Link
                        href={"/Menu"}
                        className="block rounded-lg p-2 text-center font-semibold"
                      >
                        Menu
                      </Link>
                      <Link
                        href={"/Blog"}
                        className="block rounded-lg text-center p-2 font-semibold"
                      >
                        Blog
                      </Link>
                      <Link
                        href={"/Shop"}
                        className="block text-center rounded-lg p-2 font-semibold"
                      >
                        Shop
                      </Link>
                      <Link
                        href={"#AboutUs"}
                        className="block rounded-lg text-center p-2 font-semibold"
                      >
                        About
                      </Link>
                      <Link
                        href={"/ShoppingCart"}
                        className="block text-center rounded-lg p-2 font-semibold"
                      >
                        Shopping Cart
                      </Link>
                      <Link
                        href={"/Signin"}
                        className="block text-center rounded-lg p-2 font-semibold"
                      >
                        Sign In
                      </Link>
                      <Link
                        href={"/SignUp"}
                        className="block text-center rounded-lg p-2 font-semibold"
                      >
                        Sign Up
                      </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

export default Header;
