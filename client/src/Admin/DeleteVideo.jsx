import axios from "axios";
import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";

const DeleteVideo = () => {
  const [data, setData] = useState([{}]);
  const token = sessionStorage.getItem('token');    

  const FetchVideo = async () => {
    try {
      const response = await axios.get("http://localhost:4500/api/admin/getVideos");
      setData(response.data);
      console.log("My Video data -->", data);
    } catch (error) {
      console.log("Something Problem in Axios and Url --->", error);
    }
  };

  const DeleteClick = async (id) => {
    try {
      const confirm = window.confirm("Do you want to Delete this Video");
      if (confirm) {
        const response = await axios.delete(`http://localhost:4500/api/admin/deleteVideo/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log("Delete Successfully");
        FetchVideo();
      }
    } catch (error) {
      console.log("Something Problem in Asios and Url --->", error);
    }
  };

  useEffect(() => {
    FetchVideo();
  }, []);

  return (
    <div>
      <Dashboard/>
      <div className="container-fluid">
        <div className="row d-flex justify-content-evenly ">
          {/* Hello */}
          {data.map((item, index) => (
            <div className=" col-md-6 col-lg-4 col-sm-12 " key={index}>
              <div className="card mt-5 border border-3 border-secondary ">
                <div className="card-body">
                  <a href={item.video}>
                    <img
                      className="w-100"
                      src={
                        `http://localhost:4500/api/uploads/${item.thumbnail}`
                      }
                      style={{ height: "350px" }}
                    />
                  </a>
                </div>
                <div className="card-footer">
                  <div className="d-flex justify-content-evenly">
                    <button
                      className="btn btn-danger fw-bold"
                      onClick={() => DeleteClick(item._id)}
                    >
                      Delete Video
                    </button>
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

export default DeleteVideo;