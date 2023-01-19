import React from "react";
import ShowcaseButtonAsLink from "../showcaseButtonAsLink";
import "./styles.scss";
import { useWidth } from "../../hooks/useDimensions";
import { useState } from "react";

const articles = [
  {
    title: "BUILD UP COHORT EXPERIENCE (SUMMER 2022): PART 1",
    lead: "Meet the Builders of Girls Rising, Karen Organization of San Diego, and TransFamily Support Services",
    url: "https://medium.com/@ucsddesignco/build-up-cohort-experience-summer-2022-part-1-de348fd00bfd",
  },
  {
    title: "BUILD UP COHORT EXPERIENCE (SUMMER 2022): PART 2",
    lead: "Meet the Builders of La Chula Crew Foundation, Refugee Health Alliance, and North County LGBTQ Resource Center",
    url: "https://medium.com/@ucsddesignco/build-up-cohort-experience-summer-2022-part-2-3bc936754ec5",
  },
  {
    title: "BUILD UP MENTOR EXPERIENCE (SUMMER 2022)",
    lead: "Hear from 3 of our design and marketing industry mentors about their experience mentoring students",
    url: "https://medium.com/@ucsddesignco/build-up-mentor-experience-summer-2022-f08f4ce13166",
  },
  {
    title: "BUILDING UP SAN DIEGO COMMUNITIES: HOW BUILD UP TEAMS REBUILT LOCAL NONPROFITS",
    lead: "Featuring representatives from Girls Rising and TransFamily Support Services",
    url: "https://medium.com/@ucsddesignco/building-up-a-foundation-how-build-up-teams-rebuilt-local-nonprofits-ca1ef5d0ab2f",
  },
];

const ShowcaseArticles = () => {
  const [target, setTarget] = useState();
  const firstBoxWidth = useWidth(target);
  console.log(firstBoxWidth);

  return (
    <section className="showcase__articles">
      <h2>Articles</h2>
      {/* <p>Articles Coming Soon!</p> */}
      <p>
        Hear what our Builders, mentors, and nonprofits had to say about their
        experience!
      </p>
      <div className="showcase__articles__wrapper">
        {articles.map((article, articleIndex) => (
          <div className="showcase__articles__article">
            <div
              style={{
                padding: 30,
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                {" "}
                <h3>{article.title}</h3>
                <p>{article.lead}</p>
              </div>
              <div className="showcase__button__wrapper">
                <ShowcaseButtonAsLink url={article.url} target="_blank" buttonText="Read Article" darkBorder />
              </div>{" "}
            </div>
            <div
              className="showcase__articles__illustration"
              style={{
                width: "calc(100% + 2px)",
                display: "flex",
                flexWrap: "wrap",
                overflow: "hidden",
                height: firstBoxWidth + 2,
              }}
            >
              {[...Array(8)].map((_, boxIndex) => (
                <div
                  className="showcase__articles__illustration__box"
                  ref={boxIndex === 0 ? setTarget : null}
                  style={
                    articleIndex === boxIndex
                      ? { borderRadius: 999, background: "#9BB7FF" }
                      : {}
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseArticles;
