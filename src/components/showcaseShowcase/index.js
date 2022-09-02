import React, { useState } from "react";
import "./styles.scss";
import ShowcaseButtonAsLink from "../showcaseButtonAsLink";
import NewModal from "../newModal";
import { Teams } from "../../teams";

import ShowcaseGraphic1 from "../../assets/images/Showcase/assets/showcaseGraphic1.svg";
import ShowcaseGraphic2 from "../../assets/images/Showcase/assets/showcaseGraphic2.svg";
import ShowcaseGraphic3 from "../../assets/images/Showcase/assets/showcaseGraphic3.svg";
import MobileDivider from "../../assets/images/Showcase/Team_Shapes/mobileDivider.svg";
import ShowcaseHeader from "./ShowcaseHeader";

const ShowcaseShowcase = () => {
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(-1);

  const hideModal = () => {
    setShowModal(false);
  };

  const display = (value) => {
    setIndex(value);
    setShowModal(true);
  };

  return (
    <section className="showcase">
      <ShowcaseHeader />
      <div className="showcase__bottom">
        <div className="showcase__teams">
          {Teams.map((team) => (
            <div className="showcase__team">
              <div
                onClick={() => {
                  display(`${team.number}`);
                }}
                className="showcase__team__photo"
              >
                <img
                  src={require(`../../assets/images/Showcase/example.png`)}
                  alt=""
                  className="showcase__team__cover"
                />
                <img
                  src={require(`../../assets/images/Showcase/Team_Shapes/${team.team_shape}.png`)}
                  alt=""
                />
              </div>
              <h3>{team.team_name}</h3>
              <p>{team.team_members}</p>
            </div>
          ))}
        </div>

        <div className="divider-container">
          <img src={MobileDivider} className="mobile-divider" />
        </div>

        <div className="showcase__actions">
          <div className="showcase__actions__action">
            <h3>Learn more about the Build Up program below!</h3>
            <ShowcaseButtonAsLink buttonText="About Build Up" />
          </div>
          <img src={ShowcaseGraphic3} />
          <div className="showcase__actions__action">
            {" "}
            <h3>
              Missed out on the final showcase? Watch the recording below!{" "}
            </h3>
            <ShowcaseButtonAsLink buttonText="Recording" />
          </div>
        </div>
      </div>
      <NewModal
        show={showModal}
        onHide={() => {
          hideModal();
        }}
        index={index}
      />
    </section>
  );
};

export default ShowcaseShowcase;
