import React from "react";
import { Edges } from "@react-three/drei";
const BasicMaterial = () => {
  return (
    <>
      <meshBasicMaterial color="white" />

      {/* <meshBasicMaterial transparent={true} opacity={0} /> */}
      <Edges color={"black"} scale={1} threshold={1} />
    </>
  );
};

export default BasicMaterial;
