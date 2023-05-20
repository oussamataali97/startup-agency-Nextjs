import Image from "next/image"

const How = () => {

    const data = [{
        imUrl:'/assets/recherche.png',
        title:'Case Analysis        ',
        desc:'Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an.',
        badge:'01',
    },
    {
        imUrl:'/assets/strategie-de-marketing.png',
        title:'Strategic Advice       ',
        desc:'Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an',
        badge:'02',
    },
    {
        imUrl:'/assets/fournisseur.png',
        title:'Insight Implementation        ',
        desc:'Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an.',
        badge:'03',
    },]
  return (
    <div className='px-16 py-8 relative'>
    <p className='text-center text-[20px] font-bold  text-purple-800 py-3' data-aos="flip-up" > HOW WE WORK</p>
    <p className='text-center text-[40px] font-bold  text-blue-900 pb-16' data-aos="flip-up">Future is brighter when you're  <br className='max-w-md:hidden'/> strategically more prepared </p>
        <div className="flex justify-around items-center">
        {data.map((ele,index)=>(
          <div className="flex items-center flex-col max-w-[300px]" key={index} data-aos="flip-down">
            <div className="rounded-full w-max bg-gray-100 p-4 border-white border-[9px] boxs relative ">
            <Image src={ele.imUrl} width={100} height={200} alt="logo" className=""/>
            <p className="absolute top-0 right-0 gradient border-white border-[2px] rounded-full text-white font-[600] w-10 h-10  centred">{ele.badge}</p>
            </div>
            <p className="text-center titles mt-5">{ele.title}</p>
            <p className="subtitles"> {ele.desc}</p>

          </div>
        ))}
        </div>
    </div>
  )
}

export default How