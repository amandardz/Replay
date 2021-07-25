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

        <li className='playlistCard d-flex flex-column' key={props.id}>
            <div className='playlistInfoContainer'>
                <p className="card-title clickable text-center text-wrap text-break p-2 m-0" onClick={() => {history.replace('/playlist/' + props.id)}}>Playlist {props.title}</p>
                <p className='cardDescription text-wrap text-break px-3 m-0'>{props.description}</p>
                <div className='d-flex flex-row justify-content-center align-items-center'>
                    <button className='editBtn btn me-1' onClick={(e) => {history.replace('/playlist/' + props.id + '/editplaylist' )}}>Edit</button>
                    <button className='deleteBtn btn' onClick={(e) => {handleDeleteBtn(e)}}>Delete</button>
                </div>
            </div>
        </li>
    )
}

export default PlaylistCard