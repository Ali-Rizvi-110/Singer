  import React, { useEffect, useState } from "react";
  import Dashboard from "./Dashboard.jsx";
  import axios from "axios";
  const AddEvent = () => {
    const [data, setData] = useState({
      image: "",
      name: "",
      startDate: "",
      endDate: "",
      price: "",
      location: "",
      venue: "",
      status: "",
      category: "ALL",
      organizer: "",
      phone: "",
      email: "",
      remainingTickets: "",
      address: "",
      description: "",
      fullDescription: "",
      postImages: [],
    });

    const [image, setImage] = useState(undefined);
    const [message, setMessage] = useState("");

    const AddClickImage = () => {
      setData({ ...data, postImages: [...data.postImages, image] });
    };

    const removeImage = (index) => {
      setData((prevState) => {
        const updatedPostImages = prevState.postImages.filter(
          (_, i) => i !== index
        );
        return { ...prevState, postImages: updatedPostImages };
      });
    };

    useEffect(() => {
      console.log(data);
    }, [data]);

    console.log(data);

    const token = sessionStorage.getItem("token");

    const handelClick = async () => {
      const formData = new FormData();

      formData.append("image", data.image);
      formData.append("name", data.name);
      formData.append("startDate", data.startDate);
      formData.append("endDate", data.endDate);
      formData.append("price", data.price);
      formData.append("location", data.location);
      formData.append("venue", data.venue);
      formData.append("status", data.status);
      formData.append("category", data.category);
      formData.append("organizer", data.organizer);
      formData.append("phone", data.phone);
      formData.append("email", data.email);
      formData.append("remainingTickets", data.remainingTickets);
      formData.append("address", data.address);
      formData.append("description", data.description);
      formData.append("fullDescription", data.fullDescription);

      data.postImages.forEach((file)=>formData.append("images", file));

      console.log("Hello I am Data -->", data);

      try {
        const ok = window.confirm("Do you really want to add this event");
        if(ok)
        {
          const response = await axios.post(
            "http://localhost:4500/api/admin/addEvent",
            formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("Data inserted successfully");
        }
        
      } catch (error) {
        console.log("Something Error in Axios -->", error);
      }
    };

    return (
      <>
        <div>
          <Dashboard />

          <div className="container-fluid w-75 me-5">
            <h4>Event Upload</h4>
            <div className="row mt-4 ">
              <div className=" col-md-3 col-lg-6 col-sm-12 mt-3 ">
                <label className="fw-bold text-secondary ">Event Image</label>
                <input
                  className="form-control border border-secondary border-3 "
                  type="file"
                  name="image"
                  onChange={(e) => setData({ ...data, image: e.target.files[0] })}
                />
              </div>

              <div className=" col-md-3 col-lg-6 col-sm-12 mt-3">
                <label className="fw-bold text-secondary">Event Name</label>
                <input
                  type="text"
                  className="form-control border border-secondary border-3"
                  name="name"
                  placeholder="Event Name"
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </div>

              <div className=" col-md-3 col-lg-6 col-sm-12 mt-3">
                <label className="fw-bold text-secondary">Price</label>
                <input
                  type="number"
                  className="form-control border border-secondary border-3"
                  name="Price"
                  placeholder="Ticket Price"
                  onChange={(e) =>
                    setData({ ...data, price: parseInt(e.target.value) })
                  }
                />
              </div>

              <div className=" col-md-3 col-lg-6 col-sm-12 mt-3">
                <label className="fw-bold text-secondary">Date</label>
                <input
                  type="datetime-local"
                  className="form-control border border-secondary border-3"
                  name="startDate"
                  onChange={(e) =>
                    setData({ ...data, startDate: e.target.value })
                  }
                />
              </div>

              <div className=" col-md-3 col-lg-6 col-sm-12 mt-3">
                <label className="fw-bold text-secondary">End Date</label>
                <input
                  type="datetime-local"
                  className="form-control border border-secondary border-3"
                  name="endDate"
                  onChange={(e) => setData({ ...data, endDate: e.target.value })}
                />
              </div>

              <div className=" col-md-3 col-lg-6 col-sm-12 mt-3">
                <label className="fw-bold text-secondary">Status</label>
                <input
                  type="text"
                  className="form-control border border-secondary border-3"
                  name="Status"
                  placeholder="Status"
                  onChange={(e) => setData({ ...data, status: e.target.value })}
                />
              </div>

              <div className=" col-md-3 col-lg-6 col-sm-12 mt-3">
                <label className="fw-bold text-secondary">Category</label>

                <select
                  className="form-control border border-secondary border-3"
                  name="category"
                  onChange={(e) => setData({ ...data, category: e.target.value })}
                >
                  <option>ALL</option>
                  <option>ART</option>
                  <option>BUSINESS</option>
                  <option>EDUCATION</option>
                  <option>FESTIVAL</option>
                  <option>FOOD</option>
                  <option>NIGHTLIFE</option>
                  <option>SPORTS</option>
                  <option>MORE</option>
                </select>
              </div>

              <div className=" col-md-3 col-lg-6 col-sm-12 mt-3">
                <label className="fw-bold text-secondary">Organizer</label>
                <input
                  type="text"
                  className="form-control border border-secondary border-3"
                  name="organizer"
                  placeholder="organizer"
                  onChange={(e) =>
                    setData({ ...data, organizer: e.target.value })
                  }
                />
              </div>

              <div className=" col-md-3 col-lg-6 col-sm-12 mt-3">
                <label className="fw-bold text-secondary">Phone</label>
                <input
                  type="tel"
                  className="form-control border border-secondary border-3"
                  name="phone"
                  placeholder="phone"
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                />
              </div>

              <div className=" col-md-3 col-lg-6 col-sm-12 mt-3">
                <label className="fw-bold text-secondary">Email</label>
                <input
                  type="email"
                  className="form-control border border-secondary border-3"
                  name="email"
                  placeholder="email"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>

              <div className=" col-md-3 col-lg-6 col-sm-12 mt-3">
                <label className="fw-bold text-secondary">
                  Remaining Tickets
                </label>
                <input
                  type="text"
                  className="form-control border border-secondary border-3"
                  name="remainingTickets"
                  placeholder="Remaining Tickets"
                  onChange={(e) =>
                    setData({ ...data, remainingTickets: e.target.value })
                  }
                />
              </div>

              <div className=" col-md-3 col-lg-6 col-sm-12 mt-3">
                <label className="fw-bold text-secondary">Venue</label>
                <input
                  type="text"
                  className="form-control border border-secondary border-3"
                  name="venue"
                  placeholder="Venue"
                  onChange={(e) => setData({ ...data, venue: e.target.value })}
                />
              </div>

              <div className=" col-md-3 col-lg-6 col-sm-12 mt-3">
                <label className="fw-bold text-secondary">Location</label>
                <input
                  type="text"
                  className="form-control border border-secondary border-3"
                  name="Location"
                  placeholder="Location"
                  onChange={(e) => setData({ ...data, location: e.target.value })}
                />
              </div>

              <div className=" col-md-3 col-lg-6 col-sm-12 mt-3">
                <label className="fw-bold text-secondary">Address</label>
                <input
                  type="text"
                  className="form-control border border-secondary border-3"
                  name="address"
                  placeholder="Address"
                  onChange={(e) => setData({ ...data, address: e.target.value })}
                />
              </div>

              <div className=" col-md-8 col-lg-8 col-sm-12 mt-3">
                <label className="fw-bold text-secondary">
                  Short Description
                </label>

                <textarea
                  className="form-control border border-secondary w border-3"
                  name="description"
                  cols="50"
                  rows="7"
                  placeholder="Event Description..."
                  onChange={(e) =>
                    setData({ ...data, description: e.target.value })
                  }
                ></textarea>
              </div>

              <div className=" col-md-8 col-lg-8 col-sm-12 mt-3">
                <label className="fw-bold text-secondary">Full Description</label>

                <textarea
                  className="form-control border border-secondary w border-3"
                  name="fullDescription"
                  cols="50"
                  rows="7"
                  placeholder="Event FUll Description..."
                  onChange={(e) =>
                    setData({ ...data, fullDescription: e.target.value })
                  }
                ></textarea>
              </div>

              <div className=" col-md-12 col-lg-12 col-sm-12 mt-3 ">
                <div className="row">
                  <div className=" col-md-12 col-lg-6 col-sm-6 d-flex justify-content-evenly">
                    <div>
                      <label className="fw-bold text-secondary ">
                        Event Image
                      </label>
                      <input
                        className="form-control border border-secondary border-3 "
                        type="file"
                        name="image"
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    </div>
                    <div>
                      <button
                        className="btn btn-primary mt-4 "
                        onClick={AddClickImage}
                      >
                        + Add Image
                      </button>
                    </div>
                  </div>
                  {/* <div className=" col-md-6 col-lg-6 col-sm-6 d-flex justify-content-evenly"></div> */}
                </div>
              </div>

              <div className="mt-4">
                {data.postImages.map((item, key) => (
                  <div key = {key} className="d-flex  justify-content-evenly col-sm-12 col-lg-8 col-md-8 border">
                    <div className="mt-3">
                      <p>{item.name}</p>
                    </div>
                    <div>
                      <button
                        className="btn btn-danger mt-2"
                        value={key}
                        onClick={()=>removeImage(key)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="d-flex justify-content-center">
                <button className="mt-4 btn btn-primary" onClick={handelClick}>
                  Submit
                </button>
              </div>
            </div>
            {message!=="" && <h1>{message}</h1> }
          </div>
        </div>
      </>
    );
  };

  export default AddEvent;