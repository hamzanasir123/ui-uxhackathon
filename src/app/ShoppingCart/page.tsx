"use client"
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/Banner/Banner";
import Image from "next/image";

interface CartItem {
  id: number;
  name: string;
  Description: string;
  Price: number;
  image: string;
  slug: string;
  quantity: number;
}

function Page() {
  const [cartData, setCartData] = useState<CartItem[]>([]);

  // Function to handle quantity change for a specific item
  const handleQuantityChange = (index: number, newQuantity: number) => {
    if (newQuantity < 1) return; // Prevent quantity from going below 1
    const updatedCartData = [...cartData];
    updatedCartData[index].quantity = Number(newQuantity) || 0;
    setCartData(updatedCartData);
    localStorage.setItem("cart", JSON.stringify(updatedCartData)); // Update localStorage
  };

  // Remove item from cart
  const removeFromCart = (id: number) => {
    const updatedCart = cartData.filter((item) => item.id !== id);
    setCartData(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
    if (updatedCart.length === 0) {
      localStorage.removeItem("cart"); // Clear storage if cart is empty
    }
  };

  // Fetch cart data from localStorage on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart) as CartItem[];
        console.log("Parsed Cart Data:", parsedCart); 
        setCartData(parsedCart);
      }
    }
  }, []);
  

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <Banner pageName="Shopping Cart" />
        <div className="text-black md:mx-[100px] my-[70px]">
          <div className="md:mx-10 mx-4 my-4">
            {cartData.length > 0 ? (
              cartData.map((item, index) => (
                <div key={item.id} className="flex md:gap-[170px] gap-4">
                  {/* Product Section */}
                  <div>
                    <p className="font-bold text-lg">Product</p>
                    <div className="grid grid-cols-2 my-3 gap-3">
                      <Image src={"/cart2.png"} alt="item" width={93} height={97} />
                      <div>
                        <p className="font-bold">{item.name}</p>
                        <Image
                          src={"/star.png"}
                          alt="item"
                          width={116}
                          height={20}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Price Section */}
                  <div>
                    <p className="font-bold text-lg">Price</p>
                    <p className="my-6">${item.Price}.00</p>
                  </div>
                  {/* Quantity Section */}
                  <div className="hidden md:block">
                    <p className="font-bold text-lg">Quantity</p>
                    <div className="grid grid-cols-3 my-6 border border-gray-400">
                      <button
                        onClick={() => handleQuantityChange(index, item.quantity - 1)}
                        className="flex justify-center px-2 items-center border-r border-gray-400"
                      >
                        -
                      </button>
                      <p className="flex justify-center items-center">{item.quantity || 1}</p>
                      <button
                        onClick={() => handleQuantityChange(index, item.quantity + 1)}
                        className="flex justify-center items-center border-l border-gray-400"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  {/* Total Section */}
                  <div className="hidden md:block">
                    <p className="font-bold text-lg">Total</p>
                    <p className="my-6">${item.Price * item.quantity || item.Price}.00</p>
                  </div>
                  {/* Remove Button */}
                  <button onClick={() => removeFromCart(item.id)}>
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
                  </button>
                </div>
              ))
            ) : (
              <h1 className="text-center text-2xl font-black text-black">
                There Is No Item In This Cart!
              </h1>
            )}
          </div>
        </div>
        {/* Total Bill Section */}
        <div className="md:h-[450px] md:mx-[100px] mx-[20px] my-[70px] text-black">
          <div className="grid md:grid-cols-2">
            {/* Coupon Code Section */}
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
                      type="text"
                      placeholder="Enter Here code"
                      className="p-4 h-[56px] w-full"
                    />
                    <button className="h-[56px] w-[163px] text-white bg-[#FF9F0D]">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Total Amount Section */}
            <div>
              <p className="font-bold text-3xl">Total Bill</p>
              <div className="md:h-[188px] border-2 border-[#C4C4C4] rounded-[6px] my-6">
                <div className="m-6">
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-xl">Cart Subtotal</p>
                    <p className="font-bold text-lg">
                      $
                      {cartData.reduce(
                        (total, item) => total + item.Price * item.quantity,
                        0
                      )}
                      .00
                    </p>
                  </div>
                  <div className="my-2 flex justify-between items-center">
                    <p className="text-[#4F4F4F]">Shipping Charge</p>
                    <p className="text-[#4F4F4F]">$00.00</p>
                  </div>
                </div>
                <hr />
                <div className="m-6 flex justify-between items-center">
                  <p className="font-bold text-xl">Total Amount</p>
                  <p className="font-bold text-lg">
                    $
                    {cartData.reduce(
                      (total, item) => total + item.Price * item.quantity,
                      0
                    )}
                    .00
                  </p>
                </div>
              </div>
              <button className="h-[64px] bg-[#FF9F0D] w-full my-4 text-white">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
