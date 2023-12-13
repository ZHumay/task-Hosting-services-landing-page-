import React from "react";
import "./sectioneigth.css";
import StarIcon from "@mui/icons-material/Star";
function SectionEigth() {
  return (
    <div className="section-8">
      <div className="text-8">
        <div className="text-8-left">
          <p className="testimonial-8">Testimonials</p>
          <p className="about-8">What Customers Say About Us</p>
        </div>

        <button className="view"> View more</button>
      </div>

      <div className="bottom">
        <div className="boxes-8">
          <div className="box-1-8">
            <div className="circle-8">
              <img
                className="img-8"
                src={require("../../assets/images/Vector (7).png")}
                alt="img"
              ></img>
            </div>
    
          </div>

          <div className="box-2-8">
            <div className="box-info">
              <div className="stars">
                <StarIcon
                  style={{
                    transform: "translateY(-20px)",
                    color: "#DF8600",
                    marginRight: "5px",
                  }}
                />
                <StarIcon
                  style={{
                    transform: "translateY(-20px)",
                    color: "#DF8600",
                    marginRight: "5px",
                  }}
                />
                <StarIcon
                  style={{
                    transform: "translateY(-20px)",
                    color: "#DF8600",
                    marginRight: "5px",
                  }}
                />
                <StarIcon
                  style={{
                    transform: "translateY(-20px)",
                    color: "#DF8600",
                    marginRight: "5px",
                  }}
                />
                <StarIcon
                  style={{
                    transform: "translateY(-20px)",
                    color: "#DF8600",
                    marginRight: "5px",
                  }}
                />
              </div>

              <p className="box-lorem-8">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Duis
                efficitur dui nec Lorem ipsum dolor sit amet, consec tetur
              </p>
            </div>

            <div className="ceo">
                <div className="circle-ceo">

                </div>
                <div className="ceotext">
                    <p className="name">Caleb Paul</p>
                    <p className="role">Company CEO</p>
                </div>
            </div>
          </div>

          <div className="box-2-8">
            <div className="box-info">
              <div className="stars">
                <StarIcon
                  style={{
                    transform: "translateY(-20px)",
                    color: "#DF8600",
                    marginRight: "5px",
                  }}
                />
                <StarIcon
                  style={{
                    transform: "translateY(-20px)",
                    color: "#DF8600",
                    marginRight: "5px",
                  }}
                />
                <StarIcon
                  style={{
                    transform: "translateY(-20px)",
                    color: "#DF8600",
                    marginRight: "5px",
                  }}
                />
                <StarIcon
                  style={{
                    transform: "translateY(-20px)",
                    color: "#DF8600",
                    marginRight: "5px",
                  }}
                />
                <StarIcon
                  style={{
                    transform: "translateY(-20px)",
                    color: "#DF8600",
                    marginRight: "5px",
                  }}
                />
              </div>

              <p className="box-lorem-8">
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Duis
                efficitur dui nec Lorem ipsum dolor sit amet, consec tetur
              </p>
            </div>

            <div className="ceo">
                <div className="circle-ceo">

                </div>
                <div className="ceotext">
                    <p className="name">Caleb Paul</p>
                    <p className="role">Company CEO</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionEigth;
