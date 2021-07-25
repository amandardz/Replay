import React, { useState, useEffect } from 'react';
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Wrapper from '../components/Wrapper'
import API from '../utils/API';
import MusicPlayer from '../components/MusicPlayer';
import SoloPlaylistCard from '../components/SoloPlaylistCard';

const Playlist = (props) => {
  const [playlist, setPlaylist] = useState();

  useEffect(() => {
    loadPlaylist();
  }, []);

  function loadPlaylist() {
    API.getPlaylist(props.match.params.playlistId)
      .then((res) => {
        setPlaylist(res.data);
      })
      .catch((err) => console.log(err));
  }
  
    return (
        <>
        <Container className='background'>
            <Navbar />
            <Wrapper>
                {!playlist && <div>loading...</div>}
                {playlist  && <div>
                    <h4 className='p-2 playlistName'>{playlist.name}</h4>
                        <p className='playlistDescription'>{playlist.description}</p>
                    <MusicPlayer
                        videoLinks={playlist.videos.map(video => {
                            return video.linkId
                        })}
                    />
                    <div>

                        <ul className='d-flex flex-column align-items-center songCardsContainer'>
                            {playlist.videos.map(video => {
                                return <SoloPlaylistCard
                                    key={video._id}
                                    videoId={video._id}
                                    title={video.title}
                                    // channel={video.channel}
                                    // description={video.description}
                                />
                            })}
                        </ul>
                    </div>
                </div>
                }
            </Wrapper>
        </Container>
        </>
    );
};

export default Playlist;
