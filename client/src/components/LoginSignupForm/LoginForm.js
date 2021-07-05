import React from 'react';

function Login() {
  return (
    <form id='login-form'>
      <h2 className='text-center'>Login</h2>
      <div className='mb-3'>
        <label class='form-label'>Username</label>
        <input type='text' className='form-control' id='username-login'></input>
      </div>
      <div className='mb-3'>
        <label class='form-label'>Password</label>
        <input type='password' className='form-control' id='password-login'></input>
      </div>
      <div className='d-flex justify-content-center'>
        <button type="submit" class="btn btn-primary">Login</button>
      </div>
    </form>
  )
}

export default Login;