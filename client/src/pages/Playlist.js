import React, { useState, useEffect } from 'react';
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Wrapper from '../components/Wrapper'
import API from '../utils/API';
import MusicPlayer from '../components/MusicPlayer';

const Playlist = (props) => {
    const [playlist, setPlaylist] = useState([]);

    useEffect(() => {
        loadPlaylist()
    }, []);

    const videoLinks = []

    function loadPlaylist() {
        // console.log('playlistId', props.match.params.playlistId)
        API.getPlaylist(props.match.params.playlistId)
            .then(res => {setPlaylist(res.data);
                console.log(res.data)
        //     videoLinks = playlist.Playlist.video.map(video => {
        //         console.log('videoLinkId', video.linkId)
        //         return video.linkId
        // })
    })
            .catch(err => console.log(err));
    }


    const isLoading = playlist && playlist.Playlist ? true : false;

    return (
        <>
        <Container className='background'>
            <Navbar />
            <Wrapper>
                {!isLoading && <div>loading...</div>}
                {isLoading && <div><MusicPlayer videoLinks={videoLinks}/><div>
                    <h3>{playlist.Playlist.name}</h3>
                    <p>{playlist.Playlist.description}</p>
                    <ul>
                        - list of videos -

                    </ul>
                </div>
                </div>}
            </Wrapper>
        </Container>
        </>
    )
}

export default Playlist;