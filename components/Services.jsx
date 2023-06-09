import React from 'react'
import Image from 'next/image'
import {AiFillCheckCircle} from 'react-icons/ai'
const Services = () => {
    const data = [{
        imgUrl:'/assets/servir.png',
        title: "Project Creation",
        desc: "Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an.",
        types: ["Product Development", "Product Consultation", "Architecture Design"]
    },
    {
        imgUrl:'/assets/software-development.png',
        title: "Software Development       ",
        desc: "Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an.",
        types: ["Agile development", "Rapid application", "Waterfall method"]
    },
    {
        imgUrl:'/assets/project-management.png',
        title: "Project Management",
        desc: "Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an.",
        types: ["Phase management", "Team management", "Communication"]
    }]
    return (
        <div id='Services' className='px-6 lg:px-16 lg:py-32 pt-64 pb-16 relative services-list-items'>
            <p className='text-center text-[17px] lg:text-[20px] font-bold  text-purple-800 py-3' data-aos="fade-left"> SERVICES WE PROVIDE</p>
            <p className='text-center text-[29px] lg:text-[40px] font-bold  text-blue-900 pb-16' data-aos="fade-right">We turn information into <br className='max-w-md:hidden'/> actionable insights</p>
            <div className="boxs flex flex-col md:flex-row justify-between gap-5 ">
               {data.map((ele,index)=>(
                <div className="box shadow-md p-5 bg-white" key={index} >
                    <p data-aos="fade-down" className='flex items-center gap-3 text-xl font-bold text-blue-900'> <Image src={ele.imgUrl} width={80} height={50}/> {ele.title}</p>
                    <p data-aos="fade-down" className='py-5 text-gray-600 lead'> {ele.desc} </p>
                    <ul>
                        {ele.types.map((type,index)=>(
                            <li data-aos="zoom-out" key={index} className='flex items-center mb-3 gap-2 text-blue-900 font-semibold'><AiFillCheckCircle size={20} className='text-purple-700'/>{type}</li>
                        ))}
                    </ul>
                </div>
               ))}
            </div>
        </div>
    )
}

export default Services