import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from '../../Api/axios';
import logo from "../assets/images/logow.png";

const AdminLogin = () => {

  
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [visible, setVisible] = useState("")
  const navigate = useNavigate()

  const handleVisible = () => {
    setVisible(!visible)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

axios.post("/api/adminlogin", { email, password }).then(
      (response) => {
        if (response.data.err) {
          alert("Network error or Invalid Credentials")

          return false;
        }
        else {
          navigate('/')
        }
      }
    );
  };

  return (
      <>
          
          <section className="contact_section  bgblue pb-3">
      <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 text-center mt-2">
              <div className="site-logo mt-5">
                <img src={logo} alt="site logo" className="logo" />
              </div>

              <div className="card shadow-lg border-0 rounded-lg mt-4 pt-5 p-3">
                  <h4
                    className="modal-title blue text-center"
                    style={{ fontWeight: 700 }}
                  >
                    Welcome Admin
                  </h4>
                <div className="card-body">
                  <div className="mb-3 mt-3 text-center text-muted blue">
                    <div>
                      <h5 className=" blue" style={{ fontWeight: 500 }}>
                      </h5>
                    </div>
                    <div>
                      <h6
                        className="  text-warning"
                        style={{ fontWeight: 500 }}
                      >
                      </h6>
                    </div>
                  </div>
                  <form
                    action="#"
                    className="  text-left"
                    onSubmit={handleSubmit}
                  >
                    <div className="col-md-12">

                      <div className="row form-group text-left ">
                        <input
                          type="text"
                          className="form-control pl-2"
                          placeholder="Enter your Email Address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          autofocus
                          required
                        />
                      </div>
                      <div className="row form-group">
                    <label>Password</label> 
                    <div className='input-group'>
                    <input type={visible ? "text" : "password"}  name='password' className="form-control" value={password} onChange={(e) => {setPassword(e.target.value)}} required />
                    <span onClick={handleVisible}>
                      {visible ? (<FaEyeSlash size = "20" className='form-control hover'/>) : (<FaEye size="20" className='form-control hover' />)}
                    </span>
                        </div> 
                  
                </div>
                      <div className="row form-group text-left ">
                        <input
                          className="btn mt-2 btn-success"
                          type="submit"
                          value="Let's Go"
                        />
                      </div>
                    </div>
                  </form>
                  <div className="card-footer center bg-white">
                    <h6>
                      
                      </h6>
                      <h6 className="col-12 text-center blue">
                      Copyright &copy; {new Date().getUTCFullYear()} &nbsp; All rights reserved | <NavLink to="/" className="text-Primary"> The Rhythm and Lyrics Project </NavLink>
				</h6>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <br/>
          <br/>
                  <br/><br/>
                  <br/><br/><br/><br/>
                  <br/>
        </div>
      </section>
      </>
  )
}

export default AdminLogin