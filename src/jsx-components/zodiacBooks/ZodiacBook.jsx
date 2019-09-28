import React from 'react';
import PropTypes from 'prop-types';

export default function ZodiacBook(props) {
    console.log(props)
    return (
        <div className="ZodiacBook">
            <figure>
                <img src={require('./../../assets/zodiacBooksImages/'+props.URL ) }></img>
                <figcaption style={{ backgroundColor: props.color }}>{props.name}</figcaption>
            </figure>
        </div>
    );
}

ZodiacBook.propTypes = {
    name: PropTypes.string.isRequired,
    URL: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}