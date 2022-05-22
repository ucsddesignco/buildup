import "./style.scss";
import "../../styles/base.scss";

import React from "react";

const About = () => {
  return (
    <div className="page">
      <div className="title">
        <h2 id="left">WHAT IS</h2>
        <h2 id="right">BUILD UP?</h2>
      </div>
      <div className="lower">
        <div className="body">
          <p id="leftText">
            As the 3rd installment in our annual summer design series, Build Up
            is a 10-week program where students will work with a nonprofit
            organization to refine their branding, redesign their website, or
            boost their exposure.
          </p>
          <p id="rightText">
            These nonprofits fall into 3 categories: LGBTQ+ advocacy, women's
            empowerment, and refugee and immigrant relief. Mentored by industry
            professionals, participants will learn valuable real-world skills by
            delivering long term solutions to uplift these organizations.
          </p>
        </div>
        <div className="shapes">
          <div className="circle" id="circle1"></div>
          <div className="square"></div>
          <div className="rect">
            <div className="oval" id="oval1"></div>
          </div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="circle" id="circle2"></div>
          <div className="square"></div>
          <div className="rect" id="reverse">
            <div className="oval" id="oval2"></div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default About;
