import React from "react";
import "./footer.css";
import logo from "../assets/icon/insta/logo.png";
import vectr from "../assets/icon/insta/Vector.png";
import Twiter from "../assets/icon/insta/Twiter.png";
import Behanc from "../assets/icon/insta/Behance.png";
import insta from "../assets/icon/insta/instagram.png";
import vimeo from "../assets/icon/insta/vimeo.png";
import soat from "../assets/icon/icon/Vector (1).png";
import lak from "../assets/icon/icon/Vector (2).png";
import tel from "../assets/icon/icon/Vector.png";

function Footer() {
  return (
    <footer>
      <div className="box">
        <div className="footer">
          <img id="img" src={logo} alt="icon"></img>
          <h4 id="h4">
            Continually productize compelling dome packed with all Elated
            utilize website and creating supply next-generation
          </h4>
          <h2>Follow Us On:</h2>
          <div className="images">
            <img src={Twiter} alt="Twiter"></img>
            <img src={Behanc} alt="Behanc"></img>
            <img src={insta} alt="instagram"></img>
            <img src={vimeo} alt="vimeo"></img>
            <img src={vectr} alt="vimeo"></img>
          </div>
        </div>
        <div className="footer1">
          <h2>Tour Type</h2>
          <h4>
            Adventure Tours Grouo Tour Seasonal Tours Relaxation Toure
            <p> Family Friendly Tour</p>
          </h4>
        </div>
        <div className="tel">
          <h2>Contact info</h2>
          <div className="boxes">
            <img src={tel} alt="vimeo"></img>
            <h4>88130-589-745-6987   </h4>
          </div>
          <div className="boxes">
            <img src={soat} alt="vimeo"></img>
            <h4>Mon-Fri 09:00-18:00 </h4>
          </div>
          <div className="boxes">
            <img src={lak} alt="vimeo"></img>
            <h4>25/2 Vokte Street  </h4>
          </div>
        </div>
        <div className="kub">
          <h2>Gallery</h2>
          <div className="nima">
          <div className="cub"></div>
          <div className="cub"></div>
          <div className="cub"></div>
          <div className="cub"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
