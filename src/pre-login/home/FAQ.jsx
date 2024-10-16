import React from 'react'

function FAQ() {
    return (


        <div className="my-5 p-5" id="faq">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 text-center m-2 p-3 ">Frequently Asked Questions</h1>
            <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is MassMutual?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            MassMutual is a mutual life insurance company that provides life insurance, retirement planning, and investment products to help individuals and businesses secure their financial future.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            How does a mutual company work?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            A mutual company is owned by its policyholders, not shareholders. This structure allows the company to focus on long-term benefits for its customers, often returning profits in the form of dividends.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            What products does MassMutual offer?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            MassMutual offers a variety of insurance and financial products, including life insurance, disability income insurance, long-term care insurance, annuities, retirement planning, and wealth management services.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            How can I contact MassMutual for more information?
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            You can contact MassMutual by visiting their official website, reaching out through their customer service helpline, or contacting a local MassMutual agent for personalized assistance.
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default FAQ