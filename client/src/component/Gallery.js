import React from 'react'
import './Gallery.css'

const Gallery = () => {
  return (
    <div>
         <section className="section1">
          <div className="txt"><h2>GALLERY 3 COLUMN</h2></div>
          <div className="gallery">
            <div className="cards">
              <div className="card">
                <img src="http://demos.codexcoder.com/anthem/wp-content/uploads/2017/05/01-6.jpg" alt="" />
                <div id="ovrlay">
                <i class="ri-search-line"></i>
                </div>
              </div>
              <div className="card">
                <img src="http://demos.codexcoder.com/anthem/wp-content/uploads/2017/05/10.jpg" alt="" />
              </div>
              <div className="card">
                <img src="http://demos.codexcoder.com/anthem/wp-content/uploads/2017/05/09.jpg" alt="" />
              </div>
            </div>
            <div className="cards">
            <div className="card">
              <img src="http://demos.codexcoder.com/anthem/wp-content/uploads/2017/05/08.jpg" alt="" />
            </div>
              <div className="card">
                <img src="http://demos.codexcoder.com/anthem/wp-content/uploads/2017/05/06-1.jpg" alt="" />
              </div>
              <div className="card">
                <img src="http://demos.codexcoder.com/anthem/wp-content/uploads/2017/05/05-3.jpg" alt="" />
              </div>
            </div>
            <div className="cards">
            <div className="card">
              <img src="http://demos.codexcoder.com/anthem/wp-content/uploads/2017/05/04-3.jpg" alt="" />
            </div>
              <div className="card">
                <img src="http://demos.codexcoder.com/anthem/wp-content/uploads/2017/05/03-5.jpg" alt="" />
              </div>
              <div className="card">
                <img src="http://demos.codexcoder.com/anthem/wp-content/uploads/2017/05/01-9.jpg" alt="" />
              </div>
            </div>
          </div>
       </section>
    </div>
  )
}

export default Gallery