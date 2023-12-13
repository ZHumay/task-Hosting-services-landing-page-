import React from "react";
import "./sectiontwo.css";
function SectionTwo() {
  return (
    <div className="section-2">
      <div className="sec-2-text">Trusted by 2500+ Company Worldwide</div>
      <div className="companyList">
        <img
          className="company-img"
          src={require("../../assets/images/client_9-1536x768.png")}
          alt="img"
        ></img>

        <img
          className="company-img"
          src={require("../../assets/images/client_4-1536x768.png")}
          alt="img"
        ></img>

        <img
          className="company-img"
          src={require("../../assets/images/client_2-1536x768.png")}
          alt="img"
        ></img>

        <img
          className="company-img"
          src={require("../../assets/images/client_5-1536x768.png")}
          alt="img"
        ></img>

        <img
          className="company-img"
          src={require("../../assets/images/client_6-1536x768.png")}
          alt="img"
        ></img>
      </div>
    </div>
  );
}

export default SectionTwo;
