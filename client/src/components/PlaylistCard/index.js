import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

function PlaylistCard (props) {

    const history = useHistory();

    return (
        <div className="card justify-content-center">
        <div className="card-body row">
            <div className="col">
            <p className="card-title clickable" onClick={() => {history.replace('/playlist/' + props.id)}}>Playlist {props.title}</p>
            <p>{props.description}</p>
            </div>
        </div>
        </div>
    )
}

export default PlaylistCard