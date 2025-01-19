"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/Banner/Banner";

function Page() {
  const products = [
    { src: "/shop1.png", name: "Fresh Lime", price: "$38.00", oldPrice: "$45.00", category: "Drink" },
    { src: "/shop2.png", name: "Chocolate Muffin", price: "$28.00", category: "Cookies" },
    { src: "/shop3.png", name: "Burger", price: "$21.00", oldPrice: "$45.00", category: "Burger" },
    { src: "/shop4.png", name: "Country Burger", price: "$45.00", category: "Burger" },
    { src: "/shop5.png", name: "Drink", price: "$23.00", oldPrice: "$45.00", category: "Drink" },
    { src: "/shop6.png", name: "Pizza", price: "$43.00", category: "Pizza" },
    { src: "/shop7.png", name: "Cheese Butter", price: "$10.00", category: "Non Veg" },
    { src: "/shop8.png", name: "Sandwiches", price: "$25.00", category: "Sandwiches" },
    { src: "/shop9.png", name: "Chicken Chup", price: "$12.00", category: "Chicken Chup" },
  ];

  const categories = [
    "Sandwiches",
    "Burger",
    "Chicken Chup",
    "Drink",
    "Pizza",
    "Cookies",
    "Non Veg",
    "Uncategorized",
  ];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [wishlist, setWishlist] = useState<any[]>([]);

  // Retrieve wishlist from localStorage
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setWishlist(storedWishlist);
  }, []);

  // Update the filtered products based on selected categories and search query
  const updateFilteredProducts = (updatedCategories: string[], query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    setFilteredProducts(
      products.filter((product) => {
        const matchesCategory =
          updatedCategories.length === 0 || updatedCategories.includes(product.category);
        const matchesSearch = product.name.toLowerCase().includes(lowerCaseQuery);
        return matchesCategory && matchesSearch;
      })
    );
  };

  const handleCategoryChange = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
    updateFilteredProducts(updatedCategories, searchQuery);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    updateFilteredProducts(selectedCategories, query);
  };

  // Add product to wishlist and store it in localStorage
  const addToWishlist = (product: any) => {
    const updatedWishlist = [...wishlist, product];
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  // Remove product from wishlist and update localStorage
  const removeFromWishlist = (productId: string) => {
    const updatedWishlist = wishlist.filter(item => item.name !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <div className="bg-white">
      <Navbar />
      <Banner pageName="Shop" />

      <div className="m-5 p-4 text-black">
        {/* Filters: Search Bar and Categories */}
        <div className="mb-6">
          {/* Search Bar */}
          <div className="flex items-center gap-2 mb-4">
            <input
              type="text"
              placeholder="Search Product"
              value={searchQuery}
              onChange={handleSearchChange}
              className="flex-grow p-2 bg-[#FF9F0D] bg-opacity-50 text-black rounded-l outline-none"
            />
            <button className="bg-[#FF9F0D] p-3 rounded-r">
              <Image src="/Vector (7).png" alt="Search Icon" width={20} height={20} />
            </button>
          </div>

          {/* Categories */}
          <div className="overflow-x-auto whitespace-nowrap">
            <p className="font-bold text-xl mb-2">Category</p>
            <div className="flex space-x-4">
              {categories.map((category, index) => (
                <label
                  key={index}
                  className="flex items-center gap-2 cursor-pointer bg-gray-100 px-4 py-2 rounded-md shadow-sm"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="form-checkbox h-5 w-5 text-[#FF9F0D] rounded"
                  />
                  <span className="text-sm">{category}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-md shadow-md">
              <Image
                src={item.src}
                alt={item.name}
                width={262}
                height={267}
                className="rounded-md max-w-full"
              />
              <p className="font-bold text-lg mt-2">{item.name}</p>
              <div className="flex items-center gap-2">
                <p className="text-[#FF9F0D] text-lg font-semibold">{item.price}</p>
                {item.oldPrice && (
                  <p className="line-through text-gray-400 text-sm">{item.oldPrice}</p>
                )}
              </div>
              {/* Add to Wishlist Button */}
              <button
                className="mt-4 bg-[#FF9F0D] p-2 rounded-md"
                onClick={() => addToWishlist(item)}
              >
                Add to Wishlist
              </button>
            </div>
          ))}
        </div>

        {/* Wishlist Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((item, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-md shadow-md">
                <Image
                  src={item.src}
                  alt={item.name}
                  width={262}
                  height={267}
                  className="rounded-md max-w-full"
                />
                <p className="font-bold text-lg mt-2">{item.name}</p>
                <div className="flex items-center gap-2">
                  <p className="text-[#FF9F0D] text-lg font-semibold">{item.price}</p>
                  {item.oldPrice && (
                    <p className="line-through text-gray-400 text-sm">{item.oldPrice}</p>
                  )}
                </div>
                {/* Remove from Wishlist Button */}
                <button
                  className="mt-4 bg-red-500 p-2 rounded-md"
                  onClick={() => removeFromWishlist(item.name)}
                >
                  Remove from Wishlist
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
