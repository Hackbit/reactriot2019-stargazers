import React, { Component } from 'react';
import '../css-components/PageNotFound.css';
import { Link } from 'react-router-dom';

class PageNotFound extends Component {
    render() {
        return (
            <div className="Error">
                <h1 className="PageNotFound">404</h1>
                <p>Something went wrong</p>
                <p>We're deeply sorry, but something went wrong. Please try to refresh the page or </p>
                <Link to="/"><p>start over</p></Link>
            </div>
        );
    }
}

export default PageNotFound;