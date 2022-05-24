import React, { useState } from "react";
import { useWidth } from "../../hooks/useDimensions";
import Scene3D from "../3d";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

import DCOLogo from "../../assets/images/dco-logo.svg";
import webBg from "../../assets/images/website_texture.png";

import "./style.scss";

import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const Hero = () => {
  const [target, setTarget] = useState();
  const sceneWidth = useWidth(target);
  const prefersReducedMotion = usePrefersReducedMotion();

  console.log(sceneWidth);

  const { height, width } = useWindowDimensions();
  const isWider = width > height;

  return (
    <section class="landing">
      {/* Text */}
      <div className="landingTextWrapper">
        <img src={DCOLogo} />
        <h1 className="firstLine">Build</h1>
        <div className="secondLine">
          <h1>Up</h1>
          <div className="subtitleWrapper">
            <p>
              First we <a href="#">Leveled Up</a>. Then we{" "}
              <a href="#">Powered Up</a>.
              <br />
              And this summer… we BUILD UP.
            </p>
            <p>{"{JUNE 27 – AUG 29}"}</p>
          </div>
        </div>
      </div>
      {/* 3D */}
      <div>
        <div
          className="scene3Dwrapper"
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: isWider ? "calc(100% - 20vw)" : "100%",
            height: isWider ? "100%" : width,
            transform: " translateY(-2px)",
            pointerEvents: "none",
          }}
          ref={setTarget}
        >
          <div
            className="scene3D"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
          >
            <Scene3D zoomFactor={sceneWidth} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
