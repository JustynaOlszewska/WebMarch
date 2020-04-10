import React from 'react';
import {Link} from "react-router-dom";


const vegetables = ["carrot", "cucumber", "potato"];
const Garden = () => {
       const newVegetables = vegetables.map((vegetable,index)=> {
              return(
                     <li  className="newVegetables" key={index}>
                     <Link className="listvVegetables"  to={`/garden/${vegetable}`}>{vegetable}</Link>
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
 
export default Garden;