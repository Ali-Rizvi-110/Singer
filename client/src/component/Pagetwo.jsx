import React, { useEffect, useState } from "react";
import arrayValue from "./Data";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Pagetwo = () => {
  const [item, setItem] = useState([{}]);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const obj = arrayValue[1];
  const [event, setEvent] = useState({});
  
  const fetchItem = async () => {
    try {
      const response = await axios.get(`http://localhost:4500/api/admin/getEventsByCat/${event.category}`);
      setItem(response.data);
      console.log("item", item);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4500/api/admin/getEventById/${id}`
      );
      console.log(typeof response.data);
      // setItem(response.data);
      console.log(response.data);
      setEvent(response.data);
      console.log("my fetched data", event);
      fetchItem();
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    // console.log("runned");
    fetchData();
  }, []);

  // console.log(obj);
  // const path = `http://localhost:5173/${obj.src}`;
  const path = `http://localhost:4500/api/uploads/${event.image}`;

  const [orderId, setOrderId] = useState('');

  const handlePaymentResponse = (response) => {
    console.log("Enter in handle Response");
    axios
      .post('http://localhost:4500/api/payments/validate-payment', { response })
      .then((res) => {
        console.log(res.data);

        // Handle successful payment
      })
      .catch((error) => {
        console.error(error);
        // Handle payment failure
      });
  };
  const handleOpenRazorpay = async () => {
    try {
      const send = {
        amount: parseInt(event.price, 10),
        currency: "INR"
      }
      const response = await axios.post('http://localhost:4500/api/payments/create-order', {send});
      // console.log("response", response);
      // const { id, amount, currency, signature } = response.data;

      const options = {
        key: 'rzp_test_wvLy5hzErrd9Fm',
        amount: Number(send.amount),
        currency: send.currency,
        name: 'Acme Corp',
        description: 'Test Transaction',
        order_id: response.data.data.id,
        handler: function (response) {
          console.log("response", response);
          handlePaymentResponse(response);
        },
        prefill: {
          name: 'Gaurav Kumar',
          email: 'gaurav.kumar@example.com',
          contact: '9000090000'
        },
        notes: {
          address: 'Razorpay Corporate Office'
        },
        theme: {
          color: '#3399cc'
        }
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error(error);
    }
  };

  const handlePayment = () => {
    handleOpenRazorpay();
  };


  return (
    <div className="">
      <div className=" ">
        <img
          src="http://localhost:5173/street.avif"
          alt=""
          className="street"
        />
      </div>

      <div className="maindiv d-flex bg-secondary bg-opacity-25">
        <div className="left ms-5 w-75 ">
          <img src={path} alt="" width={"100%"} className="mb-2" />
          <div className="bg-light p-3">
            <p className="paragraph p-4">{event.fullDescription}</p>
            <div className="business ms-2">
              <a href="">BUSINESS</a>
              <a href="">CONFERENCE</a>
              <a href="">EVENTS</a>
              <a href="">HOTEL</a>
              <a href="">MEETUP</a>
            </div>
            <h6 className="mt-4 ms-4 ">SHARE THIS EVENT</h6>
            <div className="icon ms-4 fs-5 mt-4 mb-4   ">
              <i className="ri-facebook-fill  text-light rounded-circle p-2"></i>
              <i className="ri-twitter-fill text-light rounded-circle p-2 ms-2"></i>
              <i className="ri-linkedin-fill  text-light rounded-circle p-2 ms-2"></i>
              <i className="ri-whatsapp-line text-light rounded-circle p-2 ms-2"></i>
              <i className="ri-mail-line text-light rounded-circle p-2 ms-2"></i>
            </div>
          </div>
          <div className="bg-light mt-4">
            <div className="speakers d-flex flex-wrap mb-4  ">
              <li className="p-4 px-4">Speakers</li>
              <li className="p-4 px-4">Shedule</li>
              <li className="p-4 px-4">Ticket</li>
              <li className="p-4 px-5">Map</li>
              <li className="p-4 px-4">Tour</li>
              <li className="p-4 px-5">FAQ</li>
              <li className="p-4 px-4">Contact</li>
            </div>
            <div>
              <div className="imagedown">
                {event.postImages?.map((img, ind) => (
                  <div className="mt-4" key={ind}>
                    <img
                      src={`http://localhost:4500/api/uploads/${img}`}
                      alt={`Image ${ind}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-light mt-4">
            <div className="ms-4  py-3 border-bottom ">
              <h4>Photos</h4>
            </div>

            <div className="photo py-5">
              <img
                src="https://demo.gloriathemes.com/eventchamp/demo/wp-content/uploads/2018/11/speaker-photos-3-1536x1024.jpg"
                alt=""
              />
              <img
                src="https://demo.gloriathemes.com/eventchamp/demo/wp-content/uploads/2018/11/speaker-photos-1-1536x778.jpg"
                alt=""
              />
              <img
                src="https://demo.gloriathemes.com/eventchamp/demo/wp-content/uploads/2018/11/event-2-1536x1024.jpg"
                alt=""
              />
              <img
                src="https://demo.gloriathemes.com/eventchamp/demo/wp-content/uploads/2018/11/event-3-1536x1024.jpg"
                alt=""
              />
              <img
                src="https://demo.gloriathemes.com/eventchamp/demo/wp-content/uploads/2018/11/event-4-1536x1024.jpg"
                alt=""
              />
              <img
                src="https://demo.gloriathemes.com/eventchamp/demo/wp-content/uploads/2018/11/event-6-1536x1024.jpg"
                alt=""
              />
            </div>
          </div>

          {/* right */}
        </div>
        <div className="right d-flex flex-column align-items-center    ">
          <div className="righttop mt-5 bg-light ">
            <div className="d-flex justify-content-evenly mt-5">
              <h3>Event Details</h3>
              <div>
                <span className="three">3</span>
                <span className="three">3</span>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-evenly">
              <i className="ri-calendar-2-line"></i>
              <div>
                <h6>Start Date</h6>
                <p>{event.startDate}</p>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-evenly">
              <i className="ri-calendar-2-line"></i>
              <div>
                <h6>End Date</h6>
                <p>{event.endDate}</p>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-evenly">
              <i className="ri-calendar-2-line"></i>
              <div>
                <h6>Status</h6>
                <p>{event.status}</p>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-evenly">
              <i className="ri-calendar-2-line"></i>
              <div>
                <h6>Location</h6>
                <p>{event.location}</p>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-evenly">
              <i className="ri-calendar-2-line"></i>
              <div>
                <h6>Venue</h6>
                <p>{event.venue}</p>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-evenly">
              <i className="ri-calendar-2-line"></i>
              <div>
                <h6>Price</h6>
                <p>{event.price}/- Rs</p>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-evenly">
              <i className="ri-calendar-2-line"></i>
              <div>
                <h6>Organizer</h6>
                <p>{event.organizer}</p>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-evenly">
              <i className="ri-calendar-2-line"></i>
              <div>
                <h6>Category</h6>
                <p>{event.category}</p>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-evenly">
              <i className="ri-calendar-2-line"></i>
              <div>
                <h6>Address</h6>
                <p>{event.address}</p>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-evenly">
              <i className="ri-calendar-2-line"></i>
              <div>
                <h6>Phone Number</h6>
                <p>{event.phone}</p>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-evenly">
              <i className="ri-calendar-2-line"></i>
              <div>
                <h6>Email</h6>
                <p>{event.email}</p>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-evenly">
              <i className="ri-calendar-2-line"></i>
              <div>
                <h6>Remaining Tickets</h6>
                <p>{event.remainingTickets}</p>
              </div>
            </div>
            <hr />
            <hr />
            <div className="d-flex justify-content-evenly">
              <i className="ri-calendar-2-line"></i>
              <div>
                <h6>Network</h6>
                <p>August 14, 2022 3:00 pm</p>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-center">
              <button className="rounded-pill" onClick={handlePayment} >Buy Ticket</button>
            </div>
          </div>
          <div className="rightdown d-flex flex-column align-items-center bg-light">
            <h2 className="">
              Related <span>Events</span>
            </h2>
            <p>You might also love these event</p>
            <div className="d-flex flex-wrap justify-content-evenly">
              {item?.slice(0, 3).map((item, index) => (
                <div className="d-flex flex-column w-100" key={index}>
                  <div
                    onClick={() => {
                      // console.log("hello", index);
                      navigate(`/pagetwo/${index}`);
                    }}
                  >
                    <img
                      src={`http://localhost:4500/api/uploads/${item.image}`}
                      className="w-100 mt-2"
                      alt=""
                    />
                  </div>
                  <a
                    onClick={() => {
                      // console.log("hello", index);
                      navigate(`/pagetwo/${index}`);
                    }}
                    className="name text-center mt-1 mb-1 fs-4"
                    href=""
                  >
                    {item.name}
                  </a>
                  <div className="d-flex justify-content-evenly mt-2">
                    <h6
                      className="bg-warning px-4 p-2 rounded-pill text-light"
                      style={{ cursor: "pointer" }}
                    >
                      {item.description}
                    </h6>
                    <i className="ri-calendar-2-fill text-warning fs-5">
                      <span className="icontext ms-2">{item.startDate}</span>
                    </i>
                  </div>
                  <p className="para w-100">{item.para}</p>
                  <div className="d-flex justify-content-evenly mb-2">
                    <i className="ri-hourglass-fill text-warning fs-5">
                      <span className="icontext  ms-2">{item.status}</span>
                    </i>
                    <i className="ri-map-pin-line text-warning fs-5">
                      <span className="icontext  ms-2">{item.address}</span>
                    </i>

                    <i className="ri-cash-line text-warning fs-5">
                      <span className="icontext  ms-2">{item.price}</span>
                    </i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagetwo;
