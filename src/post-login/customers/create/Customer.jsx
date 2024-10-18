import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { API_URL } from '../../../appconfig';
import './Customer.css';

function Customer() {
  const [createdCustomerId, setCustomerId] = useState('');

  const params = useParams();

  const defaultValues = {
    "firstName": "",
    "lastName": "",
    "email": "",
    "phoneNumber": "",
    "gender": "",
    "address": "",
    "dateOfBirth": "",
    "occupation": ""
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
  
  useEffect(() => {
    if (params.id) {
      getAllUserDetails();
    }
  }, [params]);

  const registerSubmitHandler = async (data) => {
    setRegisterStatus({
      isLoading: true,
      errorMessage: '',
      successMessage: ''
    });
    if (params.id) {
      updateUser(data);
    } else {
      createUser(data);
    }
  }

  const getAllUserDetails = async () => {
    try {
      const agentID = localStorage.getItem('USER_ID');
      const response = await axios.get(`${API_URL}/customer/${agentID}/${params.id}`);
      if (response.data?.[0]?.id) {
        setCustomerId(response.data?.id);
        console.log(response.data);
        reset(response.data[0]);
      }
    } catch (e) {
    }
  }

  const createUser = async (data) => {
    try {
      data["agentID"] = localStorage.getItem('USER_ID');
      const response = await axios.post(`${API_URL}/customer`, data);
      if (response.data?.id) {
        setRegisterStatus({
          isLoading: false,
          errorMessage: '',
          successMessage: 'Customer Created Successfully'
        });
        reset();
        setCustomerId(response.data?.id);
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

  const updateUser = async (data) => {
    try {
      const agentID = localStorage.getItem('USER_ID');
      const response = await axios.put(`${API_URL}/customer/${agentID}/${params.id}`, data);
      if (response.data?.id) {
        setRegisterStatus({
          isLoading: false,
          errorMessage: '',
          successMessage: 'Customer Updated Successfully'
        });
        reset();
        setCustomerId(response.data?.id);
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
    <div className="container">
       <div className="form-group d-flex justify-content-start">
            <Link to='/auth/list' className='pt-2'>{'Back to Customer List'}</Link>
          </div>
      <div className="form-box">
        <h2 className="form-title">Customer Registration</h2>
        {(registerStatus.errorMessage || registerStatus.successMessage) && <div className={`alert ${registerStatus.errorMessage ? 'alert-danger' : 'alert-success'} alert-dismissible fade show`} role="alert">
          {registerStatus.errorMessage}
          {registerStatus.successMessage && <div>
            <span>{registerStatus.successMessage}</span>
            {!params.id && <Link to={`/auth/policy/${createdCustomerId}`}>Create policy for this user</Link>}
          </div>}
        </div>}
        <form onSubmit={handleSubmit(registerSubmitHandler)}>
          <div className="form-group">
            <label for="first-name">First Name:</label>
            <input type="text" id="first-name" className="form-input" required
              {
              ...register('firstName', {
                required: "First name is required"
              })
              }
            />
            <p className='text-danger m-0'>{errors.firstName && errors.firstName.message}</p>
          </div>

          <div className="form-group">
            <label for="last-name">Last Name:</label>
            <input type="text" id="last-name" className="form-input" {
              ...register('lastName', {
                required: "Last name is required"
              })
            } />
            <p className='text-danger m-0'>{errors.lastName && errors.lastName.message}</p>
          </div>

          <div className="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" className="form-input" disabled={params.id}
              {
              ...register('email', {
                required: 'Email is required'
              })
              }
            />
          </div>

          <div className="form-group">
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" className="form-input"
              {
              ...register('phoneNumber', {
                required: 'Phone number is required'
              })
              } />
            <p className='text-danger m-0'>{errors.phoneNumber && errors.phoneNumber.message}</p>
          </div>

          <div className="form-group">
            <label for="gender">Gender:</label>
            <select id="gender" className="form-input" {
              ...register('gender', {
                required: 'Gender is required'
              })
            }>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <p className='text-danger m-0'>{errors.gender && errors.gender.message}</p>
          </div>

          <div className="form-group">
            <label for="address">Address:</label>
            <textarea id="address" className="form-input" rows="3"
              {
              ...register('address', {
                required: 'Address is required'
              })
              }></textarea>
            <p className='text-danger m-0'>{errors.address && errors.address.message}</p>
          </div>

          <div className="form-group">
            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" className="form-input"  {
              ...register('dateOfBirth', {
                required: 'Date of birth is required'
              })
            } />
            <p className='text-danger m-0'>{errors.dateOfBirth && errors.dateOfBirth.message}</p>
          </div>

          <div className="form-group">
            <label for="occupation">Occupation:</label>
            <input type="text" id="occupation" className="form-input"  {
              ...register('occupation', {
                required: 'Occupation is required'
              })
            } />
            <p className='text-danger m-0'>{errors.occupation && errors.occupation.message}</p>
          </div>

          <div className="form-group d-flex justify-content-between">
            <button type="submit" disabled={registerStatus.isLoading}>{registerStatus.isLoading ? 'Loading ...' : params.id ? 'Update' : 'Create'}</button>
            <Link to='/auth/list' className='pt-2'>{'Customer List'}</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Customer