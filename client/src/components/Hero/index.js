import React from 'react'
import { useHistory } from 'react-router-dom';
import './style.css'

function Hero() {

  const history = useHistory();

  return(
    <div id='hero' className='heroBackground d-flex justify-content-center align-items-center'>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <img src='/images/replay-logo2.png' alt='logo'/>
        <span id='slogan' className='text-center text-wrap'>Create playlists for your favorite songs.</span>
        <button type="button" className="btn btn-outline-primary mt-3" onClick={() => {history.replace('/login')}}>Login/Signup</button>
      </div>
    </div>
  )
}

export default Hero;