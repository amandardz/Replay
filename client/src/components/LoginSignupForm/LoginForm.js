import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';

function Login() {

  const { setLoggedIn } = useContext(AuthContext);
  const history = useHistory();
  const [formObject, setFormObject] = useState({
    username: "",
    password: ""
  });

  function handleInputChange(event) {
    // add code to control the components here
    let value = event.target.value;
    const name = event.target.name;

    setFormObject({
      ...formObject,
      [name]: value
    });
  }

  const loginFormHandler = async (e) => {
    e.preventDefault();
  
    if (formObject.username && formObject.password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify(formObject),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if(response.ok) {
        setLoggedIn(true);
        history.replace('/dashboard');
      } else {
        alert("Sorry, username or password are incorrect.")
      }
  
    } else {
      alert("Please enter username and password.")
    }
  };

  return (
    <form id='login-form' onSubmit={(e) => loginFormHandler(e)}>
      <h2 className='text-center'>Login</h2>
      <div className='mb-3'>
        <label className='form-label'>Username</label>
        <input
          type='text'
          className='form-control'
          id='username-login'
          onChange={handleInputChange}
          name="username"
          ></input>
      </div>
      <div className='mb-3'>
        <label className='form-label'>Password</label>
        <input
          type='password'
          className='form-control'
          id='password-login'
          onChange={handleInputChange}
          name="password"
          ></input>
      </div>
      <div className='d-flex justify-content-center'>
        <button type="submit" className="btn btn-warning">Login</button>
      </div>
    </form>
  )
}

export default Login;