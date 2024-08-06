import React, { useEffect, useState } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FaArrowAltCircleRight, FaPlay, FaRegCircle, FaRegPlayCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import headerOne from "../assets/images/headone.jpg";
import headerTwo from "../assets/images/headtwo.jpg";
import headerThree from "../assets/images/headthree.jpg";
import Typed from 'react-typed';


const Hero = ({user,id,click}) => {

  const [activeIndex, setActiveIndex] = useState(0);

  const sliderElements = [
    <AnimationOnScroll
    animateIn="animate__fadeIn"
    animateOut="animate_fadeOUt"
    duration={1}
    >
      
    <div className={click ? "site-hero  site-draw": "site-hero"} style={{ backgroundImage: `url(${headerOne})` }} id={id}>
  <div class="container">
  <div class="row align-items-center justify-content-center">
    <div class="col-md-10 text-center pt-5 header-note">

              <h1>
                A Platform for Synergy      
      
                <strong class="d-block">
                  <span className="text-warning">One </span>
                  Big House
                </strong>
              </h1>
                <p class="letter-spacing">
                  For Enhanced creative minds
                  </p>
            
            <div style={{ marginTop: 40 }} className="text-center">
            {user ? "" :
            
                <button className="call_to-btn btn-warning blue">
            <NavLink
                  className="text-light headertext blue"
                  to="/agree"
                  style={{ fontWeight: 700 }}
                >
              Get Started <FaRegPlayCircle/>
                </NavLink>
              </button>
              }
              </div>
    </div>
  </div>
</div>
    </div>
    </AnimationOnScroll>,
     <AnimationOnScroll
     animateIn="animate__fadeIn"
     animateOut="animate_fadeOUt"
     duration={2}
   >
     <div
       className={click ? "site-hero  site-draw": "site-hero"}
         style={{ backgroundImage: `url(${headerTwo})` }}
         id={id}
         
     >
   <div class="container">
   <div class="row align-items-center justify-content-center">
     <div class="col-md-10 text-center pt-5 header-note">

               <h1>A Platform for Champions<strong class="d-block"><span className="text-warning">One</span> Big Audience</strong></h1>
               <p class=" letter-spacing">
                 Entrusted with Great Potentials
                 </p>
             <div style={{ marginTop: 40 }} className="text-center">
             
             {user ? "" :
            
            <button className="call_to-btn btn-warning blue">
        <NavLink
              className="text-light headertext blue"
              to="/agree"
              style={{ fontWeight: 700 }}
            >
          Get Started <FaRegPlayCircle/>
            </NavLink>
          </button>
          }
               </div>
     </div>
   </div>
 </div>
     </div>
    </AnimationOnScroll>,
      <AnimationOnScroll
      animateIn="animate__fadeIn"
      animateOut="animate_fadeOUt"
      duration={2}
    >
      <div
        className={click ? "site-hero  site-draw": "site-hero"}
        style={{ backgroundImage: `url(${headerThree})` }}
        id={id}
        >
          
    <div class="container">
    <div class="row align-items-center justify-content-center">
      <div class="col-md-10 text-center pt-5 header-note">
        <h1>A Platform for Greatness<strong class="d-block"><span className="text-warning">One</span> Sound</strong></h1>
        <p class="  letter-spacing">

           Sweet Symphony born from Unmatched Excellence
          </p>
                  <div style={{ marginTop: 40 }} className="text-center">
              
              {user ? "" :
            
            <button className="call_to-btn btn-warning blue">
        <NavLink
              className="text-light headertext blue"
              to="/agree"
              style={{ fontWeight: 700 }}
            >
          Get Started <FaRegPlayCircle/>
            </NavLink>
          </button>
          }
        
                </div>
      </div>
    </div>
  </div>
      </div>
    </AnimationOnScroll>,
  ]
  useEffect(() => {
    const sliderId = setInterval(() => {
      setActiveIndex(prevIndex => prevIndex === sliderElements.length - 1 ? 0 : prevIndex + 1);
    }, 5000);

    return () => clearInterval(sliderId);
   
  },[sliderElements.length]
  )

  return (
      <>
{sliderElements[activeIndex]};
 
      
      </>
  )
}

export default Hero