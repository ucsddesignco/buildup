import React from "react";
import Footer from "../components/footer";
import NewModal from "../components/newModal";
import ShowcaseArticles from "../components/showcaseArticles";
import ShowcaseLanding from "../components/showcaseLanding";
import ShowcaseNavbar from "../components/showcaseNavbar";
import ShowcaseShowcase from "../components/showcaseShowcase";
import ShowcaseThanks from "../components/showcaseThanks";
const Showcase = () => {
  return (
    <>
      <ShowcaseNavbar currentPage={"/"} />
      <ShowcaseLanding />
      <ShowcaseShowcase />
      <ShowcaseArticles />
      <ShowcaseThanks />
      <NewModal />
      <Footer />
    </>
  );
};

export default Showcase;
