import React, { useState } from "react";
import { useWidth } from "../../hooks/useDimensions";
import Scene3D from "../3d";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import DCOLogo from "../../assets/images/dco-logo.svg";

import webBg from "../../assets/images/website_texture.png";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const Hero = () => {
  const [target, setTarget] = useState();
  const sceneWidth = useWidth(target);
  const prefersReducedMotion = usePrefersReducedMotion();

  console.log(sceneWidth);

  const { height, width } = useWindowDimensions();
  const isWider = width > height;

  return (
    <div
      style={{
        paddingTop: 118,
        boxSizing: "border-box",
        height: "calc(100vh)",
        backgroundImage: `url(${webBg})`,
        backgroundRepeat: "repeat",
        borderBottom: "2px solid black",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 1,
          paddingTop: 60,
          paddingLeft: "8vw",
          pointerEvents: "none",
          textAlign: "left",
        }}
      >
        <img src={DCOLogo} style={{ width: "clamp(160px,25vw,300px)" }} />
        <div>
          <h1
            style={{
              lineHeight: 0.8,
              fontFamily: "Neue Plak W01",
              fontSize: "clamp(64px,20vw,300px)",
              textAlign: "left",
              textTransform: "uppercase",
            }}
          >
            Build
          </h1>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "3vw" }}>
          <h1
            style={{
              lineHeight: 0.8,
              fontFamily: "Neue Plak W01",
              fontSize: "clamp(64px,20vw,300px)",
              textAlign: "left",
              textTransform: "uppercase",
            }}
          >
            Up
          </h1>
          <div
            style={{
              fontFamily: "Space Grotesk",
              fontSize: 32,
              fontWeight: 600,
              display: "flex",
              flexDirection: "column",
              gap: "1vw",
              transform: "translateY(3vw)",
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
        {/* <h1
          style={{
            lineHeight: 0.8,
            fontFamily: "Neue Plak W01",
            fontSize: "clamp(64px,20vw,300px)",
            textAlign: "left",
            textTransform: "uppercase",
          }}
        >
          Build
          <br />
          Up
        </h1> */}
      </div>
      <div>
        <div
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: isWider ? "calc(100% - 20vw)" : "100%",
            height: isWider ? "100%" : width,
            // background: "pink",
            transform: " translateY(-2px)",
          }}
          ref={setTarget}
        >
          <div
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
    </div>
  );
};

export default Hero;
