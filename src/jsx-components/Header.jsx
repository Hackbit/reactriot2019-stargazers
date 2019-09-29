import React, { Component } from './node_modules/react';
import '../css-components/Header.css';
import { Link } from './node_modules/react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="Nav">
            <Link to="/MainPage"><p>Home</p></Link>
            <Link to="/ZodiacSigns"><p>All About Start Signs</p></Link>
            <Link to="/ZodiacTwins"><p>Your Star Twin</p></Link>
            <Link to="/AllZodiacBooks"><p>Book for your Star Sign</p></Link>
        </div>
        );
    }
}

export default Header;