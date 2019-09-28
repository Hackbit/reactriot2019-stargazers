import React from 'react';

const ZodiacTwins = props => {
    return (
      <>
        <div>
            <div className="main-heading">
            <h1>{props.zodiacName}</h1>
            <p>{props.date}</p>
            </div>
            <img src={props.personalityImage} alt="..." />
            <p>{props.personalityName}</p>
            
        </div>



      </>
    );
  };
  export default ZodiacTwins;