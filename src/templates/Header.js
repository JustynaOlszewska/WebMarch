import React, { useRef, lazy } from "react";

import PropTypes from "prop-types";

const CurtainHeader = lazy(() => import("./CurtainHeader"));

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
