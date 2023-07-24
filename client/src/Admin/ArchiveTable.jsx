import Dashboard from "./Dashboard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ArchiveTable = () => {
  const navigator = useNavigate();
  const [data, setData] = useState([]);
  const token = sessionStorage.getItem('token');

  const Fetch = async () => {
    try {
      const response = await axios.get("http://localhost:4500/api/admin/getArchive");
      if(response.data)setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("something Error in fetching archive -->", error);
    }
  };

  const DeleteClick = async (id) => {
    console.log(id);

    try {
      const confirm = window.confirm(
        "Are you really want to delete this event"
      );
      if (confirm) {
        const response = await axios.delete(`http://localhost:4500/api/admin/deleteArchive/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log("Data Delete Successfully");
        Fetch();
      }
    } catch (error) {
      console.log("Something Error in Axios -->", error);
    }
  };

  useEffect(() => {
    Fetch();
    console.log(data);
  }, []);
  return (
    <div>
      <Dashboard />
      <div>
        <h1 className="text-center">
          <u> Archive Controllers</u>
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
                <th>Controllers</th>
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
                      onClick={() => navigator(`/admin/updateArchive/${item._id}`)}
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
                </tr>
              ))}
              {/* Byy */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ArchiveTable;
