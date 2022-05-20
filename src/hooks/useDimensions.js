import React, { useLayoutEffect } from "react";
import useResizeObserver from "@react-hook/resize-observer";

export const useWidth = (target) => {
  const [size, setSize] = React.useState();

  useLayoutEffect(() => {
    target && setSize(target.getBoundingClientRect());
  }, [target]);

  useResizeObserver(target, (entry) => setSize(entry.contentRect));
  return typeof size !== "undefined" ? size.width : 0;
};
