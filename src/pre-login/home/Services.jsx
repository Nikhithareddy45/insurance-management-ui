import React from 'react'
import health from './Images/health.avif';
import life from './Images/life.png';
import car from './Images/car.png';
function Services() {
    return (

        <div className="album py-5 bg-body-tertiary" id="services">
            <div className="p-5">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 text-center m-2 p-3 ">Insurances Provided</h1>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-7">
                    <div className="col">
                        <div className="card shadow-sm">
                            <img src={health} className="bd-placeholder-img card-img-top" height="235px" width="100%" alt="Health Insurance" />
                            <div className="card-body text-center">
                                <h4>Health Insurance</h4>
                                <p className="card-text">A health insurance company provides financial protection by covering medical expenses such as doctor visits, hospital stays, surgeries, and prescription medications.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            <img src={life} className="bd-placeholder-img card-img-top" height="235px" width="100%" alt="Life Insurance" />
                            <div className="card-body text-center">
                                <h4>Life Insurance</h4>
                                <p className="card-text"> A life insurance company provides financial protection to beneficiaries in the event of the policyholder’s death. The main objective is to offer peace of mind by securing a financial safety net for the insured&apos;s family.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            <img src={car} className="bd-placeholder-img card-img-top" height="235px" width="100%" alt="Car Insurance" />
                            <div className="card-body text-center">
                                <h4>Car Insurance</h4>
                                <p className="card-text">A car insurance company provides financial protection to vehicle owners by covering damages caused by accidents, theft, or natural disasters. It offers various policies tailored to individual needs.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services