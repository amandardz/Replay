import React from 'react'
import './style.css'
import Container from '../Container';

function Footer() {
  const creators = [
    {
      name: 'Ashley Wright',
      image: 'bi bi-person-circle',
      github: '...',
      linkedin: '...',
    },
    {
      name: 'Olivia Lopez',
      image: 'bi bi-person-circle',
      github: '...',
      linkedin: '...',
    },
    {
      name: 'Amanda Rodriguez',
      image: 'bi bi-person-circle',
      github: 'https://github.com/amandardz',
      linkedin: 'https://www.linkedin.com/in/amandardz/',
    }
  ]
  return (
    <Container className='footerContainer'>
      <div id='aboutApp'>
        <h2 id='appName'>REPLAY</h2>
        <p>Replay is a music application where music enthusiast can create playlist for every occasion.</p>
      </div>
      <div id='creators'>
        {creators.map(({name, image, github, linkedin}) => {
          return(
            <div id={name} className='d-flex flex-row my-3'>
              <div className='creatorImg d-flex justify-content-center align-items-center'>
                <i className={image}></i>
              </div>
              <div className='d-flex flex-column justify-content-center ms-2'>
                <span className='creatorName'>{name}</span>
                <div className='d-flex flex-row'>
                  <a href={github}><i className='contact-icons bi bi-github me-2'></i>
                  </a>
                  <a href={linkedin}><i className='contact-icons bi bi-linkedin'></i>
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Container>
  )
}

export default Footer;