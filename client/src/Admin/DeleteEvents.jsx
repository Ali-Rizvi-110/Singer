import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

const DeleteEvents = () => {
  const navigator = useNavigate();
  const [data, setData] = useState([{}]);

  const token = sessionStorage.getItem('token');

  const Fetch = async () => {
    try {
      const response = await axios.get("http://localhost:4500/api/admin/showEvents");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("something Error in Axios -->", error);
    }
  };

  const DeleteClick = async (id) => {
    console.log(id);

    try {
      const confirm = window.confirm(
        "Are you really want to delete this event"
      );
      if (confirm) {
        const response = await axios.delete(`http://localhost:4500/api/admin/deleteEvent/${id}/1`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        } );
        console.log("Data Delete Successfully");
        Fetch();
      }
    } catch (error) {
      console.log("Something Error in Axios -->", error);
    }
  };
  const [addArchive, setAddArchive] = useState([{}]);

  const AddToArchive = async (id) => {
    const confirm = window.confirm("Do you want to add it to Archive");
    if (confirm) {
      try {
        const response = await axios.get(`http://localhost:4500/api/admin/getEventById/${id}`);
        setAddArchive(response.data);

        const postResponse = await axios.post(`http://localhost:4500/api/admin/addArchive`, addArchive, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log("Data Post Successfully");

        const deleteResponse = await axios.delete(`http://localhost:4500/api/admin/deleteEvent/${id}/0`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log("Operation Successfully");
        Fetch();
      } catch (error) {
        console.log("Something Error in Axios and URl --->", error);
      }
    }
  };

  useEffect(() => {
    Fetch();
    console.log(data);
  }, []);

  return (
    <div>
      <Dashboard/>
      <h1 className="text-center">
        <u>Settings</u>
      </h1>
      <div className="table-responsive">
        <table className="w-100 table table-bordered text-center table-responsive table-striped ">
          <thead>
            <tr>
              <th>SNO.</th>
              <th>Event Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Category</th>
              <th>Location</th>
              <th>Actions</th>
              <th>Archive</th>
            </tr>
          </thead>
          <tbody>
            {/* Hay */}
            {data.map((item, keyIndex) => (
              <tr className={"mt-2"} key={keyIndex}>
                <td>{keyIndex + 1}</td>
                <td>{item.name}</td>
                <td>{item.startDate}</td>
                <td>{item.endDate}</td>
                <td>{item.category}</td>
                <td>{item.location}</td>
                <td className="d-flex justify-content-evenly">
                  <button
                    className="btn btn-primary "
                    onClick={() => navigator(`../admin/updateEvent/${item._id}`)}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => DeleteClick(item._id)}
                  >
                    <i className="bi bi-trash3-fill "></i>
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => AddToArchive(item._id)}
                  >
                    Add to Archive
                  </button>
                </td>
              </tr>
            ))}
            {/* Byy */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeleteEvents;
// style={{ marginTop: "10px" }}