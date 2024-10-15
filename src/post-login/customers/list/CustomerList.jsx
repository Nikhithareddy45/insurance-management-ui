import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../../appconfig';
import './CustomerList.css';

function CustomerList() {
    const [customerList, setCustomerList] = useState([]);
    const [initialList, setInitialList] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');


    const [deleteMessage, setDeleteMessage] = useState({
        successMessage: '',
        errorMessage: ''
    });

    useEffect(() => {
        const filtered = initialList.filter((customer) =>
            `${customer.firstName} ${customer.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
            customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            customer.phoneNumber.includes(searchTerm)
        );
        setCustomerList(filtered);
    }, [searchTerm]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const agentID = localStorage.getItem('USER_ID');
        const response = await axios.get(`${API_URL}/customer/${agentID}`);
        if (response.data) {
            setCustomerList(response.data);
            setInitialList(response.data);
        }
    }

    const deleteCustomer = async (id) => {
        const result = window.confirm('Do you want to delete the customer');
        if (result) {
            const agentID = localStorage.getItem('USER_ID');
            const response = await axios.delete(`${API_URL}/customer/${agentID}/${id}`);
            if (response.data) {
                setDeleteMessage({
                    successMessage: 'Deleted Successfully',
                    errorMessage: ''
                });
                setTimeout(() => {
                    setDeleteMessage({
                        successMessage: '',
                        errorMessage: ''
                    });
                });
                fetchData();
            } else {
                setTimeout(() => {
                    setDeleteMessage({
                        successMessage: '',
                        errorMessage: 'Something went wrong ...'
                    });
                });
            }
        }

    }

    return (
        <>

            <div>
                <h1>Customer List</h1>
                <div className='d-flex justify-content-between pe-5 ps-5'>
                    <div style={{ width: '50%' }}>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Search with name, email and phone"
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)} />
                    </div>
                    <div>
                        <Link className='btn btn-primary' to={'/auth/create'}>New Customer</Link>
                    </div>
                </div>
                {customerList?.length ? <>
                    {(deleteMessage.successMessage || deleteMessage.errorMessage) && <div className={`alert ${deleteMessage.errorMessage ? 'alert-danger' : 'alert-success'} alert-dismissible fade show`} role="alert">
                        {deleteMessage.successMessage}
                        {deleteMessage.errorMessage}
                    </div>}
                    <div className="d-flex justify-content-start">
                        <div className='ms-5'>

                        </div>
                    </div>
                    <div className='p-5'>
                        <table id="customerTable">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>Phone Number</th>
                                    <th>Occupation</th>
                                    <th>Date of Birth</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    customerList?.map((obj) => {
                                        return (
                                            <tr key={obj.id}>
                                                <td>{obj.firstName}</td>
                                                <td>{obj.lastName}</td>
                                                <td>{obj.email}</td>
                                                <td>{obj.gender}</td>
                                                <td>{obj.phoneNumber}</td>
                                                <td>{obj.occupation}</td>
                                                <td>{obj.dateOfBirth}</td>
                                                <td>{obj.address}</td>
                                                <td>
                                                    <Link className="btn btn-primary" to={`/auth/create/${obj.id}`}>Edit</Link>&nbsp;
                                                    <Link className="btn btn-primary" onClick={() => deleteCustomer(obj.id)}>Delete</Link>&nbsp;
                                                    <Link className="btn btn-primary" to={`/auth/policies/${obj.id}`}>Policies</Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </> : <div className='d-flex justify-content-center pt-5'>
                    <p className='text-danger'>No Records found</p>
                </div>}
            </div>
        </>
    )
}

export default CustomerList