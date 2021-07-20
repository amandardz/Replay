import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PlaylistCard from '../components/PlaylistCard';
import API from '../utils/API';

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
    <div className="row">
      <h1 className="col">My Playlists</h1>
      <button className="col" onClick={() => {history.replace('/addplaylist')}}>Add Playlist</button>
    </div>
    <div>
      <ul>
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
  </>
}

export default Dashboard;