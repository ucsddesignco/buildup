import { Edges } from "@react-three/drei";
import React, { useState } from "react";

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
      <meshBasicMaterial color={isHovered ? color : "#E7E5D1"} />
      <Edges color="#424242" />
    </mesh>
  );
};

export default Box;
