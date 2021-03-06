import React from 'react'

const MobileApp = () => {
  return (
    <div className='md:container mx-auto lg:px-32 mb-10'>
      <div className='bg-primaryBrandColor bg-mobile-app flex flex-col md:flex-row justify-between md:rounded-lg text-white'>
        <div className='flex flex-col text-center md:text-left gap-y-3 justify-center p-10'>
          <h3 className='text-3xl font-bold tracking-tight'>Getir'i indirin!</h3>
          <p className='font-semibold tracking-wide'>İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.</p>
          <nav className='flex flex-wrap lg:flex-nowrap items-center justify-center gap-2 mt-5'>
            <a href="/" className='transition-all transform hover:scale-105'>
              <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" className='md:h-8 lg:h-auto' alt="app store" />
            </a>
            <a href="/" className='transition-all transform hover:scale-105'>
              <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" className='md:h-8 lg:h-auto' alt="google play store" />
            </a>
            <a href="/" className='transition-all transform hover:scale-105'>
              <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" className='md:h-8 lg:h-auto' alt="app gallery" />
            </a>
          </nav>
        </div>
        <picture className='pt-6 md:self-end'>
          <img src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png" alt="" />
        </picture>
      </div>
    </div>
  )
}

export default MobileApp