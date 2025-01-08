import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'

function page() {
  return (
    <>
    <div className='bg-white'>
        <Navbar/>
        <Banner pageName='Checkout'/>
        <div className='text-black m-20 h-screen'>
            <div className='grid grid-cols-3 gap-4 h-screen'>
                    <div>
                        <p className='font-bold text-xl'>Shipping Address</p>
                        <div className='flex flex-wrap justify-start items-center my-2'>
                            <p>First Name</p>
                            <input type='text' className='h-[56px] w-[424px] border-2'/>
                        </div>
                        <div className='flex flex-wrap justify-start items-center my-2'>
                            <p>Email Address</p>
                            <input type='email' className='h-[56px] w-[424px] border-2'/>
                        </div>
                        <div className='flex flex-wrap justify-start items-center my-2'>
                            <p>Company</p>
                            <input type='text' className='h-[56px] w-[424px] border-2'/>
                        </div>
                    </div>
                    <div className='bg-red-400'>

                    </div>
                    <div className='bg-red-400'>

                    </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default page