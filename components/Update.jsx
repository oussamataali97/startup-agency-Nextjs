"use client"
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'
import CountUp from 'react-countup';


const Update = () => {


    return (
        <div className="update px-6 py-6 lg:px-16 bg-[url('/assets/18.jpg')] w-full lg:h-[500px] z-[10] bg-cover bg-fixed flex justify-center items-center">
            <div className=" z-50 flex flex-col md:flex-row justify-between items-center gap-5 w-full text-white">
                <div className="border pr-9 pl-5 py-10 rounded-lg w-full lg:w-auto " data-aos="fade-up-right">
                    <p className=' text-[40px] font-bold '>{<CountUp start={0} duration={2.75} end={230} />}</p>
                    <p className='text-[20px] font-500 w-fit '>Satisfied Customers</p>

                </div>
                <div className="border pr-9 pl-5 py-10 rounded-lg w-full lg:w-auto " data-aos="fade-up-left">
                    <p className=' text-[40px] font-bold '>{<CountUp start={0} duration={2.75} end={300} />}</p>
                    <p className='text-[20px] font-500 '>Professional Agents
</p>

                </div>
                <div className="border pr-9 pl-5 py-10 rounded-lg w-full lg:w-auto" data-aos="fade-down-right">
                    <p className=' text-[40px] font-bold '>{<CountUp start={0} duration={2.75} end={100} />}</p>
                    <p className='text-[20px] font-500 '>Type Of Services</p>

                </div>
                <div className="self-start" data-aos="fade-down-left">
                    <p className=' text-[30px] font-[600] '>Stay Update With Us</p>
                    <p className='py-5 font-[300]'>Dried quick round it or order. Add past see west felt did any. Say out noise you taste.</p>
                    <div className="form relative ">
                        <input type="text" placeholder='email ..' className='w-full text-black rounded-full p-4'  />
                        <button className='absolute top-3 right-3 text-white z-[50] gradient p-1 rounded-full'><AiOutlineSend size={25}/></button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Update