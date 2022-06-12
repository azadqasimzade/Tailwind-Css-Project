import React from 'react';
import Header from "./Components/Header/Header"
import HeroSection from "./Components/HeroSection/HeroSection"
import Categories from "./Components/Categories/Categories"  
import Campaigns from "./Components/Campaigns/Campaigns"
import Favorites from "./Components/Favorites/Favorites"
import MobileApp from "./Components/MobileApp/MobileApp"
import Cards from "./Components/Cards/Cards"
import Footer from "./Components/Footer/Footer"
import {useWindowWidth} from '@react-hook/window-size'

export default function App() {
  const windowWidth = useWindowWidth()

  return (
    <>
        <Header/>
        {windowWidth <= 768 && <Campaigns/>}
        <HeroSection/>
        <Categories/>
        {windowWidth > 768 && <Campaigns/>}
        <Favorites/>
        <MobileApp/>
        <Cards/>
        <Footer/>
    </>
  )
}
