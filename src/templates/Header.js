import React from 'react';
import {Link} from "react-router-dom";
import { PATH_ROUTER } from "../constants";

const Header = (props) => {
    return ( 
        <header className="header">
        <div className="logo">   
        <div className="logo__text">{props.sentence}</div>
        </div>       
<nav className="navigation">
    <ul className="list">    
        {props.listInHead}
    </ul>
</nav>     
 <div className="element">
<Link to={PATH_ROUTER.main}>{props.element}</Link>
</div>  
</header>
     );
}
 
export default Header;