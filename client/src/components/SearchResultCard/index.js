import React from "react";
import PlayListDropdown from "../PlaylistDropdown";
import "./style.css";
import he from "he";

function searchResultsCard(props) {
  return (
    <div className="card justify-content-center">
      <div className="card-body row">
        <div className="col">
          <p className="card-title">{he.decode(props.title)}</p>
          <p>{he.decode(props.description)}</p>
        </div>
        <div className="col add-btn d-flex flex-row-reverse align-items-center">
          <form>
            <PlayListDropdown />
          </form>
        </div>
      </div>
    </div>
  );
}

export default searchResultsCard;
