import React from 'react'
import { FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Success = () => {
  return (
      <>
               <section className='site-section'>
                        <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                              <div className="card-header">
                                  <h4 className="text-center main-heading  my-4">Verification Email Sent</h4>
                                  <p className='blue text-center'>You are a Step Away</p>
                              </div>
                                    <div className="card-body">
                                  <div className="mb-3 text-center text-muted blue">
                                      <h6 className=' text-center blue' style={{ fontWeight: 500 }}>A Validation link has been sent to your Email </h6>
                                      
                                  </div>
                            </div>
                                    <div className="card-footer text-center">
                                        <div className="small blue"><NavLink to="/" className="blue"><FaHome/> Home</NavLink></div>
                                    </div>
                                </div>
                            </div>
                                </div>
                </div>
                </section>
      </>
  )
}

export default Success