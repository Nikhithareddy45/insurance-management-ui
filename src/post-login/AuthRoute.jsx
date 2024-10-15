import React from 'react'
import { Outlet } from 'react-router-dom';
import './AuthRoute.css';
import Navbar from './navbar/Navbar';

function AuthRoute() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default AuthRoute