import React from 'react';
import Header from './Header';
import Data from './Data';
import '../css-components/MainPage.css';
import Sound from '../assets/music.mp3';

function MainPage(props) {
    let audio = new Audio(Sound)
    return (
        <div onLoad={audio.play()} className="MainPage">
            <Header />
            <Data/>
        </div>
    )}

export default MainPage;