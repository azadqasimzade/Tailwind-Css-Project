import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import bannersData from '../../api/banners.json'
import loader from '../../img/loader.gif'
import Title from '../ui/Title';
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io'

function NextBtn({onClick}) {
  return <button className='text-purple-700 absolute top-1/2 -right-6 -translate-y-1/2' onClick={onClick}><IoIosArrowForward size={22}/></button>
}

function PrevBtn({onClick}) {
  return <button className='text-purple-700 absolute top-1/2 -left-6 -translate-y-1/2' onClick={onClick}><IoIosArrowBack size={22}/></button>
}

const Campaigns = () => {
  const [banners, setBanners] = useState([])

  useEffect(() =>{
    setBanners(bannersData)
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows:false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows:false
        }
      }
    ]
  };

  return (
    <>
      <div className='md:container mx-auto lg:px-32 md:mb-10'>
        <div className='hidden md:block'>
          <Title>
            Kampanyalar
          </Title>
        </div>
          <div className='w-full flex justify-center'>
            {
              !banners.length && <img src={loader} alt="Loading..." className='w-20 h-20'/>
            }
          </div>
            <Slider {...settings} className='lg:-mx-2'>
                {
                  banners.length && banners.map(banner =>(
                    <div key={banner.id} className='md:px-2'>
                      <img className='w-full object-cover md:rounded-lg' src={banner.image} alt={banner.id} />
                    </div>
                  ))
                }
            </Slider>
      </div>
    </>
  )
}

export default Campaigns