import React,{useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {

  const [isMobile,setIsMobile] = useState(false)
  return (
    <div>
      <div className='nav d-flex justify-content-between align-items-center w-100'>
        <div className='left d-flex w-25  ms-5 mt-2'>
          <img src="http://demos.codexcoder.com/anthem/wp-content/uploads/2017/05/Anthem-Logo.png" alt="" />

        </div>
        <div className={isMobile ? "nav-links-mobile" :  "right d-flex justify-content-evenly w-50" }  
        onClick={()=>setIsMobile(false)}>
          <Link to="/" className='text-decoration-none'><h6>HOME</h6></Link>
          <Link to="/About" className='text-decoration-none'><h6>ABOUT US</h6></Link>
          <Link to="/EventGrid" className='text-decoration-none'><h6>EVENT</h6></Link>
          <Link to="/Gallery" className='text-decoration-none'><h6>GALLERY</h6></Link>
        </div>
        <button className='mobile-menu-icon' onClick={()=>setIsMobile(!isMobile)}>{isMobile ? <i class="ri-close-line"></i> : <i class="ri-menu-line"></i> }</button>
      </div>
      
    </div>
  )
}

export default Navbar