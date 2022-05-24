import React from "react";
import Box from "./Box";
import Canvas from "./Canvas";

let boxPositions = [
  [0, -1, 0],
  [-1, -1, 0],
  [-1, -1, -1],
  [1, -1, 1],
  [0, -1, 1],
  [1, -1, -1],

  [0, -2, 0],
  [-1, -2, 0],
  [-1, -2, -1],
  [1, -2, 1],
  [0, -2, 1],
  [1, -2, -1],

  [0, -3, 0],
  [-1, -3, 0],
  [-1, -3, -1],
  [1, -3, 1],
  [0, -3, 1],
  [1, -3, -1],

  [0, -4, 0],
  [-1, -4, 0],
  [-1, -4, -1],
  [1, -4, 1],
  [0, -4, 1],
  [1, -4, -1],

  [0, 0, 0],

  [0, 1, 0],
  [0, 2, 0],
  [-1, 0, -1],
  [-1, 0, 0],
  [1, 0, -1],
  [-1, 1, -1],
  [0, 0, 1],
  [1, 0, 1],
  [0, 1, 1],
];

boxPositions = boxPositions.map((v) => v.map((w) => w * 1.002));

const Scene3D = ({ zoomFactor }) => {
  return (
    <Canvas zoomFactor={zoomFactor}>
      <group
        scale={0.25}
        position={[0, -0.3, 0]}
        rotation={[0, 45 * (Math.PI / 180), 0]}
      >
        {boxPositions.map((v, i) => (
          <Box position={v} key={i} id={i} />
        ))}
      </group>
    </Canvas>
  );
};

export default Scene3D;
