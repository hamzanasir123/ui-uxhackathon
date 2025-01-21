"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import Image from 'next/image'
import client from '../../../client'
import { urlFor } from '../../../image'

interface Chef {
    name : string,
    description : string,
    caregory : string,
    experience : number,
    image : string,
    available : boolean,
    position : string,
    specialty : string,
  }

function Page() {
     const [apiData, setApiData] = useState<Chef[]>([]);
      
        const query = `*[_type == 'chef']{
      name, experience, image, specialty,
        available, description, position
    }`;
      
        useEffect(()=>{
          const fetching = async () => {
            const response = await client.fetch(query);
            setApiData(response);
          }
          fetching();
        }, [query])
  return (
    <>
    <div className='bg-white'>
        <Navbar/>
        <Banner pageName='Our Chefs'/>
        <div className='max-w-[1320px] text-black m-4'>
            <div className='m-10 flex flex-wrap justify-center items-center gap-6'>
                {apiData.map((item, index) => (
                    <div key={index} className='grid grid-cols-2 md:h-[446px] h-[200px] md:w-[550px] w-[100px] text-center'>
                    <Image src={urlFor(item.image).url()} alt='' height={379} width={250} className='md:w-[250px] w-[100px]'/>
                    <div>
                    <div className='flex gap-2'>
                        <p className='font-bold'>Name :</p>
                        <p>{item.name}</p>
                    </div>
                    <div className='flex gap-2'>
                        <p className='font-bold'>Specialty :</p>
                        <p>{item.specialty}</p>
                    </div>
                    <div className='flex gap-2'>
                        <p className='font-bold'>Experience :</p>
                        <p>{item.experience}</p>
                    </div>
                    <div className='flex gap-2'>
                        <p className='font-bold'>Position :</p>
                        <p>{item.position}</p>
                    </div>
                    <div className='flex gap-2'>
                        <p className='font-bold'>Available :</p>
                        <p>{item.available}</p>
                    </div>
                    <div className='gap-2 text-left'>
                        <p className='font-bold'>Description :</p>
                        <p>{item.description}</p>
                    </div>
                    </div>
                </div>
                ))
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default Page