import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type BannerProps = {
    pageName: string;
  };

function Banner({pageName} : BannerProps ) : React.JSX.Element {
  return (
    <>
     <div>
  <div className="relative h-[310px] md:h-[300px] lg:h-[300px]">
    <div className="absolute inset-0 bg-[url('/bgimg4.png')] bg-cover bg-center md:bg-top lg:bg-cover"></div>
    <div className="relative">
      <div className="flex justify-center items-center">
        <p className="font-bold text-[28px] md:text-[38px] lg:text-[48px] mt-12 md:mt-16">{pageName}</p>
      </div>
      <div className="flex justify-center items-center gap-2 mt-2 md:mt-4">
        <Link href={"/"} className="text-sm md:text-base lg:text-lg">
          Home
        </Link>
        <Image src={"/Vector (9).png"} alt="Arrow" width={7} height={10} />
        <Link href={""} className="text-[#FF9F0D] text-sm md:text-base lg:text-lg">{pageName}</Link>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Banner