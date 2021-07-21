import React from 'react'
import './style.css'
import Container from '../Container';

function Footer() {
  const creators = [
    {
      name: 'Ashley Wright',
      github: 'https://github.com/ashleyaggie',
      linkedin: 'https://www.linkedin.com/in/ashley-wright-580471105/',
    },
    {
      name: 'Olivia Lopez',
      github: 'https://github.com/DoubleLForce5',
      linkedin: 'https://www.linkedin.com/in/olivialopez17/',
    },
    {
      name: 'Amanda Rodriguez',
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
        {creators.map(({name, github, linkedin}) => {
          return(
            <div key={name} className='d-flex flex-row'>
              <div className='d-flex flex-column justify-content-center align-items-center'>
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