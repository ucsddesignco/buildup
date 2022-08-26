import { React, useState } from "react";
// import "./style.scss";
import "../../styles/base.scss";

import BuildLogo from "../../assets/images/buildlogo.svg";
import Cube from "../../assets/images/navbarCube.svg";
import Heart from "../../assets/images/heart.svg";
import Logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
const pages = [
  { name: "Showcase", url: "/" },
  { name: "About Build Up", url: "/about" },
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
      <Link to="./">
        <img src={BuildLogo} alt="" />
      </Link>
      <ul>
        {pages.map((page) => (
          <li>
            <Link to={page.url}>
              {page.url === currentPage ? `{${page.name}}` : page.name}
            </Link>
          </li>
        ))}
      </ul>
      <img src={Cube} className="menu" onClick={handleMenuClick} />

      {menuOpen && (
        <div className="mobile-container">
          <div className="top">
            <Link to="./">
              <img src={BuildLogo} alt="" />
            </Link>
            <img src={Cube} className="menu" onClick={closeMenu} />
          </div>

          {pages.map((page) => (
            <Link to={page.url}>
              <div className="section">
                <p>{page.name}</p>
              </div>
            </Link>
          ))}
          <div className="border-bottom" />

          <div className="mobile-footer">
            <div className="footer-left">
              <p>Made with</p>
              <div className="footer-logo">
                <img className="heart-icon" src={Heart} alt="heart-icon" />
                <Link
                  to="https://ucsddesign.co/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="dco-footer-logo" src={Logo} alt="dco-logo" />
                </Link>
              </div>
            </div>
            <div className="footer-right">
              <Link to="mailto:hello@ucsddesign.co">hello@ucsddesign.co</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowcaseNavbar;
