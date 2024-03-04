import React from 'react';
import ICJS from "../../src/assets/images/NIC_Preview-1.png";

const Footer = () => {
  return (
    <footer className="text-light p-5 mt-auto" style={{ backgroundColor: "#248888", color: "#fff", marginTop: '10px' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Contact Details</h5>
            <p>National Informatics Centre</p>
            <p>A-Block, CGO Complex, Lodhi Road</p>
            <p>New Delhi - 110 003 India</p>
          </div>
          <div className="col-md-6 text-center"> {/* Moved this line to fix the structure */}
            <p>
              Website Designed & Maintained By National Informatics Center, Haryana
            </p>
            <img src={ICJS} alt="" />
          </div>
          {/* <div className="col-md-3 text-right">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="btn btn-light">
              Scroll to Top
            </button>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
