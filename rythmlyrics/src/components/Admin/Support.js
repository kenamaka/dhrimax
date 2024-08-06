import Axios  from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { ColorRing } from 'react-loader-spinner'
import { FaPlusCircle, FaTimes } from 'react-icons/fa'
import '../Home/Popup.css'
import { useNavigate } from 'react-router-dom';

const Support = ({ setSupport,email,setClick,stagename }) => {
  const [error, setError] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
	const [loading,setLoading] = useState(false)
  const navigate = useNavigate()


  

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
   
    Axios.post('https://rhythmandlyricsproject.com/api/support', {
      message: message,
      subject: subject,
      email: email,
      stagename: stagename,
      
    
    }).then((response) => {
		if (response.data.verify) {

			toast.error("Error sending Message", {
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
		if (response.data.message){
			toast.success("Email Sent, wait for response", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
      })
      
      setSubject('')
      setMessage('')
       setLoading(false)
		}
    })

  }
  
  return (
      <>
    <section className='site-section'>
                        <div className="container">
                        <div className="row justify-content-center ">
                            <div className="col-lg-7 col-md-12">
              <div className="card shadow-lg border-0 rounded-lg">
              <div className="text-right p-3">
             <button
                    className=" btn"
                    style={{ fontSize: 20 }}
                    onClick={() => { setSupport(false); setClick(false) }}
                  >
              {" "}
              <FaTimes />
            </button>
            </div>
                
                                    <h2 className="text-center main-heading text-dark  my-4">Technical Support</h2>
      <div className="modal-body" >
            <p className=" text-center" id="myModalLabel">Our Technical Support Team (TST) is always available 24/7 to guide and respond to your questions.</p>
          </div>
         
                      
        <div className='card-body'>                      
        <form action="#" className="  text-left" onSubmit={handleSubmit}>
          <div className="row form-group text-left">
                                
                                          <div className="col-md-12 ">
          <div className='text-dark '>Email </div>
                                              
                <input
                  type="email"
                   className="form-control  text-left text-info"
                          value={email}
                           disabled
                          
                /><br />
                <div className=''>Subject </div>
                
                <ToastContainer/>
                <input
                  type="text"
                  className="  form-control"
                  name='subject'
                  value={subject}
                          onChange={(e) => { setSubject(e.target.value); setLoading(false) }}
                  required
                  />
                  <br/>
                <div className='blue'>Message </div>
                
                <textarea name="message" id="message" cols="30" rows="10" className="form-control " placeholder="Message" value={message} onChange={(e)=> {setMessage(e.target.value);setLoading(false)}} required/> <br/>
                        {loading ?
                          <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={['#b8c480', '#ffc107', '#F4442E', '#082465', '#429EA6']}
                     
                          /> :
                          <button type='submit' className="btn btn-warning  btn_on-hover" style={{ fontWeight: 700 }}>
                            Submit
                          </button>
                        }
                             
              </div>

              
            </div>

                     
                                  </form>
                                  </div>
                     
          <div>
            <div className='text-dark'>
            </div>
          </div>
                          </div>
                      </div>
                  </div>
              </div>
    </section>          
    
      
      </>
  )
}

export default Support