"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import Image from 'next/image';
import Link from 'next/link';

interface CartItem {
    name : string,
    description : string,
    caregory : string,
    price : number,
    image : string,
    available : boolean,
    id : number,
    quantity : number,
  }

function Page() {
      const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("");
       const [cartData, setCartData] = useState<CartItem[]>([]);
    
       useEffect(() => {
               if (typeof window !== "undefined") {
                 const storedCart = localStorage.getItem("cart");
                 if (storedCart) {
                   const parsedCart = JSON.parse(storedCart) as CartItem[];
                   parsedCart.forEach(item => {
                       if (item.quantity < 1) item.quantity = 1; // Default to 1 if quantity is invalid
                       if (item.price <= 0) item.price = 0; // Default to 0 if price is invalid
                     });
                   setCartData(parsedCart);
                 }
               }
             }, []);
    
      const handlePayment = () => {
        if (!selectedPaymentMethod) {
          alert("Please select a payment method.");
          return;
        }
      };

    useEffect(() => {
      if (typeof window !== "undefined") {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
          const parsedCart = JSON.parse(storedCart) as CartItem[];
          console.log("Parsed Cart Data:", parsedCart);
          parsedCart.forEach(item => {
            if (item.quantity < 1 || isNaN(item.quantity)) item.quantity = 1;
            if (item.price <= 0 || isNaN(item.price)) item.price = 0;
          });
          setCartData(parsedCart);
        }
      }
    }, []);
    

  return (
    <>
    <div className="bg-white">
  <Navbar />
  <Banner pageName="Checkout" />
  <div className="text-black m-6 md:m-20">
    <form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column - Shipping Address */}
        <div>
          <p className="font-bold text-xl">Shipping Address</p>
          <div className="flex flex-wrap justify-start items-center my-2">
            <p className="w-full mb-1">First Name</p>
            <input
              type="text"
              className="pl-2 h-[56px] w-full md:w-[424px] border-2"
            />
          </div>
          <div className="flex flex-wrap justify-start items-center my-2">
            <p className="w-full mb-1">Email Address</p>
            <input
              type="email"
              className="pl-2 h-[56px] w-full md:w-[424px] border-2"
            />
          </div>
          <div className="flex flex-wrap justify-start items-center my-2">
            <p className="w-full mb-1">Company</p>
            <input
              type="text"
              className="pl-2 h-[56px] w-full md:w-[424px] border-2"
            />
          </div>
          <div className="flex flex-wrap justify-start items-center my-2">
            <p className="w-full mb-1">City</p>
            <input
              type="text"
              className="pl-2 h-[56px] w-full md:w-[424px] border-2"
            />
          </div>
          <div className="flex flex-wrap justify-start items-center my-2">
            <p className="w-full mb-1">Address 1</p>
            <input
              type="text"
              className="pl-2 h-[56px] w-full md:w-[424px] border-2"
            />
          </div>
          <p className="text-2xl font-bold">Billing Address</p>
          <div className="flex items-center gap-2 my-2">
            <input type="checkbox" />
            <p>Same As Shipping Address</p>
          </div>
          <div className="flex justify-center items-center my-3 border-2 py-3">
            <Link href="/ShoppingCart">Back To Cart</Link>
          </div>
        </div>

        {/* Middle Column - Additional Info */}
        <div>
          <p className="font-bold text-xl">Shipping Address</p>
          <div className="flex flex-wrap justify-start items-center my-2">
            <p className="w-full mb-1">Last Name</p>
            <input
              type="text"
              className="pl-2 h-[56px] w-full md:w-[424px] border-2"
            />
          </div>
          <div className="flex flex-wrap justify-start items-center my-2">
            <p className="w-full mb-1">Phone Number</p>
            <input
              type="number"
              className="pl-2 h-[56px] w-full md:w-[424px] border-2"
            />
          </div>
          <div className="flex flex-wrap justify-start items-center my-2">
            <p className="w-full mb-1">Country</p>
            <input
              type="text"
              className="pl-2 h-[56px] w-full md:w-[424px] border-2"
            />
          </div>
          <div className="flex flex-wrap justify-start items-center my-2">
            <p className="w-full mb-1">Zip Code</p>
            <input
              type="text"
              className="pl-2 h-[56px] w-full md:w-[424px] border-2"
            />
          </div>
          <div className="flex flex-wrap justify-start items-center my-2">
            <p className="w-full mb-1">Address 2</p>
            <input
              type="text"
              className="pl-2 h-[56px] w-full md:w-[424px] border-2"
            />
          </div>
          <div className="md:flex hidden bg-[#FF9F0D] text-white justify-center items-center py-3 mt-6">
            <Link href={"/Payment"}>
            <button type="submit" className="w-full md:w-auto px-6">
              Proceed To Shipping
            </button>
            </Link>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div>
          {cartData.map((item, index) => (
            <div key={index} className="my-3 border-b pb-3">
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="flex justify-center items-center">
                  <Image
                    src="/cart2.png"
                    alt="Product"
                    height={88}
                    width={83}
                  />
                </div>
                <div>
                  <p className="font-bold text-base">{item.name}</p>
                  <p className="text-sm text-gray-400">{item.description.slice(0,30)}...</p>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-400">
                    $
                {item.price * item.quantity}
                .00
                    </p>
                    <p className="text-sm text-gray-400">
                      Q: {item.quantity}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="text-gray-700 mt-4">
            <div className="flex justify-between items-center my-2">
              <p>Sub-Total</p>
              <p className="text-black font-bold">
                $
                {cartData.reduce(
                        (total, item) => {
                          const quantity = item.quantity || 1;
                          return total + item.price * quantity;
                        },
                        0
                      )}
                .00
              </p>
            </div>
            <div className="flex justify-between items-center my-2">
              <p>Shipping</p>
              <p className="text-black font-bold">6.00$</p>
            </div>
            <div className="flex justify-between items-center my-2">
              <p>Discount</p>
              <p className="text-black font-bold">
              $0
                {/* {cartData.reduce(
                        (total, item) => {
                          const quantity = item.quantity || 1;
                          const subTotal = item.price * quantity;
                          return subTotal * 0.75;
                        },
                        0
                      )} */}
                .00
              </p>
            </div>
            <div className="flex justify-between items-center my-2">
              <p>Tax</p>
              <p className="text-black font-bold">
                $
                {cartData.reduce(
                        (total, item) => {
                          const quantity = item.quantity || 1;
                          return total + item.price * quantity / 100 * 15;
                        },
                        0
                      )}
                .00
              </p>
            </div>
            <hr />
            <div className="flex justify-between items-center my-2">
              <p>Total</p>
              <p className="text-black text-xl font-bold">
                $
                {cartData.reduce(
                        (total, item) => {
                          const quantity = item.quantity || 1;
                          const subTotal = item.price * quantity + 6;
                          // const discount = subTotal * 0.75;
                          const tax = item.price * quantity / 100 * 15;
                         return total + subTotal + tax;
                        },
                        0
                      )}
                .00
              </p>
            </div>
             {/* Payment Method Section */}
             <p className="font-bold text-xl mb-4">Choose a Payment Method</p>
            <div className="flex flex-wrap justify-start items-center gap-4">
              {/* Payment Options */}
              <div
                onClick={() => setSelectedPaymentMethod("Credit/Debit Card")}
                className={`p-4 border-2 rounded-lg cursor-pointer ${
                  selectedPaymentMethod === "Credit/Debit Card"
                    ? "border-blue-500"
                    : "border-gray-400"
                }`}
              >
                <p className="font-bold">Credit/Debit Card</p>
                <p className="text-sm text-gray-500">Visa, MasterCard, etc.</p>
              </div>

              <div
                onClick={() => setSelectedPaymentMethod("PayPal")}
                className={`p-4 border-2 rounded-lg cursor-pointer ${
                  selectedPaymentMethod === "PayPal"
                    ? "border-blue-500"
                    : "border-gray-400"
                }`}
              >
                <p className="font-bold">PayPal</p>
                <p className="text-sm text-gray-500">Pay securely via PayPal.</p>
              </div>

              <div
                onClick={() => setSelectedPaymentMethod("Cash on Delivery")}
                className={`p-4 border-2 rounded-lg cursor-pointer ${
                  selectedPaymentMethod === "Cash on Delivery"
                    ? "border-blue-500"
                    : "border-gray-400"
                }`}
              >
                <p className="font-bold">Cash on Delivery</p>
                <p className="text-sm text-gray-500">Pay when you receive the product.</p>
              </div>
            </div>
            <div className="flex bg-[#FF9F0D] text-white justify-center items-center py-3 mt-6 mb-5">
              <Link href={selectedPaymentMethod ? "/PaymentConfirmation" : ""}>
              <button onClick={handlePayment} type="submit" className="w-full">
                Pay
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>

    </>
  )
}

export default Page