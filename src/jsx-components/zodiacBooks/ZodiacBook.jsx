import React from 'react';
import PropTypes from 'prop-types';
import '../../css-components/ZodiacBook.css';

export default function ZodiacBook(props) {
    return (
        <a href={props.anchorURL} target="blank">

            <figure className="ZodiacBook">


                <img src={require('./../../assets/zodiacBooksImages/' + props.URL)} alt={props.name}></img>

                <figcaption style={{ backgroundColor: props.color }}>

                    <h3>{props.name}</h3>
                    <p>{props.date}</p>

                </figcaption>
            </figure>
        </a>

    );
}

ZodiacBook.propTypes = {
    anchorURL: PropTypes.string.isRequired,
    URL: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
}