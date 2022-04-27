import React from "react";
import ContactForm from "../ContactForm/ContactForm";

const ContactUs = () => {
  return (
    <div className="container">
      <div class="row contact-section">
        <div class="col-6 text-danger">Column</div>
        <div class="col-6 ">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
