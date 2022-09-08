import React, { useEffect } from "react";
import Footer from "../components/footer";
import NewModal from "../components/newModal";
import ShowcaseArticles from "../components/showcaseArticles";
import ShowcaseLanding from "../components/showcaseLanding";
import ShowcaseNavbar from "../components/showcaseNavbar";
import ShowcaseShowcase from "../components/showcaseShowcase";
import ShowcaseThanks from "../components/showcaseThanks";
import '../styles/main.scss';
import gsap from 'gsap';

import Opening from "../assets/images/Showcase/opening.mov";
import Opening2 from "../assets/images/Showcase/opening.mp4";
import Overlay from "../assets/images/Showcase/shop-overlay.mp4";
import NewOverlay from "../assets/images/Showcase/newopening.mp4";
import MobileOverlay from "../assets/images/Showcase/newopening-mobile.mp4";

const Showcase = () => {

  useEffect(() => {
    const tl1 = gsap.timeline();
    tl1
      .to('#animation-container', {
        y: '-100vh',
        duration: 0.75,
        delay: 2.5,
      })

      const tl2 = gsap.timeline();
      tl2
        .to('#delay', {
          opacity: 1,
          delay: 2.5,
        })
  }, [])

  
  
  return (
    <>
      <video className="showcase-opening" id="animation-container" muted loop autoPlay >
        <source src={NewOverlay} type="video/mp4" />
      </video>
      <video className="mobile-opening" id="animation-container" muted loop autoPlay >
        <source src={MobileOverlay} type="video/mp4" />
      </video>
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
