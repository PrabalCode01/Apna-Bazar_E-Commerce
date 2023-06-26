import React, { useState } from 'react'
import {HiArrowRight , HiArrowLeft} from "react-icons/hi";

const Banner = () => {
    
  const [currentSlide, setcurrentSlide] = useState(0);

    const data=[
       "https://assets.materialup.com/uploads/6ec43bb8-d7b1-4e1d-9f44-68f7fcb817b5/attachment.jpg",
       "https://img.freepik.com/premium-vector/summer-fashion-sale-banner-design-template_2239-1174.jpg?w=2000",
       "https://images.remotehub.com/512bf05e9a7a11ebac3a9a0aaf11a20e/original_thumb/0a026a71.jpg?version=1618113595",
       "https://img.freepik.com/premium-vector/product-advertising-hero-image-header-layout_1302-21013.jpg",
    ]


    const prevSlide = ()=>{
          setcurrentSlide(currentSlide === 0 ? 3 : (prev)=>prev-1)
    };

    const nextSlide = ()=>{
          setcurrentSlide(currentSlide === 3 ? 0 : (prev)=>prev+1)
    };


  return (
    <div className='w-full h-auto overflow-x-hidden '>
      <div className='w-screen h-[650px] relative' >
        <div style={{transform: `translateX(-${currentSlide * 100}vw)`}} className='w-[400vw] h-full flex transition-transform duration-1000' >
            <img className='w-screen h-full object-cover ' 
            src={data[0]} 
            alt="ImgOne" 
            loading="priority"
            />
            <img className='w-screen h-full object-cover  ' 
            src={data[1]} 
            alt="ImgSecond" 
            loading="priority"
            />
            <img className='w-screen h-full object-cover   ' 
            src={data[2]} 
            alt="ImgThird" 
            loading="priority"
            />
            <img className='w-screen h-full object-cover  ' 
            src={data[3]} 
            alt="ImgFour" 
            loading="priority"
            />
        </div>
        <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
          <div onClick={prevSlide} className="w-14 h-12 border-[1px] border-gray-800 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active-bg-gray-900 duration-300">
            <HiArrowLeft/>
          </div>
          <div onClick={nextSlide} className="w-14 h-12 border-[1px] border-gray-800 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active-bg-gray-900 duration-300" >
            <HiArrowRight/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
