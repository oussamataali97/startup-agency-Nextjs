import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'

const Update = () => {
    return (
        <div className="update px-16 bg-[url('/assets/18.jpg')] w-full h-[500px] z-[10] bg-cover bg-fixed flex justify-center items-center">
            <div className=" z-50 flex justify-between items-center gap-5 w-full text-white">
                <div className="border pr-9 pl-5 py-10 rounded-lg ">
                    <p className=' text-[40px] font-bold '>230</p>
                    <p className='text-[20px] font-500 w-fit '>Satisfied Customers</p>

                </div>
                <div className="border pr-9 pl-5 py-10 rounded-lg ">
                    <p className=' text-[40px] font-bold '>40</p>
                    <p className='text-[20px] font-500 '>Professional Agents
</p>

                </div>
                <div className="border pr-9 pl-5 py-10 rounded-lg ">
                    <p className=' text-[40px] font-bold '>70</p>
                    <p className='text-[20px] font-500 '>Type Of Services</p>

                </div>
                <div className="self-start">
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