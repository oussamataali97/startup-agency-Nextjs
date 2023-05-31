import React from 'react'
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'
import { FaCheck } from 'react-icons/fa'

const Packages = () => {

    const palns = [{
        name: "BASIC PLAN            ",
        price: 24.66,
        features: [
            {
                name: '10 Keywords Optimized',
                kayna: true
            },
            {
                name: '3 Top 10 Ranking                ',
                kayna: false
            },
            {
                name: 'Web Site Analysis                ',
                kayna: false
            },
            {
                name: 'Keyword Research',
                kayna: true
            },
            {
                name: 'Content Optimization',
                kayna: false
            },
        ]

    },
    {
        name: "STARTER PLAN            ",
        price: 30.66,
        features: [
            {
                name: '20 Keywords Optimized',
                kayna: true
            },
            {
                name: '6 Top 10 Ranking                ',
                kayna: true
            },
            {
                name: 'Web Site Analysis                ',
                kayna: false
            },
            {
                name: 'Keyword Research',
                kayna: true
            },
            {
                name: 'Content Optimization',
                kayna: true
            },
        ]
    },
    {
        name: "PREMIUM PLAN        ",
        price: 60.66,
        features: [
            {
                name: '30 Keywords Optimized',
                kayna: true
            },
            {
                name: '9 Top 10 Ranking                ',
                kayna: true
            },
            {
                name: 'Web Site Analysis                ',
                kayna: true
            },
            {
                name: 'Keyword Research',
                kayna: true
            },
            {
                name: 'Content Optimization',
                kayna: true
            },
        ]
    },]
    return (
        <div className='px-6 lg:px-16 py-8 ' id='Pricing'>
            <p className='heade'>OUR PACKAGES</p>
            <p className="subheade">Take a look of our Pricing and <br /> select Your Choice</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center place-items-center">


                {palns.map((plan, index) => (
                    <div className="planss border rounded-lg px-5 py-9 w-full lg:max-w-[400px] plan hover:border-t-2 hover:border-t-blues" key={index}>
                        < p className='text-gray-600 font-[600] uppercase  '  data-aos="fade-down">{plan.name}</p>
                        <p className=' text-[50px] text-blues font-[700] '  data-aos="fade-down">{plan.price} $</p>
                        <hr className='mx-auto w-[300px] my-4' />
                        <ul className='px-6 space-y-2 text-gray-700 font-[300] my-10'>
                            {plan.features.map((feature, index) => (
                                <li  data-aos="fade-left" className='flex items-center justify-between text-[15px] gap-8' key={index}>{feature.name} { feature.kayna ?<AiFillCheckCircle className='text-green-400' /> : <AiFillCloseCircle className='text-red-400' />}</li>
                            ))}


                        </ul>
                        <button className='my-5 ease-out duration-200 rounded-full py-3 px-7 outline outline-1 outline-gray-300 text-blue-800 font-bold  hover:text-white hover:bg-blues'>CHOSE PLAN</button>
                    </div>
                ))}

            </div>
        </div>

    )
}

export default Packages