import React from 'react'
import { purple } from './Data';
import { useParams } from 'react-router-dom';
import './Album.css'


const Album = () => {

  const { id } = useParams();
  console.log(id);
  const obj = purple[id];
  console.log(obj)
  console.log(purple);
  return (
    <div >
      <div className='detailpage'>
        <h1>{obj.name}</h1>
        <div className='albumdetail'>
          <img src={`${obj.img}`} alt="" />
          <div className='albumdetail1'>
            <p>Monotonectally impact fully tested manufactured products through technically sound.</p>
            <div className='row '>
              <h6 className='col-3'>Released</h6>
              <h6 className='col-2'>:</h6>
              <h6 className='col-7'>{obj.date}</h6>
            </div>
            <div className='row '>
              <h6 className='col-3'>Music</h6>
              <h6 className='col-2'>:</h6>
              <h6 className='col-7'>{obj.music}</h6>
            </div>
            <div className='row '>
              <h6 className='col-3'>Lyrics</h6>
              <h6 className='col-2'>:</h6>
              <h6 className='col-7'>{obj.lyrics}</h6>
            </div>
            <div className='row '>
              <h6 className='col-3'>Guiders</h6>
              <h6 className='col-2'>:</h6>
              <h6 className='col-7'>{obj.guiders}</h6>
            </div>
            <div className='row '>
              <h6 className='col-3'>Bass</h6>
              <h6 className='col-2'>:</h6>
              <h6 className='col-7'>{obj.bass}</h6>
            </div> <div className='row '>
              <h6 className='col-3'>Drums</h6>
              <h6 className='col-2'>:</h6>
              <h6 className='col-7'>{obj.drumbs}</h6>
            </div>
            <div className='row '>
              <h6 className='col-3'>Vocals</h6>
              <h6 className='col-2'>:</h6>
              <h6 className='col-7'>{obj.Vocals}</h6>
            </div>

          </div>
        </div>
        <div className='albumtext2 row'>
         <h6 className='col-2 fs-2'>1</h6>
         <div className='col-3 '>
          <h5>Tor Premete</h5>
          <p>Guru James</p>

         </div>
         <h6 className='col-7 text-end fs-4'>00:00</h6>
        </div>
      </div>


    </div>
  )
}

export default Album