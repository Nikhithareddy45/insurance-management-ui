import React from 'react'
import './CustomerList.css';

function CustomerList() {
    return (
        <>

            <div className="container">
                <h1>Customer List</h1>

                <div className="filter-section">
                    <input type="text" id="searchBar" placeholder="Search by customer name..." />
                    <select id="filterPolicy">
                        <option value="all">All Policies</option>
                        <option value="home">Home Policy</option>
                        <option value="auto">Auto Policy</option>
                        <option value="life">Life Policy</option>
                    </select>
                    <button id="searchButton" className="search-btn">Search</button>
                </div>

                <table id="customerTable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Policy Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>John Doe</td>
                            <td>Home Policy</td>
                            <td>
                                <button className="edit-btn">Edit</button>
                                <button className="delete-btn">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jane Smith</td>
                            <td>Auto Policy</td>
                            <td>
                                <button className="edit-btn">Edit</button>
                                <button className="delete-btn">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CustomerList