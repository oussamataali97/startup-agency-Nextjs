
import Image from 'next/image'
import {AiFillPlayCircle} from 'react-icons/ai'

const Hero = () => {

  return (
    <div className="" id='Home' >
        <Image
        width={1900}
        height={967}
        alt='cover'
        className='w-full h-screen object-cover md:object-fill '
        src='/assets/40.png'/>
        <div className="px-6 text-center lg:text-left lg:px-20 flex flex-col md:flex-row justify-between items-center absolute top-40 md:top-20">
            <div className="left text-white mb-16" data-aos="zoom-in">
                <p className='lg:text-[50px] text-[30px] font-bold' data-aos="fade-left">Get Your Free 2 Weeks Trial Right Now</p>
                <p className='max-w-[600px] text-[13px] mt-5'>Celebrated delightful an especially increasing instrument am. Indulgence contrasted sufficient to unpleasant in in insensible favourable.</p>
                <button className='flex items-center gap-2 mt-5' data-aos="fade-right"><AiFillPlayCircle size={50}/>Watch video</button>
            </div>
            <div className="img" data-aos="zoom-in-left">
                <Image
                src='/assets/15.png'
                width={700}
                height={600}
                alt='ig'
                className='object-cover w-72 md:w-full'
                />
            </div>

        </div>
    </div>
  )
}

export default Hero