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
        <div className="md:container mx-auto lg:px-28">
          <Title>
            Kategoriler
          </Title>
          <div className='w-full flex justify-center'>
            {
              !categories.length && <img src={loader} alt="Loading..." className='w-20 h-20'/>
            }
          </div>
          <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12'>
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