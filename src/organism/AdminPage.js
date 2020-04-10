import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import './Login.js';
const permission = true;

const AdminPage = () => {
    return ( 
    <Route render={()=>(permission ? <h1>AdminPage</h1> : <Redirect to="/login"/> )}/>
    )}
export default AdminPage;