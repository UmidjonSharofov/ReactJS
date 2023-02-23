import React from "react";

function Header(props) {
  const { img, ctiy, img2, tyme, img_2, person, img_3, km, img_lak, joy, btn } =
    props.children;
  return (
    <div className="header2_in">
      <img className="img" src={img} alt="icon"></img>
      <div className="text">
        <h3>{ctiy}</h3>
        <div className="days">
          <div className="icon">
            <img src={img2} alt="icon"></img>
            <h6>{tyme}</h6>
          </div>
          <div className="icon">
            <img src={img_2} alt="icon"></img>
            <h6>{person}</h6>
          </div>{" "}
          <div className="icon">
            <img src={img_3} alt="icon"></img>
            <h6>{km}</h6>
          </div>
        </div>
        <div className="manzil">
            <div className="linc">
            <img src={img_lak} alt="icon"></img>
            <h6>{joy}</h6>
            </div>
            <div className="btn">
                <button>{btn}</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

