import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import './styles.css';

function Navbar(props) {

  const { setLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  const logout = async () => {
    try {
      const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if(response.ok) {
        setLoggedIn(false);
        history.replace('/');
        alert("Logout successful.");
      } else {
        alert(response.statusText);
      }
    } catch(err) {
      console.error(err);
    }
  };

  return (
    <nav className='d-flex flex-column'>
      <a href='/dashboard' id='logo-icon' className='link-dark text-decoration-none' title='Logo' data-bs-toggle='tooltip' data-bs-placement='right'>
        <img src='/images/replay-logo.png' alt='Replay Logo'/>
      </a>
      <ul className='nav flex-column mb-auto text-center'>
        <Link to='/dashboard' className='nav-link py-3 border-bottom' title='Search' data-bs-toggle='tooltip' data-bs-placement='right'>
          <li className='nav-item'>
              <i className='bi bi-house-door'><span>Home</span></i>
          </li>
        </Link>
        <Link to='/search' className='nav-link py-3 border-bottom' title='Search' data-bs-toggle='tooltip' data-bs-placement='right'>
          <li>
              <i className='bi bi-search'><span>Search</span></i>
          </li>
        </Link>
        <Link to='/dashboard' className='nav-link py-3 border-bottom' title='Playlist' data-bs-toggle='tooltip' data-bs-placement='right'>
          <li>
              <i className='bi bi-collection-play'><span>Playlists</span></i>
          </li>
        </Link>
      </ul>
      <div id='logout-icon' className='border-top'>
        <button className='nav-link' title='Logout' data-bs-toggle='tooltip' data-bs-placement='right' onClick={() => {logout()}}>
          <i className='bi bi-door-open'><span>Logout</span></i>
        </button>
      </div>
    </nav>
  )
}

export default Navbar;