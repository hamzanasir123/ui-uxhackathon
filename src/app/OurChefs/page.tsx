import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import Image from 'next/image'

function page() {
  return (
    <>
    <div className='bg-white'>
        <Navbar/>
        <Banner pageName='Our Chefs'/>
        <div className='max-w-[1320px] text-black m-4'>
            <div className='m-10 flex flex-wrap justify-center items-center gap-2'>
                {[
                    { src: "/chef1.png", name: "Fresh Lime"},
                    { src: "/chef2.png", name: "Jorina Begum"},
                    { src: "/chef3.png", name: "M.Mohammad"},
                    { src: "/chef4.png", name: "Munna Kathy"},
                    { src: "/chef5.png", name: "Tahmina Rumi"},
                    { src: "/chef6.png", name: "Bisnu devgon"},
                    { src: "/chef7.png", name: "Motin Molladsf"},
                    { src: "/chef8.png", name: "William Rumi"},
                    { src: "/chef9.png", name: "Kets william roy"},
                    { src: "/chef10.png", name: "Mahmud kholil"},
                    { src: "/chef11.png", name: "Ataur Rahman"},
                    { src: "/chef12.png", name: "Monalisa holly"},
                ].map((item, index) => (
                    <div key={index} className='md:h-[446px] h-[200px] md:w-[250px] w-[100px] text-center'>
                    <Image src={item.src} alt='' height={379} width={250} className='md:w-[250px] w-[100px]'/>
                    <p className='font-bold md:text-xl text-sm'>{item.name}</p>
                    <p>Chef</p>
                </div>
                ))
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default page