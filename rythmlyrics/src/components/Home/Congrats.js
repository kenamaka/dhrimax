import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaContao, FaSign } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Congrats = ({ message, msg }) => {
  return (
    <>
         <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOut="animate_fadeOUt"
        duration={2}
      >

      
          <section className='site-section'>
                        <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                              <div className="pt-5">
                  {message && <h4 className="text-center main-heading  my-4"> Congratulations!!! <br />{message}</h4>}
                  {msg && <h4 className="text-center main-heading  my-4"> Account Recovery was successfull <br />{msg}</h4>}
                              </div>
                                    <div className="card-body">
                                  <div className="mb-3 text-center text-muted blue">
                    {message && <p className=' text-center blue' style={{ fontWeight: 300 }}>Login in to your account, upload 60sec performance art. Let's meet in the Shed.  </p>}
                    {msg && <p className=' text-center blue' style={{ fontWeight: 300 }}>Welcome back, go to login page and enter valid credentials.</p>}
                                      
                                  </div>
                            </div>
                                    <div className="card-footer text-center">
                                        <div className="small blue"><NavLink to="/" className="blue"><FaArrowAltCircleLeft/> Back to Home</NavLink></div>
                                    </div>
                                </div>
                            </div>
                                </div>
                </div>
        </section>
        </AnimationOnScroll>
    </>
  )
}

export default Congrats