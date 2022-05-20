import React from 'react'
import './style.scss';
import Heart from '../../assets/images/heart.svg';
import Logo from '../../assets/images/logo.svg';

function Footer() {
  return (
    <div className="footer">
        <div className="footer-left">
          <p>Made with</p>
          <div className="footer-logo">
            <img src={Heart} alt="heart-icon"/>
            <a href="https://ucsddesign.co/" target="_blank">
              <img className="dco-footer-logo" src={Logo} alt="dco-logo" />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <a href="mailto:hello@ucsddesign.co">hello@ucsddesign.co</a>  
        </div>
    </div>
  )
}

export default Footer