import React from "react";
import CurtainHeader from "./CurtainHeader";
import PropTypes from "prop-types";

const Header = ({ sentence, icon, handleClick }) => {
  const myHead = React.useRef();

  return (
    <header ref={myHead} className="header">
      <CurtainHeader
        myHead={myHead}
        icon={icon}
        handleClick={handleClick}
        sentence={sentence}
      />
    </header>
  );
};
Header.propTypes = {
  myHead: PropTypes.object.isRequired,
  sentence: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Header;
