"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Loader from "../Loader/Loader";

interface formProps {
  btnTitle: string;
  isLogin?: boolean;
  apiUrl: string;
}

function Form(props: formProps) {
  const { btnTitle, isLogin = false, apiUrl } = props;
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [btnText, setBtnText] = useState(btnTitle);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const router = useRouter();

  const handleFormValueChange = (evt: React.ChangeEvent<HTMLInputElement>) =>
    setFormValues({ ...formValues, [evt.target.name]: evt.target.value });
  
  const handleFormSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setBtnText("Loading...");
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      const result = await response.json();
      if (result?.message) {
        setBtnText("Success");
        setIsRedirecting(true);
        const redirectPath = isLogin ? "/Home" : "/Home";
        router.push(redirectPath);
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
              {btnTitle}
            </p>
            <div className="flex flex-col gap-6 items-center px-4">
              <div className="relative w-full">
                <Image
                  src={"/User (1).png"}
                  alt=""
                  height={24}
                  width={24}
                  className="absolute left-4 top-3"
                />
                {!isLogin && (
                    <input
                    onChange={handleFormValueChange}
                    type="text"
                    required
                    name="username"
                    placeholder={"Enter Your Username"}
                    value={formValues.username}
                    className="w-full h-[44px] border-2 rounded px-12"
                  />
                )}
              </div>
              <div className="relative w-full">
                <Image
                  src={"/EnvelopeSimple.png"}
                  alt=""
                  height={24}
                  width={24}
                  className="absolute left-4 top-3"
                />
                <input
                    onChange={handleFormValueChange}
                    type="email"
                    name="email"
                    required
                    placeholder={"Enter Your Email"}
                    value={formValues.email}
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
                  onChange={handleFormValueChange}
                  type="password"
                  name="password"
                  required
                  placeholder={"Enter Your Password"}
                  value={formValues.password}
                  className="w-full h-[44px] border-2 rounded px-12"
                />
              </div>
            </div>
            <div className="flex items-center gap-4 px-8 py-4">
              <input type="checkbox" />
              <p className="text-sm">Remember me?</p>
            </div>
            <div className="flex justify-center px-4 mb-6 ">
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
