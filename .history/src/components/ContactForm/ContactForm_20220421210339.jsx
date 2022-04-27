import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div>
      <form className="form w-1">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control  bg-transparent border-bottom-0 border-end-0 border-start-0 
            rounded-0 text-primary font-monospace text-white shadow-none "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>

          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>

          <input
            type="password"
            class="form-control bg-transparent border-bottom-0 border-end-0 border-start-0 rounded-0 text-primary"
            id="exampleInputPassword1"
          ></input>
        </div>
        <div class="mb-3 form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
          ></input>
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
