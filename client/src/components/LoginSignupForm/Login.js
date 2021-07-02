import React from 'react';

function Login() {
  return (
    <form>
      <div className='mb-3'>
        <label class='form-label'>Username</label>
        <input type='text' className='form-control' id='username-login'></input>
      </div>
      <div className='mb-3'>
        <label class='form-label'>Password</label>
        <input type='password' className='form-control' id='password-login'></input>
      </div>
      <button type="submit" class="btn btn-primary">login</button>
    </form>
  )
}

export default Login;