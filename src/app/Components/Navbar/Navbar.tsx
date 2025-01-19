"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface CartItem {
  id: number;
}


function Navbar(props:any) {
    const [isClick, setIsClick] = useState(false);
    const [cartStorage, setCartStorage] = useState<CartItem[]>([]);
    const [cartNumber, setCartNumber] = useState(cartStorage.length);
    const [cartItem, setCartItem] = useState<any[]>(cartStorage);

    useEffect(() => {
      if (typeof window !== "undefined") {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
          const parsedCart = JSON.parse(storedCart) as CartItem[];
          setCartStorage(parsedCart);
        }
      }
    }, []);
    useEffect(() => {
      if (props.cartData) {
        if (cartNumber) {
          const localCartItem = cartItem;
          localCartItem.push(JSON.parse(JSON.stringify(props.cartData)));
          setCartItem(localCartItem);
          setCartNumber(cartNumber + 1);
          localStorage.setItem("cart", JSON.stringify(localCartItem));
        } else {
          setCartNumber(cartNumber + 1);
          setCartItem([props.cartData]);
          localStorage.setItem("cart", JSON.stringify([props.cartData]));
        }
      }
    }, [props.cartData, props.removeCartData, props.cartItem, props.cartNumber]);
  
    useEffect(() => {
      if (props.removeCartData) {
        const localCartItem = cartItem.filter((item: any) => {
          return item.id != props.removeCartData;
        });
        setCartItem(localCartItem);
        setCartNumber(cartNumber - 1);
        localStorage.setItem("cart", JSON.stringify(localCartItem));
        if (localCartItem.length == 0) {
          localStorage.removeItem("cart");
        }
      }
    }, [props.removeCartData, props.cartData, props.cartItem, props.cartNumber]);


    const toggleNavbar = () => {
      setIsClick((prev) => !prev);
    };
  return (
    <>
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
                    ShoppingCart
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
                  <Link href={""}>
            <Image src={"/MagnifyingGlass.png"} className='ml-[200px]' alt='' width={24} height={24}/>
            </Link>
            <Link href={""}>
            <Image src={"/User.png"} alt='' width={24} height={24}/>
            </Link>
            <Link href={ cartNumber ? "/ShoppingCart" : "#"} className="flex ">
            <Image src={"/Tote.png"} alt='' width={24} height={24}/>
            ({cartNumber ? cartNumber : 0})
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
                    href={"/Home"}
                    className="block text-center rounded-lg p-2 font-semibold"
                  >
                    Home
                  </Link>
                  <Link
                    href={"/Menu"}
                    className="block text-center rounded-lg p-2 font-semibold"
                  >
                    Menu
                  </Link>
                  <Link
                    href={"/Blog"}
                    className="block text-center rounded-lg p-2 font-semibold"
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
                    href={"/ShopDetails"}
                    className="block text-center rounded-lg p-2 font-semibold"
                  >
                    Shop Details
                  </Link>
                  <Link
                    href={cartNumber ? "/ShoppingCart" : "#"}
                    className="block text-center rounded-lg p-2 font-semibold"
                  >
                    ShoppingCart({cartNumber ? cartNumber : 0})
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
    </>
  )
}

export default Navbar