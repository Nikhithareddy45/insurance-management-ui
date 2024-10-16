import React from 'react'

function Footer() {
    return (
   
        <div className="footer-bg bg-primary p-5" id="contact">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#Home" className="nav-link px-2 text-white"><p>Home</p></a></li>
            <li className="nav-item"><a href="#services" className="nav-link px-2 text-white"><p>Services</p></a></li>
            <li className="nav-item"><a href="#about" className="nav-link px-2 text-white"><p>About</p></a></li>            
            <li className="nav-item"><a href="#faq" className="nav-link px-2 text-white"><p>FAQs</p></a></li>
            <li className="nav-item"><a href="#contact" className="nav-link px-2 text-white"><p>Contact</p></a></li> 
          </ul>
          <p className="text-center text-white">© 2024 Company, Inc</p>
        </footer>
      </div>
    
      
      )
}

export default Footer