import React from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import './style.css'

function SoloPlaylistCard(props) {

    const history = useHistory();

    const handleDelete = (e) => {
        e.preventDefault();
        
        API.deleteVideo(props.videoId)
            .then(history.go(0))
            .catch(err => console.error(err))
    };

    return (
        <div className="songCard card">
            <div className="card-body">
                <div>
                    <p className="card-title">{props.title}</p>
                    <p>From Channel: {props.channel}</p>
                    <p>{props.description}</p>
                </div>
                <button onClick={(e) => {handleDelete(e)}}>Delete</button>
            </div>
        </div>
    );
}

export default SoloPlaylistCard;