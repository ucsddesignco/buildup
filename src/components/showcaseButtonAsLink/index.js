import React from "react";
import "./styles.scss";

const ShowcaseButtonAsLink = ({ buttonText, url = "", darkBorder }) => {
  return (
    <a
      href={url}
      className="showcase__buttonAsLink"
      style={darkBorder && { border: "2px solid #424242" }}
    >
      <p>{buttonText}</p>
    </a>
  );
};

export default ShowcaseButtonAsLink;
