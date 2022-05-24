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
          <h1
            style={{
              lineHeight: 0.8,
              fontFamily: "Neue Plak",
              fontSize: "clamp(64px,12vw,300px)",
              textAlign: "left",
              textTransform: "uppercase",
            }}
          >
            Up
          </h1>
          <div
            className="subtitleWrapper"
            style={{
              fontFamily: "Space Grotesk",
              fontSize: 32,
              fontWeight: 600,
              display: "flex",
              flexDirection: "column",
              gap: "1vw",
              transform: "translateY(1.75vw)",
            }}
          >
            <p>
              This summer, we’re debuting our 3rd
              <br />
              edition to Level Up and Power Up.{" "}
            </p>
            <p>{"{JUNE 27 – SEPT 2}"}</p>
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
