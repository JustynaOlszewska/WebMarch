import React from "react";
import PropTypes from "prop-types";

import CurtainHeader from "../templates/CurtainHeader";
const Curtain = ({ sentence, listInHead, icon }) => {
  return (
    <div className="container">
      <div className="slide one">
        <CurtainHeader icon={icon} listInHead={listInHead} sentence={sentence} />
      </div>
      <div className="slide two"></div>
      <div className="slide three"></div>
    </div>
  );
};
Curtain.propTypes = {
  sentence: PropTypes.string.isRequired,
  listInHead: PropTypes.array.isRequired,
  icon: PropTypes.object.isRequired,
};
export default Curtain;
