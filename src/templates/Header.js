import React from 'react';
import { Link } from "react-router-dom";
import { PATH_ROUTER } from "../constants";
import PropTypes from "prop-types";

const Header = ({ sentence, listInHead, element }) => {
    return (
        <header className="header">
            <div className="logo">
                <div className="logo__text">{sentence}</div>
            </div>
            <nav className="navigation">
                <ul className="list">
                    {listInHead}
                </ul>
            </nav>
            <div className="element">
                <Link to={PATH_ROUTER.main}>{element}</Link>
            </div>
        </header>
    );
}
Header.propTypes = {
    sentence: PropTypes.string.isRequired,
    listInHead: PropTypes.array.isRequired,
    element: PropTypes.object.isRequired,
}

export default Header;