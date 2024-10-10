import React from 'react';
import './Register.css';

function Register() {
  return (
    <>
      <div id="background-image">
        {/* <div id="container">
          <img src="./../../../public/Images/MM_FullMark_White.png"
            alt="Mass Mutual Logo" id="logo" />
          <div id="login-text"><b>Register Your Account</b></div>
        </div> */}
      </div>
      <div id="c1">
        <div class="login-container">
          <h2>Register</h2>
          <form>
            <label for="firstName"><b>First Name:</b></label>
            <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" required />

            <label for="lastName"><b>Last Name:</b></label>
            <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" required />

            <label for="email"><b>Email:</b></label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />

            <label for="phoneNumber"><b>Phone Number:</b></label>
            <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" required />

            <label for="gender"><b>Gender:</b></label>
            <select id="gender" name="gender" required>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <label for="address"><b>Address:</b></label>
            <input type="text" id="address" name="address" placeholder="Enter your address" required />

            <label for="password"><b>Password:</b></label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />

            <div style={{paddingTop: "15px"}}></div>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>


      <footer>
        <div class="footer-content">
          <p>&copy; 2024 Your Website | All rights reserved</p>
          <p>Contact us: <a href="mailto:support@yourwebsite.com">support@yourwebsite.com</a></p>
        </div>
      </footer>
    </>
  )
}

export default Register