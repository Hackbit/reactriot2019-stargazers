import React from "./node_modules/react";
import "../css-components/ZodiacTwins.css";

const ZodiacTwins = props => {
  return (
    <div className="body">
      <div className="box">
        <div className="card">
          <div className="imgBx">
            <img src={props.personalityImage} alt="PersonalitiesImgs" />
          </div>
          <div className="details">
            <h2>{props.personalityName}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ZodiacTwins;