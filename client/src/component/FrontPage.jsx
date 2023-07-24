import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import arrayValue from "./Data";
import axios from "axios";

const FrontPage = () => {
  const [item, setItem] = useState(arrayValue);
  const navigate = useNavigate();
  const [show, setShow] = useState(12);

  const filterItem = async (titleItem) => {
    // const updateditem = arrayValue.filter((curElem) => {
    //   return curElem.title === titleItem;
    // });
    try {
      const response = await axios.get(
        `http://localhost:4500/api/admin/getEventsByCat/${titleItem}`
      );
      console.log(response.data);
      setItem(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [data, setData] = useState([{}]);
  const fetch = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4500/api/admin/showEvents"
      );
      setData(response.data);
      setItem(response.data);
      console.log("hello-->", response.data);
    } catch (error) {
      console.log("something error in Axios-->", error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <div className=" ">
        <img src="street.avif" alt="" className="street" />
      </div>
      <div className=" mb-5">
        <div className="container d-flex flex-wrap justify-content-center ">
          <h6
            className="  px-4 p-2  rounded-pill"
            onClick={() => filterItem("ALL")}
          >
            ALL
          </h6>
          <h6
            className="ms-2  px-4 p-2  rounded-pill"
            onClick={() => filterItem("TRAVEL")}
          >
            TRAVEL
          </h6>
          <h6
            className="ms-2 px-4 p-2  rounded-pill"
            onClick={() => filterItem("BUSINESS")}
          >
            BUSINESS
          </h6>
          <h6
            className="ms-2  px-4 p-2  rounded-pill"
            onClick={() => filterItem("EDUCATION")}
          >
            EDUCATION
          </h6>
          <h6
            className="ms-2  px-4 p-2  rounded-pill"
            onClick={() => filterItem("FESTIVAL")}
          >
            FESTIVAL
          </h6>
          <h6
            className="ms-2  px-4 p-2  rounded-pill"
            onClick={() => filterItem("FOOD")}
          >
            FOOD
          </h6>
          <h6
            className="ms-2  px-4 p-2  rounded-pill"
            onClick={() => filterItem("TECHNOLOGY")}
          >
            TECHNOLOGY
          </h6>
          <h6
            className="ms-2  px-4 p-2  rounded-pill"
            onClick={() => filterItem("SPORTS")}
          >
            SPORTS
          </h6>

          <h6
            className="ms-2  px-4 p-2  rounded-pill"
            onClick={() => filterItem("ART")}
          >
            ART
          </h6>
        </div>
      </div>
      <div>
        <div className="container-fluid">
          <div className="row d-flex justify-content-evenly ">
            {/* Hello */}
            {item?.slice(0, show).map((item, index) => (
              <div key={index} className=" col-md-6 col-lg-4 col-sm-12">
                <div className="card mt-5 border border-3 border-secondary" onClick={()=>navigate(`/ImageEvent/${item._id}`)}>
                  <div className="card-body">
                    <img
                      className="w-100"
                      src={`http://localhost:4500/api/uploads/${item.image}`}
                      style={{ height: "350px" }}
                    />
                  </div>
                  <div className="card-footer">
                    <h2 className="text-center">{item.name}</h2>
                    <div className="d-flex justify-content-evenly">
                      <button className="btn btn-warning fw-bold">
                        {item.category}
                      </button>
                      <div className="fw-bold">
                        {" "}
                        <i className="bi bi-calendar2-date">
                          {" "}
                          {item.startDate}{" "}
                        </i>
                      </div>
                    </div>
                    <p className="text-center mt-3">
                      {item.description}
                    </p>
                    <div className="d-flex justify-content-evenly fw-bold">
                      <div>
                        {" "}
                        <i className="bi bi-eye "> </i>
                        {item.status}
                      </div>
                      <div>
                        {" "}
                        <i className="bi bi-geo-alt"> </i>
                        {item.location}
                      </div>
                      <div>
                        {" "}
                        <i className="bi bi-cash-coin"> </i>${item.price}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Byy */}
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        {/* <Link to="/AllEvent"> */}
        {show === 12 && (
          <button
            onClick={() => setShow(1000)}
            className="bg-warning px-5 p-2 rounded-pill text-light mb-5 mt-3"
          >
            All Items
          </button>
        )}
        {/* </Link> */}
      </div>
    </div>
  );
};

export default FrontPage;
