import React, { useRef } from "react";
import CurtainHeader from "./CurtainHeader";
import PropTypes from "prop-types";

const Header = () => {
  const myHead = useRef();

  return (
    <header ref={myHead} className="header">
      <CurtainHeader myHead={myHead} />
    </header>
  );
};

Header.propTypes = {
  handleClick: PropTypes.func,
};

export default Header;
