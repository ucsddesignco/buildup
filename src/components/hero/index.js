import React, { useState } from "react";
import { useWidth } from "../../hooks/useDimensions";
import Scene3D from "../3d";
import useWindowDimensions from "../../hooks/useWindowDimensions";
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
        background: "orange",
        borderBottom: "2px solid black",
      }}
    >
      <div
        style={{
          position: "absolute",
          zIndex: 1,
          lineHeight: 0.8,
          pointerEvents: "none",
        }}
      >
        <h1
          style={{
            fontFamily: "Neue Plak W01",
            fontSize: "clamp(64px,20vw,300px)",
            paddingLeft: 86,
            textAlign: "left",
          }}
        >
          Build
          <br />
          Up
        </h1>
      </div>
      <div
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: isWider ? "calc(100% - 20vw)" : "100%",
          height: isWider ? "100%" : width,
          background: "pink",
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
