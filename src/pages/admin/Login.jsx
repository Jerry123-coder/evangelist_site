import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../data/firebase';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/church-logo.png'
import './Login.css'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use React Router for navigation

  const login = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      alert('Login successful');
      navigate('/admin'); // Redirect to the admin page
    } catch (error) {
      console.error(error);
      alert('Login unsuccessful');
    }
  };

  return (
    <div className='login-page'>
      <div className='login-form-container'>
        <div className='login-form'>
          <div className='form-image-container'><img src={logo} className='form-image'/></div>
          <div className='form-header'><h2 className='form-header-text'>LOG IN</h2></div>
          <div className='login-form-inputs'>
            <div className='login-input'>
              <input
                type='email'
                placeholder='Email Address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='email-input'
              />
            </div>

            <div className='login-input'>
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='password-input'
              />
            </div>

            <div className='remember-me'>
              <input
                type='checkbox'               
                className='remember-me-input'
              />
              <p>Remember Me</p>
            </div>

            <div className='form-button'>
            <button onClick={login} className='login-submit-button'>
              Submit
            </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
