import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Image from 'next/image'
import Link from 'next/link'

function page() {
  return (
    <>
    <Navbar/>
    <div>
  <div className="relative h-[310px] md:h-[300px] lg:h-[300px]">
    <div className="absolute inset-0 bg-[url('/bgimg4.png')] bg-cover bg-center md:bg-top lg:bg-cover"></div>
    <div className="relative">
      <div className="flex justify-center items-center">
        <p className="font-bold text-[28px] md:text-[38px] lg:text-[48px] mt-12 md:mt-16">Sign in page</p>
      </div>
      <div className="flex justify-center items-center gap-2 mt-2 md:mt-4">
        <Link href={"/"} className="text-sm md:text-base lg:text-lg">
          Home
        </Link>
        {/* <Image src={"/Vector (9).png"} alt="Arrow" width={5} height={10} /> */}
        <p className="text-[#FF9F0D] text-sm md:text-base lg:text-lg">Sign up</p>
      </div>
    </div>
  </div>
</div>

<div className="bg-[#E0E0E0] text-black min-h-screen flex justify-center items-center p-4">
  <div className="w-full max-w-[424px] bg-white rounded shadow-md">
    <p className="font-bold text-2xl text-black text-center py-10">Sign in</p>
    <div className="flex flex-col gap-6 items-center px-4">
      <div className="relative w-full">
        <Image src={"/User (1).png"} alt="" height={24} width={24} className="absolute left-4 top-3" />
        <input type="text" placeholder="Name" className="w-full h-[44px] border-2 rounded px-12" />
      </div>
      <div className="relative w-full">
        <Image src={"/EnvelopeSimple.png"} alt="" height={24} width={24} className="absolute left-4 top-3" />
        <input type="text" placeholder="Email" className="w-full h-[44px] border-2 rounded px-12" />
      </div>
      <div className="relative w-full">
        <Image src={"/Lock.png"} alt="" height={24} width={24} className="absolute left-4 top-3" />
        <input type="password" placeholder="Password" className="w-full h-[44px] border-2 rounded px-12" />
      </div>
    </div>
    <div className="flex items-center gap-4 px-8 py-4">
      <input type="checkbox" />
      <p className="text-sm">Remember me?</p>
    </div>
    <div className="flex justify-center px-4 mb-6">
      <button className="w-full max-w-[360px] h-[44px] bg-[#FF9F0D] text-white rounded">Sign In</button>
    </div>
    <div className="text-right px-8 pb-4">
      <p className="text-gray-500 text-sm cursor-pointer">Forgot password?</p>
    </div>
    <div className="flex flex-col gap-6 items-center px-4 mb-10">
      <div className="relative w-full">
        <Image src={"/Google.png"} alt="" height={24} width={24} className="absolute left-4 top-3" />
        <button className="w-full h-[44px] border-2 rounded px-12">Sign in with Google</button>
      </div>
      <div className="relative w-full">
        <Image src={"/Vector (11).png"} alt="" height={24} width={24} className="absolute left-4 top-3" />
        <button className="w-full h-[44px] border-2 rounded px-12">Sign in with Apple</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default page