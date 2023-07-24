import React, { useState } from "react";
import arrayValue from "./Data";
import { Link, useNavigate } from "react-router-dom";

const AllItems = () => {
  const [item, setItem] = useState(arrayValue);
  const navigate = useNavigate();

  const filterItem = (titleItem) => {
    const updateditem = arrayValue.filter((curElem) => {
      return curElem.title === titleItem;
    });
    setItem(updateditem);
  };

  return (
    <div>
      <div class="d-flex flex-wrap justify-content-evenly">
        {item?.map((item, index) => (
          <div className="d-flex flex-column" key={index}>
            <div
              onClick={() => {
                // console.log("hello", index);
                navigate(`/pagetwo/${index}`);
              }}
            >
              <img src={`${item.src}`} className="imagesizes" alt="hello" />
            </div>
            <a
              onClick={() => {
                // console.log("hello", index);
                navigate(`/pagetwo/${index}`);
              }}
              className="name text-center mt-1 mb-1 fs-4"
              href=""
            >
              {item.name}
            </a>
            <div className="d-flex justify-content-evenly mt-2">
              <h6
                className="bg-warning px-4 p-2 rounded-pill text-light"
                onClick={() => filterItem(item.title)}
                style={{ cursor: "pointer" }}
              >
                {item.title}
              </h6>
              <i className="ri-calendar-2-fill text-warning fs-5">
                <span className="icontext ms-2">{item.date}</span>
              </i>
            </div>
            <p className="para">{item.para}</p>
            <div className="d-flex justify-content-evenly mb-2">
              <i className="ri-hourglass-fill text-warning fs-5">
                <span className="icontext  ms-2">{item.show}</span>
              </i>
              <i className="ri-map-pin-line text-warning fs-5">
                <span className="icontext  ms-2">{item.place}</span>
              </i>

              <i className="ri-cash-line text-warning fs-5">
                <span className="icontext  ms-2">{item.price}</span>
              </i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllItems;
