import React from 'react'
import PortfolioProjects from '../../Components/Section3/PortfolioCards/PortfolioProjects';
import "./PortfolioPage.css";

function PortfolioPage() {
  return (
    <div className='pp-container'>
        <h1>Take a look at all off my projects</h1>
        <PortfolioProjects />
    </div>
  )
}

export default PortfolioPage