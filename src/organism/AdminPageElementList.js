import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

import PropTypes from "prop-types";

const AdminPageElementList = ({ result }) => {
  const { first, last } = result.name;
  const { large } = result.picture;

  return (
    <figure className="dataUsers">
      <LazyLoadImage
        className="dataUsers__image"
        src={large}
        placeholderSrc={large}
        alt="whoReadAboutHealth"
        effect="black-and-white"
        draggable={false}
      />
      <figcaption className="dataUsers__name">
        {first} {last}
      </figcaption>
    </figure>
  );
};

AdminPageElementList.propTypes = {
  result: PropTypes.object.isRequired,
};

export default AdminPageElementList;
