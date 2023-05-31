import React from 'react'
import {GrMapLocation} from 'react-icons/gr'
import {FiPhoneCall ,FiMail} from 'react-icons/fi'
import Image from 'next/image'
const Contact = () => {
  return (
    <div className='flex justify-between pt-16 pb-56 px-20 gap-16 relative' >
        <div className="flex-1 w-full" data-aos="zoom-in">
            <h1 className='text-[17px] lg:text-[20px] font-bold  text-purple-800 py-2'>CONTACT US</h1>
            <p className='text-[29px] lg:text-[34px] font-bold  text-[#0e2258] pb-2'>Then book your trip  from our <br/> exclusive offers.</p>
            <form action="" className='py-6'>
                <input type="text" placeholder='name' className='my-3  class=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"'/>
                <div className="input-group flex justify-between my-5">
                    <input type="text" placeholder='email'  className=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[48%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    <input type="text" placeholder='phone'  className=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-[48%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <textarea name="nemr" id="" placeholder='Message ..' rows="4" class="block p-2.5 w-full text-sm text-gray-900   border  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 my-5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
                <button className='bg-blues px-8 py-4 rounded-full  text-white'>Send Now</button>
</form>
        </div>
        <div data-aos="zoom-in" className="flex-1 boxss self-start max-w-[500px] rounded-lg bg-white z-30 h-[500px] px-12 py-16 justify-between flex flex-col">
            <div className="flex justify-start gap-x-5 items-start">
                <GrMapLocation size={50}  className='text-[#3b5aad] map'/>
                    <div className="detail text-gray-600 font-[400] ">
                        <p className='text-[17px] lg:text-[20px] font-bold  text-[#0e2258]'>Location</p>
                        <p>22 Baker Street, London,</p>
                        <p>United Kingdom, W1U 3BW</p>
                    </div>
            </div>
            <div className="flex justify-start gap-x-5 items-start">
                <FiPhoneCall size={50}  className='text-[#3b5aad] map'/>
                    <div className="detail text-gray-600 font-[400] ">
                        <p className='text-[17px] lg:text-[20px] font-bold  text-[#0e2258]'>Make A Call</p>
                        <p>+1-940-394-2948</p>
                        <p>+1-389-385-3807</p>
                    </div>
            </div>
            <div className="flex justify-start gap-x-5 items-start">
                <FiMail size={50}  className='text-[#3b5aad] map'/>
                    <div className="detail text-gray-600 font-[400] ">
                        <p className='text-[17px] lg:text-[20px] font-bold  text-[#0e2258]'>Flaticon-Email</p>
                        <p>info@Maxa.com</p>
                        <p>support@Maxa.com</p>
                    </div>
            </div>
        </div>
        <Image src='/assets/9.png' width={1000} height={400} className='absolute bottom-0 right-0 -z-10 w-[650px]'/>
    </div>
  )
}

export default Contact