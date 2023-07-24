import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './component/Homepage'
import EventGrid from './pages/EventGrid'
import About from './pages/About'
import Mainpage from './pages/Mainpage'
import Gallery from './component/Gallery'
import Album from './component/Album'
import Eventdetail from './component/Eventdetail'
import Recentdetail from './component/Recentdetail'
import Dashboard from "./Admin/Dashboard";
import AddVideo from "./Admin/AddVideo";
import AddEvent from "./Admin/AddEvent";
import Login from "./Admin/Login";
import DeleteEvents from "./Admin/DeleteEvents";
import UpdateEvent from "./Admin/UpdateEvent";
import DeleteVideo from "./Admin/DeleteVideo"
import ArchiveTable from "./Admin/ArchiveTable";
import UpdateArchive from "./Admin/UpdateArchive";
import Archive from "./component/Archive";
import "remixicon/fonts/remixicon.css";
import AddImageInGallery from './Admin/AddImageInGallery'
import DeleteImagesFromGallery from './Admin/DeleteImagesFromGallery'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Mainpage/>}>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/EventGrid' element={<EventGrid/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/Album/:id' element={<Album/>}/>
        <Route path='/Recentdetail/:id' element={<Recentdetail/>}/>
        <Route path='/Eventdetail/:id' element={<Eventdetail/>}/>
        <Route path="/admin" element = {<Login/>}/>
        <Route path="/admin/dashboard" element = {<Dashboard/>}/>
        <Route path="/admin/addVideo" element = {<AddVideo/>}/>
        <Route path="/admin/addEvent" element = {<AddEvent/>}/>
        <Route path="/admin/deleteEvent" element = {<DeleteEvents/>}/>
        <Route path="/admin/updateEvent/:id" element = {<UpdateEvent/>}/>
        <Route path="/admin/deleteVideo" element = {<DeleteVideo />}/>
        <Route path="/admin/archiveTable" element = {<ArchiveTable/>}/>
        <Route path="/admin/updateArchive/:id" element = {<UpdateArchive/>}/>
        <Route path="/admin/addImageInGallery" element = {<AddImageInGallery/>}/>
        <Route path="/admin/deleteImageFromGallery" element = {<DeleteImagesFromGallery/>}/>
      </Route>

      </Routes>
    </div>
  )
}

export default App