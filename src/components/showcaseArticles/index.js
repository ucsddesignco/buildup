import React from "react";
import ShowcaseButtonAsLink from "../showcaseButtonAsLink";
import "./styles.scss";

const articles = [
  {
    title: "BUILD UP COHORT EXPERIENCE (SUMMER 2022): PART 1",
    lead: "Read what 4 design and marketing mentors have to say about their experience",
    url: "",
  },
  {
    title: "BUILD UP COHORT EXPERIENCE (SUMMER 2022): PART 2",
    lead: "Read what 4 design and marketing mentors have to say about their experience",
    url: "",
  },
  {
    title: "BUILD UP MENTOR EXPERIENCE (SUMMER 2022)",
    lead: "Read what 4 design and marketing mentors have to say about their experience",
    url: "",
  },
  {
    title: "COOL NONPROFIT ARTICLE NAME LOL",
    lead: "Read what 4 design and marketing mentors have to say about their experience",
    url: "",
  },
];

const ShowcaseArticles = () => {
  return (
    <section className="showcase__articles">
      <h2>Articles</h2>
      <p>
        Hear what our Builders, mentors, and nonprofits had to say about their
        experience!
      </p>
      <div className="showcase__articles__wrapper">
        {articles.map((article) => (
          <div className="showcase__articles__article">
            <h3>{article.title}</h3>
            <p>{article.lead}</p> <div className="showcase__flex"></div>
            <div className="showcase__button__wrapper">
              {" "}
              <ShowcaseButtonAsLink buttonText="Read Article" darkBorder />
            </div>{" "}
            <div className="showcase_articles__illustration"></div>
            <div className="showcase_articles__illustration--mobile"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseArticles;
