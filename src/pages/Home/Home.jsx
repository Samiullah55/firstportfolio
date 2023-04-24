import React from 'react';
import './home.css';
import LinkedIn from "../../assets/linkedin.png";
import Github from "../../assets/github.png";
import Mail from "../../assets/mail.png";


function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi My name is Sami Ullah</h2>
        <div className='prompt'>
          <p>A Web-developer with a passion for learning and creating.</p>
        <a href="https://gmail.com" target='__blank'><img className='gmail icons' src={Mail} alt="emailimage" /></a>
        <a href="https://www.linkedin.com/in/sami-ullah-bangash-6916041b5" target='__blank'><img className='facebook icons' src={LinkedIn} alt="Linkedinimage" /></a>
        <a href="https://github.com/Samiullah55" target='__blank'><img className='facebook icons' src={Github} alt="githubimage" /></a>
        </div>
      </div>
    </div>
  )
}

export default Home;