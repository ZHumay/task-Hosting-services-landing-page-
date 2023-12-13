import React from "react";
import "./sectionone.css";
function SectionOne() {
  return (
    <div className="section-1">
      <div className="left">
        <div className="text">
          <p className="welcome"> WELCOME TO HOST BETA</p>
          <p className="company"> Smart Company With Perfect Web Space</p>
          <p className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            consectetur adipiscing commodo euismod condimentum nunc.
          </p>
          <div className="buttons">
            <button className="start">Get Started</button>
            <button className="plan">Hosting Plans</button>
          </div>
          <div className="numbers">
            <div className="review">
              <p className="plus">+</p>
              <p className="number"> 800</p>
              <p className="review-text"> Positive Reviews</p>
            </div>
            <div className="hosting">
              <p className="plus">+</p>
              <p className="number"> 550</p>
              <p className="review-text"> Active Hosting</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="man"
          src={require("../../assets/images/Image.png")}
          alt="man"
        ></img>
        <div className="info">
          <div className="server">
            <div className="vector">
              <img
                className="img"
                src={require("../../assets/images/Vector.png")}
                alt="img"
              ></img>
            </div>
            <div className="server-right">
              <p style={{fontWeight:"700"}}>Powerfull Server</p>
              <p style={{fontWeight:"500",marginTop:"-9px"}}> Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>

          <div className="premium">
            <div className="ssl">
              <div className="vector">
                <img
                  className="img"
                  src={require("../../assets/images/Vector (1).png")}
                  alt="img"
                ></img>
              </div>
              <div className="server-right">
                <p style={{fontWeight:"700"}}>Premium SSL</p>
                <p style={{fontWeight:"500"}}> Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
            </div>

            <div className="support">
              <div className="vector">
                <img
                  className="img"
                  src={require("../../assets/images/Vector (2).png")}
                  alt="img"
                ></img>
              </div>

              <div className="server-right">
                <p style={{fontWeight:"700"}}>24/7 Support</p>
                <p style={{fontWeight:"500"}}> Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
