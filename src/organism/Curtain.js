import React from "react";
import PropTypes from "prop-types";

import CurtainHeader from "../templates/CurtainHeader";
const Curtain = ({ sentence, icon, handleClick }) => {
  return (
    <div className="container">
      <div className="slide one">
        <CurtainHeader icon={icon} handleClick={handleClick} sentence={sentence} />
      </div>
      <div className="slide two"></div>
      <div className="slide three"></div>
    </div>
  );
};
Curtain.propTypes = {
  sentence: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default Curtain;
