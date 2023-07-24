import React, { useEffect, useState } from 'react'
import './Eventdetail.css'
import { event } from './Eventdata';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';


const Eventdetail = () => {

    const { id } = useParams();
    console.log(id);
    const [obj, setObj] = useState({});

    const Fetch = async (req, res) => {
        try {
            const response = await axios.get(`http://localhost:4500/api/admin/getEventById/${id}`);
            setObj(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        console.log('hello')
        Fetch();
    }, [])

    return (
        <div>
            <div className='event1'>
                <h1>{obj.name}</h1>

                <div className='event1-1'>
                    <div className='event1-11'>
                      <div className='event1-21'>
                        <div className='times'>
                            <div className='days'>
                                <h1>148  </h1>
                                    <span>DAYS</span>
                            </div>
                            <div className='days'>
                                <h1>19 </h1>
                                <span>HOURS</span>
                            </div>
                            <div className='days'>
                                <h1>43 </h1>
                                <span>MINUTES</span>
                            </div>
                            <div className='days'>
                                <h1>04 </h1>
                                <span>SECONDS</span>
                            </div>
                        </div>
                        <div className='venue'>
                            <h4><i class="ri-map-pin-line"></i>{obj.location}</h4>
                            <h4><i class="ri-calendar-2-line"></i>{obj.startDate}</h4>
                            <h4><i class="ri-calendar-2-line"></i>{obj.startDate}</h4>
                        </div>
                   
               </div>
               </div>
               <div className='event1-2'>
                <div className='event1-2-1'>
                   <img src={`http://localhost:4500/api/uploads/${obj.image}`} alt="" />
                   <div className='about'>
                    <h1>About Event</h1>
                    <h3>{obj.description}</h3>
                    <p>{obj.fullDescription}</p>
                   </div>
                </div>
               </div>
               <div className='tickets '>
                        <h3 className='ms-5'>{obj.price}</h3>
                        <button>BUY TICKET</button>
                     </div>

                     <h1 className='rocking'>OUR ROCKING PERFORMER</h1>
                     <div className='perfomer'>

                        {
                            obj.postImages?.map((img, index)=> (
                                <img key={index} src={`http://localhost:4500/api/uploads/${img}`} />
                            ))
                        }

                        {/* <img src={obj.perfomer1} alt="" />
                        <img src={obj.perfomer2} alt="" />
                        <img src={obj.perfomer3} alt="" />
                        <img src={obj.perfomer4} alt="" /> */}
                     </div>

                     <div className='address'>
                        <div className='address-left'>
                            <h2>FIND US ON GOOGLE MAP</h2>
                            {/* <img src={obj.map} alt="" /> */}
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.333586203043!2d77.4596153751936!3d23.194510579053606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c433c472caad1%3A0x56bae0d00110222c!2sBada%20business.com%20Bhopal!5e0!3m2!1sen!2sin!4v1690193737520!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className='address-right'>
                            <h2>TRAVELING INFORMATION</h2>
                            <div className='vanues '>
                            <i class="ri-map-pin-line "></i>
                            <div>
                                <h4>Venue</h4>
                                <p>{obj.venue}</p>
                            </div>
                            </div>

                            <div className='transport'>
                            <i class="ri-flight-takeoff-line"></i>
                            <div className='transport1'>
                                <h4>Transport</h4>
                                <div className='bus'>
                                <p className=''>Bus Station</p>
                                <p className=''>{obj.bus}</p>
                                </div>
                                <div className='bus'>
                                <p>Rail Station</p>
                                <p className=''>{obj.rail}</p>
                                </div>
                                <div className='bus'>
                                <p>Airport</p>
                                <p className=''>{obj.airport}</p>
                                </div>
                            </div>
                            </div>

                            <div className='hotel '>
                            <i class="ri-hotel-line"></i>
                            <div className='transport1'>
                                <h4>Hotel and Restaurant</h4>
                                <div className='bus'>
                                <p>Hotel</p>
                                <p className=''>{obj.hotel}</p>
                                </div>
                                <div className='bus'>
                                <p>Restaurant</p>
                                <p className=''>{obj.restaurant}</p>
                                </div>
                            </div>
                            </div>

                        </div>
                     </div>

                   
                    </div>
            </div>
                  
        </div>
    )
}

export default Eventdetail