import React, { useState, useEffect, lazy } from "react";
import { Route, Redirect } from "react-router-dom";
import "./Login.js";

import { BASIC_URL, PATH_ROUTER } from "../constants";

const AdminPageElementList = lazy(() => import("../organism/AdminPageElementList"));

const AdminPage = () => {
  const [data, setData] = useState([]);
  const [permission, setPermission] = useState(true);

  useEffect(() => {
    function fetchData() {
      fetch(BASIC_URL)
        .then((response) => response.json())
        .then((data) => setData(data.results))
        .catch((error) => {
          setPermission(false);
          throw new Error(error);
        });
    }
    fetchData();
  }, []);

  return (
    <div className="listUsers">
      <Route
        render={() =>
          permission ? (
            data.map((result, index) => (
              <AdminPageElementList key={index} result={result} />
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
