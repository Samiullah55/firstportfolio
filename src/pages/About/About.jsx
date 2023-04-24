import React from 'react';
import './about.css';
import sami from "../../assets/sami.png";

function About() {
  return (
    <div className='about'>
      <div className='intro'>
        <div className='main'>
          <h1>Sami Ullah</h1>
          <p>Computer System Engineer</p>
        </div>
          <div className='img'>
          <img className='samiimg' src={sami} alt="myimg" />
        </div>
      </div>
      
      <div className='education'>
        <div className="university">
          <h1>BSC-Computer Engineering</h1>
          <h5>Univerdity of Engineering & Technology Peshawar.</h5>
        </div>
        <div className="college">
          <h1>FSC-Pre Engineering</h1>
          <h5>Edwards College Peshawar.</h5>
        </div>
        <div className="school">
          <h1>SSC-Science</h1>
          <h5>Paradise Children Academy Sarozai.</h5>
        </div>
      </div>
    </div>
  )
}

export default About;