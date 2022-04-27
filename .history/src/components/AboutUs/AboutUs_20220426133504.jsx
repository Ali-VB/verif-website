import React from "react";
import "./AboutUs.css";
import "react-medium-image-zoom/dist/styles.css";
import mediumZoom from 'medium-zoom'
import team1 from "../../Assets/imgs/team/team-1.jpg"
import team2 from "../../Assets/imgs/team/team-2.jpg"
import team3 from "../../Assets/imgs/team/team-1.jpg"
import team1 from "../../Assets/imgs/team/team-1.jpg"
import team1 from "../../Assets/imgs/team/team-1.jpg"

function ImageZoom({ zoom, src, alt, background }) {
  const zoomRef = React.useRef(zoom.clone({ background }))
 
  function attachZoom(image) {
    zoomRef.current.attach(image)
  }
 
  return <img src={src} alt={alt} ref={attachZoom} />
}

const AboutUs = () => {
 const zoom = React.useRef(mediumZoom({ background: '#000', margin: 48 }))
  return (
    <div className="container">
      <div class="row about-section">
        <div class="col-8 contact-section-left">
          <div>About Us</div> <div></div>
          <div className="mt-3">
            <span className="fw-bold verif-span"> Verifa.i.</span> is a Montreal-based
            startup committed to placing the power of technology on the side of
            honest, value-creating companies in their fight against looting
            cybercriminals.<br></br> Our Decision Support tool evaluates the risk
            associated with each email the user is currently reading and draws
            their attention to suspicious elements about the origin, content but
            also language thanks to a proprietary artificial intelligence model.
          </div>
        </div>

        <div className="col-4 photo-grid">
        <div class="photo1" ><ImageZoom src={team1} zoom={zoom.current} color="#BADA55"/></div>
          <div class="photo2"></div>
          <div class="photo3"></div>
          <div class="photo4"></div>
          <div class="photo5"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
