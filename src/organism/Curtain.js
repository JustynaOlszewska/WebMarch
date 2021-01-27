import React, { lazy } from "react";
import PropTypes from "prop-types";

const CurtainHeader = lazy(() => import("../templates/CurtainHeader"));

const Curtain = () => {
  return (
    <div className="container">
      <div className="slide one">
        <CurtainHeader />
      </div>
      <div className="slide two"></div>
      <div className="slide three"></div>
    </div>
  );
};
Curtain.propTypes = {
  handleClick: PropTypes.func,
};
export default Curtain;
