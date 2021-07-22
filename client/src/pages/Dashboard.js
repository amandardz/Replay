import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Container from '../components/Container'
import Navbar from '../components/Navbar';
import Wrapper from '../components/Wrapper'
import SearchBar from '../components/SearchBar'
import PlaylistCard from '../components/PlaylistCard';
import API from '../utils/API';
import './styles.css'

function Dashboard() {

  const [playlists, setPlaylists] = useState([]);
  const history = useHistory();
 

  useEffect(() => {
    loadPlaylists()
  }, [])

  function loadPlaylists() {

    API.getPlaylists()
      .then(res => 
        setPlaylists(res.data)
      )
      .catch(err => console.log(err));
  }

  return <>
  <Container>
    <Navbar />
    <Wrapper className='dashBackground'>
        <div className='playlistHeaderContainer'>
          <div id='playlistHeader'>
            <h1 id='playlistTitle'>My Playlists</h1>
            <button id='playlistBtn' onClick={() => {history.replace('/addplaylist')}}>Add Playlist</button>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <ul className='playlists row row-cols-md-2 row-cols-lg-3 g-3'>
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