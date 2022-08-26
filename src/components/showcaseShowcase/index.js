import React from "react";
import "./styles.scss";
import ShowcaseButtonAsLink from "../showcaseButtonAsLink";
const teams = [
  {
    name: "{GIRL'S RISING}",
    members:
      "Karen Nieto, Esther Liu, Hanyi Wang, Wanting (Ash) Zhou, Don Le, Jessica Liu",
    teamColor: "blue",
    imageURL: "",
  },
  {
    name: "{NORTH COUNTY LGBTQ RESOURCE CENTER}",
    members:
      "Grayson Emery, Sharon Hu, Kelly Leon, Hieu Phan, Anuja Gandhi, Calista Lee",
    teamColor: "green",
    imageURL: "",
  },
  {
    name: "{LA CHULA CREW FOUNDATION}",
    members:
      "Jaimelyn Cruz, Hannah Wu, Adeline Liem, Ani Sancianco, Hasmineh Sinani",
    teamColor: "blue",
    imageURL: "",
  },
  {
    name: "{KAREN ORGANIZATION OF SAN DIEGO}",
    members:
      "Tram Bui, Yvonne Liu, Kayla Luong, Nicole Gong, Mandy Lai, Sarah Liu",
    teamColor: "blue",
    imageURL: "",
  },
  {
    name: "{TRANSFAMILY SUPPORT SERVICES}",
    members:
      "Grace Lin, Anna Hoang, Yi Lu, Christian Flores, Calvin Cheung, Sabrina Mao",
    teamColor: "green",
    imageURL: "",
  },
  {
    name: "{REFUGEE HEALTH ALLIANCE}",
    members:
      "Jessie Lin, Haeun Kim, Freshta Ehsan, Thoa Nguyen, Frances Sy, Hasan Alsamman",
    teamColor: "yellow",
    imageURL: "",
  },
];

const ShowcaseShowcase = () => {
  return (
    <section className="showcase">
      <div className="showcase__header">
        <div className="showcase__header__illustration showcase__header__illustration--left"></div>
        <h2>
          Show
          <br />
          Case
        </h2>
        <div className="showcase__header__illustration showcase__header__illustration--right"></div>
      </div>
      <div className="showcase__teams">
        {teams.map((team) => (
          <div className="showcase__team">
            <a href="" className="showcase__team__photo"></a>
            <h3>{team.name}</h3>
            <p>{team.members}</p>
          </div>
        ))}
      </div>
      <div className="showcase__actions">
        <div className="showcase__actions__illustration--horizontal"></div>

        <div className="showcase__actions__action">
          <h3>Learn more about the build up program below!</h3>
          <ShowcaseButtonAsLink buttonText="About Build Up" />
        </div>
        <div className="showcase__actions__illustration--vertical"></div>

        <div className="showcase__actions__action">
          {" "}
          <h3>Missed out on the final showcase? Watch the recording below!</h3>
          <ShowcaseButtonAsLink buttonText="Recording" />
        </div>
      </div>
    </section>
  );
};

export default ShowcaseShowcase;
