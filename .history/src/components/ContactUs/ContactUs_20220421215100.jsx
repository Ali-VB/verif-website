import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="container">
      <div class="row contact-section">
        <div class="col-6 contact-section-left">
          <h2 class="contact-section-text">Let’s get </h2> <h2>in touch!</h2>
        </div>
        <div class="col-6 ">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
