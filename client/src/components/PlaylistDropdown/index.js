import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import './style.css'
function PlayListDropdown() {

    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        loadPlaylists()
    }, []);

    function loadPlaylists() {
        API.getPlaylists()
            .then(res => setPlaylists(res.data))
            .catch(err => console.log(err));
    }

    return (
    <form className='playlistSelectionContainer'>
        <div className="playlistSelection form-group">
            <select className="form-control" id="selectPlaylist">
            <option className="disabled">Select &#x276F;</option>
            <option>Add New Playlist</option>
            {playlists.length > 0 &&
                playlists.map(playlist => {
                    return <option>{playlist.name}</option>
                })
            }
            </select>
            <button class='btn btn-outline-dark'>Add to Playlist</button>
        </div>
    </form>
    )
}


export default PlayListDropdown;