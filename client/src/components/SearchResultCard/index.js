import React from "react";
import PlayListDropdown from "../PlaylistDropdown";
import "./style.css";
import he from "he";

function searchResultsCard(props) {
  console.log(props)
  return (
    <div className="card">
      <div className="searchResultsContent card-body">
        <div className="searchDescription">
          <a
          href={props.linkId}target="_blank" aria-label="link to video on youtube" rel="noopener noreferrer" className="card-title">{he.decode(props.title)}</a>


          {/* <p className="card-title">{he.decode(props.title)}</p> */}

          <p>{he.decode(props.description)}</p>
        </div>
        <div className='dropdownContainer'>
          <PlayListDropdown videoInfo={props}/>
        </div>
      </div>
    </div>
  );
}

export default searchResultsCard;
