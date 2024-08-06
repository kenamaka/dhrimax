import axios from 'axios'
import Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Congrats from '../Home/Congrats'
import Error from '../Home/Error'
import Unknown from '../Unknown'

const Recovery = () => {
    const [password, setPassword] = useState("")
  
    const [cancel, setCancel] = useState(false)
    const [success, setSuccess] = useState(false)
    const [msg, setMsg] = useState('')
  const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [visible, setVisible] = useState(false)
    const location = useLocation()
  const userid = location.pathname.split('/')[2];
  const navigate = useNavigate()
    
    const handleVisible = () => {
        setVisible(!visible);
    }
    
  const handleSubmit = (e) => {
    e.preventDefault()

    if (password.length < 8) {
      setMessage("Password must be 8 characters or more")
      return false;
    }
    
      e.preventDefault()
        axios.put('/api/reset', {
        email,
        password
        
      })
        .then((response) => {
          if (response.data.message) {
            setSuccess(true)
            setMsg(response.data.message)
        }
        }) 
    };

  
  useEffect(() => {
    const res = axios.get(`/api/recovery/${userid}`)
      .then((response) => {

        if (response.data.error) {
          setCancel(true)
          setMsg(response.data.error)

          
        }
        setEmail(response.data[0].email)
         
    })
  },[]
  )
  if (cancel) {
    return <Error msg={msg} />
    }

  if (success) {
    return <Congrats msg={ msg} />
  }
  return (
      <>
          <section className='site-section'>
                 <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7 col-md-12">
              <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header"><h3 className="text-center main-heading  my-4">Password Reset</h3></div>
                
                                    <div className="card-body">
            

            <form action="#" className="p-2 bg-white" onSubmit={handleSubmit}>
            <div className="row form-group  ">
                  <div className=' text-danger  text-center col-md-12'>{ message }</div>
              </div>
                  
              <div className="row form-group">
                
                <div className="col-md-12">
                    <label className="text-dark" htmlFor="password">Enter New Password</label> 
                    <div className='input-group'>
                    <input type={visible ? "text" : "password"} id="password" name='password' className="form-control" value={password} onChange={(e) => {setPassword(e.target.value)}} required />
                    <span onClick={handleVisible}>
                      {visible ? (<FaEyeSlash size = "20" className='form-control hover'/>) : (<FaEye size="20" className='form-control hover' />)}
                    </span>
                        </div> 
                    </div> 
                  
              </div>
                            
             
                <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                    
                <input type="submit" value="Reset Password" className="btn btn-warning btn-md blue" style={{ fontWeight:700 }} />
              
              
                  </div>
                        
                
  
                    </form>
                    
                  </div>
                  <div className="card-footer text-center">
                                        <div ><NavLink to="/" className="small text-info"><FaArrowLeft/> Back to Home </NavLink></div>
                                    </div>
          
        </div>
      </div>
          </div>
          </div>
          </section>
    </>
  )
}

export default Recovery