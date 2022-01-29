import React from 'react';
import { useDispatch } from 'react-redux';

import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import './login.css';

export const LoginScreen = () => {


  const dispatch = useDispatch();
  

  const [ formLoginValues, handleLoginInputChange] = useForm( {
    username:'',
    password:''
});

const {username,password}=formLoginValues;



const handleLoginSubmit=(e)=>{
  e.preventDefault();
  dispatch(startLogin(username,password))

}

  return <div>
    <div className='container-login'>
      <div className='container--login__column__signUp'>
        <h1>Hi!,welcome</h1>
        <p>Go ahead get access to your account and buy something!</p>
      </div>
      <div className='container-login__column__form'>
        <h1>E-COMMERCE</h1>
        <form onSubmit={handleLoginSubmit}>

          <label htmlFor="username">Email</label>
          <input type="text" name='username' value={username} onChange={handleLoginInputChange} placeholder='write your email' required />
          <label htmlFor="password">Password</label>
          <input type="text" name='password' value={password}  onChange={handleLoginInputChange} placeholder='write your password' required />

          <button className='btn btn-login'>Login</button>
        </form>

      </div>

    </div>
  </div>;
};
