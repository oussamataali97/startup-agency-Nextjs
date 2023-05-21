'use client'
import Hero from '@/components/Hero'
import How from '@/components/How'
import Navbar from '@/components/Navbar'
import Packages from '@/components/Packages'
import Platforms from '@/components/Platforms'
import Reviews from '@/components/Reviews'
import Services from '@/components/Services'
import Startup from '@/components/Startup'
import Update from '@/components/Update'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'


export default function Home() {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div className="main overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Services/>
      <Update/>
      <Startup/>
      <How/>
      <Platforms/>
      <Packages/>
      <Reviews/>
    </div>
  )
}
