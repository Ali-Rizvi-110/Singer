import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div id="main">
        <div className="footercenter">
          <div className="footerp1">
            <a href="/" className="flogo">
              <i className="ri-twitter-fill"></i>
            </a>
            <a href="/" className="flogo">
              <i className="ri-instagram-fill"></i>
            </a>
            <a href="/" className="flogo">
              <i className="ri-dribbble-line"></i>
            </a>
            <a href="/" className="flogo">
              <i className="ri-pinterest-fill"></i>
            </a>
          </div>
          <img
            style={{ width: "6vw", height: "17vh" }}
            src="https://wp.nkdev.info/khaki/demo-band/wp-content/uploads/sites/7/2017/05/logo-31.png"
            alt=""
          />
          <div className="footerp3">
            <h3>nK © 2017. All rights reserved</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
