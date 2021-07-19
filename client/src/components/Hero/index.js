import React from 'react'
import './style.css'

function Hero() {
  return(
    <div id='hero' className='heroBackground d-flex justify-content-center align-items-center'>
      <div className='d-flex flex-column align-items-center'>
        <img src='/images/replay-logo2.png' alt='logo'/>
        <span id='slogan' className='text-center text-wrap'>Create playlists for your favorite songs.</span>
        <button type="button" className="btn btn-outline-primary mt-3">Login/Signup</button>
      </div>
    </div>
  )
}

export default Hero;