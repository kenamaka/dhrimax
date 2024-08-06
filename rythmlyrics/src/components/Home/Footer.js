import React from 'react'
import { FaEnvelope, FaFacebook, FaGlobeEurope, FaInstagram, FaLinkedin, FaLocationArrow, FaMarker, FaPhone, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import logo from '../assets/images/logow.png'
import back from '../assets/images/headtwoo.jpg'

const Footer = () => {
  return (
	  <>
		        <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOut="animate_fadeOUt"
        duration={2}
      >

			  <footer className="site-footer " style={{ backgroundImage: `url(${back})` }}>
		<div className="container">
			<div className="row mb-5">
            <div className="col-md-12 text-center">
            <br />
			<div className="footer-logo-cont">
                                <NavLink to="/"><img src={logo} className="logo footer-logo" alt=""/></NavLink>
                                </div>
              <br /><br />
              
              <h4 className='text-secondary'> JOIN THE CONVERSATION ON SOCIAL MEDIA</h4>
					<p>
						<a href="https://web.facebook.com/profile.php?id=100087240624345" className="social-item" target="_blank"><span className="icon-facebook2"><FaFacebook/></span></a>
						<a href="https://twitter.com/TheRhythmandLy1" className="social-item" target="_blank"><span className="icon-twitter"><FaTwitter/></span></a>
						<a href="https://www.instagram.com/therhythmandlyricsproject" className="social-item" target="_blank"><span className="icon-instagram2"><FaInstagram/></span></a>
						<a href="https://www.tiktok.com/@rhythmandlyricsproject" className="social-item" target="_blank"><span className="icon-linkedin2"><FaTiktok/></span></a>
						<a href="https://www.youtube.com/@therhythmandlyricsproject" className="social-item" target="_blank"><span className="icon-vimeo"><FaYoutube/></span></a>
					</p>
				</div>
          </div>
          <div className="row mb-5">
				<p className="col-12 text-center text-secondary">
					Copyright &copy; {new Date().getUTCFullYear()} &nbsp; All rights reserved | The Rhythm and Lyrics Project
				</p>
			</div>
			
		</div>
			  </footer>
			  </AnimationOnScroll>


  
  
      </>
    
  )
}

export default Footer