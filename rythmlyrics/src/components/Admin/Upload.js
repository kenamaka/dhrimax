import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaLongArrowAltDown, FaTimes } from 'react-icons/fa'
// import './Upload.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UploadPicture from './UploadPicture'
import SubmitLink from './SubmitLink'
import './SlideIn.css'

import { useLocation } from 'react-router-dom';
import axios from '../../Api/axios';
import Uploaded from './Uploaded';
import logo from "../assets/images/logow.png";


const Upload = ({ picture, name, token, setUpload, setMain,id,email,stagename,handleMain }) => {


  const [formone, setFormone] = useState(false)
  const [formtwo, setFormtwo] = useState(false)
  const [header, setHeader] = useState(true)



  const goBack = () => {
    window.history.back()
  }
  const handleSecondForm = () => {
    setFormtwo(true)
    setFormone(false)
  }


  const Header = () => {
    return (
      <div className="App">
        <div className="form-container text-center">
          <div className='p-4'>
            <h2 className="main-heading text-dark mt-3">Welcome <span className="text-info">{name}</span> <br /> Participation Session</h2>
            <p className="white text-left">Follow us on Instagram and Facebook (The Rhythm And Lyrics Project) to get regular updates.
              
              Upload your <span className='text-danger'> 1-minute performance video on your page</span>. <br /> Tag us @therhythmandlyricsproject and use the hashtag #rhythmandlyricsproject on Instagram and Facebook. 
              Copy your video link from your page and submit the link here. Your share button will be enabled.
              Click share link and copy it. It is your <span className='text-danger font-weight-bold'>BUYPOINT </span> link. Your Journey start now.
            </p>
            <br />

            <button className='btn call_to-btn btn-primary' onClick={() => { setFormone(true); setHeader(false) }}>Ready to Go <FaLongArrowAltDown /></button>
            <br />
            <br />
          </div>
        </div>
      </div>
    )
  }


  if (picture) {
    return (
      <section className="contact_section pt-4 bgblue pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 text-center mt-3">
              <div className="site-logo ">
                <img src={logo} alt="site logo" className="logo" />
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="card shadow-lg border-0 rounded-lg mt-5 ">
                <div className="text-right p-3">
                  <button
                    className=" btn"
                    style={{ fontSize: 20 }}
                    onClick={() => { setUpload(false); setMain(true) }}

                  >
                    {" "}
                    <FaTimes />
                  </button>
                </div>
                <ToastContainer />


                <SubmitLink id={id} stagename={stagename} email={email} token={token} handleMain={handleMain} />


              </div>
            </div>

          </div>
          <br />
          <br />
        </div>
      </section>



    )
  }

  return (

    <>
      <section className="contact_section pt-4 bgblue pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 text-center mt-3">
              <div className="site-logo ">
                <img src={logo} alt="site logo" className="logo" />
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="card shadow-lg border-0 rounded-lg mt-5">
                <div className="text-right p-3">
                  <button
                    className=" btn"
                    style={{ fontSize: 20 }}
                    onClick={() => { setUpload(false); setMain(true) }}
                  >
                    {" "}
                    <FaTimes />
                  </button>
                </div>

                <ToastContainer />



                {header ? <Header /> : " "}
                {formone && <UploadPicture token={token} setFormtwo={handleSecondForm} />}
                {formtwo && <SubmitLink  id={id} stagename={stagename} email={email} token={token} />}





              </div>
            </div>
          </div>
        </div>
      </section>

    </>

  )
}

export default Upload