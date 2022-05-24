import { React, useState } from 'react';
import './style.scss';
import '../../styles/base.scss'
import gsap from 'gsap';

import BuildLogo from '../../assets/images/buildlogo.svg';
import Menu from '../../assets/images/navmenu.svg';
import WhiteMenu from '../../assets/images/navmenu-white.svg';
import Cube from '../../assets/images/navbarCube.svg';
import Heart from '../../assets/images/heart.svg';
import Logo from '../../assets/images/logo.svg';

const Navbar = () => {

  const [OVERVIEW, setOVERVIEW] = useState('{OVERVIEW}')

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    document.body.style.overflow = menuOpen ? "visible" : "hidden";
    document.documentElement.style.overflow = menuOpen ? "visible" : "hidden";
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = menuOpen ? "visible" : "hidden";
    document.documentElement.style.overflow = menuOpen ? "visible" : "hidden";
  };

  return (
    <div className='navbar'>
        <a href="./">
          <img src={BuildLogo} alt="" />
        </a>
        <ul>
          <li>
            <a href="#overview-section">{OVERVIEW}</a>
          </li>
          <li>
            <a href="#themes-section">THEMES</a>
          </li>
          <li>
            <a href="#benefits-section">BENEFITS</a>
          </li>
          <li>
            <a href="#faq-section">FAQ</a>
          </li>
          <li>
            <div className="pill">
              <a href="https://forms.gle/4xnQHHaB26pAqnYm9" target='_blank' rel="noreferrer">APPLY HERE</a>
            </div>
          </li>
        </ul>
        <img src={Cube} className='menu' onClick={handleMenuClick} />

        {menuOpen && (
          <div className="mobile-container">
            <div className="top">
            <a href="./">
              <img src={BuildLogo} alt="" />
            </a>
              <img src={Cube} className='menu' onClick={closeMenu} />
            </div>
            <a href="" onClick={closeMenu} >
              <div className="section">
                <p>OVERVIEW</p>
              </div>
            </a>
            <a href="" onClick={closeMenu} >
              <div className="section">
                <p>PARTNERS</p>
              </div>
            </a>
            <a href="" onClick={closeMenu} >
              <div className="section">
                <p>BENEFITS</p>
              </div>
            </a>
            <a href="#faq-section" onClick={closeMenu} >
              <div className="section">
                <p>FAQ</p>
              </div>
            </a>
            <div className="border-bottom"></div>
            <div className="pill">
              <a href="https://forms.gle/4xnQHHaB26pAqnYm9" target='_blank' rel="noreferrer">APPLY HERE</a>
            </div>

            <div className="mobile-footer">
              <div className="footer-left">
                <p>Made with</p>
                <div className="footer-logo">
                  <img className='heart-icon' src={Heart} alt="heart-icon"/>
                  <a href="https://ucsddesign.co/" target="_blank" rel="noreferrer">
                    <img className="dco-footer-logo" src={Logo} alt="dco-logo" />
                  </a>
                </div>
              </div>
              <div className="footer-right">
                <a href="mailto:hello@ucsddesign.co">hello@ucsddesign.co</a>  
              </div>
            </div>
          </div>
        )}

    </div>
  )
}

export default Navbar