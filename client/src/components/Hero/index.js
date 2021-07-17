import React from 'react'
import './style.css'

function Hero() {
  return(
    <div id='hero' className='container-fluid d-flex flex-column justify-content-center align-items-center'>
      <img id='heroImg' src='/images/replay-logo2.png' alt='logo'/>
      <span id='slogan' className='text-center mt-3'>Create playlists for your favorite songs.</span>
      <button type="button" class="btn btn-outline-primary mt-3">Login/Signup</button>
    </div>
  )
}

export default Hero;