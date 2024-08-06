import React from 'react'
import { FaEnvelope, FaFacebook, FaGlobeEurope, FaInstagram, FaLinkedin, FaLocationArrow, FaMarker, FaPhone, FaTwitter } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const UserFooter = ({picture,fullname,craft,support,handleVote}) => {
  return (
      <>
          <AnimationOnScroll animateIn='animate__fadeIn' animateOut='animate_fadeOUt' duration={2}>
      
      <footer className="site-footer ">
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-5 mt-5">
              <h2 className="footer-heading  mb-4 text-white" style={{ fontWeight: 450 }}>About Us</h2>
                  <p className='text-secondary'> RHYTHM & LYRICS PROJECT is a music reality show with a nitche to project musicians, through series of auditions and stage performance in an in group
                    sergregation performance.
                  </p>
               <div className="row text-center mb-5">
              <a href="" className='social-item'>
                    <FaFacebook/>
              </a>
              <a href="" className='social-item'>
                    <FaTwitter/>
              </a>
              <a href="" className="social-item">
                    <FaLinkedin/>
              </a>
              <a href= ""className="social-item">
                    <FaInstagram/>
              </a>
            </div>
                </div>
             
            <div className="col-md-3 ml-auto mt-5">
              <h2 className="footer-heading mb-4 text-white" style={{ fontWeight:450 }}>Features</h2>
              <ul className="list-unstyled ">
                <li><NavLink to="#" className='text-warning'>Home</NavLink></li>
                <li><NavLink to="#"  className='text-warning'onClick={handleVote}>Vote</NavLink></li>
              </ul>
            </div>
                <div className="col-md-3 mt-5">
                  
                  <h2 className="footer-heading mb-4 text-white" style={{ fontWeight:450 }}>Your Account</h2>
                  <ul className='list-unstyled'>
                <li><NavLink to="#" className='text-warning' onClick={() =>support(true)}>24/7 Support</NavLink></li>
                </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-5">
        <div className="info_contact">
              <div className='d-flex'>
                                 <img className="profile" src={`../uploads/images/${picture}`} alt="profile picture" />
                                 <div className = "col">
                   <h5 className="text-light">{ fullname}</h5>
                   <h6 className="text-warning">{ craft}</h6>
                                     </div>
                </div>
           
          </div>
         
        </div>
      </div>
      </div>
      <div className="col-md-12">
          <div className="credit mt-5 pt-5 mb-2">
          <p className='text-secondary'>
          
          Copyright &copy;{new Date().getUTCFullYear()} All rights reserved 
         
          </p>
          </div>
        </div>
        </footer>
        </AnimationOnScroll>
      </>
  )
}

export default UserFooter