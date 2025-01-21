"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/Banner/Banner";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

interface CartItem {
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  available: boolean;
  id: number;
  quantity?: number;
}

function Page() {
  const [cartData, setCartData] = useState<CartItem[]>([]); // Removed quantity from here
  const [quantityData, setQuantityData] = useState<{ [key: number]: number }>(
    {}
  ); // New state to manage quantities
  const [discountCode, setDiscountCode] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCartData(JSON.parse(storedCart));
      } else {
        setCartData([]); // Default to an empty array if no cart data exists
      }
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart) as CartItem[];
        parsedCart.forEach((item) => {
          if (!quantityData[item.id]) {
            setQuantityData((prev) => ({ ...prev, [item.id]: 1 })); // Initialize quantity to 1 if not present
          }
        });
        console.log("Cart data after loading from localStorage:", parsedCart);
        setCartData(parsedCart);
      }
    }
  }, [quantityData]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart) as CartItem[];

        // Initialize `quantityData` with saved quantities
        const savedQuantities = parsedCart.reduce(
          (acc, item) => {
            acc[item.id] = item.quantity || 1; // Default to 1 if no quantity is saved
            return acc;
          },
          {} as { [key: number]: number }
        );

        setCartData(parsedCart);
        setQuantityData(savedQuantities);
      }
    }
  }, []);

  useEffect(() => {
    // Calculate total amount every time the cartData or quantityData changes
    const subtotal = cartData.reduce((total, item) => {
      const quantity = quantityData[item.id] || 1; // Use the quantity from state
      return total + item.price * quantity;
    }, 0);
    setTotalAmount(subtotal);
    setFinalAmount(subtotal);
  }, [cartData, quantityData]);

  const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountCode(event.target.value);
  };

  const handleApplyDiscount = () => {
    if (discountCode === "HAMZA25") {
      const discountedAmount = totalAmount * 0.75; // Apply 25% discount
      setFinalAmount(discountedAmount);
    } else {
      setFinalAmount(totalAmount); // If code is not valid, keep the original amount
    }
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return; // Prevent quantity from going below 1

    // Update the state
    setQuantityData((prevQuantityData) => {
      const updatedQuantityData = { ...prevQuantityData, [id]: newQuantity };

      // Update `cartData` with the new quantities
      const updatedCart = cartData.map((item) =>
        item.id === id ? { ...item, quantity: updatedQuantityData[id] } : item
      );

      // Save updated cart to `localStorage`
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return updatedQuantityData;
    });
  };

  const removeFromCart = (id: number) => {
    const updatedCart = cartData.filter((item) => item.id !== id);
    setCartData(updatedCart);
    setQuantityData((prev) => {
      const { [id]: _, ...rest } = prev; // Remove the quantity entry for the removed item
      return rest;
    });

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    if (updatedCart.length === 0) {
      localStorage.removeItem("cart"); // Clear storage if cart is empty
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <Banner pageName="Shopping Cart" />
        <div className="text-black md:mx-[100px] my-[70px]">
          <div className="md:mx-10 mx-4 my-4">
            {cartData.length > 0 ? (
              cartData.map((item) => (
                <div key={item.id} className="flex md:gap-[170px] gap-4">
                  {/* Product Section */}
                  <div>
                    <p className="font-bold text-lg">Product</p>
                    <div className="grid grid-cols-2 my-3 gap-3">
                      {/* Dynamic Image */}
                      <Image
                        src={urlFor(item.image).url()} // Using dynamic image from the item object
                        alt={item.name}
                        width={93}
                        height={97}
                        className=""
                      />
                      <div>
                        <p className="font-bold">{item.name}</p>
                        <Image
                          src="/star.png"
                          alt="rating"
                          width={116}
                          height={20}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Price Section */}
                  <div>
                    <p className="font-bold text-lg">Price</p>
                    <p className="my-6">${item.price}.00</p>
                  </div>
                  {/* Quantity Section */}
                  <div className="">
                    <p className="font-bold text-lg">Quantity</p>
                    <div className="grid grid-cols-3 my-6 border border-gray-400">
                      <button
                        onClick={() =>
                          handleQuantityChange(
                            item.id,
                            (quantityData[item.id] || 1) - 1
                          )
                        }
                        className="flex justify-center px-2 items-center border-r border-gray-400"
                      >
                        -
                      </button>
                      <p className="flex justify-center items-center">
                        {quantityData[item.id] || 1}
                      </p>
                      <button
                        onClick={() =>
                          handleQuantityChange(
                            item.id,
                            (quantityData[item.id] || 1) + 1
                          )
                        }
                        className="flex justify-center items-center border-l border-gray-400"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  {/* Total Section */}
                  <div className="hidden md:block">
                    <p className="font-bold text-lg">Total</p>
                    <p className="my-6">
                      ${item.price * (quantityData[item.id] || 1)}.00
                    </p>
                  </div>
                  {/* Remove Button */}
                  <button onClick={() => removeFromCart(item.id)}>
                    <div>
                      <p className="font-bold text-lg">Remove</p>
                      <Image
                        src="/X.png"
                        alt="remove"
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
                    Apply Code HAMZA25 for 25% Discount.
                  </p>
                  <div className="flex mt-4 border-2">
                    <input
                      type="text"
                      placeholder="Enter Here code"
                      className="p-4 h-[56px] w-full"
                      value={discountCode}
                      onChange={handleCodeChange}
                    />
                    <button
                      className="h-[56px] w-[163px] text-white bg-[#FF9F0D]"
                      onClick={handleApplyDiscount}
                    >
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
                    <p className="font-bold text-lg">${totalAmount}.00</p>
                  </div>
                  <div className="my-2 flex justify-between items-center">
                    <p className="text-[#4F4F4F]">Shipping Charge</p>
                    <p className="text-[#4F4F4F]">$6.00</p>
                  </div>
                </div>
                <hr />
                <div className="m-6 flex justify-between items-center">
                  <p className="font-bold text-xl">Total</p>
                  <p className="font-bold text-lg">${finalAmount + 6}.00</p>
                </div>
              </div>
              <Link href="/CheckoutPage">
                <button className="bg-[#FF9F0D] text-white p-4 rounded-[6px] w-full mt-6">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
