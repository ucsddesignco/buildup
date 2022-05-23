import React from 'react';
import './style.scss';
import Accordion from '../accordion';
import Shapes from '../../assets/images/buildshapes.svg';

const FAQ = () => {
  return (
    <div className='faq' id='faq-section' >
      <div className="heading">
        <h2>FAQ</h2>
        <div className="shape">
          <div className='row'>
              <div className='rect'>
                  <div className='oval' id='oval1'></div>
              </div>
              <div className='square'></div>
              <div className='circle' id='circle1'></div>
              <div className='square'></div>
              <div className='square'></div>
              <div className='square'></div>
              
          </div>
          <div className='row'>
              <div className='square'></div>
              <div className='square'></div>
              <div className='square'></div>
              <div className='square'></div>
              <div className='circle' id='circle2'></div>
              <div className='square'></div>
              <div className='square'></div>
          </div>
        </div>
      </div>
      
      <Accordion />
    </div>
  )
}

export default FAQ