import React, { useEffect, useState } from 'react'
import Title from '../ui/Title'
import productsData from '../../api/products.json'
import loader from '../../img/loader.gif'
import Products from '../ui/Products'

const Favorites = () => {
  const [products, setProducts] = useState([])

  useEffect(() =>{
    setProducts(productsData)
  }, [])

  return (
    <>
      <div className='container mx-auto px-32 mb-10'>
        <Title>
          Favoriler
        </Title>
        <div className='w-full flex justify-center'>
          {
            !products.length && <img src={loader} alt="Loading..." className='w-20 h-20'/>
          }
        </div>
        <div className='grid grid-cols-8 gap-0.1 rounded-lg overflow-hidden'>
          {
            products.length && products.map(product =>(
              <Products key={product.id} product={product}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Favorites