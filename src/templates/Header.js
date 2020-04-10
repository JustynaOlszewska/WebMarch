import React from 'react';
import {Link} from "react-router-dom";

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
<Link to="/">{props.element}</Link>
</div>  
</header>
     );
}
 
export default Header;