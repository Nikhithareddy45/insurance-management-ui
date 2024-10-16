import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { API_URL } from '../../../appconfig';
import './Policy.css';

export const POLICY_TYPES = [
    {
        key: 'Health',
        label: 'Health'
    },
    {
        key: 'Life',
        label: 'Life'
    },
    {
        key: 'Car',
        label: 'Car'
    }
];

const addYearsToDate = (yearsToAdd) => {
    let currentDate = new Date(); // Get the current date
    currentDate.setFullYear(currentDate.getFullYear() + (+yearsToAdd)); // Add years
    return currentDate;
}
function Policy() {
    const params = useParams();
    const defaultValues = {
        "policyName": "",
        "policyStartDate": "",
        "policyEndDate": "",
        "policyTenure": "",
        "policyPremium": "",
        "premiumAmount": "",
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
            const agentID = localStorage.getItem('USER_ID');
            data["policyStartDate"] = new Date().toDateString();
            data["policyEndDate"] = addYearsToDate(data.policyTenure).toDateString();
            const response = await axios.post(`${API_URL}/policy/${agentID}/${params.customerId}`, data);
            if (response.data?.id) {
                setRegisterStatus({
                    isLoading: false,
                    errorMessage: '',
                    successMessage: 'Policy Created Successfully'
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
        <div className="container">
            <div className="form-box">
                <h2 className="form-title">Policy Registration Form</h2>
                {(registerStatus.errorMessage || registerStatus.successMessage) && <div className={`alert ${registerStatus.errorMessage ? 'alert-danger' : 'alert-success'} alert-dismissible fade show`} role="alert">
                    {registerStatus.errorMessage}
                    {registerStatus.successMessage && <div>
                        <span>{registerStatus.successMessage}</span> &nbsp;
                        <Link to={`/auth/policies/${params.customerId}`}>List of Policies</Link>
                    </div>}
                </div>}
                <form onSubmit={handleSubmit(registerSubmitHandler)}>
                    <div className="form-group">
                        <label for="policy-name">Policy:</label>
                        <select id="policy-name" className="form-input" {
                            ...register('policyName', {
                                required: 'Policy name is required'
                            })
                        }>
                            <option value="">Select Policy</option>
                            {POLICY_TYPES.map((item) => {
                                return <option value={item.key} key={item.key}>{item.label}</option>
                            })}
                        </select>
                        <p className='text-danger m-0'>{errors.policyName && errors.policyName.message}</p>
                    </div>

                    <div className="form-group">
                        <label for="policy-tenure">Policy Tenure (in years):</label>
                        <input type="number" id="policy-tenure" className="form-input" {
                            ...register('policyTenure', {
                                required: "policy Tenure is required"
                            })
                        } />
                        <p className='text-danger m-0'>{errors.policyTenure && errors.policyTenure.message}</p>
                    </div>

                    <div className="form-group">
                        <label for="policy-premium">Policy Premium:</label>
                        <select id="policy-premium" className="form-input" {
                            ...register('policyPremium', {
                                required: 'Policy Premium is required'
                            })
                        }>
                            <option value="">Select Premium</option>
                            <option value="Quarterly">Quarterly</option>
                            <option value="Half yearly">Half yearly</option>
                            <option value="Anually">Anually</option>
                        </select>
                        <p className='text-danger m-0'>{errors.policyPremium && errors.policyPremium.message}</p>
                    </div>

                    <div className="form-group">
                        <label for="premium-amount">Premium Amount:</label>
                        <input type="number" id="premium-amount" className="form-input" {
                            ...register('premiumAmount', {
                                required: "First name is required"
                            })
                        } />
                        <p className='text-danger m-0'>{errors.premiumAmount && errors.premiumAmount.message}</p>
                    </div>

                    <div className="form-group d-flex justify-content-between">
                        <button type="submit" disabled={registerStatus.isLoading}>{registerStatus.isLoading ? 'Loading ...' : 'Submit'}</button>
                        <Link to={`/auth/policies/${params.customerId}`}>{'Policy list'}</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Policy