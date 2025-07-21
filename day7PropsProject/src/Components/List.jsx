import React from 'react';
import '../index.css'; // ✅ Go one level up

function List({currElem}) {
  // const { img, name, rating, description, genre, watch_url, isTrending } = props.currElem;

  return (
    <div className="netflix-card">
      <div className="card-image">
        <img src={currElem.img} alt={name} />
        <div className="rating-badge">{rating} ★</div>

      </div>
      <div className="card-content">
        <h3 className="card-title">{props.currElem.name}</h3>
        <div className="card-meta">
          <span className="genre">{props.currElem.genre}</span>
        </div>
        <p className="card-description">{props.currElem.description}</p>
        <div>
          <a href={props.currElem.watch_url} target="_blank" className="watch-button"
>
            Watch Now
          </a>
        </div>
      </div>
    </div>
    
  );
}

export default List;