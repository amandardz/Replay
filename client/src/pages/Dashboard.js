import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Container from '../components/Container'
import Navbar from '../components/Navbar';
import Wrapper from '../components/Wrapper'
import SearchBar from '../components/SearchBar'
import PlaylistCard from '../components/PlaylistCard';
import API from '../utils/API';

function Dashboard() {

  const [playlists, setPlaylists] = useState([]);
  const history = useHistory();
  const [navbarHeight, setNavbarHeight] = useState(document.body.clientHeight)

  useEffect(() => {
    loadPlaylists()
  }, [])

  function loadPlaylists() {

    API.getPlaylists()
      .then(res => 
        {setPlaylists(res.data)
          setNavbarHeight(res.data)}
      )
      .catch(err => console.log(err));
  }

  return <>
  <Container className='d-flex flex-row'>
    <Navbar navbarHeight={navbarHeight}/>
    <Wrapper className='col-8 col-lg-10'>
      <div className='d-flex justify-content-center'>
        <SearchBar />
      </div>
      <div>
        <div className='d-flex flex-row justify-content-around'>
          <h1>My Playlists</h1>
          <button onClick={() => {history.replace('/addplaylist')}}>Add Playlist</button>
        </div>
        <div className='d-flex justify-content-center'>
          <ul style={{paddingLeft: 0}}>
            {playlists.length > 0 ? (
              playlists.map(playlist => {
                return (
                  <li key={playlist._id} style={{listStyleType: 'none'}}>
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

      </div>
    </Wrapper>
  </Container>
  </>
}

export default Dashboard;