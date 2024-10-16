import React, { useEffect } from 'react'
import About from './About'
import FAQ from './FAQ'
import Footer from './Footer'
import Home from './Home'
import NavBar from './NavBar'
import Services from './Services'
import './home.css';
import { useLocation } from 'react-router-dom'
function HomeDashboard() {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location.hash]);
    return (
        <div>
            <NavBar />
            <Home />
            <Services />
            <About />
            <FAQ />
            <Footer />
        </div>
    )
}

export default HomeDashboard