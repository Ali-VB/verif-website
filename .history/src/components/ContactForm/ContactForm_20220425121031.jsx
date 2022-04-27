import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jpmktdv",
        "template_8adlaik",
        form.current,
        "zqMtp_uZtz7QsVqXh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="form">
        <div class="mb-3">
          <label for="" class="form-label">
            Email address *
          </label>
          <input
            type="email"
            class=" mb-4 form-control  bg-transparent border-bottom-0 border-end-0 border-start-0 
                        rounded-0 text-primary font-monospace text-white shadow-none "
            // id="exampleInputEmail1"
            name="email"
            // aria-describedby="emailHelp"
            // required
          ></input>
        </div>

        <div class="mb-3">
          <label for="" class="form-label">
            First name *
          </label>

          <input
            type="text"
            class=" mb-4 form-control bg-transparent border-bottom-0 border-end-0 border-start-0 
                        rounded-0 text-primary font-monospace text-white shadow-none"
            // aria-label="First name"
            name="firstName"
            // required
          ></input>
        </div>
        <div class="mb-3">
          <label for="" class="form-label">
            Last name *
          </label>

          <input
            type="text"
            class=" mb-4 form-control bg-transparent border-bottom-0 border-end-0 border-start-0 
                        rounded-0 text-primary font-monospace text-white shadow-none"
            // aria-label="Last name"
            name="lastName"
            // required
          ></input>
        </div>

        <div>
          <textarea
            class=" mb-5 form-control"
            placeholder="message(optional)"
            // id="floatingTextarea2"
            name="message"
          ></textarea>
        </div>
        <button
          type="submit"
          value="Send"
          class="btn  btn-outline-light btn-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
