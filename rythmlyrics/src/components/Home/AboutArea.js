import React from 'react'
import { AnimationOnScroll } from "react-animation-on-scroll";
import { NavLink } from 'react-router-dom';
import about from "../assets/images/blog_shape.png";
import back from '../assets/images/headtwoo.jpg'





const AboutArea = ({id,setDAbout,setContent}) => {
  return (
      <>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOut="animate_fadeOUt"
        duration={2}
      >
        <div className="about-area  bgblue section-padding30 " id = {id} >
          <div className="container">
            <div className="row justify-content-between">
              {/* <div className=" col-md-6">
                <div className="section-heading">
                  <h2 className="text-light">
                    <strong>
                      YOU ARE BORN FOR GREATNESS, YOU ARE TALENTED
                      <span className="text-warning">.</span>{" "}
                    </strong>
                  </h2>
                  <p className="lead text-light">
                  We are aimed at creating synergy, visibility, and show casing great Talents.
                  Bringing People of all tribe and background together.
                    Lets make great marks through the sand of time.
                    It's Time for Greatness.
                  </p>
                  <br />
                  <br />
                    <NavLink to="#" className="call_to-btn btn-warning blue" onClick={() => { setContent(true); setDAbout(true);}} >
                    Read More +
                    </NavLink>
                </div>
              </div>

              <div className=" col-md-6">
                <div className="about-caption ">
                  <h3>
                    You can’t use up creativity. The more you use, the more you
                    have in your signifant mind.
                  </h3>
                  <p className="pera1">
                    <span>MR FAVOUR</span> Music Producer
                  </p>
                  <div className="experience">
                    <div className="year">
                      <span>07</span>
                    </div>
                    <div className="year-details">
                      <p>
                        YEARS OF
                        <br /> PRODUCTIVITY
                      </p>
                    </div>
                  </div>

                </div>
              </div> */}
                         <div className=" col-md-6">
                <div className="section-heading">
                  <h2 className="text-light">
                    <strong>
                      YOU ARE BORN FOR GREATNESS, YOU WERE CREATED FOR THIS
                      <span className="text-warning">.</span>{" "}
                    </strong>
                  </h2>
                  <p className="lead text-light">
                  The minute you think of giving up; in that same moment you should think of the reasons why you held on so long!

Launch out your reasons/ dreams into the thin air and ultimately Greatness, Global recognition and Vsibility awaits you...

You can get to the other side of life, but you've got to be intentional, exceptional and expressional.

Change the plan if it is not working out, but never change the *goal* .

Brace up and give it a shot now. Come on! get started here. 

 *The button is enabled.* 
                  </p>
                  <br />
                  <br />
                    <NavLink to="#" className="call_to-btn btn-warning blue" onClick={() => { setContent(true); setDAbout(true);}} >
                    Read More +
                    </NavLink>
                </div>
              </div>

              <div className=" col-md-6">
                <div className="about-caption ">
                  <h3>
                    You can’t use up creativity. The more you use, the more you
                    have in your signifant mind.
                  </h3>
                  <p className="pera1">
                    <span>C.E.O DRHIHMAKX </span> 
                  </p>
              

                </div>
              </div>
            </div>
          </div>

          <div className="about-shape d-none d-xl-block">
            <img src={about} alt="" />
          </div>
        </div>
      </AnimationOnScroll>

      </>
  )
}

export default AboutArea