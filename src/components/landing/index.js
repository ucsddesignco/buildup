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
      <div className="desktopLandingText">
        <div className="landingTextWrapper">
          <img src={DCOLogo} />
          <h1 className="firstLine">Build</h1>
          <div className="secondLine">
            <h1>Up</h1>
            <div className="subtitleWrapper">
              <p>
                First we{" "}
                <a
                  href="https://levelup.ucsddesign.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leveled Up
                </a>
                . Then we{" "}
                <a
                  href="https://powerup.ucsddesign.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Powered Up
                </a>
                .
                <br />
                And this summer… we BUILD UP.
              </p>
              <p>{"{JUNE 27 – AUG 29}"}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mobileLandingText">
        <div className="landingTextWrapper">
          <img src={DCOLogo} />
          <h1>
            Build
            <br />
            Up
          </h1>

          <div className="subtitleWrapper">
            <p>
              First we{" "}
              <a
                href="https://levelup.ucsddesign.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leveled Up
              </a>
              . Then we{" "}
              <a
                href="https://powerup.ucsddesign.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered Up
              </a>
              .
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
            width: isWider ? "calc(100% - 20vw)" : "100%",
            height: isWider ? "100%" : width,
          }}
          ref={setTarget}
        >
          <div className="scene3D">
            <Scene3D zoomFactor={sceneWidth} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
