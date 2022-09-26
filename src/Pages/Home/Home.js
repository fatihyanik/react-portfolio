import React from 'react'
import Hero from '../../Components/Section1/Hero'
import Brands from '../../Components/Section2/Brands'
import Portfolio from '../../Components/Section3/Portfolio'
import Services from '../../Components/Section4/Services'

function Home() {
  return (
    <div>
        <Hero />
        <Brands />
        <Portfolio />
        <Services />
    </div>
  )
}

export default Home