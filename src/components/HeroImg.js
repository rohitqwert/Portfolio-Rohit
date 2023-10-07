import React from "react";
import { Link } from "react-router-dom"



const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src="https://i.pinimg.com/736x/7e/c6/65/7ec665db77ec459569d82ef4e1df0606.jpg"alt="IntroImg"></img>
      </div>
      
      <div className="content">
        <img  className="into-im"  src="https://lh3.googleusercontent.com/a/ACg8ocKeZeKdkVy9RaiKUv24zDupIoCp_CHXiTs7_kYVvaJ4Yp4vd7XDepoEZOPEuywNZafd5xOYgfblSjlmTfyTJ2S_8-A=s360-c-no"alt="" ></img>
        <h2>Hi,I'M Rohit Kumar</h2>
        <h1>MERN Stack Web Developer</h1>
        <div>
          <Link to="/Project" className="btn">
            Projects
          </Link>
          <Link to="/Contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
