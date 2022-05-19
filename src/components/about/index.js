import './style.scss'
import '../../styles/base.scss';

import React from 'react'

const About = () => {
  return (
    <div className="page">
    <div className='title'>
      <h1 id="left">WHAT IS</h1>
      <h1 id="right">BUILD UP?</h1>
    </div>
    <div className="lower">
      <div className='body'>
        <p id="leftText">
        Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Id laoreet faucibus placerat volutpat aliquam. Orci ut ultricies ac mi. Est, amet, viverra interdum eu mattis lobortis felis. At cras amet, in orci at feugiat fermentum tellus. In massa mi massa volutpat tincidunt suscipit. Malesuada sit donec ultricies.
        </p>
        <p id="rightText">
        Ut ut sed turpis bibendum orci, tempor etiam morbi nibh. Dictum sem sit eu sit bibendum vitae. Scelerisque cras nulla tellus elementum cursus adipiscing mi est blandit. Eget nascetur odio lorem maecenas ultrices porttitor turpis. Id ac lobortis et, urna adipiscing enim netus ac in. 
        </p>
      </div>
      <div className="shapes">
        <div className="circle" id="circle1"></div>
        <div className="square"></div>
        <div className="oval" id="oval1"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="circle" id="circle2"></div>
        <div className="square"></div>
        <div className="oval" id="oval2"></div>
      </div>

    </div>
    
    </div>


  )
}

export default About


