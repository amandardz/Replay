import React from 'react';
import './styles.css';

function DashboardNav() {
  return (
    <nav className='d-flex flex-column bg-light'>
      <a href='/dashboard' id='logo-icon' className='p-3 link-dark text-decoration-none' title='Logo' data-bs-toggle='tooltip' data-bs-placement='right'>
        <i className='bi bi-person-circle'></i>
      </a>
      <ul className='nav nav-pills nav-flush flex-column mb-auto text-center'>
        <li className='nav-item'>
          <a href='/dashboard' className='nav-link py-3 border-bottom' aria-current='page' title='Home' data-bs-toggle='tooltip' data-bs-placement='right'>
            <i className='bi bi-house-door'><span>Home</span></i>
          </a>
        </li>
        <li>
          <a href='/search' className='nav-link py-3 border-bottom' title='Search' data-bs-toggle='tooltip' data-bs-placement='right'>
            <i className='bi bi-search'><span>Search</span></i>
          </a>
        </li>
        <li>
          <a href='/playlist' className='nav-link py-3 border-bottom' title='Playlist' data-bs-toggle='tooltip' data-bs-placement='right'>
            <i className='bi bi-collection-play'><span>Playlist</span></i>
          </a>
        </li>
      </ul>
      <div id='logout-icon' className='border-top'>
        <a href='/logout' className='nav-link py-3 border-bottom' title='Logout' data-bs-toggle='tooltip' data-bs-placement='right'>
          <i class='bi bi-door-open'><span>Logout</span></i>
        </a>
      </div>
    </nav>
  )
}

export default DashboardNav;