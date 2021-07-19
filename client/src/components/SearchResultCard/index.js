import React from 'react';
import './style.css';

function searchResultsCard (props) {
  const artistNames = props.artists.map(artist => artist.name);

  return (
    <div className="card">
      <div className="card-body">
        <p className="card-title">{props.title}</p>
        {artistNames.length > 0 && <p>- {artistNames.join(", ")}</p>}
      </div>
    </div>
  )
}

export default searchResultsCard