import React from "react";
import ReactDOM from "react-dom";
import ContactForm from "../ContactForm/ContactForm";
import "./ContactUs.css";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  return (
    <div className="container">
      <Helmet>
        <title> Contact us </title>
        <meta
          name="description"
          content="If a phishing attack reaches their inbox,
                3.18% of employees
                will go as far as providing credentials. Try verifa.i. "
        />
      </Helmet>
      <div class=" contact-section">
       
        <div class=" contact-section-left">
          <div>Let’s get </div> <div>in touch!</div>
          <div>
            Whether you’re a company, MSP, distributor or IT service provider,
            we’d love to hear from you.
          </div>
        </div>
        <div class="contact-section-right">
          <ContactForm />
        </div>
       
      </div>
    </div>
  );
};

export default ContactUs;
