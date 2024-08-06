import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { toast,ToastContainer } from 'react-toastify'
import axios from '../../Api/axios'



const Max_size = 2 * 1034 * 1024;

const UsersForm = () => {




    const [visible, setVisible] = useState(false)
    const [email, setEmail] = useState("")
    const [stagename, setStagename] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")
    const [status, setStatus] = useState("")
    const [file, setfile] = useState(null)
    
    
    const handleVisible = () => {
      setVisible(!visible)
    }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(file)

    if (file && file.size > Max_size) {
      
      toast.error("Error: File Size must not be more than 5MB", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
      return false;
    }
    const formData = new FormData();

    formData.append("file", file);
    formData.append("stagename", stagename);
    formData.append("password", password);
    formData.append("email", email);
    formData.append("role", role);
    formData.append("status", status);

    
    axios.post('/api/admin',
      formData
    ).then(response => {
      if (response.data.message) {
        toast.success("User Registration Successful", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      }
      else {
        throw new Error(response.data.err)
      }
        
    }).catch(error => {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    })

  }
    

  return (
    <>
      <div className="row justify-content-center">
        
                            <div className="col-lg-7 col-md-12">
              <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header"><h3 className="text-center main-heading  my-4">Create Admin User</h3></div>
                                    <div className="card-body">
              <form action="#" className=" bg-white" onSubmit={handleSubmit}>
              <div className="row form-group">
                <div className="col-md-12">
                    <label className="text-dark">Username</label> 
                    <div className='input-group'>
                    <input type="text"  name='stagename' className="form-control" value={stagename} onChange={(e) => {setStagename(e.target.value)}} required />
                        </div> 
                    </div> 
                  
                </div>
                <div className="row form-group">
                <div className="col-md-12">
                    <label className="text-dark">Email</label> 
                    <div className='input-group'>
                    <input type="email"  name='email' className="form-control" value={email} onChange={(e) => {setEmail(e.target.value)}} required />
                        </div> 
                    </div> 
                  
                </div>
               
              <div className="row form-group">
                <div className="col-md-12">
                    <label>Password</label> 
                    <div className='input-group'>
                    <input type={visible ? "text" : "password"}  name='password' className="form-control" value={password} onChange={(e) => {setPassword(e.target.value)}} required />
                    <span onClick={handleVisible}>
                      {visible ? (<FaEyeSlash size = "20" className='form-control hover'/>) : (<FaEye size="20" className='form-control hover' />)}
                    </span>
                        </div> 
                    </div> 
                  
                </div>
                <div className='row form-group'>
                  <div className='col-md-12'>
                    <label>User Role</label>
                    <div className='input-group'>
                      <select className='form-control' value={role} onChange={(e)=> setRole(e.target.value)}>
                        <option>None</option>
                        <option>Moderator</option>
                      </select>
                    </div>

                  </div>
                </div>
                <div className='row form-group'>
                  <div className='col-md-12'>
                    <label>Status</label>
                    <div className='input-group'>
                      <select  className='form-control' value={status} onChange={(e)=> setStatus(e.target.value)}>
                        <option>pending</option>
                        <option>active</option>
                      </select>
                    </div>

                  </div>
                </div>
                
                <div className="row form-group">
                <div className="col-md-12">
                    <label className="text-dark" htmlFor="password">Select Profile Pic</label> 
                    <div className='input-group'>
                    <input type="file"   className="form-control"  onChange={(e) => {setfile(e.target.files[0])}} accept='image/*' required />
                        </div> 
                    </div> 
                  
              </div>
                            
             
                <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                    
                <input type="submit" value="Create User" className="btn btn-warning btn-md blue" style={{ fontWeight:700 }} />
              
              
                  </div>
                        
                <ToastContainer/>
  
                    </form>
                    
                  </div>
                  <div className="card-footer text-center">

            </div>
          
        </div>
      </div>
          </div>
           
    </>
  )
}

export default UsersForm