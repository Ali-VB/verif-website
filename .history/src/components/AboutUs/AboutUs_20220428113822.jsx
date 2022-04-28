import React from "react";
import "./AboutUs.css";
import "react-medium-image-zoom/dist/styles.css";
import mediumZoom from 'medium-zoom'
import team1 from "../../Assets/imgs/team/team-1.jpg"
import team2 from "../../Assets/imgs/team/team-2.jpg"
import team3 from "../../Assets/imgs/team/team-3.jpg"
import team4 from "../../Assets/imgs/team/team-4.jpg"
import team5 from "../../Assets/imgs/team/team-5.jpg"

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
      <div class=" about-section">
        <div class=" contact-section-left"><div></div>
          <div>About Us</div> 
          <div className="contact-section-left-mainTxt mt-3">
         <div>  <span className="verif-span">Verifa.i.</span> is a Montreal-based
            startup committed to placing the power of technology on the side of
            honest, value-creating companies in their fight against looting
            cybercriminals.<br></br><span>
               Our Decision Support tool evaluates the risk
            associated with each email the user is currently reading and draws
            their attention to suspicious elements about the origin, content but
            also language thanks to a proprietary artificial intelligence model.
              </span></div>
          </div>
        </div>

        <div className=" photo-grid">
        <div class="photo1" ><ImageZoom src={team1}  zoom={zoom.current} color="#BADA55"/></div>
          <div class="photo2"><ImageZoom src={team2} zoom={zoom.current} color="#BADA55"/></div>
          <div class="photo3"><ImageZoom src={team3} zoom={zoom.current} color="#BADA55"/></div>
          <div class="photo4"><ImageZoom src={team4} zoom={zoom.current} color="#BADA55"/></div>
          <div class="photo5"><ImageZoom src={team5} zoom={zoom.current} color="#BADA55"/></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
