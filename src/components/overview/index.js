import React from "react";
import "./style.scss";

import Arrow from "../../assets/images/arrow.svg";

const Overview = () => {
  return (
    <section className="overview" id='overview-section'>
      <h2>
        Over
        <br className="hidden" />
        view
      </h2>
      <div className="overview__list">
        <ul>
          <li>
            <img src={Arrow} alt="Arrow Bullet" />
            June 27 - August 29, 2022
          </li>
          <li>
            <img src={Arrow} alt="Arrow Bullet" />
            12 - 15 hr commitment per week
          </li>
          <li>
            <img src={Arrow} alt="Arrow Bullet" />
            Network with industry professionals
          </li>
          <li>
            <img src={Arrow} alt="Arrow Bullet" />
            Help nonprofits
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Overview;
