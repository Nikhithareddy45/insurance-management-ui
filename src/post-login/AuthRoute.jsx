import React from 'react'
import { Outlet } from 'react-router-dom';
import './AuthRoute.css';

function AuthRoute() {
  return (
    <div>
      <div className="header">
        <div className="container header-container">
          <div className="logo">
            <a href="https://www.massmutual.com">
              <img src="/public/Images/MM_FullMark_White.png" alt="MassMutual Logo" />
            </a>
          </div>
          <div className="nav-links">

          </div>
          <div className="icon-links">
            <a href="#" className="icon-link">
              <img src="settings.svg" alt="Settings" className="icon" />
            </a>
            <a href="#" className="icon-link">
              <img src="logout.svg" alt="Logout" className="icon" />
            </a>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default AuthRoute