import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import '../style/sass/_login.scss'
const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); 
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };

const Login = () => {

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/admin" } };
    let login = () => {
      fakeAuth.authenticate(() => {
        history.replace(from);
      });
    };
  
    return (
      <div className="loginWrapper">
        <p>You must log in to view the page at {from.pathname}</p>
        <button className="buttonLogin" onClick={login}>Log in</button>
      </div>
    );
  }
 
export default Login;