import React from './node_modules/react';
import '../css-components/ZodiacSignTemplete.css';
import PropTypes from './node_modules/prop-types';

function ZodiacSignTemplete(props) {
    return (
        <div className="sign-container">
            <img src={props.imgURL} />
            <div className="mask">
                <h2>{props.signName}</h2>
                <h3>{props.dateRange}</h3>
                <p>{props.signDetails}</p>
            </div>
        </div>
    );
}
ZodiacSignTemplete.propTypes = {
    imgURL: PropTypes.string,
    signName: PropTypes.string,
    dateRange: PropTypes.string,
    signDetails:PropTypes.string,
}
export default ZodiacSignTemplete;