import React from 'react';
import PlayListDropdown from '../PlaylistDropdown';
import './style.css';

function searchResultsCard (props) {
  const artistNames = props.artists.map(artist => artist.name);

  return (
    <div className="card justify-content-center">
      <div className="card-body row">
        <div className="col">
          <p className="card-title">{props.title}</p>
          {artistNames.length > 0 && <p>- {artistNames.join(", ")}</p>}
        </div>
        <div className="col add-btn d-flex flex-row-reverse align-items-center">
          <form>
            <PlayListDropdown />
          </form>
        </div>
      </div>
    </div>
  )
}

export default searchResultsCard