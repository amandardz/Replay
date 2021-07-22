import React, { useState, useEffect } from 'react';
import API from '../utils/API';

const Playlist = (props) => {

    const [playlist, setPlaylist] = useState([]);

    useEffect(() => {
        loadPlaylist()
    }, []);

    function loadPlaylist() {
        API.getPlaylist(props.match.params.playlistId)
            .then(res => setPlaylist(res.data))
            .catch(err => console.log(err));
    }

    const isLoading = playlist && playlist.Playlist ? true : false;

    return (
        <>
            {!isLoading && <div>loading...</div>}
            {isLoading && <div>
                <h3>{playlist.Playlist.name}</h3>
                <p>{playlist.Playlist.description}</p>
                <ul>
                    - list of videos -
                </ul>
            </div>}
        </>
    )
}

export default Playlist;