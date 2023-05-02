import React from 'react'
import './styles/Footer.css'

export default function Footer() {
  return (
        <>
  {/* Footer */}
  <footer className="text-center text-lg-start text-light">
    {/* Section: Social media */}
    
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className="">
      <div className="container text-center text-md-start">
        {/* Grid row */}
        <div className="row mt-5">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-5">
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3" />
              <img height="35px" src="https://app.pepcorns.com/assets/img/logo.png" alt="" />
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-5">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
            <p>
              <a href="#!" className="text-reset">
                Angular
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                React
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Vue
              </a>
            </p>
            <p style={{marginTop: "150px"}}>
              <a href="#!" className="text-reset">
                Laravel
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-5">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a href="#!" className="text-reset">
                Pricing
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Settings
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Orders
              </a>
            </p>
            <p style={{marginTop: "150px"}}>
              <a href="#!" className="text-reset">
                Help
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-5">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="fas fa-home me-3" /> New York, NY 10012, US
            </p>
            <p>
              <i className="fas fa-envelope me-3" />
              info@example.com
            </p>
            <p>
              <i className="fas fa-phone me-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print me-3" /> + 01 234 567 89
            </p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    <div
      className="p-4"
      style={{textAlign: "left", fontSize: "14px", color: "grey"}}
    >
      <p>
      www.pepcorns.com (“Platform”) is a website owned and operated by Pepcorns Technologies Private Limited (“Pepcorns”), which is neither a registered stock exchange, an investment advisor nor a funding portal and is not registered with the Securities Exchange Board of India (“SEBI”). Nothing contained on this Platform shall be construed as an authorization by the SEBI to solicit investments nor should the Platform be construed as a SEBI authorized crowdfunding platform or a stock exchange, or their equivalent. The securities offered by any company registered on Platform are not traded on any stock exchange recognised by SEBI. Pepcorns does not allow any secondary market trading of securities on the Platform. By accessing this Platform and any pages thereof, you agree to be bound by the Terms of Use and Privacy Policy . Investing in start-ups and early-stage businesses involves risks, including illiquidity, lack of dividends, loss of investment and dilution, and it should be done only as part of a diversified portfolio. Pepcorns is targeted exclusively at investors who are sufficiently sophisticated to understand these risks and make their own investment decisions. Please read our RISK POLICY .
      </p>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</>

  )
}
