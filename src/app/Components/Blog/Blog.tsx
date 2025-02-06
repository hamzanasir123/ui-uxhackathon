import React from "react";
import { Great_Vibes } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

function Blog() {
  return (
    <>
      <div>
        <div className="relative md:h-[408px] mt-[100px]">
          <div className="absolute inset-0 bg-[url('/bgimg3.png')] bg-cover bg-center"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div></div>
            <div className="relative text-right p-6 sm:p-10">
              <p className={`${greatVibes.className} text-[#FF9F0D] text-[20px] sm:text-[25px]`}>
                Restaurant Active Process
              </p>
              <p className="font-bold text-[28px] sm:text-[38px]">
                <span className="text-[#FF9F0D]">We</span> Document Every Food
                Bean Process until it is saved
              </p>
              <p className="my-4 mb-6 sm:mb-10 text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna,{" "}
              </p>
              <div className="flex flex-wrap justify-end gap-4 sm:gap-5 items-center">
                <Link
                  href={""}
                  className="text-white px-6 py-2 bg-transparent border-2 rounded-full border-[#FF9F0D]"
                >
                  See More
                </Link>
                <div className="w-[50px] sm:w-[60px] flex justify-center items-center h-[50px] sm:h-[60px] rounded-full bg-[#FF9F0D]">
                  <Image
                    src={"/Vector (8).png"}
                    alt="video icon"
                    height={24}
                    width={24}
                  />
                </div>
                <p className="text-sm sm:text-base">Play Video</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 sm:mt-20">
          <p className={`${greatVibes.className} text-[#FF9F0D] text-[20px] sm:text-[25px] animate-bounce`}>
            Blog Post
          </p>
          <p className="font-bold text-[30px] sm:text-[48px]">
            <span className="text-[#FF9F0D]">La</span>test News & Blog
          </p>
          <div className="flex flex-wrap p-6 sm:p-10 gap-8 sm:gap-16 justify-center">
            <div className="w-full sm:w-[324px] md:h-[469px] border-2 border-white">
              <Image src={"/blogpic1.png"} alt="Blog 1" height={349} width={423} />
              <div className="p-4 text-left">
                <p className="text-[#FF9F0D]">10 February 2022</p>
                <p className="font-bold text-sm sm:text-base">
                  Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
                </p>
                <div className="flex justify-between mt-6 sm:mt-16">
                  <p className="text-sm sm:text-base">Learn More</p>
                  <Image src={"/Icon.png"} alt="icon" width={76} height={20} />
                </div>
              </div>
            </div>

            <div className="w-full sm:w-[324px] md:h-[469px] border-2 border-white">
              <Image src={"/blogpic2.png"} alt="Blog 2" height={349} width={423} />
              <div className="p-4 text-left">
                <p className="text-[#FF9F0D]">10 February 2022</p>
                <p className="text-white font-bold text-sm sm:text-base">
                  Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A
                </p>
                <div className="flex justify-between mt-6 sm:mt-16">
                  <p className="text-white text-sm sm:text-base">Learn More</p>
                  <Image src={"/Icon.png"} alt="icon" width={76} height={20} />
                </div>
              </div>
            </div>

            <div className="w-full sm:w-[324px] md:h-[469px] border-2 border-white">
              <Image src={"/blogpic3.png"} alt="Blog 3" height={349} width={423} />
              <div className="p-4 text-left">
                <p className="text-[#FF9F0D]">10 February 2022</p>
                <p className="text-white font-bold text-sm sm:text-base">
                  Curabitur rutrum velit ac congue malesuada
                </p>
                <div className="flex justify-between mt-6 sm:mt-16">
                  <p className="text-white text-sm sm:text-base">Learn More</p>
                  <Image src={"/Icon.png"} alt="icon" width={76} height={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
