import React from "react";
import "./sectionfourth.css";
function SectionFourth() {
  return (
    <div className="section-4">
      <div className="head">
        <p className="head-text">OUR SERVICES</p>
        <p className="web"> Discover Luxury in Web Hosting</p>
      </div>

      <div className="bottom">
        <div className="boxes">
          <div className="box-1">
            <div className="box-info">
            <div className="box-circle">
              <img
                className="w"
                src={require("../../assets/images/Group.png")}
                alt="img"
              ></img>
              </div>
              <h4> Wordpress Hosting</h4>
              <p className="box-lorem">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Duis efficitur dui nec.
              </p>
            </div>
            
          </div>

          <div className="box-2">
          <div className="box-info">
            <div className="box-circle">
              <img
                className="w"
                src={require("../../assets/images/Vector (4).png")}
                alt="img"
              ></img>
              </div>
              <h4> Cloud Hosting</h4>
              <p className="box-lorem">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Duis efficitur dui nec.
              </p>
            </div>
          </div>

          <div className="box-3">
          <div className="box-info">
            <div className="box-circle">
              <img
                className="w"
                src={require("../../assets/images/Group (1).png")}
                alt="img"
              ></img>
              </div>
              <h4> Website Hosting</h4>
              <p className="box-lorem">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Duis efficitur dui nec.
              </p>
            </div>
          </div>
          <div className="box-4">
          <div className="box-info">
            <div className="box-circle">
              <img
                className="w"
                src={require("../../assets/images/Group (2).png")}
                alt="img"
              ></img>
              </div>
              <h4> Free Domain</h4>
              <p className="box-lorem">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Duis efficitur dui nec.
              </p>
            </div>
          </div>
          <div className="box-5">
          <div className="box-info">
            <div className="box-circle">
              <img
                className="w"
                src={require("../../assets/images/Vector (1).png")}
                alt="img"
              ></img>
              </div>
              <h4> SSL Service</h4>
              <p className="box-lorem">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Duis efficitur dui nec.
              </p>
            </div>
          </div>
          <div className="box-6">
          <div className="box-info">
            <div className="box-circle">
              <img
                className="w"
                src={require("../../assets/images/Vector (3).png")}
                alt="img"
              ></img>
              </div>
              <h4> Cloud V</h4>
              <p className="box-lorem">
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Duis efficitur dui nec.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFourth;
