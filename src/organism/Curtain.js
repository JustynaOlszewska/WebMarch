import React from "react";
import PropTypes from "prop-types";

import CurtainHeader from "../templates/CurtainHeader";
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
