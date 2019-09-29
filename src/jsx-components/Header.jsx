import React, { Component } from 'react';
import '../css-components/Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="Nav">
            <Link to="/"><p>Home</p></Link>
            <Link to="/ZodiacSigns"><p>All About Start Signs</p></Link>
            <Link to="/404"><p>Your Star Twin</p></Link>
            <Link to="/404"><p>Book For Your Star Sign</p></Link>
        </div>
        );
    }
}

export default Header;