import React from 'react'
import { AiOutlineBehance, AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai'
import Image from 'next/image'
const Footer = () => {
    return (
        <div className='footer-sec bg-[#0e2258] relative h-auto text-white w-screen mx-auto'>
            <div className="grid md:grid-cols-5 px-6 md:px-16 py-20 gap-8">
                <div className="col-span-2 max-w-[400px]" data-aos="zoom-in">
                    <p className='font-[700]'>About Aveit</p>
                    <p className='py-8 text-neutral-300 font-[300]'>Required honoured trifling eat pleasure man relation. Assurance yet bed was improving furniture man. Distrusts delighted Excuse few the
                        remain highly feebly add people manner say.
                        It high at my mind by roof.</p>
                    <div className="flex items-center space-x-8 text-[27px]">                    <AiOutlineInstagram />
                        <AiOutlineYoutube />
                        <AiOutlineTwitter />
                        <AiOutlineBehance />
                    </div>
                </div>
                <div className="boxa" data-aos="zoom-in">
                    <p className='font-[700]'>About Aveit</p>
                    <ul className='font-[300] text-neutral-300 py-8 space-y-8'>
                        <li>SEO Marketing</li>
                        <li>Pay Per Click</li>
                        <li>SEO Services</li>
                        <li>Social Media</li>
                    </ul>
                </div>
                <div className="boxa" data-aos="zoom-in">
                    <p className='font-[700]'>Company</p>
                    <ul className='font-[300] text-neutral-300 py-8 space-y-8'>
                        <li>SEO Marketing</li>
                        <li>Pay Per Click</li>
                        <li>SEO Services</li>
                        <li>Social Media</li>
                    </ul>
                </div>
                <div className="boxa" data-aos="zoom-in">
                    <p className='font-[700]'>Contact Us</p>
                    <ul className='font-[300] text-neutral-300 py-8 space-y-8'>
                        <li>SEO Marketing</li>
                        <li>Pay Per Click</li>
                        <li>SEO Services</li>
                        <li>Social Media</li>
                    </ul>
                </div>
            </div>
            <hr className='max-w-[400px] md:max-w-[1200px] mx-auto border-neutral-400' />

            <div className="flex flex-col md:flex-row gap-y-5 justify-between items-center px-6 md:px-16 py-16">
                <p>© Copyright 2023 created By <a href="https://www.linkedin.com/in/oussama-taali-02149316a/" className='cursor-pointer'>Oussama</a></p>
                <Image src='/assets/logo-light.png' width={500} height={180} className='w-40 hidden md:block' />
                <div class="relative w-full md:w-auto">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    </div>
                    <input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com ..." />
                </div>
            </div>
        </div>
    )
}

export default Footer