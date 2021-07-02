import React from 'react';
import Login from '../components/LoginSignupForm/Login';
import Signup from '../components/LoginSignupForm/Signup';

function Credentials() {
  return (
  <div className='vw-100 vh-100 d-flex flex-row justify-content-evenly align-items-center'>
    <div className='col-4 border border-outline-dark p-3'>
      <h2 className='text-center'>Login</h2>
    <Login />
    </div>

    <div className='col-4 border border-outline-dark p-3'>
      <h2 className='text-center'>Signup</h2>
    <Signup />
    </div>
  </div>
  )
}

export default Credentials;