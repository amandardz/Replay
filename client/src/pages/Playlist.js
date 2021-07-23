import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import MusicPlayer from '../components/MusicPlayer';

const Playlist = (props) => {
console.log(props)
    const [playlist, setPlaylist] = useState([]);

    useEffect(() => {
        loadPlaylist()
    }, []);

    const videoLinks = []

    function loadPlaylist() {
        // console.log('playlistId', props.match.params.playlistId)
        API.getPlaylist(props.match.params.playlistId)
            .then(res => {setPlaylist(res.data);
            videoLinks = playlist.Playlist.video.map(video => {
                console.log('videoLinkId', video.linkId)
                return video.linkId
        })})
            .catch(err => console.log(err));
    }


    const isLoading = playlist && playlist.Playlist ? true : false;

    return (
        <>
            {!isLoading && <div>loading...</div>}
            {isLoading && <div><MusicPlayer videoLinks={videoLinks}/><div>
                <h3>{playlist.Playlist.name}</h3>
                <p>{playlist.Playlist.description}</p>
                <ul>
                    - list of videos -

                </ul>
            </div>
            </div>}
        </>
    )
}

export default Playlist;