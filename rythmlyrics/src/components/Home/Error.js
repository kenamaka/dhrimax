import React from 'react'
import { FaArrowAltCircleRight, FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Error = ({cancel,msg}) => {
  return (
      <>
                 <section className='site-section'>
                        <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="card shadow-lg border-0 rounded-lg mt-5 bg-danger">
                              <div className="pt-5">
                                  { cancel && <h4 className="text-center main-heading  my-4 " style={{ color: "white" }}> { cancel}</h4>}
                                  { msg && <h4 className="text-center main-heading  my-4 " style={{ color: "white" }}> { msg}</h4>}
                              </div>
                                    <div className="card-body">
                                  <div className="mb-3 text-center text-muted " style={{color:"white"}}>
                                      <p className=' text-center ' style={{ fontWeight: 300, color:"white"}}>Check the verification token sent to your email, or create and account</p>
                                      
                                  </div>
                            </div>
                                    <div className="card-footer text-center">
                                        <div className="small blue" style={{color:"white"}}><NavLink to="/"  style={{color:"white"}}><FaHome/> Goto to Home</NavLink></div>
                                    </div>
                                </div>
                            </div>
                                </div>
                </div>
                </section>
      </>
  )
}

export default Error