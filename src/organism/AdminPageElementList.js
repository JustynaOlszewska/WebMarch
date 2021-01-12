import React from "react";
import PropTypes from "prop-types";
const AdminPageElementList = ({ result }) => {
  return (
    <figure className="dataUsers">
      <img
        className="dataUsers__image"
        src={result.picture.large}
        alt="whoReadAboutHealth"
      />
      <figcaption className="dataUsers__name">
        {result.name.first} {result.name.last}
      </figcaption>
    </figure>
  );
};
AdminPageElementList.propTypes = {
  result: PropTypes.array.isRequired,
};
export default AdminPageElementList;
