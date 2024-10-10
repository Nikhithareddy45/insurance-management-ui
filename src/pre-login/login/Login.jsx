import React from 'react'
import './Login.css';
function Login() {
  return (
    <>
      <div id="background-image">
        {/* <div id="container">
          <img src="C:/Users/91944/OneDrive/Documents/neeharhtml/MM_FullMark_White.svg"
            alt="Mass Mutual Logo" id="logo" />
            <div id="login-text"><b>Log in to Dashboard</b></div>
        </div> */}
      </div>
      <div id="c1">
        <div className="login-container">
          <h2>Login</h2>
          <form>
            <label ><b>Email:</b></label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
            <div style={{ paddingTop: '10px' }}></div>
            <label ><strong>Password:</strong></label>
            <input type="password" id="password" name="password" placeholder="Enter your password" />
            <div style={{ paddingTop: "15px" }}></div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login