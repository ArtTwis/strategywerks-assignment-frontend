import React from "react";
import { postersArray } from "../utils/imageArray.js";
import { randomNumber, randomColor } from "../utils/random.js";
import { randomText } from "../constant/constant.js";

const MovieCard = ({ myData }) => {
  const { title, fullplot } = myData;

  return (
    <div className="card box block">
      <div className="card-info">
        <div className="imageContainer" style={{ background: randomColor() }}>
          <img src={postersArray[randomNumber()]} alt="Poster" />
        </div>
        <h2>{title}</h2>
        <p>{fullplot ? fullplot : randomText}</p>
      </div>
    </div>
  );
};

export default React.memo(MovieCard);
