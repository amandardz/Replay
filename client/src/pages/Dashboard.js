import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Container from '../components/Container'
import Navbar from '../components/Navbar';
import Wrapper from '../components/Wrapper';
import PlaylistCard from '../components/PlaylistCard';
import API from '../utils/API';
import './styles.css';

function Dashboard() {

  const [playlists, setPlaylists] = useState([]);
  const history = useHistory();
 

  useEffect(() => {
    loadPlaylists()
  }, [])

  function loadPlaylists() {

    API.getPlaylists()
      .then(res => 
        setPlaylists(res.data[0].playlists)
      )
      .catch(err => console.log(err));
  }

  return <>
  <Container className='background'>
    <Navbar />
    <Wrapper>
        <div className='playlistHeaderContainer'>
          <div id='playlistHeader'>
            <h1 id='playlistTitle'>My Playlists</h1>
            <button id='playlistBtn' onClick={() => {history.replace('/addplaylist')}}>Add Playlist</button>
          </div>
        </div>
        <div>
          <ul className='playlists'>
            {playlists.length > 0 ? (
              playlists.map(playlist => {
                return (
                  <li key={playlist._id}>
                    <PlaylistCard
                      id={playlist._id}
                      title={playlist.name}
                      description={playlist.description}
                    />
                  </li>
                );
              })
            ) : (
              <h3>Add a Playlist!</h3>
            )}
          </ul>
        </div>
    </Wrapper>
  </Container>
  </>
}

export default Dashboard;