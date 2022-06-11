import React from 'react'

const Card = ({card}) => {
  return (
    <>
        <div className='flex flex-col justify-center items-center text-center gap-y-4 bg-white rounded-lg p-12 shadow-sm'>
            <img src={card.image} alt={card.title} className="w-[150px] h-[150px] mb-2" />
            <p className='text-primaryBrandColor font-semibold text-lg'>{card.title}</p>
            <p className='text-gray-500 text-sm'>{card.desc}</p>
        </div>
    </>
  )
}

export default Card