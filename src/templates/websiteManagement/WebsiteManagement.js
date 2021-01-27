import React, { lazy, Suspense } from "react";
import Scrollbar from "react-smooth-scrollbar";
import { withRouter } from "react-router-dom";

import "../../style/sass/_curtain.scss";
import "../../style/sass/_header.scss";

import Loading from "../../organism/Loading";

const Header = lazy(() => import("../../templates/Header"));
const Main = lazy(() => import("../Main.js"));
const Curtain = lazy(() => import("../../organism/Curtain"));

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
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  );
};

export default withRouter(WebsiteManagement);
