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
                kayna: true
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
                kayna: true
            },
        ]
    },]
    return (
        <div className='between'>
            <p className='heade'>OUR PACKAGES</p>
            <p className="subheade">Take a look of our Pricing and <br /> select Your Choice</p>
            <div className="grid grid-cols-3 gap-5">


                {palns.map((plan, index) => (
                    <div className="border rounded-lg px-5 py-9 max-w-[400px]" key={index}>
                        < p className='text-gray-600 font-[600] uppercase  '>{plan.name}</p>
                        <p className=' text-[50px] text-blues font-[700] '>{plan.price} $</p>
                        <hr className='mx-auto w-[300px] my-4' />
                        <ul className='px-6 space-y-2 text-gray-700 font-[300] my-10'>
                            {plan.features.map((feature, index) => (
                                <li className='flex items-center justify-between text-[15px] gap-8' key={index}>{feature.name} { feature.kayna ?<AiFillCheckCircle className='text-green-400' /> : <AiFillCloseCircle className='text-red-400' />}</li>
                            ))}


                        </ul>
                        <button className='my-5 rounded-full py-3 px-7 outline outline-1 outline-gray-300 text-blue-800 font-bold  hover:text-white hover:bg-blues'>CHOSE PLAN</button>
                    </div>
                ))}

            </div>
        </div>

    )
}

export default Packages