import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="container">
      <div class="row contact-section">
        <div class="col-6 contact-section-left">
          <p >Let’s get </p> <span>in touch!</span>
        </div>
        <div class="col-6 ">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
