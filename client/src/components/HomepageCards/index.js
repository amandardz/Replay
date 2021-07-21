import React from 'react';
import './style.css'

function HomepageCards() {
  const homeCards = [
    {
      key: 1,
      icon: 'bi bi-search',
      heading: 'Search',
      details: 'Search for music by artists and tracks.',  
    },
    {
      key: 2,
      icon: 'bi bi-collection-play',
      heading: 'Create',
      details: 'Create a playlist of your favorite music.', 
    },
    {
      key: 3,
      icon: 'bi bi-headphones',
      heading: 'Play',
      details: 'Play and listen to your curated playlists.',
    }
  ]

  return (
    <div className='homepageCardsContainer'>
      <div className='homepageCards'>
        {homeCards.map(({key, icon, heading, details}) => {
          return (
            <div id='homeCard' key={key} className='d-flex flex-column justify-content-evenly align-items-center'>
              <div>
              <i className={icon}></i>
              </div>
              <div>
                <p className='card-title text-center'>{heading}</p>
                <p className='card-text text-center'>{details}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
    )

};

export default HomepageCards;