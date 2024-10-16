import React from 'react'
import { Link } from 'react-router-dom'
import logo from './Images/logo.svg';
function NavBar() {
  
    return (
        <nav className="navbar navbar-expand-md navbar-dark" aria-label="Fourth navbar example">
            <div className="container-fluid">
                <div className="image">
                    <img src={logo} alt="logo" /> {/* Self-closing img tag */}
                </div>

                <div className="navbar-collapse collapse m-2 right" id="navbarsExample04">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0 flex"> {/* class to className */}
                        <li className="nav-item">
                            <Link to={'/#'} className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/#services'} className="nav-link">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'#about'} className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'#contact'} className="nav-link">Contact</Link>
                        </li>

                        <li className="nav-item">
                            <Link to={'/login'} className="nav-link">Login</Link>
                        </li>

                        <li className="nav-item">
                            <Link to={'/register'} className="nav-link">Register</Link>
                        </li>
                    </ul>
                </div>

                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    )
}

export default NavBar