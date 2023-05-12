import React from 'react'
import Image from 'next/image'
import {AiFillPlayCircle} from 'react-icons/ai'

const Hero = () => {
  return (
    <div className="">
        <Image
        width={1900}
        height={967}
        alt='cover'
        className='w-full h-screen '
        src='/assets/40.png'/>
        <div className="px-20 flex justify-between items-center absolute top-20">
            <div className="left text-white mb-16">
                <p className='text-[50px] font-bold'>Get Your Free 2 Weeks Trial Right Now</p>
                <p className='max-w-[600px] text-[13px] mt-5'>Celebrated delightful an especially increasing instrument am. Indulgence contrasted sufficient to unpleasant in in insensible favourable.</p>
                <button className='flex items-center gap-2 mt-5'><AiFillPlayCircle size={60}/>Watch video</button>
            </div>
            <div className="img">
                <Image
                src='/assets/15.png'
                width={700}
                height={600}
                alt='ig'
                className='object-cover'
                />
            </div>

        </div>
    </div>
  )
}

export default Hero