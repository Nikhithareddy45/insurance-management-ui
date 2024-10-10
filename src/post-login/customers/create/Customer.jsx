import React from 'react'
import './Customer.css';

function Customer() {
  return (
    <div className="container">
      <div className="form-box">
        <h2 className="form-title">Registration Form</h2>
        <form>
          <div className="form-group">
            <label for="first-name">First Name:</label>
            <input type="text" id="first-name" className="form-input" required />
          </div>

          <div className="form-group">
            <label for="last-name">Last Name:</label>
            <input type="text" id="last-name" className="form-input" required />
          </div>

          <div className="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" className="form-input" required />
          </div>

          <div className="form-group">
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" className="form-input" required />
          </div>

          <div className="form-group">
            <label for="gender">Gender:</label>
            <select id="gender" className="form-input" required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label for="address">Address:</label>
            <textarea id="address" className="form-input" rows="3" required></textarea>
          </div>

          <div className="form-group">
            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" className="form-input" required />
          </div>

          <div className="form-group">
            <label for="occupation">Occupation:</label>
            <input type="text" id="occupation" className="form-input" required />
          </div>

          <div className="form-group">
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Customer