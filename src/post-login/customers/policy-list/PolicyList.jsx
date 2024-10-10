import React from 'react';
import './PolicyList.css';

function PolicyList() {
    return (
        <>
            <div class="container">
                <div class="card">
                    <h2 class="card-title">Customer Details</h2>
                    <p><strong>First Name:</strong> Customer firstName</p>
                    <p><strong>Last Name:</strong> Customer lastName</p>
                    <p><strong>Email:</strong> saicustomer@gmail.com</p>
                    <p><strong>Phone Number:</strong> 9234512345</p>
                    <p><strong>Gender:</strong> Male</p>
                    <p><strong>Address:</strong> Sample address</p>
                    <p><strong>Date of Birth:</strong> Sun Oct 06 2024</p>
                    <p><strong>Occupation:</strong> Education</p>
                </div>
            </div>
        </>
    )
}

export default PolicyList