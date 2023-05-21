import React from 'react'
import { FcGallery, FcGoogle } from 'react-icons/fc'
import Image from 'next/image'
import { FaAccessibleIcon, FaAngular, FaApple, FaBlackberry, FaDigitalOcean, FaDropbox, FaPaypal, FaTiktok } from 'react-icons/fa'
const Platforms = () => {
    return (
        <div className='relative  blue_gradient flex flex-col justify-center py-16 md:py-0 min-h-[400px]'>
            <Image src="/assets/38.png" width={700} height={500} className=' absolute right-0 top-0 max-h-[400px] object-cover' />
            <div className="content flex lg:justify-center flex-col md:flex-row gap-16 lg:items-center p-8 lg:p-16" data-aos="fade-right">
                <div className="flex-1 text-white ">
                    <p className='text-[16px] text-center md:text-left'>Join over 40,000+ businesses worldwide.</p>
                    <p className='white_title text-center md:text-left py-5'>We're Working Best With <br className='hidden md:block'/> Your Favorite Platforms</p>
                    <button className='rounded-full w-full md:w-auto uppercase font-[600] outline outline-1 py-3 px-5 hover:bg-white hover:text-black hover:outline-0 duration-300 ease-linear'>View All Brands</button>
                </div>
                <div className="flex-1 z-50 text-[50px] centred max-w-[500px] gap-5 flex-wrap lg:space-x-5">
                    <div className="box bg-white p-5 rounded-lg" data-aos="fade-left">
                        <FaAngular color='red' />
                    </div>


                    <div className="box bg-white p-5 rounded-lg" data-aos="fade-left">
                        <FaPaypal className='text-blue-700' />
                    </div>
                    <div className="box bg-white p-5 rounded-lg" data-aos="fade-left">
                        <FaDropbox className='text-blue-500' />
                    </div>
                    <div className="box bg-white p-5 rounded-lg" data-aos="fade-left">
                        <FaApple className='text-gray-500' />
                    </div>
                    <div className="box bg-white p-5 rounded-lg" data-aos="fade-left">
                        <FcGoogle />
                    </div>
                    <div className="box bg-white p-5 rounded-lg" data-aos="fade-left">
                        <FaTiktok />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Platforms