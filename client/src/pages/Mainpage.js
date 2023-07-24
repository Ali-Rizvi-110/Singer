import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'
import './Mainpage.css'

export default function Mainpage() {
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)

setTimeout(() => {
  setLoading(false)
}, 1000);

  },[])
  return (
    <div>
       {
        loading ? <img className='loader' src="http://demos.codexcoder.com/anthem/wp-content/themes/anthem/assets/images/music4.gif" alt="" /> :
        <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </div>
       }
    </div>
  )
}
