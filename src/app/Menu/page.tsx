"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/Banner/Banner";
import client from "../../../client";
import { urlFor } from "../../../image";
import Link from "next/link";

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

  useEffect(() => {
    const fetching = async () => {
      try{
        const query = `*[_type == 'food']{
  name, description , price, id,
    image, 
}`;
        const response = await client.fetch(query);
        console.log("Fetched Data:", response); // Add logging to check data
        setApiData(response);
      setFilteredData(response); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetching();
  }, []);
  
  

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

// Updated handleSearch function
const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  const searchValue = e.target.value.trim().toLowerCase();
  setSearchTerm(searchValue);

  if (!searchValue) {
    setFilteredData(apiData);
    return;
  }

  const filtered = apiData.filter((item) => {
    const name = item.name?.toLowerCase() || "";
    const description = item.description?.toLowerCase() || "";
    return name.includes(searchValue) || description.includes(searchValue);
  });

  setFilteredData(filtered); // Update filtered data
  console.log(filteredData);
};

  return (
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.length > 0 ? (
            filteredData.map((item: Product) => (
              <div key={item.id} className="border p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 mb-4">
                <Link  href={`/productDetails/${item.id}`} >
              {/* Product Image */}
              <div className="relative w-full h-40 mb-4">
                <Image
                  src={urlFor(item.image).url() || "/food-1.png"}
                  alt={`Image of ${item.name}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              
              {/* Product Details */}
              <div className="flex justify-between items-center">
                <p className="text-lg md:text-xl font-semibold">{item.name}</p>
                <p className="text-lg md:text-xl font-semibold text-[#FF9F0D]">{item.price}$</p>
              </div>
              <p className="text-sm md:text-base mb-4">{item.description}</p>
              </Link>
              {/* Add/Remove Button */}
              {cartIds.includes(item.id) ? (
                <button
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Remove ${item.name} from cart`}
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
  );
}

export default Menu;
