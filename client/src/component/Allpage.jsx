import { useState, useEffect } from "react";
import "../App.css";
import "remixicon/fonts/remixicon.css";
// import Homepage from './component/Homepage'
import Navbr from "../component/Navbr";
import Footer from "../component/Footer";
import music from "../assets/maan.mp3";
import axios from "axios";

const Allpage = () => {
  const [data, setData] = useState([{}]);

  const fetch = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4500/api/admin/getVideos"
      );
      setData(response.data);
      console.log("Data Fetch Successfully from Axios");
      console.log(response.data);
    } catch (error) {
      console.log("Something Error in Axios --->", error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <div id="main">
        <div id="page1">
          <img
            src="https://wp.nkdev.info/khaki/demo-band/wp-content/uploads/sites/7/2017/05/image-101.jpg"
            alt=""
          />
          <div className="p1center">
            <h1>Before I Forget</h1>
            <h3>The premiere of the clip - 20th September</h3>
            <a href="https://youtu.be/qw2LU1yS7aw" target="blank">
              <i className="ri-play-fill"></i>
            </a>
          </div>
        </div>
        <div id="page2">
          <h6>Featured Album</h6>
          <h2>Forever in Darkness</h2>
          <div className="p2center">
            <div className="p2centerl">
              <img
                style={{ height: "50vh", width: "25vw" }}
                id="p2img"
                className="p2image"
                src="https://wp.nkdev.info/khaki/demo-band/wp-content/uploads/sites/7/2017/05/cover-21.jpg"
                alt=""
              />
            </div>
            <div className="p2centerr">
              {/* <div className="musicp2">
                <div className="music">
                <audio id="play" controls src={music} type='audio/mpeg'></audio>
                </div>
              </div> */}
              <div className="musicp2">
                <div className="music">
                  <i className="ri-play-circle-fill"></i>
                  <h4>soundroll - Fight No More</h4>
                </div>
                <h4>2:42</h4>
              </div>
              <div className="musicp2">
                <div className="music">
                  <i className="ri-play-circle-fill"></i>
                  <h4>soundroll - Fight No More</h4>
                </div>
                <h4>2:42</h4>
              </div>
              <div className="musicp2">
                <div className="music">
                  <i className="ri-play-circle-fill"></i>
                  <h4>soundroll - Fight No More</h4>
                </div>
                <h4>2:42</h4>
              </div>
              <div className="musicp2">
                <div className="music">
                  <i className="ri-play-circle-fill"></i>
                  <h4>soundroll - Fight No More</h4>
                </div>
                <h4>2:42</h4>
              </div>
              <div className="musicp2">
                <div className="music">
                  <i className="ri-play-circle-fill"></i>
                  <h4>soundroll - Fight No More</h4>
                </div>
                <h4>2:42</h4>
              </div>
            </div>
          </div>
        </div>
        <div id="page3">
          <h5>
            <i>About</i>
          </h5>
          <h1>Khaki Band </h1>
          <p>
            Slipknot is an American heavy metal band from Des Moines, Iowa. The
            band was founded in September 1995 by percussionist Shawn Crahan and
            bassist Paul Gray. Slipknot is well known for its attention-grabbing
            image, aggressive style of music, and energetic and chaotic live
            shows. The band rapidly rose to success following the release of
            their eponymous debut album in 1999. The 2001 follow-up album, Iowa,
            made the band more popular. After a brief hiatus.
          </p>
          <h4>
            Shawn Crahan – back vocals <br />
            Craig Jones – synthezisers <br />
            Mick Thomson – rhythm guitars <br />
            Corey Taylor – lead vocals <br />
            Sid Wilson – turntables <br />
          </h4>
          <button>Read More</button>
        </div>
        <div id="page4">
          <div id="overlayp4">
            <h1>Tour Dates</h1>
            <div className="p4center">
              <div className="tourdates">
                <div className="p4dates">
                  <h3>24 Oct</h3>
                  <h4>2020</h4>
                </div>
                <div className="p4tourname">
                  <h3>Mountain Jam</h3>
                  <h4>Hunter Mountain,NY</h4>
                </div>
                <div className="p4ticketprice">
                  <h3>&#x20B9; 400</h3>
                  <button>
                    {" "}
                    Buy Now <i className="ri-ticket-2-line"></i>
                  </button>
                </div>
              </div>
              <div className="tourdates">
                <div className="p4dates">
                  <h3>24 Oct</h3>
                  <h4>2020</h4>
                </div>
                <div className="p4tourname">
                  <h3>Mountain Jam</h3>
                  <h4>Hunter Mountain,NY</h4>
                </div>
                <div className="p4ticketprice">
                  <h3>&#x20B9; 400</h3>
                  <button>
                    {" "}
                    Buy Now <i className="ri-ticket-2-line"></i>
                  </button>
                </div>
              </div>
              <div className="tourdates">
                <div className="p4dates">
                  <h3>24 Oct</h3>
                  <h4>2020</h4>
                </div>
                <div className="p4tourname">
                  <h3>Mountain Jam</h3>
                  <h4>Hunter Mountain,NY</h4>
                </div>
                <div className="p4ticketprice">
                  <h3>&#x20B9; 400</h3>
                  <button>
                    {" "}
                    Buy Now <i className="ri-ticket-2-line"></i>
                  </button>
                </div>
              </div>
              <div className="tourdates">
                <div className="p4dates">
                  <h3>24 Oct</h3>
                  <h4>2020</h4>
                </div>
                <div className="p4tourname">
                  <h3>Mountain Jam</h3>
                  <h4>Hunter Mountain,NY</h4>
                </div>
                <div className="p4ticketprice">
                  <h3>&#x20B9; 400</h3>
                  <button>
                    {" "}
                    Buy Now <i className="ri-ticket-2-line"></i>
                  </button>
                </div>
              </div>
            </div>
            <button>All Tours</button>
          </div>
        </div>
        <div id="page5">
          <h6>
            <i>Gallary</i>
          </h6>
          <h1>Memorable Moments</h1>
          <div className="p5center">
            <div className="p5div">
              <div className="p5img1">
                <img
                  src="https://wp.nkdev.info/khaki/demo-band/wp-content/uploads/sites/7/2017/05/gallery-11-800x533.jpg"
                  alt=""
                />
              </div>
              <div className="p5img1">
                <img
                  src="https://wp.nkdev.info/khaki/demo-band/wp-content/uploads/sites/7/2017/05/gallery-41-800x530.jpg"
                  alt=""
                />
              </div>
              <div className="p5img1">
                <img
                  src="https://wp.nkdev.info/khaki/demo-band/wp-content/uploads/sites/7/2017/05/gallery-61-800x600.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="p5div2">
              <div className="p5img1">
                <img
                  src="https://wp.nkdev.info/khaki/demo-band/wp-content/uploads/sites/7/2017/05/gallery-21-800x533.jpg"
                  alt=""
                />
              </div>
              <div className="p5img1">
                <img
                  src="https://wp.nkdev.info/khaki/demo-band/wp-content/uploads/sites/7/2017/05/gallery-51-800x600.jpg"
                  alt=""
                />
              </div>
              <div className="p5img1">
                <img
                  src="https://wp.nkdev.info/khaki/demo-band/wp-content/uploads/sites/7/2017/05/gallery-81-800x501.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="p5div3">
              <div className="p5img1" id="p5img11">
                <img
                  src="https://wp.nkdev.info/khaki/demo-band/wp-content/uploads/sites/7/2017/05/gallery-31-800x1200.jpg"
                  alt=""
                />
              </div>
              <div className="p5img1">
                <img
                  src="https://wp.nkdev.info/khaki/demo-band/wp-content/uploads/sites/7/2017/05/gallery-71-800x535.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div id="page6">
          <h6>Discography</h6>
          <h1>Latest Albums</h1>
          <div className="p6center">
            <div className="p6img">
              <div className="p6divtxt">
                <h1>Before I Forget</h1>
                <button>SEE MORE</button>
              </div>
              <img
                src="https://wp.nkdev.info/khaki/demo-band/wp-content/uploads/sites/7/2017/05/cover-11.jpg"
                alt=""
              />
            </div>
            <div className="p6img">
              <div className="p6divtxt">
                <h1>Forever in Darkness</h1>
                <button>SEE MORE</button>
              </div>
              <img
                src="https://wp.nkdev.info/khaki/demo-band/wp-content/uploads/sites/7/2017/05/cover-21.jpg"
                alt=""
              />
            </div>
            <div className="p6img">
              <div className="p6divtxt">
                <h1>All Hope is Gone</h1>
                <button>SEE MORE</button>
              </div>
              <img
                src="https://wp.nkdev.info/khaki/demo-band/wp-content/uploads/sites/7/2017/05/cover-31.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div id="page7">
          <h1>Official Videos</h1>
          <div className="p7center">
            {
              data.map((item, key)=> (
                <div className="p7img" key={key}>
                  <img
                    src={`http://localhost:4500/api/uploads/${item.thumbnail}`}
                    alt={item.thumbnail}
                    />
                  <a
                    href={item.video}
                    target="blank"
                    >
                    <i className="ri-play-fill"></i>
                  </a>
                </div>
              ))
              }
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Allpage;
