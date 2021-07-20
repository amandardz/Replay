import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import './styles.css';

function Signup() {
  
  const { setLoggedIn } = useContext(AuthContext);
  const history = useHistory();
  const [formObject, setFormObject] = useState({
    firstName: "",
    lastName: "",
    email: "",
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

  const signupFormHandler = async (e) => {
    e.preventDefault();
  
    if (formObject.firstName && formObject.lastName && formObject.username && formObject.email && formObject.password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify(formObject),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        setLoggedIn(true);
        history.replace('/dashboard');
        
      } else {
        alert(response.statusText);
      }
    } else {
      alert("Please complete all fields.")
    }
  };

  return (
    <form id='signup-form' onSubmit={(e) => signupFormHandler(e)}>
      <h2 className='text-center mb-3'>Signup</h2>
      <div className='d-flex flex-row mb-2 nameContainer'>
        <div className='pe-2 nameInputContainer'>
          <label className='form-label m-0'>First Name</label>
          <input type='text' className='form-control' id='userFirstName' onChange={handleInputChange} name="firstName"></input>
        </div>
        <div className='nameInputContainer'>
          <label className='form-label m-0'>Last Name</label>
          <input type='text' className='form-control' id='userLastName' onChange={handleInputChange} name="lastName"></input>
        </div>
      </div>
      <div className='mb-2'>
        <label className='form-label m-0'>Email address</label>
        <input type='email' className='form-control' id='email-signup' onChange={handleInputChange} name="email"></input>
      </div>
      <div className='mb-2'>
        <label className='form-label m-0'>Username</label>
        <input type='text' className='form-control' id='username-signup' onChange={handleInputChange} name="username"></input>
      </div>
      <div className='mb-2'>
        <label className='form-label m-0'>Password</label>
        <input type='password' className='form-control' id='password-signup' onChange={handleInputChange} name="password"></input>
      </div>
      <div className='d-flex justify-content-center'>
        <button type="submit" className="btn btn-warning">Signup</button>
      </div>
    </form>
  )
}

export default Signup;