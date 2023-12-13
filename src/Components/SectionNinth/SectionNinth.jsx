import React from "react";
import "./sectionninth.css";
import CheckIcon from '@mui/icons-material/Check';

function SectionNinth() {
  return (
    <div className="section-9">
      <div className="left-9">
        <div className="text-9">
          <p className="welcome-9"> GET STARTED</p>
          <p className="company-9"> Let's Start Here! New Space for World</p>
          <p className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            consectetur adipiscing commodo euismod condimentum nunc.
          </p>
          <div className="buttons">
            <button className="start">Get Started</button>
            <button className="plan">Hosting Plans</button>
          </div>
        </div>
      </div>
      <div className="right-9">
        <div className="card">
        <div className="check">
        <p className="bandwidth"> <CheckIcon style={{color:"#2A4AF4",transform:"translateY(3px)"}}/>  Unlimited Bandwidth</p>
        <p className="turbo">  <CheckIcon style={{color:"#2A4AF4",transform:"translateY(3px)"}}/>Super Turbo Power</p>
        <p className="full-support">  <CheckIcon style={{color:"#2A4AF4",transform:"translateY(3px)"}}/> 24/7 Full Support More Detail</p>

        </div>
        </div>
      
      </div>
    </div>
  );
}

export default SectionNinth;
