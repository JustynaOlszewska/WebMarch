import React, { lazy, Suspense } from 'react';
import { Switch, Route } from "react-router-dom";
import "../style/sass/_main.scss";
import { PATH_ROUTER } from "../constants";
import Loading from "../organism/Loading";

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
      <Suspense fallback={<Loading/>}>
        <Switch>
          <Route path={PATH_ROUTER.webMarch} component={Home}>
          </Route>
          <Route path={PATH_ROUTER.main} exact component={Home}>
          </Route>
          <Route path={PATH_ROUTER.garden} exact component={Garden}>
          </Route>
          <Route path={`${PATH_ROUTER.garden}:vegetable`} component={showInformationVegetables}>
          </Route>

          <Route path={PATH_ROUTER.login} component={Login}>
          </Route>
          <Route path={PATH_ROUTER.admin} component={AdminPage}></Route>
          <Route path={PATH_ROUTER.me} component={Me}>
          </Route>

          <Route component={Err}>
          </Route>
        </Switch>
      </Suspense>
    </main>

  );
}

export default Main;