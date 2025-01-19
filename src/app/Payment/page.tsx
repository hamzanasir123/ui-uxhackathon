"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/Banner/Banner";

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

function Payment() {
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
    alert(`Your payment via ${selectedPaymentMethod} has been confirmed!`);
  };


  return (
    <>
      <div className="bg-white">
        <Navbar />
        <Banner pageName="Payment Method" />
        <div className="text-black m-6 md:m-20">
          <div className="grid grid-cols-1 gap-6">
            {/* Order Details Section */}
            <div className="mb-8">
              <p className="font-bold text-xl mb-4">Order Details</p>
              <div className="border border-gray-300 rounded-lg p-4">
                {cartData.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b border-gray-200 py-3"
                  >
                    <div>
                      <p className="font-medium text-lg">{item.name}</p>
                      <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-medium text-lg">{item.price * item.quantity}</p>
                  </div>
                ))}

                {/* Total Amount */}
                <div className="flex justify-between items-center my-2">
              <p className="font-medium text-lg">Sub-Total</p>
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
              <p className="font-medium text-lg">Shipping</p>
              <p className="text-black font-bold">6.00$</p>
            </div>
            <div className="flex justify-between items-center my-2">
              <p className="font-medium text-lg">Discount</p>
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
              <p className="font-medium text-lg">Tax</p>
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
              <p className="font-medium text-2xl">Total</p>
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
              </div>
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

            {/* Payment Button */}
            <div className="flex justify-start items-center mt-6">
              <button
                onClick={handlePayment}
                className="bg-[#FF9F0D] text-white py-3 px-6 rounded-lg hover:bg-[#e88b0b]"
              >
                Pay
              </button>
            </div>

            {/* Go Back Link */}
            <div className="flex justify-start items-center mt-4">
              <button className="text-blue-500 underline">
                <a href="/CheckoutPage">Back to Checkout</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
