import React, { useEffect, useState } from 'react'
import footerMenusData from '../../api/footerMenus.json'
import Menus from '../ui/Menus'
import {FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa'


import {BiGlobe} from 'react-icons/bi'
const Footer = () => {
  const [menus, setMenus] = useState([])

  useEffect(() => {
    setMenus(footerMenusData)
  }, [])
  
  return (
    <>
      <div className='bg-white'>
        <div className='md:container mx-auto lg:px-32 lg:p-0 p-4'>
          <div className='grid gap-y-6 md:gap-x-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 pt-4'>
              <section>
                <nav className='grid gap-y-2 md:gap-y-4'>
                  <h6 className='text-lg text-primaryBrandColor'>Getir'i indirin!</h6>
                  <a href="/" className='transition-all transform hover:scale-105'>
                    <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="app store" />
                  </a>
                  <a href="/" className='transition-all transform hover:scale-105'>
                    <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="google play store" />
                  </a>
                  <a href="/" className='transition-all transform hover:scale-105'>
                    <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="app gallery" />
                  </a>
                </nav>
              </section>
              {
                menus.map((menu,index) =>(
                  <Menus key={index} {...menu}/>
                ))
              }
          </div>
          <div className='flex flex-col md:flex-row justify-between items-center border-t gap-y-4 border-gray-100 mt-6 py-6'>
            <div className='text-xs text-gray-700 flex gap-x-8'>
              &copy; 2022 Getir
              <a href="/" className='text-primaryBrandColor hover:underline relative before:w-[3px] before:h-[3px] before:bg-primaryBrandColor before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:rounded-full'>Bilgi Toplumu Hizmetleri</a>
            </div>
            <nav className='flex gap-x-1 md:gap-x-3'>
              <a href="/" className='w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primaryBrandColor hover:bg-opacity-10 hover:text-primaryBrandColor flex items-center justify-center'>
                <FaFacebook size={21}/>
              </a>
              <a href="/" className='w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primaryBrandColor hover:bg-opacity-10 hover:text-primaryBrandColor flex items-center justify-center'>
                <FaTwitter size={21}/>
              </a>
              <a href="/" className='w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primaryBrandColor hover:bg-opacity-10 hover:text-primaryBrandColor flex items-center justify-center'>
                <FaInstagram size={21}/>
              </a>
              <a href="/" className='h-8 flex text-sm transition-colors hover:bg-primaryBrandColor hover:bg-opacity-10 hover:text-primaryBrandColor hover:border-transparent items-center gap-x-2 px-2 rounded-lg text-gray-500 border border-gray-100'>
                <BiGlobe size={18}/>
                Türkçe (TR)
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer