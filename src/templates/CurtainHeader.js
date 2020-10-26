import React from "react";
import { Link } from "react-router-dom";
import { PATH_ROUTER } from "../constants";
import PropTypes from "prop-types";

const CurtainHeader = ({ sentence, listInHead, icon }) => {
  return (
    <>
      <div className="logo">
        <div className="logo__text">{sentence}</div>
      </div>
      <nav className="navigation">
        <ul className="list">{listInHead}</ul>
      </nav>
      <div className="element">
        <Link to={PATH_ROUTER.main}>{icon}</Link>
      </div>
    </>
  );
};
CurtainHeader.propTypes = {
  sentence: PropTypes.string.isRequired,
  listInHead: PropTypes.array.isRequired,
  icon: PropTypes.object.isRequired,
};

export default CurtainHeader;
