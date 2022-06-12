import React, { useEffect, useState } from 'react'
import cardsData from '../../api/cards.json'
import loader from '../../img/loader.gif'
import Card from '../ui/Card'

const Cards = () => {
  const [cards,setCards] = useState([])
  
  useEffect(() =>{
    setCards(cardsData)    
  }, [])

  return (
    <>
      <div className='md:container mx-auto lg:px-32 mb-10'>
        <div className='w-full flex justify-center'>
          {
            !cards.length && <img src={loader} alt="Loading..." className='w-20 h-20' />
          }
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 px-4 md:px-0 gap-4'>
          {
            cards.length && cards.map(card =>(
              <Card key={card.id} card={card}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Cards