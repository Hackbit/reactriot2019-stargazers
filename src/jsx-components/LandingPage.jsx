import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css-components/LandinPage.css'

class LandingPage extends Component {
    render() {
        return (
            <Link to="/MainPage"  className="Mainpage-container">
                <div class="title">
                    <p>TODAY'S HOROSCOPE </p>
                </div>
                <div class="subtitle">
                    <p>"Astrology is a Language. If ou understand this language, The Sky Speaks to You." -Dane Rudhyar</p>
                </div>
            </Link>
        );
    }
}

export default LandingPage;