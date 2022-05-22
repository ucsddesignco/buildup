import React, { useState } from "react";
import { useWidth } from "../../hooks/useDimensions";
import Scene3D from "../3d";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import DCOLogo from "../../assets/images/dco-logo.svg";

import webBg from "../../assets/images/website_texture.png";

const Hero = () => {
  const [target, setTarget] = useState();
  const sceneWidth = useWidth(target);

  console.log(sceneWidth);

  const { height, width } = useWindowDimensions();
  const isWider = width > height;

  return (
    <div
      style={{
        boxSizing: "border-box",
        height: "100vh",
        backgroundImage: `url(${webBg})`,
        backgroundRepeat: "repeat",
        borderBottom: "3px solid black",
      }}
    >
      <div
        style={{
          position: "absolute",
          zIndex: 1,

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
            Up
          </h1>
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
      <div
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: isWider ? "calc(100% - 20vw)" : "100%",
          height: isWider ? "100%" : width,
          // background: "pink",
          transform: "translateY(-2px)",
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
  );
};

export default Hero;
