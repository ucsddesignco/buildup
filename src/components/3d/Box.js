import { Edges } from "@react-three/drei";
import React, { useState } from "react";
import BasicMaterial from "./BasicMaterial";

const Box = ({ id, ...restProps }) => {
  const [isHovered, setIsHovered] = useState(false);
  const color = Math.random() < 0.5 ? "#43A047" : "#9BB7FF";

  return (
    <mesh
      onPointerEnter={() => {
        setIsHovered(true);
      }}
      onPointerLeave={() => {
        setIsHovered(false);
      }}
      {...restProps}
    >
      <boxBufferGeometry args={[1, 1, 1]} />

      <meshBasicMaterial
        // transparent
        // opacity={isHovered ? 1 : 0}
        color={isHovered ? color : "white"}
      />

      <Edges />
    </mesh>
  );
};

export default Box;
