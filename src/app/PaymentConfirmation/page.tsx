"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PaymentSuccess = () => {
  const router = useRouter(); // This comes from next/navigation in App Router.

  useEffect(() => {
    // Redirect to the homepage after a delay (optional)
    const timer = setTimeout(() => {
      router.push("/Home"); // Use the App Router's navigation function
    }, 5000); // Redirect after 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="text-center">
        {/* Checkmark animation */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-20 h-20 flex items-center justify-center bg-orange-500 rounded-full animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-12 h-12"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
        </div>

        {/* Success message */}
        <h1 className="text-3xl font-bold text-orange-500">Payment Successful!</h1>
        <p className="text-lg text-gray-300 mt-4">
          Thank you for your payment. You will be redirected shortly.
        </p>

        {/* Spinner animation */}
        <div className="mt-6 flex justify-center items-center">
          <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
