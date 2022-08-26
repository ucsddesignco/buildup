import React from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import FAQ from "../components/faq";
import Landing from "../components/landing";
import WhyApply from "../components/whyapply";
import AboutSection from "../components/about";
import Overview from "../components/overview";
import Themes from "../components/themes";
import ShowcaseNavbar from "../components/showcaseNavbar";

const About = () => {
  return (
    <>
      <ShowcaseNavbar currentPage="/about" />
      <Landing />
      <AboutSection />
      <Overview />
      <Themes />
      <WhyApply />
      <FAQ />
      <Footer />
    </>
  );
};

export default About;
