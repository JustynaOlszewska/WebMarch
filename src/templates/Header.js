import React from 'react';

import CurtainHeader from "./CurtainHeader"

const Header = ({ myHead, sentence, listInHead, element }) => {


    return (
        <header ref={myHead} className="header">
            <CurtainHeader element={element} listInHead={listInHead} sentence={sentence} />

        </header>
    );
}

export default Header;