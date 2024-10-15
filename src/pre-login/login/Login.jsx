import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../appconfig';
import './Login.css';
function Login() {

  const navigate = useNavigate();
  const defaultValues = {
    "email": "",
    "password": ""
  };
  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues: defaultValues
  });

  const [registerStatus, setRegisterStatus] = useState({
    isLoading: false,
    errorMessage: '',
    successMessage: ''
  });

  const loginSubmitHandler = async (data) => {

    setRegisterStatus({
      isLoading: true,
      errorMessage: '',
      successMessage: ''
    });
    try {
      const response = await axios.post(`${API_URL}/users/login`, data);
      if (response.data?.id) {
        setRegisterStatus({
          isLoading: false,
          errorMessage: '',
          successMessage: 'Login Success'
        });
        reset();
        localStorage.setItem('USER_ID', response.data?.id);
        navigate('/auth/list');
      } else {
        setRegisterStatus({
          isLoading: false,
          errorMessage: 'Invalid credentials... Please try again',
          successMessage: ''
        })
      }
    } catch (e) {
      if (e.response?.data?.status === 400) {
        setRegisterStatus({
          isLoading: false,
          errorMessage: "User already exist",
          successMessage: ''
        })
      } else {
        setRegisterStatus({
          isLoading: false,
          errorMessage: e?.response?.data?.status ?? 'Something went wrong please try again',
          successMessage: ''
        })
      }
    }
  }
  return (
    <>
      <div id="background-image">
        {/* <div id="container">
          <img src="C:/Users/91944/OneDrive/Documents/neeharhtml/MM_FullMark_White.svg"
            alt="Mass Mutual Logo" id="logo" />
            <div id="login-text"><b>Log in to Dashboard</b></div>
        </div> */}
      </div>
      <div id="c1">
        <div className="login-container">
          <h2>Login</h2>
          {(registerStatus.errorMessage || registerStatus.successMessage) && <div className={`alert ${registerStatus.errorMessage ? 'alert-danger' : 'alert-success'} alert-dismissible fade show`} role="alert">
            {registerStatus.errorMessage}
            {registerStatus.successMessage}
          </div>}
          <form onSubmit={handleSubmit(loginSubmitHandler)}>
            <div>
              <label ><b>Email:</b></label>
              <input type="email" id="email" name="email" placeholder="Enter your email"
                {
                ...register('email', {
                  required: "Email is required"
                })
                } />
              <p className='text-danger m-0'>{errors.email && errors.email.message}</p>
            </div>
            <div style={{ paddingTop: '10px' }}></div>
            <div>
              <label ><strong>Password:</strong></label>
              <input type="password" id="password" name="password" placeholder="Enter your password" {
                ...register('password', {
                  required: "Password is required"
                })
              } />
              <p className='text-danger m-0'>{errors.password && errors.password.message}</p>
            </div>
            <div style={{ paddingTop: "15px" }}></div>
            <button type="submit" disabled={registerStatus.isLoading}>{registerStatus.isLoading ? 'Loading ...' : 'Login'}</button>
          </form>
          <div className='d-flex justify-content-end'>
            <Link to={'/register'}>Register</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login