import React from "react";
import ReactDOM from "react-dom";
import ContactForm from "../ContactForm/ContactForm";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="container">
      <div class="row contact-section">
        {/* <div className="col-lg-1 col-md-0"></div> */}
        <div class="col-lg-5 col-md-12 contact-section-left">
          <div>Let’s getddddd </div> <div>in touch!</div>
          <div>
            Whether you’re a company, MSP, distributor or IT service provider,
            we’d love to hear from you.
          </div>
        </div>
        <div class="col-lg-5 col-md-12">
          <ContactForm />
        </div>
        {/* <div className="col-lg-1 col-md-0"></div> */}
      </div>
    </div>
  );
};

export default ContactUs;
