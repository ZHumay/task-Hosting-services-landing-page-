import React from "react";
import "./sectionthird.css";
function SectionThird() {
  return (
    <div className="section-3">
      <div className="section-3-left">
        <img
          className="happyman"
          src={require("../../assets/images/Img2-about-section.png")}
          alt="img"
        ></img>
        <div className="storage">
          <div className="circle">
            <img
              className="database"
              src={require("../../assets/images/Vector (3).png")}
              alt="img"
            ></img>
          </div>
          <p className="st-text">200 GB+ Storage</p>
        </div>

        <div className="visitor">
          <div className="circle"></div>
          <p className="st-text">200 GB+ Storage</p>
        </div>
      </div>

      <div className="section-3-right">
        <div className="sec3-text">
            <p className="text-beta">ABOUT HOST BETA</p>
            <p className="text-digit">The Perfect Digital Connection</p>
            <p className="text-lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur adipiscing.</p>

            <div className="faster-1">
              <p className="process"> Faster Process</p>
              <p className="delivery">Faster Delivery</p>
            </div>
            <div className="faster-2">
                <p className="access">Faster Access</p>
                <p className="full"> 24/7 Full Support</p>
            </div>
            <button className="discover-btn">
                Discover More
            </button>
        </div>
      </div>
    </div>
  );
}

export default SectionThird;
