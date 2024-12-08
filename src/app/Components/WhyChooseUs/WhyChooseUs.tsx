import React from 'react'
import { Great_Vibes } from 'next/font/google';
import Image from 'next/image';

const greatVibes = Great_Vibes({
    subsets: ['latin'], 
    weight: '400',
  });

function WhyChooseUs() {
  return (
    <>
    <div className=''>
        <div className='grid grid-cols-5 md:m-20 m-5'>
            <div className='hidden md:block col-span-3'>
                <div className='grid grid-rows-2'>
                    <div className='grid grid-cols-2'>
                        <div>
                        <Image src={"/shwarma.png"} alt='' width={362} height={356}/>
                        </div>
                        <div className='flex items-end ml-3'>
                        <Image src={"/beefburger.png"} alt='' width={281} height={231}/>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 mt-3'>
                        <div>
                        <Image src={"/nuggets.png"} alt='' width={244} height={306}/> 
                        </div>
                        <div className='ml-3'>
                        <Image src={"/dbeefburger.png"} alt='' width={221} height={226}/>
                        </div>
                        <div className='ml-3'>
                        <Image src={"/burgerfries.png"} alt='' width={161} height={168}/>
                        <Image src={"/veggie.png"} alt='' width={161} height={168} className='mt-3'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[450px] md:ml-10'>
            <p className={`${greatVibes.className}  text-[#FF9F0D] text-[25px]`}>Why Choose us</p>
                    <p className=' font-bold md:text-[48px] text-[30px] w-[300px] md:w-auto '><span className='text-[#FF9F0D]'>Ex</span>tra ordinary taste
                    And Experienced </p>
                    <p className=' my-4 mb-10 text-xs md:text-base w-[300px] md:w-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                    <div className='flex flex-wrap gap-5'>
                        <div>
                        <div className='flex flex-wrap justify-center items-center w-[102px] bg-[#FF9F0D] rounded-[6px] h-[100px]'>
                        <Image src={"/Hamburger.png"} alt='' width={56} height={56}/>
                        </div>
                        <p className=' text-center mt-2'>Fast Food</p>
                        </div>
                        <div>
                        <div className='flex  justify-center items-center w-[102px] bg-[#FF9F0D] rounded-[6px] h-[100px]'>
                        <Image src={"/Cookie.png"} alt='' width={56} height={56}/>
                        </div>
                        <p className=' text-center mt-2'>Lunch</p>
                        </div>
                        <div>
                        <div className='flex justify-center items-center w-[102px] bg-[#FF9F0D] rounded-[6px] h-[100px]'>
                        <Image src={"/Wine.png"} alt='' width={56} height={56}/>
                        </div>
                        <p className=' text-center mt-2'>Dinner</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 h-[83px] w-[300px] mt-4'>
                        <div className='col-span-1  bg-[#FF9F0D] rounded-tl-md rounded-bl-md'></div>
                        <div className='col-span-11 bg-white rounded-tr-md rounded-br-md'>
                            <div className='grid grid-cols-2'>
                                <p className='font-bold text-5xl text-center mt-4 text-[#FF9F0D]'>30+</p>
                                <div className='flex flex-wrap justify-center items-center p-4 mr-2'>
                                    <p className='text-black text-lg mr-6'>Years of</p>
                                    <p className='font-semibold text-black text-xl'>Experienced</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    <div className='relative bg-black'>
    <div className="absolute inset-0 bg-[url('/bgimg2.png')] bg-cover bg-center md:bg-top lg:bg-cover opacity-50"></div>
        <div className='relative flex flex-wrap justify-center items-center p-24 gap-20'>
                <div className='flex flex-wrap w-[218px] justify-center items-center'>
                <Image src={"/Group (3).png"} alt='' width={116} height={120} />
                <p className=' font-semibold md:text-xl  mt-2'>Professional Chefs</p>
                <p className=' font-bold text-[40px]'>420</p>
                </div>
                <div className='flex flex-wrap w-[190px] justify-center items-center'>
                <Image src={"/Group (2).png"} alt='' width={116} height={120} />
                <p className=' font-semibold md:text-xl mt-2'>Items Of Food</p>
                <p className=' font-bold text-[40px]'>320</p>
                </div>
                <div className='flex flex-wrap w-[218px] justify-center items-center'>
                <Image src={"/Group (1).png"} alt='' width={116} height={120} />
                <p className=' font-semibold md:text-xl mt-2 text-sm'>Years Of Experienced</p>
                <p className=' font-bold text-[40px]'>30+</p>
                </div>
                <div className='flex flex-wrap w-[218px] justify-center items-center'>
                <Image src={"/Group (4).png"} alt='' width={116} height={120} />
                <p className=' font-semibold md:text-xl mt-2'>Professional Chefs</p>
                <p className=' font-bold text-[40px]'>420</p>
                </div>
        </div>
    </div>
    </>
  )
}

export default WhyChooseUs 