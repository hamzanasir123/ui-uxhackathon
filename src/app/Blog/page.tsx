import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/Banner/Banner";
import Image from "next/image";
import Link from "next/link";

function Page() {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <Banner pageName="Blog" />
        <div className="sm:m-6 md:m-6 lg:m-20 m-2 text-black">
          <div className="grid md:grid-cols-4">
            <div className="col-span-3 m-6">
              <div className="">
                <div>
                  <Image src={"/blog1.png"} alt="" height={520} width={871} className="w-[265px] md:w-[871px]"/>
                </div>
                <div className="flex flex-wrap justify-start items-center my-2 gap-2">
                  <Image src={"/Calendar.png"} alt="" height={23} width={24} />
                  <p>Dec 15, 2024 /</p>
                  <Image src={"/Chats.png"} alt="" height={23} width={24} />
                  <p>3 /</p>
                  <Image
                    src={"/UserCirclePlus.png"}
                    alt=""
                    height={23}
                    width={24}
                  />
                  <p>Admin</p>
                </div>
                <div className="sm:w-[600px] md:w-[500px]  w-[270px]">
                  <p className="font-bold text-[24px] my-2">
                    10 Reasons To Do A Digital Detox Challenge
                  </p>
                  <p className="text-[#4F4F4F]">
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                    ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat
                  </p>
                </div>
                <button className="p-2 px-3 border-2 border-[#FF9F0D] cursor-pointer text-[#FF9F0D] my-3 rounded-[6px]">
                  <Link href={"/BlogDetails"} className="flex justify-center items-center">
                    <p>Read more</p>
                    <Image
                      src={"/ArrowLineUpRight.png"}
                      alt=""
                      height={18}
                      width={18}
                    />
                  </Link>
                </button>
              </div>
              <div>
                <div>
                  <Image src={"/blog2.png"} alt="" height={520} width={871} className="w-[265px] md:w-[871px]" />
                </div>
                <div className="flex flex-wrap justify-start items-center my-2 gap-2">
                  <Image src={"/Calendar.png"} alt="" height={23} width={24} />
                  <p>Dec 15, 2024 /</p>
                  <Image src={"/Chats.png"} alt="" height={23} width={24} />
                  <p>3 /</p>
                  <Image
                    src={"/UserCirclePlus.png"}
                    alt=""
                    height={23}
                    width={24}
                  />
                  <p>Admin</p>
                </div>
                <div className="sm:w-[600px] md:w-[500px]  w-[270px]">
                  <p className="font-bold text-[24px] my-2">
                    Traditional Soft Pretzels with Sweet Beer Cheese
                  </p>
                  <p className="text-[#4F4F4F]">
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                    ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat
                  </p>
                </div>
                <button className="p-2 px-3 border-2 border-[#FF9F0D] cursor-pointer text-[#FF9F0D] my-3 rounded-[6px]">
                  <Link href={"/BlogDetails"} className="flex justify-center items-center">
                    <p>Read more</p>
                    <Image
                      src={"/ArrowLineUpRight.png"}
                      alt=""
                      height={18}
                      width={18}
                    />
                  </Link>
                </button>
              </div>
              <div>
                <div>
                  <Image src={"/blog3.png"} alt="" height={520} width={871} className="w-[265px] md:w-[871px]" />
                </div>
                <div className="flex flex-wrap justify-start items-center my-2 gap-2">
                  <Image src={"/Calendar.png"} alt="" height={23} width={24} />
                  <p>Dec 15, 2024 /</p>
                  <Image src={"/Chats.png"} alt="" height={23} width={24} />
                  <p>3 /</p>
                  <Image
                    src={"/UserCirclePlus.png"}
                    alt=""
                    height={23}
                    width={24}
                  />
                  <p>Admin</p>
                </div>
                <div className="sm:w-[600px] md:w-[500px]  w-[270px]">
                  <p className="font-bold text-[24px] my-2">
                    The Ultimate Hangover Burger: Egg in a Hole Burger
                  </p>
                  <p className="text-[#4F4F4F]">
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                    ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat
                  </p>
                </div>
                <button className="p-2 px-3 border-2 border-[#FF9F0D] cursor-pointer text-[#FF9F0D] my-3 rounded-[6px]">
                  <Link href={"/BlogDetails"} className="flex justify-center items-center">
                    <p>Read more</p>
                    <Image
                      src={"/ArrowLineUpRight.png"}
                      alt=""
                      height={18}
                      width={18}
                    />
                  </Link>
                </button>
              </div>
              <div>
                <div>
                  <Image src={"/blog4.png"} alt="" height={520} width={871} className="w-[265px] md:w-[871px]" />
                </div>
                <div className="flex flex-wrap justify-start items-center my-2 gap-2">
                  <Image src={"/Calendar.png"} alt="" height={23} width={24} />
                  <p>Dec 15, 2024 /</p>
                  <Image src={"/Chats.png"} alt="" height={23} width={24} />
                  <p>3 /</p>
                  <Image
                    src={"/UserCirclePlus.png"}
                    alt=""
                    height={23}
                    width={24}
                  />
                  <p>Admin</p>
                </div>
                <div className="sm:w-[600px] md:w-[500px]  w-[270px]">
                  <p className="font-bold text-[24px] my-2">
                    My Favorite Easy Black Pizza Toast Recipe
                  </p>
                  <p className="text-[#4F4F4F]">
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                    ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat
                  </p>
                </div>
                <button className="p-2 px-3 border-2 border-[#FF9F0D] cursor-pointer text-[#FF9F0D] my-3 rounded-[6px]">
                  <Link href={"/BlogDetails"} className="flex justify-center items-center">
                    <p>Read more</p>
                    <Image
                      src={"/ArrowLineUpRight.png"}
                      alt=""
                      height={18}
                      width={18}
                    />
                  </Link>
                </button>
              </div>
            </div>
            <div className="hidden md:block my-6 mx-2">
              <div className="flex border-2">
                <input
                  type="email"
                  placeholder="Search Your Keyword.."
                  className=" p-4 h-[56px] w-full "
                />
                <button className="h-[56px] px-3 flex justify-center items-center  text-white bg-[#FF9F0D]">
                  <Image
                    src={"/Vector (7).png"}
                    alt=""
                    width={24}
                    height={24}
                  />
                </button>
              </div>
              <div className="text-center my-4 border-2">
                <div className="my-3 flex justify-center items-center">
                  <Image
                    src={"/man.png"}
                    alt=""
                    width={148}
                    height={129}
                    className="rounded-full"
                  />
                </div>
                <p className="font-bold text-xl">Prince Miyako</p>
                <p className="text-[#828282] text-xs lg:text-base">Blogger/Photographer</p>
                <div className="flex flex-wrap gap-2 justify-center items-center">
                  <Image src={"/star.png"} alt="" width={88} height={12} />
                  <p>(1 Review)</p>
                </div>
                <p className="text-[#828282] text-xs lg:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.Veritatis distinctio, odio eligendi suscipit
                  reprehenderit atque
                </p>
                <div className="flex flex-wrap justify-center items-center gap-2 my-3">
                          <div className="flex justify-center items-center w-[36px] h-[34px]">
                            <Image src="/fi1.png" alt="" width={10} height={18} />
                          </div>
                          <div className="flex justify-center items-center w-[36px] h-[34px]">
                            <Image src="/fi2.png" alt="" width={16} height={18} />
                          </div>
                          <div className="flex justify-center items-center w-[36px] h-[34px]">
                            <Image src="/fi3.png" alt="" width={14} height={18} />
                          </div>
                          <div className="flex justify-center items-center w-[36px] h-[34px]">
                            <Image src="/fi4.png" alt="" width={18} height={18} />
                          </div>
                        </div>
              </div>
              <div className="text-center my-4 border-2">
                    <p className="font-bold lg:text-xl text-lg text-left p-2">Recent Post</p>
                    <div className="grid grid-cols-3 p-2 gap-2">
                    <Image src="/rp1.png" alt="" width={89} height={92} />
                    <div className="text-left col-span-2">
                            <p className="text-[#828282] text-xs lg:text-base">June 22, 2020</p>
                            <p className="text-xs lg:text-base">Lorem ipsum dolor sit cing
                            elit, sed do.</p>
                    </div>
                    </div>
                    <div className="grid grid-cols-3 p-2 gap-2">
                    <Image src="/rp2.png" alt="" width={89} height={92} />
                    <div className="text-left col-span-2">
                    <p className="text-[#828282] text-xs lg:text-base">June 22, 2020</p>
                            <p className="text-xs lg:text-base">Lorem ipsum dolor sit cing
                            elit, sed do.</p>
                    </div>
                    </div>
                    <div className="grid grid-cols-3 p-2 gap-2">
                    <Image src="/rp3.png" alt="" width={89} height={92} />
                    <div className="text-left col-span-2">
                    <p className="text-[#828282] text-xs lg:text-base">June 22, 2020</p>
                            <p className="text-xs lg:text-base">Lorem ipsum dolor sit cing
                            elit, sed do.</p>
                    </div>
                    </div>
                    <div className="grid grid-cols-3 p-2 gap-2">
                    <Image src="/rp4.png" alt="" width={89} height={92} />
                    <div className="text-left col-span-2">
                    <p className="text-[#828282] text-xs lg:text-base">June 22, 2020</p>
                            <p className="text-xs lg:text-base">Lorem ipsum dolor sit cing
                            elit, sed do.</p>
                    </div>
                    </div>
              </div>
              <div className="text-center my-4 border-2">
                    <p className="font-bold lg:text-xl text-lg text-left p-2">Filter By Menu</p>
                    <div className="grid grid-cols-3 p-2 gap-2">
                    <Image src="/rp5.png" alt="" width={67} height={62} />
                    <div className="col-span-2 flex justify-between items-center">
                    <p className="font-bold text-xs lg:text-base">Chicken Fry</p>
                            <p className="text-xs lg:text-base">26</p>
                    </div>
                    </div>
                    <div className="grid grid-cols-3 p-2 gap-2">
                    <Image src="/rp6.png" alt="" width={67} height={62} />
                    <div className="col-span-2 flex justify-between items-center">
                    <p className="font-bold text-xs lg:text-base">Burger Food</p>
                            <p className="text-xs lg:text-base">46</p>
                    </div>
                    </div>
                    <div className="grid grid-cols-3 p-2 gap-2">
                    <Image src="/rp7.png" alt="" width={67} height={62} />
                    <div className="col-span-2 flex justify-between items-center">
                    <p className="font-bold text-xs lg:text-base">Pizza</p>
                            <p className="text-xs lg:text-base">16</p>
                    </div>
                    </div>
                    <div className="grid grid-cols-3 p-2 gap-2">
                    <Image src="/rp8.png" alt="" width={67} height={62} />
                    <div className="col-span-2 flex justify-between items-center">
                    <p className="font-bold text-xs lg:text-base">Fresh Fruits</p>
                            <p className="text-xs lg:text-base">36</p>
                    </div>
                    </div>
                    <div className="grid grid-cols-3 p-2 gap-2">
                    <Image src="/rp9.png" alt="" width={67} height={62} />
                    <div className="col-span-2 flex justify-between items-center">
                    <p className="font-bold text-xs lg:text-base">Vegetables</p>
                            <p className="text-xs lg:text-base">16</p>
                    </div>
                    </div>
              </div>
              <div className="text-center my-4 border-2">
              <p className="font-bold lg:text-xl text-lg text-left p-2">Populer Tags</p>
              <div className="flex flex-wrap p-2 lg:gap-3 gap-1 text-xs lg:text-base">
                    <p className="flex justify-center items-center px-3 py-2 border-2 text-[#4F4F4F]">Sandwich</p>
                    <p className="flex justify-center items-center px-3 py-2 border-2 text-[#4F4F4F]">Tikka</p>
                    <p className="flex justify-center items-center px-3 py-2 border-2 text-[#4F4F4F]">Bbq</p>
                    <p className="flex justify-center items-center px-3 py-2 border-2 text-[#4F4F4F]">Restaurant</p>
                    <p className="flex justify-center items-center px-3 py-2 border-2 text-[#4F4F4F]">Chicken Sharma</p>
                    <p className="flex justify-center items-center px-3 py-2 border-2 text-[#4F4F4F]">Health</p>
                    <p className="flex justify-center items-center px-3 py-2 border-2 text-[#4F4F4F]">Fastfood</p>
                    <p className="flex justify-center items-center px-3 py-2 border-2 text-[#4F4F4F]">Food</p>
                    <p className="flex justify-center items-center px-3 py-2 border-2 text-[#4F4F4F]">Pizza</p>
                    <p className="flex justify-center items-center px-3 py-2 border-2 text-[#4F4F4F]">Burger</p>
                    <p className="flex justify-center items-center px-3 py-2 border-2 text-[#4F4F4F]">Chicken</p>
              </div>
              </div>
              <div className="text-center my-4 border-2">
              <p className="font-bold lg:text-xl text-lg text-left p-2">Photo Gallery</p>
              <div className="flex flex-wrap p-2 lg:gap-3 gap-1">
              <Image src="/rp1.png" alt="" width={67} height={62} />
              <Image src="/rp2.png" alt="" width={67} height={62} />
              <Image src="/rp3.png" alt="" width={67} height={62} />
              <Image src="/rp4.png" alt="" width={67} height={62} />
              <Image src="/rp5.png" alt="" width={67} height={62} />
              <Image src="/rp6.png" alt="" width={67} height={62} />
              </div>
              </div>
              <div className="text-center my-4 border-2">
              <p className="font-bold text-xl text-left p-2">Follow Us</p>
              <div className="flex flex-wrap justify-center items-center my-4 gap-2 md:gap-5">
                        <div className="flex justify-center items-center w-[36px] h-[34px] bg-[#FAF7F2] rounded">
                          <Image src="/fi1.png" alt="" width={10} height={18} />
                        </div>
                        <div className="flex justify-center items-center w-[36px] h-[34px] bg-[#FAF7F2] rounded">
                          <Image src="/fi2.png" alt="" width={16} height={18} />
                        </div>
                        <div className="flex justify-center items-center w-[36px] h-[34px] bg-[#FAF7F2] rounded">
                          <Image src="/fi3.png" alt="" width={14} height={18} />
                        </div>
                        <div className="flex justify-center items-center w-[36px] h-[34px] bg-[#FAF7F2] rounded">
                          <Image src="/fi4.png" alt="" width={18} height={18} />
                        </div>
                      </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 pb-4">
            <div className="h-[50px] w-[50px] border-2 flex justify-center items-center">
              <Image src={"/.png"} alt="" width={14} height={17} />
            </div>
            <button className="h-[50px] w-[50px] border-2 flex justify-center items-center text-white bg-[#FF9F0D]">
              1
            </button>
            <button className="h-[50px] w-[50px] border-2 flex justify-center items-center">
              2
            </button>
            <button className="h-[50px] w-[50px] border-2 flex justify-center items-center">
              3
            </button>
            <div className="h-[50px] w-[50px] border-2 flex justify-center items-center">
              <Image src={"/ (1).png"} alt="" width={14} height={17} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
