import React from 'react'
import '../css/footer.css';
import FacebookIcon from "../assets/facebook.png";
import LinkedIn from "../assets/linkedin.png";
import Github from "../assets/github.png";
import Twitter from "../assets/twitter.png";



function Footer() {
  return (
    <div className='footer'>
      <div>
        <a href="https://web.facebook.com/sukhan.bat.7" target='__blank'><img className='facebook icon' src={FacebookIcon} alt="facebookimage" /></a>
        <a href="https://twitter.com/Sami_Ullah4863?t=U_GiFhWyqTqPZgzP8_vBPA&s=08" target='__blank'><img className='facebook icon' src={Twitter} alt="Twitterimage" /></a>
        <a href="https://www.linkedin.com/in/sami-ullah-bangash-6916041b5" target='__blank'><img className='facebook icon' src={LinkedIn} alt="Linkedinimage" /></a>
        <a href="https://github.com/Samiullah55" target='__blank'><img className='facebook icon' src={Github} alt="githubimage" /></a>
      </div>
      <p> &copy;2023 Sami Ullah</p>
    </div>
  )
}

export default Footer;