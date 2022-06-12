import React, { useState } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ReactFlagsSelect from "react-flags-select";
import {FaFacebook} from 'react-icons/fa'
import {useWindowWidth} from '@react-hook/window-size'

import Slider from "react-slick";

const HeroSection = () => {
const [selected, setSelected] = useState("AZ");

const phones = {
  US: '+1',
  DE: '+50',
  TR: '+90',
  AZ: '+994',
  RUS: '+7'
}

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500
  };

  const windowWidth = useWindowWidth()
 
  return (
    <>
      <div className='relative h-auto md:h-[500px]  before:bg-gradient-to-r before:from-primaryBrandColor before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10'>
       {
        windowWidth >= 768 &&  
          <Slider {...settings}>
            <div>
              <img className='w-full h-[500px] object-cover' src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg" alt="" />
            </div>
            <div>
              <img className='w-full h-[500px] object-cover' src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg" alt="" />
            </div>
            <div>
              <img className='w-full h-[500px] object-cover' src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg" alt="" />
            </div>
        </Slider>
       }
        <div className='md:container mx-auto lg:px-28 relative md:absolute top-0 left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 h-full z-20 flex items-center justify-between'>
          <div className='hidden md:block'>
            <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="" />
            <h3 className='mt-8 text-4xl font-semibold text-white'>Dakikalar içinde <br /> kapınızda</h3>
          </div>
          <div className='w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6'>
              <h4 className='text-primaryBrandColor text-center font-semibold mb-4'>Giriş yap veya kayıt ol</h4>
              <div className='grid gap-y-3'>
                <div className='flex gap-x-2'>
                  <ReactFlagsSelect
                      countries={Object.keys(phones)}
                      customLabels={phones}
                      onSelect={code => setSelected(code)}
                      selected={selected}
                      className="flag-select"
                  />
                  <label className='flex-1 relative group block cursor-pointer'>
                    <input required className='h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primaryBrandColor focus:border-primaryBrandColor outline-none peer text-sm pt-2' />
                    <span className='absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primaryBrandColor peer-focus:text-xs peer-valid:h-7 peer-valid:text-primaryBrandColor peer-valid:text-xs'>Telefon numarası</span>
                  </label>
                </div>
                <button className='bg-brandYellow text-primaryBrandColor hover:bg-primaryBrandColor hover:text-brandYellow transition-colors h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold'>
                  Telefon numarası ile devam et
                </button>
                <hr />
                <button className='px-4 bg-blue-700 bg-opacity-10 text-blue-700 text-opacity-80 hover:bg-blue-700 hover:text-white transition-colors h-12 flex items-center rounded-md w-full text-sm font-semibold'>
                  <FaFacebook size={24}/>
                  <span className='mx-auto'>Facebook ile devam et</span>
                </button>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection