import React from 'react'
import '../Skills/skills.css';
function Skills() {
  return (
    <div className='skills'>
          <h1>Skills</h1>
          <ol className='list'>
            <li className='item'>
              <h2>Front-end</h2>
              <span>React,Redux,HTML,CSS,SAAS</span>
              </li>
            <li className='item'>
              <h2>Back-end</h2>
              <span>NodeJs,ExpressJS,MySQL,MongoDB</span>
              </li>
            <li className='item'>
              <h2>Programming Languages</h2>
              <span>JavaScript,Python,C++</span>
              </li>
          </ol>
        </div>
  )
}

export default Skills;