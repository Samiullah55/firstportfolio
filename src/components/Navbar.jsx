import React from 'react'
import '../css/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            <h1>Sami Ullah</h1>
        </div>
        <div>
            <ul className='nav-list'>
                <Link to="/">Home</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About</Link>
            </ul>   
        </div>
    </div>
  )
}

export default Navbar;