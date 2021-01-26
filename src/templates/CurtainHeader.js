import React from "react";
import { Link } from "react-router-dom";
import { PATH_ROUTER } from "../constants";
import PropTypes from "prop-types";
import { mainList } from "../utility";
import { TimelineMax } from "react-gsap/node_modules/gsap";
import "gsap/CSSPlugin";
import { position } from "./websiteManagement/position";

const CurtainHeader = ({ sentence, icon, myHead }) => {
  const handleClick = () => {
    const tl = new TimelineMax();

    tl.to(".scrollbar-track", 0, {
      height: 0,
    });

    tl.to(".slide", 0, {
      width: "100vw",
      height: "100vw",
      display: "flex",
      tranform: "scale(1)",
      top: 0,
      left: 0,
    });

    tl.set(".one", {
      backgroundImage: position(myHead).image,
      backgroundPositionX: position(myHead).imagePositionX,
      backgroundPositionY: position(myHead).imagePositionY,
      backgroundSize: position(myHead).imageSize,
      borderRadius: "0 0 0 0",
      display: "block",
    });

    tl.set(".two", { borderRadius: "0 0 0 0" });

    tl.set(".three", { borderRadius: "0 0 0 0" });

    tl.to(".one", 3.0, {
      scale: 1,
      transformOrigin: "0% 40%",
      borderRadius: "100% 0 0 0",
      top: 0,
      left: 0,
      display: "block",
    });

    tl.to(
      ".one",
      3.0,
      {
        scale: 1,
        top: "200vh",
        borderRadius: "20% 1% 0 0 ",
        display: "none",
      },
      "-=1.5"
    );

    tl.to(
      ".two",
      3.0,
      {
        duration: 0,
        scale: 1,
        top: 0,
        left: 0,
        transformOrigin: "0% 40%",
        borderRadius: "100% 0 0 0",
        display: "block",
      },
      "-=3.5"
    );

    tl.to(
      ".two",
      3.55,
      {
        scale: 1,
        top: "200vh",
        left: 0,
        borderRadius: "20% 1% 0 0 ",
        display: "none",
      },
      "-=3.0"
    );

    tl.to(
      ".three",
      3.0,
      {
        scale: 1,
        top: 0,
        left: 0,
        transformOrigin: "0% 40%",
        borderRadius: "100% 0 0 0",
        display: "block",
      },
      "-=4.5"
    );

    tl.to(
      ".three",
      3.9,
      {
        scale: 1,
        top: "200vh",
        left: 0,
        borderRadius: "20% 1% 0 0 ",
        display: "none",
      },
      "-=3.5"
    );

    tl.to(".scrollbar-track", 0, {
      height: 0,
    });
  };

  return (
    <>
      <div className="logo">
        <div className="logo__text">{sentence}</div>
      </div>
      <nav className="navigation">
        <ul className="list">
          {mainList.map((list) => {
            return (
              <li key={list.id} onClick={handleClick} className="list__element">
                <Link className="list__a" to={list.to}>
                  {list.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="element">
        <Link to={PATH_ROUTER.main}>{icon}</Link>
      </div>
    </>
  );
};
CurtainHeader.propTypes = {
  sentence: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  myHead: PropTypes.object,
};

export default CurtainHeader;
