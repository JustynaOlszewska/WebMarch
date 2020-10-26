import React from "react";
import CurtainHeader from "./CurtainHeader";
import PropTypes from "prop-types";

const Header = ({ myHead, sentence, listInHead, icon }) => {
  return (
    <header ref={myHead} className="header">
      <CurtainHeader icon={icon} listInHead={listInHead} sentence={sentence} />
    </header>
  );
};
Header.propTypes = {
  myHead: PropTypes.object.isRequired,
  sentence: PropTypes.string.isRequired,
  listInHead: PropTypes.array.isRequired,
  icon: PropTypes.object.isRequired,
};
export default Header;
