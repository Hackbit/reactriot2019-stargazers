import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css-components/LandinPage.css';
import Sound from 'react-sound';

class LandingPage extends Component {
    render() {
        return (
            <div>
            <Sound
                // url="cool_sound.mp3"
                // playStatus={Sound.status.PLAYING}
                // playFromPosition={300 /* in milliseconds */}
                // onLoading={this.handleSongLoading}
                // onPlaying={this.handleSongPlaying}
                // onFinishedPlaying={this.handleSongFinishedPlaying}
            />
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
}

export default LandingPage;