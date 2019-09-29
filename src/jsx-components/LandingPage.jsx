import React from './node_modules/react';
import { Link } from './node_modules/react-router-dom';
import '../css-components/LandinPage.css';
import Sound from '../assets/music.mp3';

function LandingPage() {
    let audio = new Audio(Sound)
    return (
        <div onLoad={audio.play()}>
        
            <Link to="/MainPage" className="Mainpage-container">
                <div class="title">
                    <p>TODAY'S HOROSCOPE </p>
                </div>
                <div class="subtitle">
                    <p>"Astrology is a Language. If ou understand this language, The Sky Speaks to You." -Dane Rudhyar</p>
                </div>
            </Link>
        </div>
    );
}

export default LandingPage;
