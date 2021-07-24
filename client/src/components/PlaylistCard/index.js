import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

function PlaylistCard (props) {
    const history = useHistory();

    const handleDeleteBtn = async (e) => {
        e.preventDefault();
        const response = await fetch(`api/playlist/${props.id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/dashboard')
          } else {
            alert('Failed to delete playlist');
          }
    }
    

    return (
        <div className="playlistCard">
            <div className="card-body">
                <p className="card-title clickable" onClick={() => {history.replace('/playlist/' + props.id)}}>Playlist {props.title}</p>
                <p className='cardDescription text-wrap'>{props.description}</p>
            </div>
                <button className='btn' onClick={(e) => {history.replace('/playlist/' + props.id + '/editplaylist' )}}>Edit</button>
                <button className='btn' onClick={(e) => {handleDeleteBtn(e)}}>Delete</button>
        </div>
    )
}

export default PlaylistCard