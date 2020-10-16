import React from "react";
import CurtainHeader from "./CurtainHeader";

const Header = ({ myHead, sentence, listInHead, icon }) => {
  return (
    <header ref={myHead} className="header">
      <CurtainHeader icon={icon} listInHead={listInHead} sentence={sentence} />
    </header>
  );
};

export default Header;
