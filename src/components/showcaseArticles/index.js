import React from "react";
import ShowcaseButtonAsLink from "../showcaseButtonAsLink";
import "./styles.scss";
import { useWidth } from "../../hooks/useDimensions";
import { useState } from "react";

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
  const [target, setTarget] = useState();
  const firstBoxWidth = useWidth(target);
  console.log(firstBoxWidth);

  return (
    <section className="showcase__articles">
      <h2>Articles</h2>
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
                <ShowcaseButtonAsLink buttonText="Read Article" darkBorder />
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
