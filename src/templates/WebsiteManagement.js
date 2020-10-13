import React from 'react';
import Scrollbar from 'react-smooth-scrollbar';
import Header from '../templates/Header'
import Curtain from '../organism/Curtain'
import { withRouter, Link } from "react-router-dom";
import { TimelineMax } from 'react-gsap/node_modules/gsap';

import 'gsap/CSSPlugin';
import '../style/sass/_curtain.scss';
import Main from './Main.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { aphorisms, mainList } from "../utility";
import '../style/sass/_header.scss';


const element = <FontAwesomeIcon className="icon" icon={faTimes} />

const WebsiteManagement = () => {


    const myRef = React.createRef();
    const myHead = React.useRef();


    const handleClick = (e) => {
        const image = window.getComputedStyle(myHead.current).getPropertyValue("background-image");
        const imagePositionX = window.getComputedStyle(myHead.current).getPropertyValue("background-position-x");

        const imagePositionY = window.getComputedStyle(myHead.current).getPropertyValue("background-position-y");

        const imageSize = window.getComputedStyle(myHead.current).getPropertyValue("background-size"); var tl = new TimelineMax();

        tl.to('.scrollbar-track', 0, {
            height: 0,
        })



        tl.to('.slide', 0, {
            width: '100vw',
            height: '100vw',
            display: 'flex',
            tranform: 'scale(1)',
            top: 0,
            left: 0,
        })
        tl.set(".one", {
            backgroundImage: image, backgroundPositionX: imagePositionX, backgroundPositionY: imagePositionY, backgroundSize: imageSize, borderRadius: '0 0 0 0', display: 'block',
        });
        tl.set(".two", { borderRadius: '0 0 0 0' });
        tl.set(".three", { borderRadius: '0 0 0 0' });
        tl.to('.one', 3.00, {
            scale: 1,
            transformOrigin: '0% 40%',
            borderRadius: '100% 0 0 0',
            top: 0,
            left: 0,
            display: 'block',
        });

        tl.to('.one', 3.00, {
            scale: 1,
            top: '200vh',
            borderRadius: '20% 1% 0 0 ',
            display: 'none',
        }, '-=1.5');

        tl.to('.two', 3.0, {
            duration: 0,
            scale: 1,
            top: 0,
            left: 0,
            transformOrigin: '0% 40%',
            borderRadius: '100% 0 0 0',
            display: 'block',
        }, '-=3.5');
        tl.to('.two', 3.55, {
            scale: 1,
            top: '200vh',
            left: 0,
            borderRadius: '20% 1% 0 0 ',

            display: 'none',
        }, '-=3.0');

        tl.to('.three', 3.00, {
            scale: 1,
            top: 0,
            left: 0,
            transformOrigin: '0% 40%',
            borderRadius: '100% 0 0 0',
            display: 'block',
        }, '-=4.5');

        tl.to('.three', 3.90, {
            scale: 1,
            top: '200vh',
            left: 0,
            borderRadius: '20% 1% 0 0 ',

            display: 'none',
        }, '-=3.5');
        tl.to('.scrollbar-track', 0, {
            height: 0,
        })

    }

    const handleKeyDown = (e) => {


        if (e.keyCode === 40) {
            myRef.current.scrollbar.scrollTop = 625 + 3 * 100;

        } else if (e.keyCode === 38) {
            myRef.current.scrollbar.scrollTop = 0;
        }
        else if (e.keyCode === 39) {
            myRef.current.scrollbar.scrollLeft = 0;

            if (myRef.current.scrollbar.scrollLeft === 0) {
                myRef.current.scrollbar.options.damping = 1;
                myRef.current.scrollbar.options.alwaysShowTracksX = false;

            }

        }
    }
    let index = Math.floor(Math.random() * aphorisms.length)
    const sentence = aphorisms[index]

    const ListInHead = mainList.map(list => {

        return (

            <li key={list.id} onClick={handleClick} className="list__element"><Link className="list__a" to={list.to}>{list.name}</Link></li>

        )
    })

    let number = 0.1;
    let thumbMinSize = 20;
    let renderByPixels = true;
    let alwaysShowTracks = true;

    return (

        <Scrollbar
            damping={number}
            thumbMinSize={thumbMinSize}
            renderByPixels={renderByPixels}
            alwaysShowTracks={alwaysShowTracks}
            onKeyDown={handleKeyDown}
            ref={myRef}
        >
            <Curtain listInHead={ListInHead} element={element} sentence={sentence} />
            <div className="wrapper">
                <Header myHead={myHead} listInHead={ListInHead} element={element} sentence={sentence} />

                <Main className="toMain" />
            </div>
        </Scrollbar>

    );
}


export default withRouter(WebsiteManagement);