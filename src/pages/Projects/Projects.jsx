import React from 'react'
import './projects.css';
import Github from "../../assets/github.png";


function Projects() {
  return (
    <div className='projects'>
      <div className='billiontree'>
        <h1>Billion Tree Tsunami</h1>
        <p>Billion Tree tsunami is a webApp created by me for the data collection for our FYP project .</p>
        <a href="https://github.com/Samiullah55/BillionTreeTsunami" target='__blank'><img className='fbicon' src={Github} alt="githubimage" /></a>
      </div>
      <div className='samishop'>
        <h1>Sami Online Shop</h1>
        <p>Sami Shop is a webApp created by me Where i have listed many products you can select from and add them to cart and proceed for payment.</p>
      <a href="https://github.com/Samiullah55/Sami-Shop/tree/master" target='__blank'><img className='fbicon' src={Github} alt="githubimage" /></a>
      </div>
    </div>
  )
}

export default Projects;