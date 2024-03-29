import React, { Component } from 'react'
import '../css-components/Header.css';
import { Link } from 'react-router-dom';

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