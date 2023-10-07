import React from "react";
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Kuwar Singh Society.</p>
              <p>Bokaro Steel City, Jharkhand,India.</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              7898384179
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              rohitkumarok202@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About ME</h4>
          <p>
            This Me Rohit Kumar . I am Full Stack Developer. I Enjoying To Make
            New Project And Design Challenges.
            <br/>
             I take pride in being a quick learner, always eager to stay on
            the cutting edge of technology
          </p>
          <div className="Social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />

            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />

           
            <Link to="https://www.linkedin.com/in/rohit-kumar-a16605210/" >
               <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
