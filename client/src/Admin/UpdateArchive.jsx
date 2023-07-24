import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dashboard from "./Dashboard";

const UpdateArchive = () => {
  const param = useParams();
  const [postImages, setPostImages] = useState([]);

  const [image, setImage] = useState(undefined);
  const token = sessionStorage.getItem('token');

  const AddClickImage = (e) => {
    console.log("add Click");
    setPostImages([...postImages, image]);
  };

  const RemoveImage = (index) => {
    const filterImage = postImages.filter((_, id) => id !== index);
    setPostImages(filterImage);
  };

  const submitClick = async () => {
    try {
        const formData = new FormData();
        postImages.forEach((img)=> formData.append("images", img));
        console.log("formData", formData);
      const response = await axios.post(`http://localhost:4500/api/admin/addImages/${param.id}`, formData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
      });
      console.log("Data Update Successfully");
    } catch (error) {
      console.log("Something Problem in Axios and Url --->", error);
    }
  };

  useEffect(() => {
    console.log(postImages);
  }, [postImages]);

  return (
    <div>
      <Dashboard />
      <div className=" container-fluid ">
        <div>
          <h1 className="text-center">
            <u>Add Event Images in Archive</u>
          </h1>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-7 col-sm-12 col-md-12 d-flex">
            <input
              type="file"
              className="form-control"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <button className="btn btn-success p-0" onClick={AddClickImage}>
              Add Image
            </button>
          </div>
          {/* Hay */}
          {postImages.map((item, index) => (
            <div key={index} className="col-lg-7 col-sm-12 col-md-12  mt-4">
              <div className="d-flex justify-content-between border border-secondary border-3 p-2">
                <div>
                  <p className="mt-2 fw-bold text-secondary">{item.name}</p>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => RemoveImage(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          {/* Byy */}
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary mt-3" onClick={submitClick}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateArchive;
