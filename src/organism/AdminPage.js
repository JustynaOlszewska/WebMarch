import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import AdminPageElementList from "../organism/AdminPageElementList";
import "./Login.js";
import { BASIC_URL, PATH_ROUTER } from "../constants";

const AdminPage = () => {
  const [data, setData] = useState([]);
  const [permission, setPermission] = useState(true);
  useEffect(() => {
    fetch(BASIC_URL)
      .then((response) => response.json())
      .then((data) => setData(data.results))
      .catch((error) => {
        setPermission(false);
        throw new Error(error);
      });
  }, []);

  return (
    <div className="listUsers">
      <Route
        render={() =>
          permission ? (
            data.map((result, index) => (
              <AdminPageElementList key={index} result={result} />
              // <figure key={index} className="dataUsers">
              //   <img
              //     className="dataUsers__image"
              //     src={result.picture.large}
              //     alt="whoReadAboutHealth"
              //   />
              //   <figcaption className="dataUsers__name">
              //     {result.name.first} {result.name.last}
              //   </figcaption>
              // </figure>
            ))
          ) : (
            <Redirect to={PATH_ROUTER.login} />
          )
        }
      />
    </div>
  );
};

export default AdminPage;
