import React from 'react';

function Signup() {
  return (
    <form>
      <div className='mb-2'>
        <label class='form-label m-0'>First Name</label>
        <input type='text' className='form-control' id='userFirstName'></input>
      </div>
      <div className='mb-2'>
        <label class='form-label m-0'>Last Name</label>
        <input type='text' className='form-control' id='userLastName'></input>
      </div>
      <div className='mb-2'>
        <label class='form-label m-0'>Email address</label>
        <input type='email' className='form-control' id='email-signup'></input>
      </div>
      <div className='mb-2'>
        <label class='form-label m-0'>Username</label>
        <input type='text' className='form-control' id='username-signup'></input>
      </div>
      <div className='mb-2'>
        <label class='form-label m-0'>Password</label>
        <input type='password' className='form-control' id='password-signup'></input>
      </div>
      <button type="submit" class="btn btn-primary">Signup</button>
    </form>
  )
}

export default Signup;