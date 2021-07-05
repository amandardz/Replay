import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import './styles.css'

function LoginSignupFunction() {
  return (
    <div id='credentialContainer'>
    <div id='signupForm' className='credentialForms'>
      <SignupForm />
    </div>

    <div id='loginForm' className='credentialForms'>
      <LoginForm />
    </div>
  </div>
  )
}

export default LoginSignupFunction
