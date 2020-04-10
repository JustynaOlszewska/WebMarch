import React from 'react';
import Home from '../organism/Home.js';
import Garden from '../organism/Garden.js';
import Login from '../organism/Login.js';
import Err from '../organism/Err.js';
import Me from '../organism/Me.js';
import showInformationVegetables from '../organism/showInformationVegetables.js';
import AdminPage from '../organism/AdminPage.js'
import "../style/sass/_main.scss";
import {Switch, Route} from "react-router-dom";

const Main = () => {
    return ( 
<main className="main">
<Switch>
          <Route path="/" exact component= {Home}>
          </Route>
          <Route path="/garden" exact component={Garden}>  
          </Route>
            <Route path="/garden/:vegetable" component={showInformationVegetables}>
          </Route>
          
          <Route path="/login" component={Login}>         
          </Route>
          <Route path="/admin" component={AdminPage}></Route>
        <Route path="/me" component={Me}>         
          </Route>

          <Route component= {Err}>
          </Route>
       </Switch>
</main>

     );
}
 
export default Main;