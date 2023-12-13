import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <>
      <footer id="footer">
    
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-4 col-12">
                    <div className="footer_logo">
                        <a href="#">
                            <span>Host Beta</span>
                        </a>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nullam in nibh vehicula.</p>

                    <p>Social networks</p>
                </div>
                <div className="col-lg-2 col-sm-4 col-12">
                    <h3>Get In Touch</h3>
                    <ul>
                        <li><a href="#">Richardson, California 62639</a></li>
                        <li><a href="#">felicia.reid@example.com</a></li>
                        <li><a href="#">(405) 555-0128</a></li>
                        <li><a href="#">December 19, 2022</a></li>
                    </ul>
                </div>

                <div className="col-lg-2 col-sm-4 col-12">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Blog</a></li>

                    </ul>
                </div>

                <div className="col-lg-2 col-sm-4 col-12">
                    <h3>Support</h3>
                    <ul>
                        <li><a href="#">Help center</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Contact</a></li>

                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
