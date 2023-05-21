import React from 'react'
import Image from 'next/image'
import {AiOutlineFileSearch,AiOutlineUserSwitch} from 'react-icons/ai'
const Startup = () => {
  return (
    <div className='flex flex-col md:flex-row items-center lg:justify-between px-6 md:px-0 py-32'>
        <Image src='/assets/8.png' width={900} height={800} data-aos="zoom-in" alt='img' className='relative lg:right-20 flex-1 lg:w-[300px] h-auto  lg:object-cover '/>
        <div className="flex-1 text-center md:text-left" data-aos="flip-right">
            <p className=' text-[30px] pt-5 lg:text-[40px] font-[600] text-blue-900 '>Designed for startups with experienced expert developer</p>
            <p className='  font-[200] pt-12 max-w-[600px] '>Chances are good that there’s a cloud software as a service solution on the market today that will serve your core back-office needs. Many of those products offer the potential not just to move your data and processes to cloud</p>
            <ul className='pt-8 space-y-3'>
                <li className='flex items-center gap-2   font-[600] text-blue-900 '> <span className='bg-gray-200 centred rounded-full text-purple-800 p-2'><AiOutlineFileSearch className=' text-3xl '/> </span> Clear Documentation</li>
                <li className='flex items-center gap-2   font-[600] text-blue-900 '> <span className='bg-gray-200 centred rounded-full text-purple-800 p-2'><AiOutlineUserSwitch className='text-3xl '/></span> Flexible user interface</li>
            </ul>
        </div>

    </div>
  )
}

export default Startup