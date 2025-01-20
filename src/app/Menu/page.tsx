"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/Banner/Banner";
import { client } from "@/sanity/lib/client";

interface CartItem {
  id: number;
}

interface Product {
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  available: boolean;
  id: number;
}

function Menu() {
  const [apiData, setApiData] = useState<Product[]>([]);
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const query = `*[_type == 'food']{
    description, price, name, image,
    category, available, id
  }`;

  useEffect(() => {
    const fetching = async () => {
      const response = await client.fetch(query);
      setApiData(response);
      setFilteredData(response); // Initialize with all data
    };
    fetching();
  }, [query]);

  const [cartData, setCartData] = useState<CartItem | null>(null);
  const [removeCartData, setRemoveCartData] = useState<number | null>(null);
  const [cartStorage, setCartStorage] = useState<CartItem[]>([]);
  const [cartIds, setCartIds] = useState<number[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart) as CartItem[];
        setCartStorage(parsedCart);
        setCartIds(parsedCart.map((item) => item.id));
        if (storedCart.length === 0) {
          localStorage.removeItem("cart");
        }
      }
    }
  }, []);

  const addToCart = (item: any) => {
    setCartData(item);
    const updatedCartIds = [...cartIds, item.id];
    setCartIds(updatedCartIds);
    const updatedCartStorage = [...cartStorage, item];
    setCartStorage(updatedCartStorage);
    localStorage.setItem("cart", JSON.stringify(updatedCartStorage));
    setRemoveCartData(null);
  };

  const removeFromCart = (id: any) => {
    setRemoveCartData(id);
    const updatedCartIds = cartIds.filter((itemId) => itemId !== id);
    setCartIds(updatedCartIds);
    const updatedCartStorage = cartStorage.filter((item) => item.id !== id);
    setCartStorage(updatedCartStorage);
    localStorage.setItem("cart", JSON.stringify(updatedCartStorage));
    setCartData(null);
  };

  // Search functionality
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    if (searchValue === "") {
      setFilteredData(apiData);
    } else {
      const filtered = apiData.filter(
        (item) =>
          item.name.toLowerCase().includes(searchValue) ||
          item.description.toLowerCase().includes(searchValue)
      );
      setFilteredData(filtered);
    }
  };

  return (
    <>
      <div className="bg-white">
        <Navbar cartData={cartData} removeCartData={removeCartData} />
        <Banner pageName="Menu" />

        {/* Search Bar */}
        <div className="m-8 md:m-16 lg:m-20 text-black">
          <div className="mb-8">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search for food items..."
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
            />
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 flex justify-center">
              <Image src={"/Rectangle 8874.png"} alt="" width={348} height={626} />
            </div>
            <div className="lg:col-span-2 lg:m-10">
              <p className="font-bold mb-4 text-2xl md:text-3xl lg:text-[38px]">Starter Menu</p>
              {filteredData.length > 0 ? (
                filteredData.map((item: Product) => (
                  <div key={item.id}>
                    <div className="flex justify-between">
                      <p className="text-lg md:text-xl mt-4 font-semibold">{item.name}</p>
                      <p className="text-lg md:text-xl font-semibold text-[#FF9F0D]">{item.price}$</p>
                    </div>
                    <p className="text-sm md:text-base">{item.description}</p>
                    {cartIds.includes(item.id) ? (
                      <button
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Remove ${item.name} to cart`}
                        className="font-semibold text-xs rounded-full bg-yellow-300 px-3 py-1"
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        onClick={() => addToCart(item)}
                        aria-label={`Add ${item.name} to cart`}
                        className="font-semibold text-xs rounded-full bg-yellow-300 px-3 py-1"
                      >
                        Buy
                      </button>
                    )}
                  </div>
                ))
              ) : (
                <p>No items match your search.</p>
              )}
            </div>
          </div>
        </div>

        <div className="m-8 md:m-16 lg:m-20 text-black">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 lg:m-10">
              <p className="font-bold mb-4 text-2xl md:text-3xl lg:text-[38px]">Main Course</p>
              {filteredData.length > 0 ? (
                filteredData.map((item: Product) => (
                  <div key={item.id}>
                    <div className="flex justify-between">
                      <p className="text-lg md:text-xl mt-4 font-semibold">{item.name}</p>
                      <p className="text-lg md:text-xl font-semibold text-[#FF9F0D]">{item.price}$</p>
                    </div>
                    <p className="text-sm md:text-base">{item.description}</p>
                    {cartIds.includes(item.id) ? (
                      <button
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Remove ${item.name} to cart`}
                        className="font-semibold text-xs rounded-full bg-yellow-300 px-3 py-1"
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        onClick={() => addToCart(item)}
                        aria-label={`Add ${item.name} to cart`}
                        className="font-semibold text-xs rounded-full bg-yellow-300 px-3 py-1"
                      >
                        Buy
                      </button>
                    )}
                  </div>
                ))
              ) : (
                <p>No items match your search.</p>
              )}
            </div>
            <div className="lg:col-span-1 flex justify-center">
              <Image src={"/burgerwithknife.png"} alt="" width={348} height={626} />
            </div>
          </div>
        </div>

        {/* Dessert Section */}
        <div className="m-5 md:m-10 lg:m-20 text-black">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-1 flex justify-center">
              <Image src="/icecream.png" alt="" width={348} height={626} />
            </div>
            <div className="lg:col-span-2">
              <p className="font-bold text-[28px] lg:text-[38px] mb-4">Dessert</p>
              {filteredData.length > 0 ? (
                filteredData.map((item: Product) => (
                  <div key={item.id}>
                    <div className="flex justify-between">
                      <p className="text-lg md:text-xl mt-4 font-semibold">{item.name}</p>
                      <p className="text-lg md:text-xl font-semibold text-[#FF9F0D]">{item.price}$</p>
                    </div>
                    <p className="text-sm md:text-base">{item.description}</p>
                    {cartIds.includes(item.id) ? (
                      <button
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Remove ${item.name} to cart`}
                        className="font-semibold text-xs rounded-full bg-yellow-300 px-3 py-1"
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        onClick={() => addToCart(item)}
                        aria-label={`Add ${item.name} to cart`}
                        className="font-semibold text-xs rounded-full bg-yellow-300 px-3 py-1"
                      >
                        Buy
                      </button>
                    )}
                  </div>
                ))
              ) : (
                <p>No items match your search.</p>
              )}
            </div>
          </div>
        </div>

        {/* Drinks Section */}
        <div className="m-8 md:m-16 lg:m-20 text-black">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 flex justify-center">
              <Image src="/coldbeverages.png" alt="" width={348} height={626} />
            </div>
            <div className="lg:col-span-2 lg:m-10">
              <p className="font-bold text-[28px] lg:text-[38px] mb-4">Drinks</p>
              {filteredData.length > 0 ? (
                filteredData.map((item: Product) => (
                  <div key={item.id}>
                    <div className="flex justify-between">
                      <p className="text-lg md:text-xl mt-4 font-semibold">{item.name}</p>
                      <p className="text-lg md:text-xl font-semibold text-[#FF9F0D]">{item.price}$</p>
                    </div>
                    <p className="text-sm md:text-base">{item.description}</p>
                    {cartIds.includes(item.id) ? (
                      <button
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Remove ${item.name} to cart`}
                        className="font-semibold text-xs rounded-full bg-yellow-300 px-3 py-1"
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        onClick={() => addToCart(item)}
                        aria-label={`Add ${item.name} to cart`}
                        className="font-semibold text-xs rounded-full bg-yellow-300 px-3 py-1"
                      >
                        Buy
                      </button>
                    )}
                  </div>
                ))
              ) : (
                <p>No items match your search.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
