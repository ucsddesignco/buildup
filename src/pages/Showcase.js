import React from "react";
import Footer from "../components/footer";
import ShowcaseArticles from "../components/showcaseArticles";
import ShowcaseLanding from "../components/showcaseLanding";
import ShowcaseNavbar from "../components/showcaseNavbar";
import ShowcaseShowcase from "../components/showcaseShowcase";
const Showcase = () => {
  return (
    <>
      <ShowcaseNavbar currentPage={"/"} />
      <ShowcaseLanding />
      <ShowcaseShowcase />
      <ShowcaseArticles />
      <Footer />
    </>
  );
};

export default Showcase;
