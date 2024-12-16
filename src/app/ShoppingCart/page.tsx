import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/Banner/Banner";
import Image from "next/image";

function page() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <Banner pageName="Shopping Cart" />
        <div className="text-black md:mx-[100px] my-[70px]">
          <div className="flex md:mx-10 mx-4 my-4">
            <div className="flex md:gap-[170px] gap-4">
              <div className="">
                <p className="font-bold text-lg">Product</p>
                <div className="grid grid-cols-2 my-3 gap-3">
                  <Image src={"/cart2.png"} alt="item" width={93} height={97} />
                  <div>
                    <p className="font-bold">Burger</p>
                    <Image
                      src={"/star.png"}
                      alt="item"
                      width={116}
                      height={20}
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="font-bold text-lg">Price</p>
                <p className="my-6">$35.00</p>
              </div>
              <div className="hidden md:block">
                <p className="font-bold text-lg">Quantity</p>
                <div className="grid grid-cols-3 my-6  border border-gray-400">
                  <button className="flex justify-center px-2 items-center border-r border-gray-400">
                    -
                  </button>
                  <p className="flex justify-center items-center">1</p>
                  <button className="flex justify-center items-center border-l border-gray-400">
                    +
                  </button>
                </div>
              </div>
              <div className="hidden md:block">
                <p className="font-bold text-lg">Total</p>
                <p className="my-6">$221.00</p>
              </div>
              <div>
                <p className="font-bold text-lg">Remove</p>
                <Image
                  src={"/X.png"}
                  alt="item"
                  width={20}
                  height={20}
                  className="my-6 ml-6"
                />
              </div>
            </div>
          </div>
          <hr />
          <hr />
          <div className="flex md:mx-10 mx-4 my-4">
            <div className="flex md:gap-[170px] gap-4">
              <div className="">
                <p className="font-bold text-lg">Product</p>
                <div className="grid grid-cols-2 my-3 gap-3">
                  <Image src={"/cart3.png"} alt="item" width={93} height={97} />
                  <div>
                    <p className="font-bold">Fresh Lime</p>
                    <Image
                      src={"/star.png"}
                      alt="item"
                      width={116}
                      height={20}
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="font-bold text-lg">Price</p>
                <p className="my-6">$25.00</p>
              </div>
              <div className="hidden md:block">
                <p className="font-bold text-lg">Quantity</p>
                <div className="grid grid-cols-3 my-6  border border-gray-400">
                  <button className="flex justify-center px-2 items-center border-r border-gray-400">
                    -
                  </button>
                  <p className="flex justify-center items-center">1</p>
                  <button className="flex justify-center items-center border-l border-gray-400">
                    +
                  </button>
                </div>
              </div>
              <div className="hidden md:block">
                <p className="font-bold text-lg">Total</p>
                <p className="my-6">$551.00</p>
              </div>
              <div>
                <p className="font-bold text-lg">Remove</p>
                <Image
                  src={"/X.png"}
                  alt="item"
                  width={20}
                  height={20}
                  className="my-6 ml-6"
                />
              </div>
            </div>
          </div>
          <hr />
          <hr />
          <div className="flex md:mx-10 mx-4 my-4">
            <div className="flex md:gap-[170px] gap-4">
              <div className="">
                <p className="font-bold text-lg">Product</p>
                <div className="grid grid-cols-2 my-3 gap-3">
                  <Image src={"/cart1.png"} alt="item" width={93} height={97} />
                  <div>
                    <p className="font-bold">Pizza</p>
                    <Image
                      src={"/star.png"}
                      alt="item"
                      width={116}
                      height={20}
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="font-bold text-lg">Price</p>
                <p className="my-6">$15.00</p>
              </div>
              <div className="hidden md:block">
                <p className="font-bold text-lg">Quantity</p>
                <div className="grid grid-cols-3 my-6  border border-gray-400">
                  <button className="flex justify-center px-2 items-center border-r border-gray-400">
                    -
                  </button>
                  <p className="flex justify-center items-center">1</p>
                  <button className="flex justify-center items-center border-l border-gray-400">
                    +
                  </button>
                </div>
              </div>
              <div className="hidden md:block">
                <p className="font-bold text-lg">Total</p>
                <p className="my-6">$421.00</p>
              </div>
              <div>
                <p className="font-bold text-lg">Remove</p>
                <Image
                  src={"/X.png"}
                  alt="item"
                  width={20}
                  height={20}
                  className="my-6 ml-6"
                />
              </div>
            </div>
          </div>
          <hr />
          <hr />
          <div className="flex md:mx-10 mx-4 my-4">
            <div className="flex md:gap-[170px] gap-4">
              <div className="">
                <p className="font-bold text-lg">Product</p>
                <div className="grid grid-cols-2 my-3 gap-3">
                  <Image src={"/cart4.png"} alt="item" width={93} height={97} />
                  <div>
                    <p className="font-bold">Chocolate Muffin</p>
                    <Image
                      src={"/star.png"}
                      alt="item"
                      width={116}
                      height={20}
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="font-bold text-lg">Price</p>
                <p className="my-6">$45.00</p>
              </div>
              <div className="hidden md:block">
                <p className="font-bold text-lg">Quantity</p>
                <div className="grid grid-cols-3 my-6  border border-gray-400">
                  <button className="flex justify-center px-2 items-center border-r border-gray-400">
                    -
                  </button>
                  <p className="flex justify-center items-center">1</p>
                  <button className="flex justify-center items-center border-l border-gray-400">
                    +
                  </button>
                </div>
              </div>
              <div className="hidden md:block">
                <p className="font-bold text-lg">Total</p>
                <p className="my-6">$521.00</p>
              </div>
              <div>
                <p className="font-bold text-lg">Remove</p>
                <Image
                  src={"/X.png"}
                  alt="item"
                  width={20}
                  height={20}
                  className="my-6 ml-6"
                />
              </div>
            </div>
          </div>
          <hr />
          <hr />
          <div className="flex md:mx-10 mx-4 my-4">
            <div className="flex md:gap-[170px] gap-4">
              <div className="">
                <p className="font-bold text-lg">Product</p>
                <div className="grid grid-cols-2 my-3 gap-3">
                  <Image src={"/cart5.png"} alt="item" width={93} height={97} />
                  <div>
                    <p className="font-bold">Cheese Butter</p>
                    <Image
                      src={"/star.png"}
                      alt="item"
                      width={116}
                      height={20}
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="font-bold text-lg">Price</p>
                <p className="my-6">$15.00</p>
              </div>
              <div className="hidden md:block">
                <p className="font-bold text-lg">Quantity</p>
                <div className="grid grid-cols-3 my-6  border border-gray-400">
                  <button className="flex justify-center px-2 items-center border-r border-gray-400">
                    -
                  </button>
                  <p className="flex justify-center items-center">1</p>
                  <button className="flex justify-center items-center border-l border-gray-400">
                    +
                  </button>
                </div>
              </div>
              <div className="hidden md:block">
                <p className="font-bold text-lg">Total</p>
                <p className="my-6">$325.00</p>
              </div>
              <div>
                <p className="font-bold text-lg">Remove</p>
                <Image
                  src={"/X.png"}
                  alt="item"
                  width={20}
                  height={20}
                  className="my-6 ml-6"
                />
              </div>
            </div>
          </div>
          <hr />
          <hr />
        </div>
        <div className="md:h-[450px] md:mx-[100px] mx-[20px] my-[70px] text-black">
          <div className="grid md:grid-cols-2 ">
            <div>
              <p className="font-bold text-3xl">Coupon Code</p>
              <div className="md:h-[188px] border-2 border-[#C4C4C4] rounded-[6px] my-6 md:mr-6">
                <div className="m-6">
                  <p className="text-[#828282]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque diam pellentesque bibendum non
                  </p>
                  <div className="flex mt-4 border-2">
                    <input
                      type="email"
                      placeholder="Enter Here code"
                      className=" p-4 h-[56px] w-full "
                    />
                    <button className="h-[56px] w-[163px]  text-white bg-[#FF9F0D]">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
            <p className="font-bold text-3xl">Total Bill</p>
              <div className="md:h-[188px] border-2 border-[#C4C4C4] rounded-[6px] my-6 ">
                <div className="m-6">
                 <div className="flex justify-between items-center">
                      <p className="font-bold text-xl">Cart Subtotal</p>
                      <p className="font-bold text-lg">$120.00</p>
                 </div>
                 <div className="my-2 flex justify-between items-center">
                      <p className="text-[#4F4F4F]">Shipping Charge</p>
                      <p className="text-[#4F4F4F]">$00.00</p>
                 </div>
                  </div>
                  <hr/>
                  <hr/>
                  <div className="m-6 flex justify-between items-center">
                      <p className="font-bold text-xl">Total Amount</p>
                      <p className="font-bold text-lg">$205.00</p>
                 </div>
                </div>
                <button className="h-[64px] bg-[#FF9F0D] w-full my-4  text-white">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default page;
