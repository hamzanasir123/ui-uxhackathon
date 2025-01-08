import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/Banner/Banner";
import Image from "next/image";

function page() {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <Banner pageName="Blog Details" />
        <div className="sm:m-6 md:m-6 lg:m-20 m-2 text-black">
          <div className="grid md:grid-cols-4">
            <div className="col-span-3 m-6">
              <div className="">
                <div>
                  <Image
                    src={"/blogdetails.png"}
                    alt=""
                    height={520}
                    width={871}
                    className="w-[265px] sm:w-[400px] md:w-[871px]"
                  />
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
                <div className="sm:w-[500px] md:w-[600px] lg:w-[700px]  w-[270px]">
                  <p className="font-bold text-[24px] my-2">
                    10 Reasons To Do A Digital Detox Challenge
                  </p>
                  <p className="text-[#4F4F4F]">
                    Netus pretium tellus nulla commodo massa adipiscing in
                    elementum magna congue condimentum placerat habitasse
                    potenti ac orci a quisque tristique elementum et viverra at
                    condimentum scelerisque eu mi. Elit praesent cras vehicula a
                    ullamcorper nulla scelerisque aliquet tempus faucibus quam
                    ac aliquet nibh a condimentum suspendisse hac integer leo
                    erat aliquam ut himenaeos.
                  </p>
                  <p className="text-[#4F4F4F]">
                    Ac haca ullamcorper donec ante habi tasse donec imperdiet
                    eturpis varius per a augue magna hac. Nec hac et vestibulum
                    duis a tincidunt per a aptent interdum purus feugiat a id
                    aliquet erat himenaeos nunc torquent euismod adipiscing
                    adipiscing dui gravida justo.
                  </p>
                </div>
              </div>
              <div className="md:h-[176px] bg-[#FF9F0D] flex flex-wrap justify-center items-center lg:max-w-[800px] max-w-[300px] my-5">
                <p className="text-white font-bold text-xs md:text-base p-4 lg:text-2xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip.{" "}
                </p>
              </div>
              <div className="lg:max-w-[800px] max-w-[300px]">
                <p className="text-[#4F4F4F] text-xs md:text-base">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 my-4">
                <div className="lg:max-w-[800px] max-w-[300px]">
                  <p className="text-[#4F4F4F] text-xs md:text-base">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </p>
                  <p className="text-[#4F4F4F] text-xs md:text-base">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing{" "}
                  </p>
                </div>
                <div>
                    <Image src={"/blogdetails1.png"} alt="" width={424} height={366} className="w-[250px] md:w-[350px] lg:w-[424px]"/>
                </div>
              </div>
              <div className="lg:max-w-[800px] max-w-[300px]">
              <p className="text-[#4F4F4F] text-xs md:text-base">
                    Netus pretium tellus nulla commodo massa adipiscing in
                    elementum magna congue condimentum placerat habitasse
                    potenti ac orci a quisque tristique elementum et viverra at
                    condimentum scelerisque eu mi. Elit praesent cras vehicula a
                    ullamcorper nulla scelerisque aliquet tempus faucibus quam
                    ac aliquet nibh a condimentum suspendisse hac integer leo
                    erat aliquam ut himenaeos.
                  </p>
                  <p className="text-[#4F4F4F] text-xs md:text-base">
                    Ac haca ullamcorper donec ante habi tasse donec imperdiet
                    eturpis varius per a augue magna hac. Nec hac et vestibulum
                    duis a tincidunt per a aptent interdum purus feugiat a id
                    aliquet erat himenaeos nunc torquent euismod adipiscing
                    adipiscing dui gravida justo.
                  </p>
              </div>
              <div className="hidden h-[60px] border-2 lg:flex justify-between items-center my-4">
                    <div className="p-3 flex gap-2">
                        <p className="font-bold ">Tags:</p>
                        <p className="text-[#4F4F4F]">Resturant, Dinner, Pizza, Yummy,</p>
                    </div>
                    <div className="flex gap-2">
                        <p className="font-bold ">Share:</p>
                        <div className="flex flex-wrap justify-center items-center  gap-2 md:gap-8 mx-3">
                  <div className="flex justify-center items-center">
                    <Image src="/fi1.png" alt="" width={10} height={18} />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/fi2.png" alt="" width={16} height={18} />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/fi3.png" alt="" width={14} height={18} />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/fi4.png" alt="" width={18} height={18} />
                  </div>
                </div>
                    </div>
              </div>
              <div className="my-2">
                <p className="font-bold text-3xl">Comments - 03</p>
              </div>
              <div className="my-4 md:h-[112px] flex gap-3 lg:max-w-[800px] max-w-[300px]">
                    <div>
                        <Image src={"/c1.png"} width={110} height={97} alt="" className="rounded-full"/>
                    </div>
                    <div>
                        <div className="flex gap-6 items-center">
                        <p className="font-bold">MD Sojib Khan</p>
                        <Image src={"/Reply.png"} alt="" width={62} height={22}/>
                        </div>
                        <div className="flex gap-3 my-2">
                        <Image src={"/CalendarBlank.png"} alt="" width={27} height={24}/>
                        <p>June 22, 2020</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin. </p>
                    </div>
              </div>
              <div className="my-4 ml-20 md:h-[112px] flex gap-3 lg:max-w-[800px] max-w-[250px]">
                    <div>
                        <Image src={"/c2.png"} width={110} height={97} alt="" className="rounded-full"/>
                    </div>
                    <div>
                        <div className="flex gap-6 items-center">
                        <p className="font-bold">MD Moon Khan</p>
                        <Image src={"/Reply.png"} alt="" width={62} height={22}/>
                        </div>
                        <div className="flex gap-3 my-2">
                        <Image src={"/CalendarBlank.png"} alt="" width={27} height={24}/>
                        <p>June 22, 2020</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin. </p>
                    </div>
              </div>
              <div className="my-4  md:h-[112px] flex gap-3 lg:max-w-[800px] max-w-[300px]">
                    <div>
                        <Image src={"/c3.png"} width={110} height={97} alt="" className="rounded-full"/>
                    </div>
                    <div>
                        <div className="flex gap-6 items-center">
                        <p className="font-bold">MD Gulli Khan</p>
                        <Image src={"/Reply.png"} alt="" width={62} height={22}/>
                        </div>
                        <div className="flex gap-3 my-2">
                        <Image src={"/CalendarBlank.png"} alt="" width={27} height={24}/>
                        <p>June 22, 2020</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin. </p>
                    </div>
              </div>
              <div className="my-6">
              <p className="font-bold text-2xl ml-10 ">Post a comment</p>
              <br/>
              <hr/>
              <hr/>
              <hr/>
              <hr/>
              <div className="flex flex-wrap m-5 gap-4">
                <div>
                  <input type="text" placeholder="Name*" className="border-2 h-[56px] lg:w-[390px] w-[260px] pl-3"/>
                </div>
                <div>
                <input type="email" placeholder="Email*" className="border-2 h-[56px] lg:w-[390px] w-[260px] pl-3"/>
                </div>
                <div>
                <textarea placeholder="Write A Comment" className="border-2 h-[244px]  md:w-[800px] w-[300px] p-3"></textarea>
                </div>
                <div>
                  <button className="h-[56px] bg-[#FF9F0D] text-white px-6">Post A Comment</button>
                </div>
              </div>
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
                <p className="text-[#828282] text-xs lg:text-base">
                  Blogger/Photographer
                </p>
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
                <p className="font-bold lg:text-xl text-lg text-left p-2">
                  Recent Post
                </p>
                <div className="grid grid-cols-3 p-2 gap-2">
                  <Image src="/rp1.png" alt="" width={89} height={92} />
                  <div className="text-left col-span-2">
                    <p className="text-[#828282] text-xs lg:text-base">
                      June 22, 2020
                    </p>
                    <p className="text-xs lg:text-base">
                      Lorem ipsum dolor sit cing elit, sed do.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 p-2 gap-2">
                  <Image src="/rp2.png" alt="" width={89} height={92} />
                  <div className="text-left col-span-2">
                    <p className="text-[#828282] text-xs lg:text-base">
                      June 22, 2020
                    </p>
                    <p className="text-xs lg:text-base">
                      Lorem ipsum dolor sit cing elit, sed do.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 p-2 gap-2">
                  <Image src="/rp3.png" alt="" width={89} height={92} />
                  <div className="text-left col-span-2">
                    <p className="text-[#828282] text-xs lg:text-base">
                      June 22, 2020
                    </p>
                    <p className="text-xs lg:text-base">
                      Lorem ipsum dolor sit cing elit, sed do.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 p-2 gap-2">
                  <Image src="/rp4.png" alt="" width={89} height={92} />
                  <div className="text-left col-span-2">
                    <p className="text-[#828282] text-xs lg:text-base">
                      June 22, 2020
                    </p>
                    <p className="text-xs lg:text-base">
                      Lorem ipsum dolor sit cing elit, sed do.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center my-4 border-2">
                <p className="font-bold lg:text-xl text-lg text-left p-2">
                  Filter By Menu
                </p>
                <div className="grid grid-cols-3 p-2 gap-2">
                  <Image src="/rp5.png" alt="" width={67} height={62} />
                  <div className="col-span-2 flex justify-between items-center">
                    <p className="font-bold text-xs lg:text-base">
                      Chicken Fry
                    </p>
                    <p className="text-xs lg:text-base">26</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 p-2 gap-2">
                  <Image src="/rp6.png" alt="" width={67} height={62} />
                  <div className="col-span-2 flex justify-between items-center">
                    <p className="font-bold text-xs lg:text-base">
                      Burger Food
                    </p>
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
                    <p className="font-bold text-xs lg:text-base">
                      Fresh Fruits
                    </p>
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
                <p className="font-bold lg:text-xl text-lg text-left p-2">
                  Populer Tags
                </p>
                <div className="flex flex-wrap p-2 lg:gap-3 gap-1 text-xs lg:text-base">
                  <p className="flex justify-center items-center px-3 py-2 border-2 text-[#4F4F4F]">
                    Sandwich
                  </p>
                  <p className="flex justify-center items-center px-3 py-2 border-2 text-[#4F4F4F]">
                    Tikka
                  </p>
                  <p className="flex justify-center items-center px-3 py-2 border-2 text-[#4F4F4F]">
                    Bbq
                  </p>
                  <p className="flex justify-center items-center px-3 py-2 border-2 text-[#4F4F4F]">
                    Restaurant
                  </p>
                  <p className="flex justify-center items-center px-3 py-2 border-2 text-[#4F4F4F]">
                    Chicken Sharma
                  </p>
                  <p className="flex justify-center items-center px-3 py-2 border-2 text-[#4F4F4F]">
                    Health
                  </p>
                  <p className="flex justify-center items-center px-3 py-2 border-2 text-[#4F4F4F]">
                    Fastfood
                  </p>
                  <p className="flex justify-center items-center px-3 py-2 border-2 text-[#4F4F4F]">
                    Food
                  </p>
                  <p className="flex justify-center items-center px-3 py-2 border-2 text-[#4F4F4F]">
                    Pizza
                  </p>
                  <p className="flex justify-center items-center px-3 py-2 border-2 text-[#4F4F4F]">
                    Burger
                  </p>
                  <p className="flex justify-center items-center px-3 py-2 border-2 text-[#4F4F4F]">
                    Chicken
                  </p>
                </div>
              </div>
              <div className="text-center my-4 border-2">
                <p className="font-bold lg:text-xl text-lg text-left p-2">
                  Photo Gallery
                </p>
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
        </div>
      </div>
    </>
  );
}

export default page;
