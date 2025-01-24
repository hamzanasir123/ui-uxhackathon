"use client";
import { useState, useEffect } from "react";
import Banner from "@/app/Components/Banner/Banner";
import Navbar from "@/app/Components/Navbar/Navbar";
import Image from "next/image";
import client from "../../../../client";
import { urlFor } from "../../../../image";
import Link from "next/link";
import Loader from "@/app/Components/Loader/Loader";

interface Product {
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  available: boolean;
  id: number;
}

interface CartItem {
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  available: boolean;
  id: number;
  quantity?: number;
}

export default function ProductDetails({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const [quantityData, setQuantityData] = useState<{ [key: number]: number }>(
      {}
    ); 
    const [cartData, setCartData] = useState<CartItem[]>([]);
    const [removeCartData, setRemoveCartData] = useState<number | null>(null);
      const [cartStorage, setCartStorage] = useState<CartItem[]>([]);
      const [cartIds, setCartIds] = useState<number[]>([]);

  useEffect(() => {
    const fetching = async () => {
      try {
        const realtedProductQuery = `*[_type == 'food'][0..2]{
  name, description , price, id,
    image, 
}`;
        const relatedProductResponse = await client.fetch(realtedProductQuery);
        setFilteredData(relatedProductResponse);
      } catch (error) {
        console.log(error);
      }
    };
    fetching();
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = `*[_type == 'food' && id == $id][0]{
          name, description, category, price, image, available, id
        }`;
        const response = await client.fetch(query, { id: params.id });
        setProduct(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [params.id]);


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        </div>
    )
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  
  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setQuantityData((prevQuantityData) => {
      const updatedQuantityData = { ...prevQuantityData, [id]: newQuantity };
      const updatedCart = cartData.map((item) =>
        item.id === id ? { ...item, quantity: updatedQuantityData[id] } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedQuantityData;
    });
  };

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
  };

  return (
    <>
      <div className="bg-white">
        <Navbar cartData={cartData} removeCartData={removeCartData} />
        <Banner pageName={product.name} />
        <div className="md:m-20 p-5 text-[#333333]">
          <div className="grid md:grid-cols-5 grid-cols-3 gap-4">
            <div className="hidden md:block col-span-1 md:flex-col gap-4 items-center justify-center md:justify-start">
              {[
                "/Rectangle 8884.png",
                "/Rectangle 8885.png",
                "/Rectangle 8886.png",
                "/Rectangle 8887.png",
              ].map((src, index) => (
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
              <Image
                src={
                  urlFor(product.image).url() || "/default-product-image.png"
                }
                alt={product.name}
                height={596}
                width={491}
                className="w-full max-w-[450px] md:max-w-[600px]"
              />
            </div>
            <div className="lg:col-span-2 col-span-3 mt-6 md:mt-0">
              <div className="flex justify-between items-center mb-4">
                <p className="bg-[#FF9F0D] rounded-[6px] px-2 py-1 text-white text-sm md:text-base">
                  {product.available ? "In stock" : "Out of stock"}
                </p>
              </div>
              <p className="font-bold text-xl md:text-2xl lg:text-3xl mb-3">
                {product.name}
              </p>
              <p className="text-sm md:text-base mb-4">{product.description}</p>
              <p className="font-bold text-xl md:text-2xl lg:text-3xl mb-3">
                ${product.price * quantityData[product.id] || product.price}.00
              </p>
              <div className="flex items-center gap-4 mb-4">
                {/* Rating placeholder */}
                <Image src="/star.png" alt="Rating" height={20} width={116} />
                <p className="text-gray-500">|</p>
                <p className="text-sm">5.0 Rating</p>
                <p className="text-gray-500">|</p>
                <p className="text-sm">22 Reviews</p>
              </div>
              <div className="flex gap-4 items-center mb-6">
                <div className="grid grid-cols-3 border border-gray-400">
                  <button
                  onClick={() =>
                    handleQuantityChange(
                      product.id,
                      (quantityData[product.id] || 1) - 1
                    )
                  }
                  className="flex justify-center px-2 items-center border-r border-gray-400">
                    -
                  </button>
                  <p className="flex justify-center items-center">{quantityData[product.id] || 1}</p>
                  <button 
                  onClick={() =>
                    handleQuantityChange(
                      product.id,
                      (quantityData[product.id] || 1) + 1
                    )
                  }
                  className="flex justify-center items-center border-l border-gray-400">
                    +
                  </button>
                </div>
                {cartIds.includes(product.id) ? (
                    <button
                    onClick={() => removeFromCart(product.id)}
                    className="flex items-center bg-[#FF9F0D] text-white px-4 py-2 rounded-md hover:bg-[#e68c00]">
                    <Image
                      src="/Bag.png"
                      alt="Cart"
                      height={24}
                      width={24}
                      className="mr-2"
                    />
                    Remove
                  </button>
                ) : (
                  <button 
                  onClick={() => addToCart(product)}
                  className="flex items-center bg-[#FF9F0D] text-white px-4 py-2 rounded-md hover:bg-[#e68c00]">
                  <Image
                    src="/Bag.png"
                    alt="Cart"
                    height={24}
                    width={24}
                    className="mr-2"
                  />
                  Add to cart
                </button>
                )}
              </div>
              <div className="mb-6">
                <p className="text-lg mb-3">Category: {product.category}</p>
                <p className="mt-2">Tag: Our Shop</p>
              </div>
            </div>
          </div>
          <div className="m-5 md:m-10">
  <p className="text-2xl md:text-4xl font-bold text-[#FF9F0D] my-3">
    Product Details:
  </p>
  <p className="text-sm md:text-base my-4 leading-relaxed">
    A {product.name} is a universally loved fast-food dish that combines simplicity with versatility. At its core, it consists of a juicy patty made from ground beef, chicken, or plant-based alternatives, sandwiched between two halves of a soft, toasted bun. The patty is often seasoned and grilled or fried to perfection, offering a savory, flavorful bite. Burgers are customizable, typically layered with fresh lettuce, ripe tomatoes, sliced onions, and pickles. Cheddar, Swiss, or American cheese is a common addition that melts over the patty, adding a creamy texture. Condiments like ketchup, mustard, mayonnaise, or specialty sauces enhance the overall taste, making every bite a burst of flavor. Optional toppings such as crispy bacon, avocado, jalapeños, or fried eggs can elevate the burger to gourmet status. Whether enjoyed with a side of crispy fries or on their own, burgers are a satisfying meal that caters to diverse palates and dietary preferences.
  </p>
  <p className="text-2xl md:text-4xl font-bold text-[#FF9F0D] my-3">
    Key Benefits:
  </p>

  <div className="space-y-4">
    <div className="flex flex-col md:flex-row gap-2">
      <p className="font-bold">Versatility:</p>
      <p>
        {product.name} can be customized to suit any taste preference or dietary need, from classic beef burgers to plant-based options, making them suitable for a wide range of individuals.
      </p>
    </div>
    <div className="flex flex-col md:flex-row gap-2">
      <p className="font-bold">Affordability:</p>
      <p>
        {product.name} are an affordable meal option, whether made at home or purchased from a fast-food outlet, offering great value for money.
      </p>
    </div>
    <div className="flex flex-col md:flex-row gap-2">
      <p className="font-bold">Quick and Convenient:</p>
      <p>
        {product.name} are easy to prepare and serve, making them an ideal choice for a fast and satisfying meal.
      </p>
    </div>
    <div className="flex flex-col md:flex-row gap-2">
      <p className="font-bold">Nutritional Value:</p>
      <p>
        Depending on the ingredients, {product.name} can offer a good balance of protein, carbohydrates, and healthy fats. Adding fresh vegetables like lettuce, tomatoes, and onions enhances their nutritional profile.
      </p>
    </div>
    <div className="flex flex-col md:flex-row gap-2">
      <p className="font-bold">Variety of Options:</p>
      <p>
        With endless combinations of patties, buns, toppings, and condiments, burgers provide a chance to explore different flavors and cuisines, from spicy Tex-Mex to classic American or gourmet-style burgers.
      </p>
    </div>
  </div>

  <p className="font-bold text-2xl md:text-3xl my-6">Similar Products:</p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {filteredData.map((item: Product) => (
      <Link key={item.id} href={`/Menu`}>
        <div className="border p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300">
          {/* Product Image */}
          <div className="relative w-full h-40 mb-4">
            <Image
              src={urlFor(item.image).url()}
              alt={`Image of ${item.name}`}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>

          {/* Product Details */}
          <div className="flex justify-between items-center mb-2">
            <p className="text-base md:text-lg font-semibold">{item.name}</p>
            <p className="text-base md:text-lg font-semibold text-[#FF9F0D]">
              {item.price}$
            </p>
          </div>
          <p className="text-sm md:text-base text-gray-600">
            {item.description}
          </p>
        </div>
      </Link>
    ))}
  </div>
</div>

        </div>
      </div>
    </>
  );
}
