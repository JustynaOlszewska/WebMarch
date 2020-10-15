import React from "react";

import CurtainHeader from "../templates/CurtainHeader";
const Curtain = ({ sentence, listInHead, element }) => {
  return (
    <div className="container">
      <div className="slide one">
        <CurtainHeader
          element={element}
          listInHead={listInHead}
          sentence={sentence}
        />
      </div>
      <div className="slide two"></div>
      <div className="slide three"></div>
    </div>
  );
};

export default Curtain;
