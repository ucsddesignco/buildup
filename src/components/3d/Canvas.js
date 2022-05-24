import React from "react";
import { Canvas as ThreeCanvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

const Canvas = ({ children, zoomFactor }) => {
  const zoom = 0.83;
  const { height, width, dpr } = useWindowDimensions();

  return (
    <ThreeCanvas style={{ width: "100%", height: "100%" }} flat dpr={dpr}>
      <OrthographicCamera
        makeDefault
        position={[0, 0.57734471598, 0.81650050761]}
        zoom={zoom * zoomFactor}
        far={1000}
        near={-1000}
      />
      {children}
      <OrbitControls
        autoRotate={true}
        autoRotateSpeed={-0.5}
        enableRotate={true}
        enablePan={false}
        enableZoom={false}
        minPolarAngle={(90 - 35.264) * (Math.PI / 180)}
        maxPolarAngle={(90 - 35.264) * (Math.PI / 180)}
      />
    </ThreeCanvas>
  );
};

export default Canvas;
