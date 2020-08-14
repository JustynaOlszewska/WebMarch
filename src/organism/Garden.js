import React from 'react';
import { Link } from "react-router-dom";
import higherOrderComponent from "../HOC/higherOrderComponent"
import { vegetables } from "../utility"
import { PATH_ROUTER } from "../constants";

const Garden = () => {
       const newVegetables = vegetables.map((vegetable, index) => {
              return (
                     <li className="newVegetables" key={index}>
                            <Link className="listvVegetables" to={`${PATH_ROUTER.garden}${vegetable}`}>{vegetable}</Link>
                     </li>
              )
       })
       return (
              <div className="listStyle">
                     <h1 className="spanHead">Please select a vegetable from the list.</h1>
                     <ul className="vegetables">
                            {newVegetables}
                     </ul>
              </div>
       );
}

export default higherOrderComponent(Garden);