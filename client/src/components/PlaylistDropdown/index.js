import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import API from '../../utils/API';
import './style.css'
function PlayListDropdown() {

    const [playlists, setPlaylists] = useState([]);
    const [choice, setChoice] = useState('');
    const history = useHistory();

    useEffect(() => {
        loadPlaylists()
    }, []);

    function loadPlaylists() {
        API.getPlaylists()
            .then(res => setPlaylists(res.data))
            .catch(err => console.log(err));
    }

    function handleInputChange(event) {
        console.log(event.target.value);
    }

    function addToPlaylist(playlist) {
        switch(playlist) {

        }
    }

    return (
    <form className='playlistSelectionContainer'>
        <div className="playlistSelection form-group">
            <select className="form-control" id="selectPlaylist" onChange={handleInputChange}>
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