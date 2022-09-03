import React, { useState } from "react";
import "./styles.scss";
import { Teams } from "../../teams";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ShowcaseButtonAsLink from "../showcaseButtonAsLink";

//Assets
import GroupOriginal from "../../assets/images/Showcase/Girls_Rising/group_original.png";
import GroupDuo from "../../assets/images/Showcase/Girls_Rising/group_duo.png";
import Exit from "../../assets/images/Showcase/assets/exit.svg";

const NewModal = (props) => {
  const idx = props.index;
  const current_team = Teams[idx];

  const [num, setNum] = useState(0);

  const next = (key) => {
    if (key === 0) {
      setNum(1);
    } else {
      setNum(0);
    }
  };

  return (
    <div>
      {props.show && (
        <div className="modal">
          <div className="top-container">
            <img className="exit" src={Exit} onClick={props.onHide} />
          </div>
          <div className="page1">
            <div className="left">
              <h3>{current_team.team_name}</h3>
              <img
                className={current_team.header_styling}
                src={require(`../../assets/images/Showcase/assets/Titles/${current_team.team_files}.svg`)}
              />
              <p>{current_team.description}</p>
              <div className="button-container">
                <a href={current_team.case_study_link} target="_blank">
                  <div className="button">
                    <p>VIEW CASE STUDY</p>
                  </div>
                </a>
              </div>
            </div>
            <Carousel
              showArrows={false}
              showStatus={false}
              showThumbs={false}
              selectedItem={num}
              swipeable={true}
              emulateTouch={true}
              className="carousel"
              
            >
                <img
                  src={require(`../../assets/images/Showcase/${current_team.team_files}/showcase.png`)}
                  className="grouporiginal"
                  onClick={() => next(0)}
                  key={0}
                />
                <img
                  src={require(`../../assets/images/Showcase/${current_team.team_files}/group_original.png`)}
                  className="grouporiginal"
                  onClick={() => next(1)}
                  key={1}
                />
            </Carousel>
          </div>

          <img
            className="divider"
            src={require(`../../assets/images/Showcase/Team_Shapes/${current_team.team_shape}Divider.svg`)}
            alt=""
          />
          <div className="page2">
            <h3 className="team-title">THE TEAM</h3>
            <div className="mentors-div">
              {current_team.team.map((member) => (
                <div className="mentor-grid-item">
                  <img
                    src={require(`../../assets/images/Showcase/${current_team.team_files}/Builders/${member.member_image}.png`)}
                  />
                  <p className="member_name">{`{${member.member_name}}`}</p>
                  <p>{member.member_title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="graphic-cont">
            <img
              className="graphic"
              src={require(`../../assets/images/Showcase/Team_Shapes/${current_team.team_shape}Graphic.svg`)}
            />
          </div>
          <div className="page3">
            <h3 className="team-title">THE MENTORS</h3>
            <div className={`mentors-div${current_team.mentors.length}`}>
              {current_team.mentors.map((mentor) => (
                <div className="mentor-grid-item">
                  <img
                    src={require(`../../assets/images/Showcase/${current_team.team_files}/Mentors/${mentor.mentor_image}.png`)}
                  />
                  <p className="mentor_name">{`{${mentor.mentor_name}}`}</p>
                  <p>{mentor.mentor_title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewModal;
