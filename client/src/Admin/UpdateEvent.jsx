import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";

const UpdateEvent = () => {
  const param = useParams();
    console.log(param.id);
  const [data, setData] = useState({
    name: "",
    startDate: "",
    endDate: "",
    price: "",
    location: "",
    venue: "",
    status: "",
    category: "",
    organizer: "",
    phone: "",
    email: "",
    remainingTickets: "",
    address: "",
    description: "",
    fullDescription: "",
  });

  const FetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:4500/api/admin/getEventById/${param.id}`);
      setData(response.data);
    } catch (error) {
      console.log("Some thing Error in Axios --->", error);
    }
  };

  useEffect(() => {
    FetchData();
    console.log(data);
  }, []);

  console.log(data);

  const token = sessionStorage.getItem("token");

  const handelClick = async () => {
    const formData = new FormData();

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

    console.log("Hello I am Data -->", data);

    try {
      const response = await axios.put(`http://localhost:4500/api/admin/updateEvent/${param.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Data Insert Successfully");
    } catch (error) {
      console.log("Something Error in Axios -->", error);
    }
  };

  return (
    <>
    <Dashboard/>
      <div>
        <h4 className="text-center">
          <u>Edit Event</u>
        </h4>
        {/* <Dashboard /> */}

        <div className="container-fluid w-75 me-5">
          <h4>Event Upload</h4>
          <div className="row mt-4 ">

            <div className=" col-md-3 col-lg-6 col-sm-12 mt-3">
              <label className="fw-bold text-secondary">Event Name</label>
              <input
                type="text"
                className="form-control border border-secondary border-3"
                name="name"
                value={data.name}
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
                value={data.price}
                placeholder="Ticket Price"
                onChange={(e) =>
                  setData({ ...data, price: parseInt(e.target.value) })
                }
              />
            </div>

            <div className=" col-md-3 col-lg-6 col-sm-12 mt-3">
              <label className="fw-bold text-secondary">Date</label>
              <input
                type="date"
                className="form-control border border-secondary border-3"
                name="startDate"
                value={data.startDate}
                onChange={(e) =>
                  setData({ ...data, startDate: e.target.value })
                }
              />
            </div>

            <div className=" col-md-3 col-lg-6 col-sm-12 mt-3">
              <label className="fw-bold text-secondary">End Date</label>
              <input
                type="date"
                className="form-control border border-secondary border-3"
                name="endDate"
                value={data.endDate}
                onChange={(e) => setData({ ...data, endDate: e.target.value })}
              />
            </div>

            <div className=" col-md-3 col-lg-6 col-sm-12 mt-3">
              <label className="fw-bold text-secondary">Status</label>
              <input
                type="text"
                className="form-control border border-secondary border-3"
                name="Status"
                value={data.status}
                placeholder="Status"
                onChange={(e) => setData({ ...data, status: e.target.value })}
              />
            </div>

            <div className=" col-md-3 col-lg-6 col-sm-12 mt-3">
              <label className="fw-bold text-secondary">Category</label>

              <select
                className="form-control border border-secondary border-3"
                name="category"
                value={data.category}
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
                value={data.organizer}
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
                value={data.phone}
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
                value={data.email}
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
                value={data.remainingTickets}
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
                value={data.venue}
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
                value={data.location}
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
                value={data.address}
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
                value={data.description}
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
                value={data.fullDescription}
                onChange={(e) =>
                  setData({ ...data, fullDescription: e.target.value })
                }
              ></textarea>
            </div>

            <div className="d-flex justify-content-center">
              <button className="mt-4 btn btn-primary" onClick={handelClick}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateEvent;