import React from 'react';
import './style.scss';
import Accordion from '../accordion';
import Shapes from '../../assets/images/buildshapes.svg';

const FAQ = () => {
  return (
    <div className='faq' id='faq-section' >
      <div className="heading">
        <h1>FAQ</h1>
        <img src={Shapes} alt="" />
      </div>
      
      <Accordion />
    </div>
  )
}

export default FAQ