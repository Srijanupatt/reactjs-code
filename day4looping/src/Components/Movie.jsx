import React from "react";
import seriesData from "../api/seriesdata.json";
function Movie() {
  return (
    <div>
      {seriesData.map((currElem) => {
        return (
          <li>
            <div>
              <img src={currElem.img} width="30%" />
            </div>
            <h2>name:{currElem.name}</h2>
            <h3>id:{currElem.icurrElem}</h3>
            <h3>Rating:{currElem.rating}</h3>
            <p>
              <summary>:{currElem.description}</summary>
            </p>
            <p>Genre:{currElem.genre}</p>
            <p>cast:{currElem.cast}</p>
            <a
              href={currElem.watch_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button> click me</button>
            </a>
          </li>
        );
      })}
    </div>
  );
}
export default Movie;
