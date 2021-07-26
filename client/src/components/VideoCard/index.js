import React from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import he from "he";
import './style.css'

function VideoCard(props) {

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
                    <p className="card-title">{he.decode(props.title)}</p>
                </div>
                <button className='p-1 btn-danger' onClick={(e) => {handleDelete(e)}}>Delete</button>
            </div>
        </div>
    );
}

export default VideoCard;