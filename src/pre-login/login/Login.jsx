import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../appconfig';
import './Login.css';

import email_icon from './Images/email.png'
import password_icon from './Images/password.png'
import massmutual_img from './Images/massm.svg'
import signin_pic2 from './Images/signin-image.jpg'
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
        
        if (response.data?.status) {
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
            errorMessage: 'Your account is not yet active. Please contact Admin.',
            successMessage: ''
          });
        }
       
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
      <form onSubmit={handleSubmit(loginSubmitHandler)}>
        <div className='main'>
          <div className='images'>
            <div className='img-1'><img src={massmutual_img} alt="" /> </div>
            <div className='img-3'> <img src={signin_pic2} alt="" /> </div>
          </div>
          <div className='container'>
            <div className="header">
              <div className="text">Login</div>
              <div className="underline"></div>
            </div>
            <div className="inputs">

              <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email Id' {
                ...register('email', {
                  required: "Email is required"
                })
                }/>
                <p className='text-danger m-0'>{errors.email && errors.email.message}</p>
              </div>
              <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password' {
                ...register('password', {
                  required: "Password is required"
                })
              } />
              <p className='text-danger m-0'>{errors.password && errors.password.message}</p>
              </div>
            </div>
            <div className="forgot-password">Signup ? <span><Link to={'/register'}>Click Here!</Link></span></div>
            <div className="forgot-password">Home ? <span><Link to={'/home'}>Click Here!</Link></span></div>

            <div className="submit-container">
              <div className="submit"><button type="submit" style={{background: 'transparent', color: 'white'}} disabled={registerStatus.isLoading}>{registerStatus.isLoading ? 'Loading ...' : 'Login'}</button></div>
            </div>
            {(registerStatus.errorMessage || registerStatus.successMessage) && <div className={`alert ${registerStatus.errorMessage ? 'alert-danger' : 'alert-success'} alert-dismissible fade show`} role="alert">
              {registerStatus.errorMessage}
              {registerStatus.successMessage}
            </div>}
          </div>
        </div>
      </form>
    </>
  );
}

export default Login