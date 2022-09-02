import React from "react";

const WomenShape = () => {
  return (
    <svg
      vectorEffect="non-scaling-stroke"
      overflow="visible"
      width="100%"
      height="100%"
      viewBox="0 0 102 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26 1C12.1929 1 1 12.1929 1 26C1 39.8071 12.1929 51 26 51C12.1929 51 1 62.1929 1 76C1 89.8071 12.1929 101 26 101C39.8071 101 51 89.8071 51 76C51 89.8071 62.1929 101 76 101C89.8071 101 101 89.8071 101 76C101 62.1929 89.8071 51 76 51C89.8071 51 101 39.8071 101 26C101 12.1929 89.8071 1 76 1C62.1929 1 51 12.1929 51 26C51 12.1929 39.8071 1 26 1Z"
        fill="#9BB7FF"
        stroke="#F0F4C3"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

const LgbtqShape = () => {
  return (
    <svg
      overflow="visible"
      vectorEffect="non-scaling-stroke"
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 22.3404C100 27.5626 95.9898 32.3663 89.2702 36.1703C95.9898 39.9742 100 44.7779 100 50.0001C100 55.2222 95.9899 60.0258 89.2706 63.8297C95.9899 67.6336 100 72.4372 100 77.6593C100 89.9976 77.6142 99.9997 50 99.9997C22.3858 99.9997 0 89.9976 0 77.6593C0 72.4372 4.01006 67.6336 10.7294 63.8297C4.01006 60.0258 0 55.2222 0 50.0001C0 44.7779 4.01023 39.9742 10.7298 36.1703C4.01023 32.3663 0 27.5626 0 22.3404C0 10.0021 22.3858 0 50 0C77.6142 0 100 10.0021 100 22.3404Z"
        fill="#43A047"
        stroke="#F0F4C3"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

const RefugeeShape = () => {
  return (
    <svg
      overflow="visible"
      vectorEffect="non-scaling-stroke"
      width="100%"
      height="100%"
      viewBox="0 0 104 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M102 52L52 2L2 52L52 102L102 52Z"
        fill="#F0F4C3"
        stroke="#F0F4C3"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

const ShowcaseHeader = () => {
  return (
    <div className="showcase__header">
      <div className="showcase__header__illustration showcase__header__illustration--left">
        <div className="showcase__header__illustration__inner">
          <div className="showcase__illustration__box__wrapper">
            <div
              className="showcase__illustration__box"
              style={{ background: "none", border: "none" }}
            />
            <div
              className="showcase__illustration__box"
              style={{ background: "none", border: "none" }}
            >
              <WomenShape />
            </div>
            <div className="showcase__illustration__box" />{" "}
            <div className="showcase__illustration__box" />
            <div className="showcase__illustration__box" />
            <div className="showcase__illustration__box" />
            <div className="showcase__illustration__box" />
            <div className="showcase__illustration__box" />
          </div>
          <div className="showcase__illustration__box__wrapper">
            <div
              className="showcase__illustration__box"
              style={{ background: "none", border: "none" }}
            >
              <LgbtqShape />
            </div>{" "}
            <div className="showcase__illustration__box" />
            <div className="showcase__illustration__box" />{" "}
            <div className="showcase__illustration__box" />
            <div className="showcase__illustration__box" />
            <div className="showcase__illustration__box" />
            <div className="showcase__illustration__box" />
            <div className="showcase__illustration__box" />
          </div>
          <div className="showcase__illustration__box__wrapper">
            <div className="showcase__illustration__box" />{" "}
            <div className="showcase__illustration__box" />
            <div className="showcase__illustration__box" />
            <div className="showcase__illustration__box" />
            <div className="showcase__illustration__box" />
            <div className="showcase__illustration__box" />
            <div className="showcase__illustration__box" />
            <div className="showcase__illustration__box" />
          </div>
        </div>
      </div>
      <h2>
        Show
        <br />
        Case
      </h2>
      <div className="showcase__header__illustration showcase__header__illustration--right">
        <div className="showcase__header__illustration__inner">
          <div className="showcase__illustration__box__wrapper">
            <div
              className="showcase__illustration__box"
              style={{ background: "none", border: "none" }}
            />
            <div
              className="showcase__illustration__box"
              style={{ background: "none", border: "none" }}
            >
              <RefugeeShape />
            </div>
            <div className="showcase__illustration__box" />
            <div className="showcase__illustration__box" />{" "}
            <div className="showcase__illustration__box" />
            <div className="showcase__illustration__box" />
            <div className="showcase__illustration__box" />
            <div className="showcase__illustration__box" />
          </div>
          <div className="showcase__illustration__box__wrapper">
            <div
              className="showcase__illustration__box"
              style={{ background: "none", border: "none" }}
            />
            <div className="showcase__illustration__box" />{" "}
            <div className="showcase__illustration__box" />
            <div className="showcase__illustration__box" />
            <div className="showcase__illustration__box" />
            <div className="showcase__illustration__box" />
            <div className="showcase__illustration__box" />
            <div className="showcase__illustration__box" />
          </div>
          <div className="showcase__illustration__box__wrapper">
            <div className="showcase__illustration__box" />
            <div
              className="showcase__illustration__box"
              style={{ background: "none", border: "none" }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "calc(200% - 2px)",
                  height: "100%",
                  background: "#43A047",
                  border: "2px solid #F0F4C3",
                  boxSizing: "border-box",
                  borderRadius: 999,
                }}
              ></div>
            </div>{" "}
            <div
              className="showcase__illustration__box"
              style={{ background: "none", border: "none" }}
            />
            <div className="showcase__illustration__box" />
            <div className="showcase__illustration__box" />
            <div className="showcase__illustration__box" />
            <div className="showcase__illustration__box" />
            <div className="showcase__illustration__box" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseHeader;
