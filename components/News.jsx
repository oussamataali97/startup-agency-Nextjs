import React from 'react'

const News = () => {
  return (
    <div className='px-6 md:px-16 py-16'>
        <p className='heade'>LATEST NEWS</p>
        <p className='subheade'>Most Popular Breaking News & <br className='hidden md:block'/> Top Stories</p>
        <div className="grid lg:grid-cols-3 place-items-center gap-y-6" data-aos="zoom-in">
            <div className="bg-[url('/assets/v1.jpg')] h-[450px] relative z-30 opacit w-full md:w-[366px] bg-cover p-8 flex flex-col justify-between">
                <h1 className='bg-blues text-white rounded-md w-max p-1 '>15 JUL, 2021</h1>
                <div className="group">
                    <p className='text-[20px] text-white font-[600]  '>The for fully had she there leave merit enjoy forth.</p>
                    <div className="group-img pt-5 flex items-center text-white font-[300] gap-x-2">
                        <img src="/assets/3-1.jpg" alt="" className='rounded-full w-10' />
                        <h1 className='text-[14px]'> BY JOHN BAUS ---- IN CREATIVE</h1>
                    </div>
                </div>
            </div>
            <div className="border h-[450px] relative  w-full md:w-[366px]  p-8 flex flex-col justify-between" data-aos="zoom-in">
                <h1 className='bg-blues text-white rounded-md w-max p-1 '>15 JUL, 2021</h1>
                <p className='font-[700] text-[#0e2258] py-6 text-[20px] '>Impossible admiration in particular conviction up.</p>
                <p className='font-[300] text-neutral-600'>Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still
                    any about manor. Estimable me disposing
                    of be moonlight cordially curiosity.</p>
                    <div className="group-img pt-5 flex items-center text-black font-[300] gap-x-2">
                        <img src="/assets/3-1.jpg" alt="" className='rounded-full w-10' />
                        <h1 className='text-[14px]'> BY <span className='font-[400] text-[#0e2258]'>JOHN BAUS</span> ---- IN  <span className='font-[400] text-[#0e2258]'>CREATIVE</span></h1>
                    </div>

            </div>
            <div data-aos="zoom-in" className="bg-[url('/assets/v4-1.jpg')] h-[450px] relative opacit w-full md:w-[366px] bg-cover p-8 flex flex-col justify-between">
                <h1 className='bg-purple-950 text-white rounded-md w-max p-1 '>15 JUL, 2021</h1>
                <div className="group">
                    <p className='text-[20px] text-white font-[600]  '>The for fully had she there leave merit enjoy forth.</p>
                    <div className="group-img pt-5 flex items-center text-white font-[300] gap-x-2">
                        <img src="/assets/3-1.jpg" alt="" className='rounded-full w-10' />
                        <h1 className='text-[14px]'> BY JOHN BAUS ---- IN CREATIVE</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default News