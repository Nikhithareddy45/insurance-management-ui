import React from 'react'
import main from './Images/about.avif';
function Home() {
    return (
        <div id="Home" className="row flex-lg-row-reverse align-items-center g-15 py-5 main">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src={main} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
            </div>
            <div className="col-lg-6 p-4">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Welcome to Mass Mutual</h1>
              <p className="lead ">Mass Mutual is a mutual company. That means we don&apos;t have shareholders. Mass Mutual&apos;s primary objective is to provide financial security and peace of mind to individuals, families, and businesses by offering a wide range of insurance and financial products.</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" id="customer-btn">Customer</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4" id="agent-btn">Agent</button>
              </div>
            </div>
          </div>
      )
}

export default Home