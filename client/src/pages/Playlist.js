import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";
import MusicPlayer from "../components/MusicPlayer";

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
  console.log(playlist);
  return (
    <>
      <Container className="background">
        <Navbar />
        <Wrapper>
          {!playlist && <div>loading...</div>}
          {playlist && (
            <div>
              <MusicPlayer
                videoLinks={playlist.videos.map((video) => {
                  console.log("videoLinkId", video.linkId);
                  return video.linkId;
                })}
              />
              <div>
                <h3>{playlist.name}</h3>
                <p>{playlist.description}</p>
                <ul>- list of videos -</ul>
              </div>
            </div>
          )}
        </Wrapper>
      </Container>
    </>
  );
};

export default Playlist;
