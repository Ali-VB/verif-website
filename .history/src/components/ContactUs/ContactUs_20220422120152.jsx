import React from "react";
import ReactDOM from "react-dom";
import ContactForm from "../ContactForm/ContactForm";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="container">
      <div class="row contact-section">
        <div className="col-1"></div>
        <div class="col-6 contact-section-left">
          <div>Let’s get </div> <div>in touch!</div>
          <div>
            Whether you’re a company, MSP, distributor or IT service provider,
            we’d love to hear from you.
          </div>
        </div>
        <div class="col-6 ">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
