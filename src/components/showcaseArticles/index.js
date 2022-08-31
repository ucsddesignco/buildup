import React from "react";
import ShowcaseButtonAsLink from "../showcaseButtonAsLink";
import "./styles.scss";
import ArticleGraphic1 from '../../assets/images/articleGraphic1.svg';
import ArticleGraphic2 from '../../assets/images/articleGraphic2.svg';
import ArticleGraphic3 from '../../assets/images/articleGraphic3.svg';
import ArticleGraphic4 from '../../assets/images/articleGraphic4.svg';

const articles = [
  {
    title: "BUILD UP COHORT EXPERIENCE (SUMMER 2022): PART 1",
    lead: "Read what 4 design and marketing mentors have to say about their experience",
    url: "",
    image: "articleGraphic1",
    illustration: 'illustration-container1',
  },
  {
    title: "BUILD UP COHORT EXPERIENCE (SUMMER 2022): PART 2",
    lead: "Read what 4 design and marketing mentors have to say about their experience",
    url: "",
    image: "articleGraphic2",
    illustration: 'illustration-container2',
  },
  {
    title: "BUILD UP MENTOR EXPERIENCE (SUMMER 2022)",
    lead: "Read what 4 design and marketing mentors have to say about their experience",
    url: "",
    image: "articleGraphic3",
    illustration: 'illustration-container3',
  },
  {
    title: "COOL NONPROFIT ARTICLE NAME LOL",
    lead: "Read what 4 design and marketing mentors have to say about their experience",
    url: "",
    image: "articleGraphic4",
    illustration: 'illustration-container4',
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
            <div className="top-container">
              <h3>{article.title}</h3>
              <p>{article.lead}</p> <div className="showcase__flex"></div>
              <div className="showcase__button__wrapper">
                <ShowcaseButtonAsLink buttonText="READ ARTICLE" darkBorder />
              </div>
            </div>
            <div className={article.illustration}>
              <div className="square1">
                <div className="circle"></div>
              </div>
              <div className="mobile-square"></div>
              <div className="square"></div>
              <div className="square2">
                <div className="circle"></div>
              </div>
              <div className="mobile-square"></div>
              <div className="square"></div>
              <div className="square3">
                <div className="circle"></div>
              </div>
              <div className="mobile-square"></div>
              <div className="square"></div>
              <div className="square4">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseArticles;
