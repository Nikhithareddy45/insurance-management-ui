import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const handleLogout = () => {
        console.log('logout');
        localStorage.clear();
    }
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className='container-fluid d-flex justify-content-between'>
                <div className="d-flex me-auto mb-2 mb-lg-0" style={{ gap: '10px' }}>
                    <div className="nav-item">
                        <NavLink className={({ isActive }) =>
                            isActive ? 'nav-link active text-muted' : 'nav-link'
                        } to={'/auth/dashboard'}><i className="fa fa-bar-chart" aria-hidden="true"></i>&nbsp; Dashboard</NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink className={({ isActive }) =>
                            isActive ? 'nav-link active text-muted' : 'nav-link'
                        } to={'/auth/list'}><i className="fa fa-users" aria-hidden="true"></i>&nbsp; Customers</NavLink>
                    </div>
                </div>
                <div className="nav-item">
                    <NavLink className={({ isActive }) =>
                        isActive ? 'nav-link active text-muted' : 'nav-link'
                    } onClick={handleLogout} to={'/login'}>Logout &nbsp;<i className="fa fa-sign-out" aria-hidden="true"></i>&nbsp;</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
