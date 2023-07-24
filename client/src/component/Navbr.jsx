import React, { useRef, useState } from "react";
import "./Navbr.css";
import "remixicon/fonts/remixicon.css";
import gsap from "gsap";
import { Link } from "react-router-dom";
const Navbr = () => {
  const [flag, setFlag] = useState(1);
  const first = useRef(null);
  const rightNAV = (e) => {
    e.preventDefault();
    if (flag === 1) {
      gsap.to(first.current, {
        left: "-1%",
        duration: 1,
      });
      setFlag(0);
    } else {
      gsap.to(first.current, {
        left: "100%",
        duration: 1,
      });

      setFlag(1);
    }
  };

  return (
    <>
      {/* <div className='rightNav' ref={first}></div> */}
      <div id="nav">
        <div className="navbr">
          <h2>LOGO</h2>
          <div className="navp1">
            <a href="/">Tour</a>
            <a href="/">Albums</a>
            <a href="/">Gallary</a>
            <Link to="/Event">Event</Link>
            <Link to="/archive">Archive</Link>
            <a href="/">Videos</a>
            <a href="/">
              <i className="ri-share-line"></i>
            </a>
            <a href="/">
              <i className="ri-search-2-line"></i>
            </a>
            <a href="/" id="rnavi">
              <i onClick={rightNAV} className="ri-menu-4-line"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbr;
