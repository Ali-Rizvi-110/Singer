import React from 'react'
import './Footer.css'

const Footer = () => {

  return (

   
      <div className='footer bg-dark'>
        <div className='left  '>
        © 2023. Design and Development by <span>CodexCoder</span>
        </div>
        <div className='footerimg'>
        <img src="http://demos.codexcoder.com/anthem/wp-content/uploads/2017/05/Anthem-Logo.png" alt="" width={200} />
        </div>
        <div className='icon '>
        <i class="ri-facebook-fill rounded-circle p-3 bg-secondary"></i> 
        <i class="ri-twitter-fill  rounded-circle p-3 ms-2 bg-secondary"></i>
        <i class="ri-dribbble-line  rounded-circle p-3 ms-2 bg-secondary"></i>
        <i class="ri-instagram-line  rounded-circle p-3 ms-2 bg-secondary"></i>
        <i class="ri-linkedin-fill  rounded-circle p-3 ms-2 bg-secondary"></i>
        </div>
      </div>
  

  )
}

export default Footer