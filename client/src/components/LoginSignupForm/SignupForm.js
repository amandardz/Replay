import React from 'react';
import './styles.css';

const signupFormHandler = async (e) => {
  e.preventDefault();

  const firstName = document.querySelector('#userFirstName').value.trim();
  const lastName = document.querySelector('#userLastName').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (firstName && lastName && username && email && password) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  } else {
    alert("Please complete all fields.")
  }
};

function Signup() {
  return (
    <form id='signup-form' onSubmit={(e) => signupFormHandler(e)}>
      <h2 className='text-center mb-3'>Signup</h2>
      <div className='d-flex flex-row mb-2 nameContainer'>
        <div className='pe-2 nameInputContainer'>
          <label className='form-label m-0'>First Name</label>
          <input type='text' className='form-control' id='userFirstName'></input>
        </div>
        <div className='nameInputContainer'>
          <label className='form-label m-0'>Last Name</label>
          <input type='text' className='form-control' id='userLastName'></input>
        </div>
      </div>
      <div className='mb-2'>
        <label className='form-label m-0'>Email address</label>
        <input type='email' className='form-control' id='email-signup'></input>
      </div>
      <div className='mb-2'>
        <label className='form-label m-0'>Username</label>
        <input type='text' className='form-control' id='username-signup'></input>
      </div>
      <div className='mb-2'>
        <label className='form-label m-0'>Password</label>
        <input type='password' className='form-control' id='password-signup'></input>
      </div>
      <div className='d-flex justify-content-center'>
        <button type="submit" className="btn btn-primary">Signup</button>
      </div>
    </form>
  )
}

export default Signup;