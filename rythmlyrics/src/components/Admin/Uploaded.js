import React from 'react'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

const Uploaded = () => {
  const navigate=useNavigate()

  
  

  return (
      <>
           <section className='site-section '>
                        <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="card  shadow-lg border-0 rounded-lg mt-5">
                              <div className="pt-5">
                  <h4 className="text-center main-heading  my-4"> Congratulations!!! <br /></h4>
            <h4 className="text-center main-heading  my-4"> Your upload was successfull<br /></h4>
                              </div>
                                    <div className="card-body">
                  <div className="mb-3 text-center text-muted blue">
                           <>
                        <p className=' text-center blue' style={{ fontWeight: 300 }}>Our  Moderators would get your video link ready. </p>
                        <p className=' text-center blue' style={{ fontWeight: 300 }}>Once it is ready your link would be available in your Dashboard.</p>
                          <p className=' text-center blue' style={{ fontWeight: 300 }}>Then you can start sharing voting link and video link</p>
                          </>
                    

                                      
                                  </div>
                            </div>
                                    <div className="card-footer text-center">
                                        <div className="small blue"><NavLink to="#" className="blue" onClick={navigate('/')}><FaArrowAltCircleLeft/> Back to Home</NavLink></div>
                                    </div>
                                </div>
                      </div>
                      
                                </div>
                </div>
                </section>
          

    </>
  )
}

export default Uploaded