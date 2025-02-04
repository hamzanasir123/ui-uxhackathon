"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Loader from "../Components/Loader/Loader";
import Cookies from "js-cookie";


function Form() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  const router = useRouter();
   const [btnText, setBtnText] = useState("Login");
    const [isRedirecting, setIsRedirecting] = useState(false);

  const AUTH_EMAIL = "hk435981@gmail.com";
  const AUTH_PASSWORD = "Abdul@666";
  
  const handleFormSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setBtnText("Loading...");
    try {
        {
        if (email === AUTH_EMAIL && password === AUTH_PASSWORD) {
            Cookies.set("authorSession", "authorized", { expires: 1 });
            setIsRedirecting(true);
            router.push("/Dashboard"); // Redirect to Dashboard
          } else {
            setError("Invalid email or password");
            setBtnText("Login")
          }
        }
    } catch (error) {
      setBtnText("Something went wrong");
    } finally {
    }
  };

  if (isRedirecting) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader/>
        </div>
    )
  }

  return (
    <>
    <form onSubmit={handleFormSubmit}>
    <div className="bg-[#E0E0E0] text-black min-h-screen flex justify-center items-center p-4">
          <div className="w-full max-w-[424px] bg-white rounded shadow-md">
            <p className="font-bold text-2xl text-black text-center py-10">
              Admin Login
            </p>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="flex flex-col gap-6 items-center px-4">
              <div className="relative w-full">
                <Image
                  src={"/EnvelopeSimple.png"}
                  alt=""
                  height={24}
                  width={24}
                  className="absolute left-4 top-3"
                />
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    required
                    placeholder={"Enter Your Email"}
                    value={email}
                  className="w-full h-[44px] border-2 rounded px-12"
                />
              </div>
              <div className="relative w-full">
                <Image
                  src={"/Lock.png"}
                  alt=""
                  height={24}
                  width={24}
                  className="absolute left-4 top-3"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  required
                  placeholder={"Enter Your Password"}
                  value={password}
                  className="w-full h-[44px] border-2 rounded px-12"
                />
              </div>
            </div>
            <div className="flex justify-center px-4 my-6 ">
              <button type="submit"
                className="w-full text-center p-2 max-w-[360px] h-[44px] bg-[#FF9F0D] text-white rounded"
              >
                {isRedirecting ?  "Redirecting..." : btnText}
              </button>
            </div>
          </div>
        </div>
        </form>
    </>
  );
}

export default Form;
