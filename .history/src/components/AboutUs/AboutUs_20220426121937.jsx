import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="container">
      <div class="row about-section">
        <div class="col-8 contact-section-left">
          <div>About Us</div> <div>More ...</div>
          <div className="mt-3">
            <span className="fw-bold"> Verifa.i.</span> is a Montreal-based
            startup committed to placing the power of technology on the side of
            honest, value-creating companies in their fight against looting
            cybercriminals. Our Decision Support tool evaluates the risk
            associated with each email the user is currently reading and draws
            their attention to suspicious elements about the origin, content but
            also language thanks to a proprietary artificial intelligence model.
          </div>
        </div>

        <div className="col-4">

        <div class="container">
  <div class="photo1">1</div>
  <div class="photo2">2</div>
  <div class="photo3">3</div>
  <div class="photo41">4</div>
  <div class="photo5">5</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
