import React from 'react'
import "./sectionfifth.css"
import CheckIcon from '@mui/icons-material/Check';

function SectionFifth() {
  return (
    <div className='section-5'>
        <div className='section-5-left'>
            <div className='sec-5-boxes'>
                <div className='sec5-box1'>
                    <div className='sec-5-circle'>
                    <img
                className="w"
                src={require("../../assets/images/Group.png")}
                alt="img"
              ></img>
                    </div>
                    <p className='wordpress'>Wordpress</p>
                </div>

                <div className='sec5-box1'>
                    <div className='sec-5-circle'>
                    <img
                className="w"
                src={require("../../assets/images/Group (3).png")}
                alt="img"
              ></img>
                    </div>
                    <p className='wordpress'>Github</p>
                </div>

                <div className='sec5-box1'>
                    <div className='sec-5-circle'>
                    <img
                className="w"
                src={require("../../assets/images/Vector (5).png")}
                alt="img"
              ></img>
                    </div>
                    <p className='wordpress'>Laravel</p>
                </div>

                <div className='sec5-box1'>
                    <div className='sec-5-circle'>
                    <img
                className="w"
                src={require("../../assets/images/Vector (6).png")}
                alt="img"
              ></img>
                    </div>
                    <p className='wordpress'>Elementor</p>
                </div>
            </div>
        </div>

        <div className='section-5-right'>
        <div className="sec5-text">
            <p className="text-beta">OUR CAPABILITIES</p>
            <p className="text-skyline">From Skyline to the Shoreline,
We Are There</p>
            <p className="text-lorem-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur adipiscing Quisque et imperdiet ipsum. Nunc molestie nunc ac augue sodales luctus..</p>

            <div className="unlimited">
              <p className="bandwidth"> <CheckIcon style={{color:"#2A4AF4",transform:"translateY(3px)"}}/>  Unlimited Bandwidth</p>
             
              <p className="ste">  <CheckIcon style={{color:"#2A4AF4",transform:"translateY(3px)"}}/>Unlimited Ste</p>
            </div>
            <div className="super">
                <p className="turbo">  <CheckIcon style={{color:"#2A4AF4",transform:"translateY(3px)"}}/>Super Turbo Power</p>
                <p className="full-support">  <CheckIcon style={{color:"#2A4AF4",transform:"translateY(3px)"}}/> 24/7 Full Support More Detail</p>
            </div>
            <button className="detail-btn">
                More detail
            </button>
        </div>
        </div>
      
    </div>
  )
}

export default SectionFifth
