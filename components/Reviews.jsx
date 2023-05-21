"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Navigation,Autoplay, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'
import 'swiper/css/pagination';


// Import Swiper styles
import 'swiper/css';
const Reviews = () => {

    const data =[

        {
            title:" (Product Design)",
            desc:"                                    Ashamed no inhabit ferrars it ye besides resolve. Own judgment directly few trifling. Elderly as pursuit at regular do parlors. Rank what has into fond pursuit at regular.             ",
            pic:"/assets/1-1.jpg",
            name:"Jonath Dark",
            job:"Backend Developer",
        },
        {
            title:"    (Bug Fixing)",
            desc:"                                    Ashamed no inhabit ferrars it ye besides resolve. Own judgment directly few trifling. Elderly as pursuit at regular do parlors. Rank what has into fond pursuit at regular.             ",
            pic:"/assets/2-1.jpg",
            name:"Jonath White",
            job:"Junior Developer",
        },
        {
            title:"         (Bug Fixing)",
            desc:"                                    Ashamed no inhabit ferrars it ye besides resolve. Own judgment directly few trifling. Elderly as pursuit at regular do parlors. Rank what has into fond pursuit at regular.             ",
            pic:"/assets/3-1.jpg",
            name:"Jonath Dark",
            job:"Senior Developer",
        },
    ]


    return (
        <div className='bg-blue-100 py-16 px-6 md:px-0'>
            <p className='heade' data-aos="fade-left">REVIEW</p>
            <p className='text-center text-[40px] font-bold  text-blue-900 pb-6' data-aos="fade-right">10,000+ Happy Customers
</p>

            <Swiper
                modules={[Navigation, Autoplay,Pagination, Scrollbar, A11y]}
                navigation
                autoplay
                pagination={{ clickable: true , style:'text-green-300'}}
                scrollbar={{ draggable: true }}
                spaceBetween={50}
                slidesPerView={1}

                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {data.map((item,index)=>(
                    <SwiperSlide className=''>
                    <div className="flex flex-col items-center pb-10">
                        <p className='text-gray-600 font-[800]  ' data-aos="zoom-in">{item.title}
                        </p>
                        <div class="flex items-center justify-center py-3">
                            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        </div>
                        <p className='max-w-[800px] text-center text-blue-800 font-[300] italic py-2' data-aos="fade-left">{item.desc} </p>
                        <div className="pic relative">
                        <Image data-aos="zoom-in" src={item.pic} width={500} height={500} alt='person' className=' outline outline-4 outline-white rounded-full w-32 h-32 my-4' />
                            <p className='absolute top-3 right-1 bg-purple-950 w-8 h-8 centred text-[30px] text-white rounded-full'>”</p>
                        </div>
                        <p className='heade p-0' data-aos="fade-left">{item.name}</p>
                        <p className=' font-[300] text-gray-600 ' data-aos="fade-down">{item.job}</p>
                    </div>

                </SwiperSlide>
                ))}



            </Swiper>
        </div>
    )
}

export default Reviews