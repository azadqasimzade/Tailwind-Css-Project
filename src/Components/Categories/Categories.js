import React, { useEffect, useState } from 'react'
import categoryData from '../../api/categories.json'
import Category from '../ui/Category'
import loader from '../../img/loader.gif'
import Title from '../ui/Title'


const Categories = () => {
  const [categories, setCategories] = useState([])
  
  useEffect(() =>{
    setCategories(categoryData)
  }, [])

  return (
    <>
      <div className='bg-white py-4 mb-10'>
        <div className="container mx-auto px-28">
          <Title>
            Kategoriler
          </Title>
          <div className='w-full flex justify-center'>
            {
              !categories.length && <img src={loader} alt="Loading..." className='w-20 h-20'/>
            }
          </div>
          <div className='grid grid-cols-10'>
            {
              categories && categories.map((category,index) => <Category key={index} category={category}/>)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Categories