import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/Banner/Banner";
import Image from "next/image";

function page() {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <Banner pageName="Shop Details" />
        <div className="md:m-20 p-5 text-[#333333]">
  <div className="grid md:grid-cols-5 grid-cols-3 gap-4">
    <div className="col-span-1 md:flex-col gap-4 items-center justify-center md:justify-start">
      {["/Rectangle 8884.png", "/Rectangle 8885.png", "/Rectangle 8886.png", "/Rectangle 8887.png"].map((src, index) => (
        <Image
          key={index}
          src={src}
          alt="Thumbnail"
          height={129}
          width={132}
          className="mb-4 w-[70px] sm:w-[100px] lg:w-[120px] cursor-pointer"
        />
      ))}
    </div>
    <div className="col-span-2 flex justify-center">
      <Image src="/Rectangle 8883.png" alt="Main Product" height={596} width={491} className="w-full max-w-[450px] md:max-w-[600px]" />
    </div>
    <div className="lg:col-span-2 col-span-3 mt-6 md:mt-0">
      <div className="flex justify-between items-center mb-4">
        <p className="bg-[#FF9F0D] rounded-[6px] px-2 py-1 text-white text-sm md:text-base">In stock</p>
        <div className="hidden md:flex gap-2 items-center">
          <Image src="/Project Status.png" alt="Prev" height={24} width={24} />
          <p className="text-sm cursor-pointer">Prev</p>
          <p className="text-sm cursor-pointer">Next</p>
          <Image src="/Project Status (1).png" alt="Next" height={24} width={24} />
        </div>
      </div>
      <p className="font-bold text-xl md:text-2xl lg:text-3xl mb-3">Yummy Chicken Chup</p>
      <p className="text-sm md:text-base mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum.
      </p>
      <p className="font-bold text-xl md:text-2xl lg:text-3xl mb-3">$54.00</p>
      <div className="flex items-center gap-4 mb-4">
        <Image src="/star.png" alt="Rating" height={20} width={116} />
        <p className="text-gray-500">|</p>
        <p className="text-sm">5.0 Rating</p>
        <p className="text-gray-500">|</p>
        <p className="text-sm">22 Reviews</p>
      </div>
      <div className="flex gap-4 items-center mb-6">
        <div className="grid grid-cols-3  border border-gray-400">
          <button className="flex justify-center px-2 items-center border-r border-gray-400">-</button>
          <p className="flex justify-center items-center">1</p>
          <button className="flex justify-center items-center border-l border-gray-400">+</button>
        </div>
        <button className="flex items-center bg-[#FF9F0D] text-white px-4 py-2 rounded-md hover:bg-[#e68c00]">
          <Image src="/Bag.png" alt="Cart" height={24} width={24} className="mr-2" />
          Add to cart
        </button>
      </div>
      <div className="mb-6">
        <p className="text-lg mb-3">Dictum / Cursus / Risus</p>
        <p className="mb-2">Category: Pizza</p>
        <div className="flex items-center gap-4">
          <Image src="/Vector.png" alt="Wishlist" height={20} width={20} />
          <p className="text-sm cursor-pointer">Add to Wishlist</p>
          <Image src="/Project Status (2).png" alt="Compare" height={20} width={20} />
          <p className="text-sm cursor-pointer">Compare</p>
        </div>
        <p className="mt-2">Tag: Our Shop</p>
      </div>
      <div className="flex gap-4 items-center mb-6">
        <p>Share:</p>
        {["/Vector (1).png", "/fb.png", "/tt.png", "/vk.png", "/ig.png"].map((src, index) => (
          <Image key={index} src={src} alt="Share Icon" height={20} width={20} className="cursor-pointer" />
        ))}
      </div>
    </div>
  </div>

  <div className="my-8">
    <div className="flex gap-4 mb-6">
      <button className="bg-[#FF9F0D] text-white px-6 py-2 rounded-md">Description</button>
      <p className="cursor-pointer">Reviews (24)</p>
    </div>
    <p className="mb-6 text-sm md:text-base">
      Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus.
    </p>
    <p className="text-lg font-medium mb-4">Key Benefits</p>
    <ul className="list-disc pl-6 text-sm md:text-base">
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
      <li>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
      <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
      <li>Mauris eget diam magna, in blandit turpis.</li>
    </ul>
  </div>
  <div>
    <div className="flex justify-between items-center mb-6">
      <p className="font-bold text-2xl">Similar Products</p>
      <Image src="/Arrow icon.png" alt="View More" height={39} width={88} />
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {[
        { src: "/shop1.png", name: "Fresh Lime", price: "$38.00", oldPrice: "$45.00" },
        { src: "/shop2.png", name: "Chocolate Muffin", price: "$28.00" },
        { src: "/shop3.png", name: "Burger", price: "$21.00", oldPrice: "$45.00" },
        { src: "/shop4.png", name: "Country Burger", price: "$45.00" },
      ].map((item, index) => (
        <div key={index} className="text-center">
          <Image src={item.src} alt={item.name} width={262} height={267} className="mx-auto" />
          <p className="font-bold text-lg mt-2">{item.name}</p>
          <div className="flex justify-center items-center gap-2">
            <p className="text-[#FF9F0D]">{item.price}</p>
            {item.oldPrice && <p className="line-through text-gray-400">{item.oldPrice}</p>}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


      </div>
    </>
  );
}

export default page;
