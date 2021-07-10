import React from 'react';

const loginFormHandler = async (e) => {
  e.preventDefault();

  // Collect values from the login form
  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  console.log(document.querySelector('#username-login').value);

  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  } else {
    alert("Please enter username and password.")
  }
};

function Login() {
  return (
    <form id='login-form' onSubmit={(e) => loginFormHandler(e)}>
      <h2 className='text-center'>Login</h2>
      <div className='mb-3'>
        <label className='form-label'>Username</label>
        <input type='text' className='form-control' id='username-login'></input>
      </div>
      <div className='mb-3'>
        <label className='form-label'>Password</label>
        <input type='password' className='form-control' id='password-login'></input>
      </div>
      <div className='d-flex justify-content-center'>
        <button type="submit" className="btn btn-primary">Login</button>
      </div>
    </form>
  )
}

export default Login;