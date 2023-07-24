import React, { useState } from "react";
import Dashboard from "./Dashboard";
import "./Dash.css";
import axios from "axios";

const AddImageInGallery = () => {
  const [Data, setData] = useState({
    image: undefined,
  });
  const token = sessionStorage.getItem("token");
  const handelClick = async () => {
    console.log("Data", Data);

    const formData = new FormData();
    formData.append("image", Data.image);

    try {
      const confirm = window.confirm("Do you Want to Add image in Gallery");
      if (confirm) {
        const resp = await axios.post("http://localhost:4500/api/gallery/addImage", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData("");
        console.log("Image send Successfully", resp);
      }
    } catch (error) {
      console.log("Something Error in Axios-->", error);
    }
  };

  return (
    <>
      <Dashboard />
      <div className="main" style={{ marginTop: "80px" }}>
        <h1 className="text-center mt-5">
          <u> Add Image In Gallery</u>
        </h1>
        <div className="container-fluid mt-5">
          <div className="row d-flex flex-column align-item-center justify-content-center border border-primary border-2">
            <div className=" mt-3 w-100 mt-3  col-sm-12 col-md-6 col-md-6 ">
              <label className="fw-bold text-secondary">Image</label>
              <input
                type="file"
                onChange={(e) => setData({ ...Data, image: e.target.files[0] })}
                className="form-control border border-primary border-2 "
                name="image"
                required
              />
            </div>

            <div className="d-flex align-item-center justify-content-center">
              <div className="col-md-4 mt-5 col-lg-4 col-sm-8 d-flex justify-content-center mt-3">
                <button
                  onClick={handelClick}
                  className="btn btn-primary w-75 mb-4"
                >
                  Add Image In Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddImageInGallery;