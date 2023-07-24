import axios from "axios";
import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
//import img from "./../../public/images/image-1.jpg";

const DeleteImagesFromGallery = () => {
  const [data, setData] = useState([{}]);
  const token = sessionStorage.getItem('token');

  const Fetch = async () => {
    try {
      const response = await axios.get(`http://localhost:4500/api/gallery/getImages`);
      setData(response.data);
      console.log("this is my data -->", data);
    } catch (error) {
      console.log("Something Problem in Axios and Url --->", error);
    }
  };

  const DeleteClick = async (id) => {
    try {
      const confirm = window.confirm(`Do you Want to Delete this Image ?`);
      if (confirm) {
        const response = await axios.delete(`http://localhost:4500/api/gallery/deleteImage/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response.data);
        console.log("Delete Successfully");
        Fetch();
      }
    } catch (error) {
      console.log("Something Error in Axios and Url -->", error);
    }
  };

  useEffect(() => {
    Fetch();
  }, []);
  return (
    <div>
        <Dashboard/>
      <div className="container-fluid">
        <div className="row d-flex justify-content-evenly ">
          {/* Hello */}
          {data.map((item, index) => (
            <div key={index} className=" col-md-6 col-lg-4 col-sm-12 ">
              <div className="card mt-5 border border-3 border-secondary ">
                <div className="card-body">
                  <img
                    className="w-100"
                    src={
                      `http://localhost:4500/api/uploads/${item.image}`
                    }
                    style={{ height: "350px" }}
                  />
                </div>
                <div className="card-footer">
                  <div className="d-flex justify-content-center">
                    <button
                      onClick={(e) => DeleteClick(item._id)}
                      className="btn btn-danger"
                    >
                      Delete
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

export default DeleteImagesFromGallery;