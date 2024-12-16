import Image from 'next/image';
import React from 'react';

function Footer() {
  return (
    <div className=" text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 m-5 lg:m-20">
        <div className="mx-10">
          <p className="font-bold text-[24px] md:text-[32px]">
            <span className="text-[#FF9F0D]">St</span>ill You Need Our Support ?
          </p>
          <p className="text-sm md:text-base">Dont wait, make a smart & logical quote here. Its pretty easy.</p>
        </div>
        <div className="flex md:mx-10 mt-4 md:mt-0">
          <input
            type="email"
            placeholder="Enter Your Email..."
            className="rounded-tl rounded-bl p-4 bg-[#FF9F0D] h-[56px] w-full md:w-[300px]"
          />
          <button className="h-[56px] w-full md:w-[163px] rounded bg-white text-[#FF9F0D]">
            Subscribe Now
          </button>
        </div>
      </div>

      <p className="h-[1px] bg-[#FF9F0D] m-10"></p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 p-4 md:m-10">
        <div className="col-span-1">
          <p className="mb-4 font-bold text-2xl">About Us</p>
          <p className="text-sm md:text-base text-gray-500">
            Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional
            chauffeured car service in major cities across the world.
          </p>
          <div className="grid grid-cols-5 md:grid-cols-5 md:my-10 my-5">
            <div className="flex justify-center items-center md:ml-5 ml-12 w-[50px] h-[50px] md:w-[70px] md:h-[70px] p-2 bg-[#FF9F0D] rounded-[6px]">
              <Image src="/Cookie.png" alt="" width={56} height={56} />
            </div>
            <div className="col-span-4 text-xs md:text-sm">
              <p>Opening Hours</p>
              <p className="text-gray-500">Mon - Sat(8.00 - 6.00)</p>
              <p className="text-gray-500">Sunday - Closed</p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <p className="font-bold mb-4 text-2xl">Useful Links</p>
          <p className="mb-4">About</p>
          <p className="mb-4">News</p>
          <p className="mb-4">Partners</p>
          <p className="mb-4">Team</p>
          <p className="mb-4">Menu</p>
          <p className="mb-4">Contacts</p>
        </div>
        <div className="col-span-1">
          <p className="font-bold mb-4 text-2xl">Help?</p>
          <p className="mb-4">FAQ</p>
          <p className="mb-4">Terms & Conditions</p>
          <p className="mb-4">Reporting</p>
          <p className="mb-4">Documentation</p>
          <p className="mb-4">Support Policy</p>
          <p className="mb-4">Privacy</p>
        </div>
        <div className="col-span-1">
          <p className="font-bold mb-4 text-2xl">Recent Posts</p>
          <div className="grid grid-cols-5 mb-2">
            <div className="col-span-1">
              <Image src="/fp1.png" alt="Post" height={69} width={70} />
            </div>
            <div className="col-span-4 md:ml-4 ">
              <p className="font-semibold opacity-30 text-sm md:text-md">20 Feb 2022</p>
              <p>Keep Your Business</p>
            </div>
          </div>
          <div className="grid grid-cols-5 mb-2">
            <div className="col-span-1">
              <Image src="/fp2.png" alt="Post" height={69} width={70} />
            </div>
            <div className="col-span-4 md:ml-4">
              <p className="font-semibold opacity-30 text-sm md:text-md">20 Feb 2022</p>
              <p>Keep Your Business</p>
            </div>
          </div>
          <div className="grid grid-cols-5 mb-2">
            <div className="col-span-1">
              <Image src="/fp3.png" alt="Post" height={69} width={70} />
            </div>
            <div className="col-span-4 md:ml-4">
              <p className="font-semibold opacity-30 text-sm md:text-md">20 Feb 2022</p>
              <p>Keep Your Business</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#4F4F4F] flex flex-wrap gap-6 justify-center md:justify-between items-center py-4 px-6">
        <p className="text-sm md:text-base">Copyright © 2025 by Hamza Nasir. All Rights Reserved.</p>
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-5">
          <div className="flex justify-center items-center w-[36px] h-[34px] bg-white rounded">
            <Image src="/fi1.png" alt="" width={10} height={18} />
          </div>
          <div className="flex justify-center items-center w-[36px] h-[34px] bg-white rounded">
            <Image src="/fi2.png" alt="" width={16} height={18} />
          </div>
          <div className="flex justify-center items-center w-[36px] h-[34px] bg-white rounded">
            <Image src="/fi3.png" alt="" width={14} height={18} />
          </div>
          <div className="flex justify-center items-center w-[36px] h-[34px] bg-white rounded">
            <Image src="/fi4.png" alt="" width={18} height={18} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
