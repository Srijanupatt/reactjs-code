import React from "react";
import seriesData from "../api/seriesdata.json";
import List from "./List.jsx";

function Movie() {
  return (
    <div className="card-grid">
      {seriesData.map((currElem) => (
        <List key={currElem.id} currElem={currElem} />
      ))}
    </div>
  );
}

export default Movie;