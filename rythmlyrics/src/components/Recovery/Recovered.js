import React from 'react'
import { FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import SecFooter from '../SecFooter'

const Recovered = () => {
  return (
   
    <div id="layoutAuthentication">
    <div id="layoutAuthentication_content">
        <main>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                              <div className="card-header"><h3 className="text-center font-weight-light my-4">Account Activated</h3></div>
                            <div className="card-body align-item-center">
                                <div className="small mb-3 text-muted">Click login, enter your valid user details, select your prefered plan and start Trading.</div>
                                <form>
                                   
                                    <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                       
                                    <button className="btn btn-info px-4 py-2 btn-sm smoothscroll"><NavLink to="/login" className='btncolor'>Login</NavLink> </button>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer text-center">
                                <div className="small"><NavLink to="/"> Back to  <FaHome size="20"/></NavLink></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
      </div>
      <SecFooter/>
    </div>

  )
}

export default Recovered