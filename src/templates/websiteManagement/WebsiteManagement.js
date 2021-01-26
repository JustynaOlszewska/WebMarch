import React from "react";
import Scrollbar from "react-smooth-scrollbar";
import Header from "../../templates/Header";
import Curtain from "../../organism/Curtain";
import { withRouter } from "react-router-dom";

import "../../style/sass/_curtain.scss";
import Main from "../Main.js";
import "../../style/sass/_header.scss";

const WebsiteManagement = () => {
  const myRef = React.createRef();

  const handleKeyDown = (event) => {
    switch (event.keyCode) {
      case 40:
        myRef.current.scrollbar.scrollTop = 625 + 3 * 100;
        break;
      case 38:
        myRef.current.scrollbar.scrollTop = 0;
        break;
      case 39:
        myRef.current.scrollbar.scrollLeft = 0;

        if (myRef.current.scrollbar.scrollLeft === 0) {
          myRef.current.scrollbar.options.damping = 1;
          myRef.current.scrollbar.options.alwaysShowTracksX = false;
        }
        break;
      default:
        return;
    }
  };

  const number = 0.1;
  const thumbMinSize = 20;
  const renderByPixels = true;
  const alwaysShowTracks = true;

  return (
    <Scrollbar
      damping={number}
      thumbMinSize={thumbMinSize}
      renderByPixels={renderByPixels}
      alwaysShowTracks={alwaysShowTracks}
      onKeyDown={handleKeyDown}
      ref={myRef}
    >
      <Curtain />
      <div className="wrapper">
        <Header />

        <Main className="toMain" />
      </div>
    </Scrollbar>
  );
};

export default withRouter(WebsiteManagement);
