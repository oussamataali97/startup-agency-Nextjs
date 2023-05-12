"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'



const Navbar = () => {
    let services = ["Home","Services","How we Work","Pricing","Contact","Blog"]
    const [toggle,setToggle]=useState(false)

    window.addEventListener('scroll',()=>{
       if( window.scrollY < 50 ){
        setToggle(true)
       }else{
        setToggle(false)
       }
    })
  return (

    <nav className={toggle ? 'fixed top-0 right-0 left-0 ease-linear duration-300  px-16 py-5 text-white flex justify-between items-center' : 'fixed top-0 right-0 left-0 bg-white shadow-md z-50 ease-linear duration-300  text-black px-16 py-5 flex justify-between items-center' }>
        <Image className='' src={toggle ? "/assets/logo-light.png" : "/assets/logo-blue.png"} alt='logo' width={138} height={50}/>
        <ul className='flex space-x-5 '>
            {services.map((service,index)=>(
                <li className=' font-bold'  key={index}>{service}</li>
            ))}
        </ul>

        <button className={toggle ? 'bg-white rounded-full text-black  px-7 py-2' : 'bg-blue-400 text-white rounded-full  px-7 py-2'}>
    LOGIN</button>

    </nav>
  )
}

export default Navbar