import React, { useEffect, useState } from 'react'
import './index.css'

export const Loader = () => {
  const [loader, setLoader] = useState(true)

  useEffect(() =>{
    setTimeout(() => {
      setLoader(false)
    }, 1500);
  }, [])

  return (
    <>
      {
          loader && (
            <div id='preloader'></div>
          )
      }
    </>
  )
}
