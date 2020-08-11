import React, { Suspense, lazy } from 'react';
import { Switch, Route } from "react-router-dom";
import "../style/sass/_main.scss";

const Home = lazy(() => import('../organism/Home.js'));
const Garden = lazy(() => import('../organism/Garden.js'));
const Login = lazy(() => import('../organism/Login.js'));
const Err = lazy(() => import('../organism/Err.js'));
const Me = lazy(() => import('../organism/Me.js'));
const showInformationVegetables = lazy(() => import('../organism/showInformationVegetables.js'));
const AdminPage = lazy(() => import('../organism/AdminPage.js'));


const Main = () => {
  return (
    <main className="main">
      <Suspense fallback={<div>Wczytywanie...</div>}>
        <Switch>
          <Route path="/WebMarch" component={Home}>
          </Route>
          <Route path="/" exact component={Home}>
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

          <Route component={Err}>
          </Route>
        </Switch>
      </Suspense>
    </main>

  );
}

export default Main;