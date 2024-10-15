import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is loaded
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../appconfig';

const PolicyList = () => {
    const [policyList, setList] = useState([]);
    const params = useParams();
    useEffect(() => {
        getPolicyDetails();
    }, [params]);

    const getPolicyDetails = async () => {
        const agentID = localStorage.getItem('USER_ID');
        const response = await axios.get(`${API_URL}/policy/${agentID}/${params.customerId}`);
        console.log(response.data);
        if (response.data?.length) {
            setList(response.data);
        }
    }
    return (
        <>
            {policyList?.length && <>
                <div className='d-flex justify-content-between pe-5 pt-3'>
                    <Link className={'btn btn-link'} to={`/auth/list`}>Back to Customer list</Link>
                    <Link className={'btn btn-primary'} to={`/auth/policy/${params.customerId}`}>New Policy</Link>
                </div>
            </>}
            <div>
                <div>
                    {policyList?.length > 0 ? <div className='container-fluid' style={{ display: 'flex', gap: '10px' }}>
                        {policyList?.map(({
                            policyName,
                            policyStartDate,
                            policyEndDate,
                            policyTenure,
                            policyPremium,
                            premiumAmount,
                            id
                        }) => {
                            return <div className="card text-white bg-primary mb-3" style={{ maxWidth: '20rem' }} key={id}>
                                <div className="card-header">Policy Details</div>
                                <div className="card-body">
                                    <h5 className="card-title">{policyName}</h5>
                                    <ul className="list-group list-group-flush bg-primary">
                                        <li className="list-group-item ">
                                            <strong>Start Date:</strong> {policyStartDate}
                                        </li>
                                        <li className="list-group-item ">
                                            <strong>End Date:</strong> {policyEndDate}
                                        </li>
                                        <li className="list-group-item ">
                                            <strong>Tenure:</strong> {policyTenure} years
                                        </li>
                                        <li className="list-group-item ">
                                            <strong>Premium Type:</strong> {policyPremium}
                                        </li>
                                        <li className="list-group-item ">
                                            <strong>Amount:</strong> ${premiumAmount}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        })}
                    </div> : <>
                        <div className='d-flex justify-content-center'>
                            <p className='text-danger'>No Records found <strong>
                                <Link to={`/auth/policy/${params.customerId}`}>Click here for New Policy</Link>
                            </strong></p>
                        </div>
                    </>
                    }
                </div>
            </div>
        </>
    );
};

export default PolicyList;
