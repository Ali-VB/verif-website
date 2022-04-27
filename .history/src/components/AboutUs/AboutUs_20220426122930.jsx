import React from "react";
import "./AboutUs.css";
import team from "../../Assets/imgs/team/team-1.jpj"

const AboutUs = () => {
  return (
    <div className="container">
      <div class="row about-section">
        <div class="col-8 contact-section-left">
          <div>About Us</div> <div></div>
          <div className="mt-3">
            <span className="fw-bold"> Verifa.i.</span> is a Montreal-based
            startup committed to placing the power of technology on the side of
            honest, value-creating companies in their fight against looting
            cybercriminals.<br></br> Our Decision Support tool evaluates the risk
            associated with each email the user is currently reading and draws
            their attention to suspicious elements about the origin, content but
            also language thanks to a proprietary artificial intelligence model.
          </div>
        </div>

        <div className="col-4 photo-grid">
          <div class="photo1"><img src={team} alt="" /></div>
          <div class="photo2"><img src="" alt="" /></div>
          <div class="photo3"><img src="" alt="" /></div>
          <div class="photo4"><img src="" alt="" /></div>
          <div class="photo5"><img src="" alt="" /></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
