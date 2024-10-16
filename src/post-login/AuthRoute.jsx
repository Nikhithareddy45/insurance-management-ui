import React, { useState } from 'react'
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './AuthRoute.css';
import Navbar from './navbar/Navbar';

function AuthRoute() {
  const navigate = useNavigate();
  const [isUserAuthenticated, setUserAuthenticated] = useState(false);
  useEffect(() => {
    const userID = localStorage.getItem('USER_ID');
    if (!userID) {
      setUserAuthenticated(false);
      navigate('/login');
    } else {
      setUserAuthenticated(true);
    }
  }, [navigate]);
  return (
    <div>
      {isUserAuthenticated && <><Navbar />
        <Outlet /></>}
    </div>
  )
}

export default AuthRoute