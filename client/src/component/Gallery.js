import React, { useEffect, useState } from "react";
import "./Gallery.css";
import axios from "axios";

const Gallery = () => {
  const [data, setData] = useState([{}]);

  const FetchVideo = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4500/api/gallery/getImages"
      );
      setData(response.data);
      console.log("Data Fetch Succesfully", data);
    } catch (error) {
      console.log("Something Error in Axios And Url -->", error);
    }
  };

  useEffect(() => {
    FetchVideo();
  }, []);

  return (
    <div>
      <section className="section1">
        <div className="txt">
          <h2>GALLERY 3 COLUMN</h2>
        </div>
        <div className="gallery">
          <div className="">
            <div className="row d-flex justify-content-evenly">
              {data.map((item, index) => (
                <div className="col-sm-12 col-md-6 col-lg-4 mt-3">
                  <div className="card border " key={index}>
                    <img
                      src={`http://localhost:4500/api/uploads/${item.image}`}
                      alt={item.image}
                      style={{ height: "300px" }}
                    />
                    <div id="ovrlay">
                      <i className="ri-search-line"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
