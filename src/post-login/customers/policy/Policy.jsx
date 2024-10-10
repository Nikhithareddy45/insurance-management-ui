import React from 'react'
import './Policy.css';
function Policy() {
    return (
        <div className="container">
            <div className="form-box">
                <h2 className="form-title">Policy Registration Form</h2>
                <form>
                    <div className="form-group">
                        <label for="policy-name">Policy Name:</label>
                        <input type="text" id="policy-name" className="form-input" required />
                    </div>

                    <div className="form-group">
                        <label for="policy-start-date">Policy Start Date:</label>
                        <input type="date" id="policy-start-date" className="form-input" required />
                    </div>

                    <div className="form-group">
                        <label for="policy-end-date">Policy End Date:</label>
                        <input type="date" id="policy-end-date" className="form-input" required />
                    </div>

                    <div className="form-group">
                        <label for="policy-tenure">Policy Tenure (in years):</label>
                        <input type="number" id="policy-tenure" className="form-input" required />
                    </div>

                    <div className="form-group">
                        <label for="policy-premium">Policy Premium:</label>
                        <input type="text" id="policy-premium" className="form-input" required />
                    </div>

                    <div className="form-group">
                        <label for="premium-amount">Premium Amount:</label>
                        <input type="number" id="premium-amount" className="form-input" required />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="submit-button">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Policy