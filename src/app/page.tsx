import React from 'react'
import AboutUs from './Components/AboutUs/AboutUs'
import FoodCategory from './Components/FoodCategory/FoodCategory'
import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs'
import Menu from './Components/Menu/Menu'
import Chef from './Components/Chef/Chef'
import Blog from './Components/Blog/Blog'
import Hero from './Hero/Hero'

function page() {
  return (
    <>
    <Hero/>
      <AboutUs/>
      <FoodCategory/>
      <WhyChooseUs/>
      <Menu/>
      <Chef/>
      <Blog/>
    </>
  )
}

export default page