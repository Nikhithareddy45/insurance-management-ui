import React from 'react'
import about from './Images/about.avif';
function About() {
    return (
    
        <div className="album py-5 bg-body-tertiary" id="about">
            <div className="">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 text-center m-2 p-3 ">About us</h1>
          <div className="row flex-lg-row-reverse align-items-center g-15 py-5 main">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src={about} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
            </div>
            <div className="col-lg-6 p-4">
              <h5 className="display-8 fw-bold text-body-emphasis lh-1 mb-3">About MassMutual</h5>
              <p className="lead">Mass Mutual is a mutual company. That means we don&apos;t have shareholders.Mass Mutual&apos;s primary objective is to provide financial security and peace of mind to individuals, families, and businesses by offering a wide range of insurance and financial products. As a mutual company, it operates with a focus on benefiting policyholders, rather than shareholders, ensuring that the value created through its services is returned to the members through dividends and high-quality service.</p>
            </div>
          </div>
          </div>
      </div>
    
    
    
      )
}

export default About