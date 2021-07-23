import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

function PlaylistCard (props) {

    const history = useHistory();

    return (
        <div className="playlistCard">
            <div className="card-body">
                <div>
                    <p className="card-title clickable" onClick={() => {history.replace('/playlist/' + props.id)}}>Playlist {props.title}</p>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default PlaylistCard