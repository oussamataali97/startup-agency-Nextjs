"use client"
import React from 'react'
import Image from 'next/image'
import { useState,useEffect } from 'react'
import {AiOutlineUser,AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'



const Navbar = () => {
    let services = ["Home","Services","How we Work","Pricing","Contact","Blog"]
    const [toggle,setToggle]=useState(true)
    const [menu,setMenu]=useState(false)






    useEffect(()=>{
      if (typeof window === "object") {
      window.addEventListener('scroll',()=>{
        if( window.scrollY < 50 ){
         setToggle(true)
        }else{
         setToggle(false)
        }
     })
     }
},[toggle])

  return (

    <>
    <nav className={toggle ? ' fixed top-0 right-0 left-0 ease-linear duration-300  px-8 md:px-16 py-5 text-white flex justify-between items-center' : 'fixed top-0 right-0 left-0 bg-white shadow-sm z-50 ease-linear duration-300  text-black px-8 md:px-16 py-5 flex justify-between items-center' }>
        <Image className='' src={toggle ? "/assets/logo-light.png" : "/assets/logo-blue.png"} alt='logo' width={138} height={50}/>
        <ul className='md:flex space-x-5 hidden'>
            {services.map((service,index)=>(
                <li className=' font-[500]'  key={index}> <a href={`#${service.replaceAll(' ','-')}`} className='hover:text-blue-800 duration-75 ease-in'>{service.toUpperCase()}</a></li>
            ))}
        </ul>
        <button className={toggle ? "block md:hidden text-[30px] z-[20]  text-white" : "block md:hidden text-[30px] z-[20]  text-black"} onClick={()=>setMenu(!menu)} >
                {menu ? <AiOutlineClose className=' text-neutral-700 '/> : <AiOutlineMenu/>}
            </button>
        <button className={toggle ? 'hidden md:flex bg-white rounded-full text-black items-center gap-2 px-7 py-2' : 'hidden md:flex  items-center gap-2 bg-blues text-white rounded-full  px-7 py-2'}>
    <AiOutlineUser/> LOGIN</button>

    </nav>
    <div className={menu ? 'shadow-md py-6 space-y-4 z-[50] bg-gray-100  text-neutral-900  px-5   text-lg font-semibold fixed top-[89px] duration-500 ease-in w-full'  : ' w-full duration-500 ease-in-out  bg-gray-100 text-neutral-600  px-5  text-lg font-semibold absolute -top-[400px]'}>
    <ul className='flex flex-col space-y-4'>
            {services.map((service,index)=>(
                <li className=' font-[500] border-b-2'  key={index}> <a href={`#${service.replaceAll(' ','-')}`} className='hover:text-blue-800 duration-75 ease-in'>{service.toUpperCase()}</a></li>
            ))}
        </ul>
        <button className= ' flex  items-center gap-2 bg-blues text-white rounded-full  px-7 py-2'>
    <AiOutlineUser/> LOGIN</button>
    </div>
      </>
  )
}

export default Navbar