import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { API_URL } from '../../appconfig';
import './Register.css';

import user_icon from './Images/person.png'
import email_icon from './Images/email.png'
import password_icon from './Images/password.png'
import massmutual_img from './Images/massm.svg'
import signin_pic from './Images/signin.jpg'
import phone_icon from './Images/phone.png'
import address_icon from './Images/address.png'
import male_icon from './Images/male-24.png'
import { Link } from 'react-router-dom';

function Register() {

  const defaultValues = {
    "firstName": "",
    "lastName": "",
    "email": "",
    "phoneNumber": "",
    "gender": "",
    "address": "",
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
  })

  const registerSubmitHandler = async (data) => {

    setRegisterStatus({
      isLoading: true,
      errorMessage: '',
      successMessage: ''
    });
    try {
      const response = await axios.post(`${API_URL}/users`, data);
      if (response.data?.id) {
        setRegisterStatus({
          isLoading: false,
          errorMessage: '',
          successMessage: 'User Registered Successfull'
        });
        reset();
      } else {
        setRegisterStatus({
          isLoading: false,
          errorMessage: response.data?.message,
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
    <form onSubmit={handleSubmit(registerSubmitHandler)}>
      <div className='main'>
        <div className='images'>
          <div className='img-1'><img src={massmutual_img} alt="" /> </div>
          <div className='img-2'><img src={signin_pic} alt="" /> </div>
        </div>
        <div className='container'>
          <div className="header">
            <div className="text">Register</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder='First Name' {
                ...register('firstName', {
                  required: "First name is required"
                })
              } />
              <p className='text-danger m-0'>{errors.firstName && errors.firstName.message}</p>
            </div>

            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder='Last Name' {
                ...register('lastName', {
                  required: "Last name is required"
                })
              } />
              <p className='text-danger m-0'>{errors.lastName && errors.lastName.message}</p>
            </div>

            <div className="input">
              <img src={email_icon} alt="" />
              <input type="email" placeholder='Email Id' {
                ...register('email', {
                  required: "Email is required"
                })
              } />
              <p className='text-danger m-0'>{errors.email && errors.email.message}</p>
            </div>

            <div className="input">
              <img src={phone_icon} alt="" />
              <input type="tel" placeholder='Enter Mobile Number'  {
                ...register('phoneNumber', {
                  required: 'Phone number is required'
                })
              } />
              <p className='text-danger m-0'>{errors.phoneNumber && errors.phoneNumber.message}</p>
            </div>

            <div className="input">
              <img src={male_icon} alt="" />
              {/* <input type="text" placeholder='Enter Your Gender' /> */}
              <select id="gender" name="gender" {
                ...register('gender', {
                  required: 'Gender is required'
                })
              }>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <p className='text-danger m-0'>{errors.gender && errors.gender.message}</p>
            </div>

            <div className="input">
              <img src={address_icon} alt="" />
              <input type="text" placeholder='Enter Address' {
                ...register('address', {
                  required: 'Address is required'
                })
              } />
              <p className='text-danger m-0'>{errors.address && errors.address.message}</p>
            </div>

            <div className="input">
              <img src={password_icon} alt="" />
              <div>
              <input type="password" placeholder='Password'  {
                ...register('password', {
                  required: 'Password is required'
                })
              } />
              <p className='text-danger m-0'>{errors.password && errors.password.message}</p>
              </div>
            </div>
          </div>
          <div className="forgot-password">Login ? <span><Link to={'/login'}>Click Here!</Link></span></div>
          <div className="forgot-password">Home ? <span><Link to={'/home'}>Click Here!</Link></span></div>
          <div className="submit-container">
            <div className="submit"><button type="submit" style={{ background: 'transparent', color: 'white' }} disabled={registerStatus.isLoading}>{registerStatus.isLoading ? 'Loading ...' : 'Register'}</button></div>
          </div>
          {(registerStatus.errorMessage || registerStatus.successMessage) && <div className={`alert ${registerStatus.errorMessage ? 'alert-danger' : 'alert-success'} alert-dismissible fade show`} role="alert">
              {registerStatus.errorMessage} {registerStatus.successMessage}</div>}

        </div>
      </div>
    </form>
  )
}

export default Register