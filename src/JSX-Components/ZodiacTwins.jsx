import React from 'react';
import '../css-components/ZodiacTwins.css';



const ZodiacTwins = props => {
    return (

    <div className="zodiac-stars">

        <div className="main-heading">
            {/* <h1>{props.zodiacName}</h1> */}
            {/* <img  src={props.zodiacSign} alt="" />  */}
        </div>

        <h6>{props.date}</h6>

        <div>
            <img className="celebs" src={props.personalityImage} alt="PersonalitiesImgs" />
            <p>{props.personalityName}</p>
        </div>

    </div>

    );
};
export default ZodiacTwins;