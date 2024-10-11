import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { API_URL } from '../../appconfig';
import './Register.css';

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
    } catch(e) {
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
      </div>
      <div id="c1">
        <div className="login-container">
          <h2>Register</h2>
          {(registerStatus.errorMessage || registerStatus.successMessage) && <div className={`alert ${registerStatus.errorMessage ? 'alert-danger' : 'alert-success'} alert-dismissible fade show`} role="alert">
            {registerStatus.errorMessage}
            {registerStatus.successMessage}
          </div>}
          <form onSubmit={handleSubmit(registerSubmitHandler)}>
            <div>
              <label htmlFor="firstName"><b>First Name:</b></label>
              <input type="text" id="firstName" name="firstName" placeholder="Enter your first name"
                {
                ...register('firstName', {
                  required: "First name is required"
                })
                }
              />
              <p className='text-danger m-0'>{errors.firstName && errors.firstName.message}</p>
            </div>
            <div>
              <label htmlFor="lastName"><b>Last Name:</b></label>
              <input type="text" id="lastName" name="lastName" placeholder="Enter your last name"
                {
                ...register('lastName', {
                  required: "Last name is required"
                })
                }
              />
              <p className='text-danger m-0'>{errors.lastName && errors.lastName.message}</p>

            </div>
            <div>
              <label htmlFor="email"><b>Email:</b></label>
              <input type="email" id="email" name="email" placeholder="Enter your email"
                {
                ...register('email', {
                  required: 'Email is required'
                })
                }
              />
              <p className='text-danger m-0'>{errors.email && errors.email.message}</p>
            </div>
            <div>
              <label htmlFor="phoneNumber"><b>Phone Number:</b></label>
              <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number"
                {
                ...register('phoneNumber', {
                  required: 'Phone number is required'
                })
                }
              />
              <p className='text-danger m-0'>{errors.phoneNumber && errors.phoneNumber.message}</p>
            </div>
            <div>
              <label htmlFor="gender"><b>Gender:</b></label>
              <select id="gender" name="gender" {
                ...register('gender', {
                  required: 'Gender is required'
                })
              }>
                <option value=""></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <p className='text-danger m-0'>{errors.gender && errors.gender.message}</p>
            </div>
            <div>
              <label htmlFor="address"><b>Address:</b></label>
              <input type="text" id="address" name="address" placeholder="Enter your address"
                {
                ...register('address', {
                  required: 'Address is required'
                })
                }
              />
              <p className='text-danger m-0'>{errors.address && errors.address.message}</p>
            </div>
            <div>
              <label htmlFor="password"><b>Password:</b></label>
              <input type="password" id="password" name="password" placeholder="Enter your password"
                {
                ...register('password', {
                  required: 'Password is required'
                })
                }
              />
              <p className='text-danger m-0'>{errors.password && errors.password.message}</p>
            </div>

            <div style={{ paddingTop: "15px" }}></div>
            <button type="submit" disabled={registerStatus.isLoading}>{registerStatus.isLoading ? 'Loading ...' : 'Register'}</button>
          </form>
        </div>
      </div>


      <footer>
        <div className="footer-content">
          <p>&copy; 2024 Your Website | All rights reserved</p>
          <p>Contact us: <a href="mailto:support@yourwebsite.com">support@yourwebsite.com</a></p>
        </div>
      </footer>
    </>
  )
}

export default Register