import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroImg2 from "./HeroImg2";

const Skills = () => {
  return (
    <div className>
      <Navbar />
      <HeroImg2
        heading="SKILLS"
        
        text=" JAVA SCRIPT, HTML, CSS, BOOTSTRAP, REACT.JS, MONGODB, MYSQL, NODE.JS, EXPRESS.JS, GITHUB, NPM, YARN"
      />
      <Footer />
      <div>
        <img
          className="sk-logo"
          src="https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Logo.png" alt=""
        ></img>
      </div>
      <div>
        <img
          className="sk-logo2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt =""
        ></img>
        <img
          className="sk-logo3"
          src="https://img.freepik.com/free-icon/css_318-698167.jpg" alt=""
        ></img>
        <img className="sk-logo4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"alt="">
        </img>
        <img className="sk-logo5" src="https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png" alt="">
        </img>
        <img className="sk-logo6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZYtHv2OLXmthRPbkmENZRXuqBVDwlsrZ1A&usqp=CAU" alt="">
        </img>
        <img className="sk-logo7" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPuafojKg8Lfk9fZ4nY0JtyQtsaAjR9hEcPQ&usqp=CAU" alt="">
        </img>
        <img className="sk-logo8" src="https://res.cloudinary.com/practicaldev/image/fetch/s--Lvl1ZNKy--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1ph7yc1i1vqqgwpxegw5.png" alt="" >
        </img>
        <img className="sk-logo9" src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" alt="">
        </img>
        <img className="sk-logo10" src="https://miro.medium.com/v2/resize:fit:1125/1*wotzQboYWAfaj-7bvGNIkQ.png" alt=""></img>
        <img className="sk-logo11" src="https://cdn.buttercms.com/NFhF3dWBTf5wPnfTsdjR" alt=""></img>
        <img className="sk-logo12" src="https://miro.medium.com/v2/resize:fit:1200/1*BCPTI5sT2C9JH76__X2WUg.png" alt=""></img>
      </div>
    </div>
  );
};

export default Skills;
