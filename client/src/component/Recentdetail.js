import React from "react";
import { useParams } from "react-router-dom";
import { recent } from "./Recentdata";
import "./Recentdetail.css";

const Recentdetail = () => {
  const { id } = useParams();
  const obj = recent[id];
  console.log(obj);
  return (
    <div className="recentmain d-flex justify-content-center">
      <div className="recents d-flex flex-column align-items-center ">
        <div className="recent1 d-flex flex-column align-items-center justify-content-center ">
          <div className="recent2">
            <img src={`${obj.img}`} alt="" />
          </div>
          <h1>{obj.title}</h1>
          <h4>{obj.desc}</h4>
          <p>{obj.para}</p>
        </div>
        <h1>Comment</h1>
        <div className="comment">
          <i class="ri-user-3-fill"></i>
          <div>
            <h6>Bari | June 11, 2017 at 8:30 am</h6>
            <h5>
              Holisticly pursue future-proof solutions whereas 24/365 supply
              chains. Intrinsicly leverage.
            </h5>
            <button>Reply</button>
          </div>
        </div>
        <div className="leave">
          <h1>Leave a comment</h1>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <div className="name">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Email" />
          </div>
          <div className="website ">
            <input type="text" placeholder="Your Website" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Comment"
            ></textarea>
          </div>
          <div className="check">
            <input type="checkbox" className="" />
            <p>
              Save my name, email, and website in this browser for the next time
              I comment.
            </p>
          </div>
          <div className="post">
          <button>POST COMMENT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recentdetail;
