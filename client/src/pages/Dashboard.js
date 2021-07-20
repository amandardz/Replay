import React from 'react';
import { useHistory } from 'react-router-dom';

function Dashboard() {

  const history = useHistory();

  return (
      <div>
        <h1>Dashboard</h1>
        <button onClick={() => {history.replace('/addplaylist')}}>Add Playlist</button>
      </div>
  )
}

export default Dashboard;