import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import img from "./../../public/images/image-1.jpg";

const Card = () => {
  const [data, setData] = useState([{}]);

  const navigate = useNavigate();
  const Fetch = async () => {
    try {
      const response = await axios.get("http://localhost:4500/api/admin/getArchive");
      setData(response.data);
      console.log(response.data);
      console.log("this is my data -->", data);
    } catch (error) {
      console.log("Something Problem in Axios and Url --->", error);
    }
  };

  useEffect(() => {
    Fetch();
  }, []);
  return (
    <div>
      <div className="container-fluid">
          <div className="row d-flex justify-content-evenly ">
            {/* Hello */}
            {data?.map((item, index) => (
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
  );
};

export default Card;