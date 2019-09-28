import React from 'react';
import PropTypes from 'prop-types';

export default function ZodiacBook(props) {
    return (

        <figure className="ZodiacBook">

            <img src={require('./../../assets/zodiacBooksImages/' + props.URL)}></img>

            <figcaption style={{ backgroundColor: props.color }}>

                <h3>{props.name}</h3>
                <p>{props.date}</p>

            </figcaption>

        </figure>

    );
}

ZodiacBook.propTypes = {
    URL: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
}