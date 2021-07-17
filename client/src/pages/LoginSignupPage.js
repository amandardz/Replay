import React from 'react';
import LoginForm from '../components/LoginSignupForm/LoginForm';
import SignupForm from '../components/LoginSignupForm/SignupForm';
import './styles.css'

function LoginSignupPage() {
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

export default LoginSignupPage
