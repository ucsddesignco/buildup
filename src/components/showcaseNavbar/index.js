import { React, useState } from "react";
import "./style.scss";
import "../../styles/base.scss";

import BuildLogo from "../../assets/images/buildlogo.svg";
import Cube from "../../assets/images/navbarCube.svg";
import Heart from "../../assets/images/heart.svg";
import Logo from "../../assets/images/logo.svg";
import { a } from "react-router-dom";
const pages = [
  { name: "SHOWCASE", url: "/" },
  { name: "ABOUT BUILD UP", url: "/about" },
];

const ShowcaseNavbar = ({ currentPage }) => {
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
    <div className="navbar">
      <a href="./">
        <img src={BuildLogo} alt=""/>
      </a>
      <ul>
        {pages.map((page) => (
          <li>
            <a href={page.url}>
              {page.url === currentPage ? `{${page.name}}` : page.name}
            </a>
          </li>
        ))}
      </ul>
      <img src={Cube} className="menu" onClick={handleMenuClick} />

      {menuOpen && (
        <div className="mobile-container">
          <div className="top">
            <a href="./">
              <img src={BuildLogo} alt="" className="build-up"/>
            </a>
            <img src={Cube} className="menu" onClick={closeMenu} />
          </div>

          {pages.map((page) => (
            <a href={page.url}>
              <div className="section">
                <p>{page.name}</p>
              </div>
            </a>
          ))}
          <div className="border-bottom" />

          <div className="mobile-footer">
            <div className="footer-left">
              <p>Made with</p>
              <div className="footer-logo">
                <img className="heart-icon" src={Heart} alt="heart-icon" />
                <a
                  href="https://ucsddesign.co/"
                  target="_blank"
                >
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
  );
};

export default ShowcaseNavbar;
