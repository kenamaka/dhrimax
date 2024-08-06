import Axios  from 'axios'
import React, { useState } from 'react'
import {  NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../../Api/axios';
import {  ColorRing } from "react-loader-spinner";


function Forgot({handleReg}) {

    const [email, setData] = useState('')
    const [message, setMessage] = useState("")
    const [cancel, setCancel] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    Axios.defaults.withCredentials = true;

    const handleRecovery = (e) => {
        e.preventDefault()
        setLoading(true)
        axios.post('/api/forgot',
            {email: email}
        ).then((response) => {
            if (response.data.verify) {
                toast.error("Error sending verification Email", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            setLoading(false)
                // setServererror(response.data.error)
                return false;
            }

            else if (response.data.message) {
                setMessage(response.data.message)
                toast.error("Account Error", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
                setLoading(false)
                return false;
            }
      
            else {

                toast.success("Submited Successfully, Verification link sent to your mail", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
                navigate('/confirmation')
                
             
            }
        })
    }

    
    return (
      
      <>
                <section className='site-section'>
                        <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h4 className="text-center main-heading  my-4">Account Recovery</h4></div>
                                    <div className="card-body">
                                    <div className="mb-3 text-center text-muted blue">Enter your valid email address</div>
                                        <form onSubmit={handleRecovery}>
                                        <div className="row form-group  ">
                                            {message && <div className=' text-danger  text-center col-md-12'>{message}</div>}
                                            {cancel && <div className='text-danger text-center col-md-12'>{cancel} </div>}
                                                 </div>
                                                 <ToastContainer/>

                                        <div className="form-group">
                                        <label className=" mb-1" for="inputEmailAddress">Email</label>
                                                <input className="form-control  py-4" id="inputEmailAddress" type="email" placeholder="Enter email address" onChange={(e) => { setData(e.target.value);setMessage('') }} required/>
                                            </div>
                                        <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                            {loading ? 
                                                
                                                <ColorRing
                                                visible={true}
                                                height="80"
                                                width="80"
                                                ariaLabel="blocks-loading"
                                                wrapperStyle={{}}
                                                wrapperClass="blocks-wrapper"
                                                colors={[
                                                  "#b8c480",
                                                  "#ffc107",
                                                  "#F4442E",
                                                  "#082465",
                                                  "#429EA6",
                                                ]}
                                              />
                                                :
                                                <input type="submit" value="Recover Account" className="btn btn-warning btn-md blue" style={{ fontWeight: 700 }} />
                                            }
                                        </div><br/>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center">
                                        <div className="small blue"><NavLink to="/signup" className="blue"> Need an account? Sign up!</NavLink></div>
                                    </div>
                                </div>
                            </div>
                                </div>
                </div>
                </section>
             
        
      </>
  )
}

export default Forgot