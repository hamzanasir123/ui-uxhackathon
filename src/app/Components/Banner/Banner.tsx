import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type BannerProps = {
  pageName: string;
};

function Banner({ pageName }: BannerProps): React.JSX.Element {
  return (
    <div className="relative h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center">

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          {pageName}
        </h1>
        <nav className="flex items-center gap-2 mt-3 md:mt-5">
          <Link href="/" className="text-sm md:text-base lg:text-lg hover:underline">
            Home
          </Link>
          <Image src="/Vector (9).png" alt="Arrow" width={10} height={12} />
          <span className="text-[#FF9F0D] text-sm md:text-base lg:text-lg font-semibold">
            {pageName}
          </span>
        </nav>
      </div>
    </div>
  );
}

export default Banner;
