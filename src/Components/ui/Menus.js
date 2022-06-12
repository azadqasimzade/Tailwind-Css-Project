import { useEffect, useState } from 'react';
import {Collapse} from 'react-collapse';
import {useWindowWidth} from '@react-hook/window-size'
import {IoIosArrowDown} from 'react-icons/io'

const Menus = ({title,items}) => {
  const [isOpen,setIsOen] = useState(true)

  const windowWidth = useWindowWidth()

  const toggleCollapse = () =>{
    if(windowWidth<=768){
      setIsOen(!isOpen)
    }
  }
  
  useEffect(()=>{
      if(isOpen && windowWidth <= 768){
        setIsOen(false)
      }

      if(!isOpen && windowWidth > 768){
        setIsOen(true)
      }
  }, [windowWidth])

  return (
    <>
      <section>
        <nav className='grid gap-y-1 md:gap-y-4'>
          <h6 onClick={toggleCollapse} className='text-lg text-primaryBrandColor flex items-center justify-between'>
            {title}
            {
              windowWidth <= 768 &&
              <button className='w-6 h-6 grid place-items-center rounded-lg bg-primaryBrandColor bg-opacity-10 text-primaryBrandColor'>
                <span className={`transition-all transform ${isOpen ? 'rotate-180 duration-300' : ''} `}>
                  <IoIosArrowDown/>
                </span>
            </button>
            }
          </h6>
          <Collapse isOpened={isOpen}>
            <nav>
              <ul className='grid gap-y-1 md:gap-y-2'>
                  {items.map((item,key) =>(
                    <li key={key}>
                      <a href={item.url} className='text-sm transition-colors hover:text-brandColor'>
                        {item.title}
                      </a>
                    </li> 
                    ))}
              </ul>
            </nav>
          </Collapse>
        </nav>
      </section>
    </>
  )
}

export default Menus