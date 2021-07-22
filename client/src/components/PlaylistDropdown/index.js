import React, { useState, useEffect } from 'react';
import API from '../../utils/API';

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
    <form>
        <div class="form-group">
            <select class="form-control" id="selectPlaylist">
            <option className="disabled">Select &#x276F;</option>
            <option>Add New Playlist</option>
            {playlists.length > 0 &&
                playlists.map(playlist => {
                    return <option>{playlist.name}</option>
                })
            }
            </select>
        </div>
        <button>Add to Playlist</button>
    </form>
    )
}


export default PlayListDropdown;