import React from "react";

function SoloPlaylistCard(props) {
    console.log(props);
    
  return (
    <div className="card">
      <div className="card-body">
        <div className="">

          <p className="card-title">{props.title}</p>

          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default SoloPlaylistCard;