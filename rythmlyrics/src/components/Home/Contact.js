import { ToastContainer, toast } from 'react-toastify';
import React, { useState } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FaAddressBook, FaEnvelope, FaFax, FaPhone, FaRegEnvelope } from 'react-icons/fa'
import { ColorRing } from 'react-loader-spinner'
import axios from '../../Api/axios';


const Contact = ({ id }) => {
	const [data, setData] = useState({
		email: '',
		message: '',
		subject: '',
		phone: '',
		name: ''
	})
	const [loading,setLoading] = useState(false)

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	  };

	const handleSubmit = (e) => {
		e.preventDefault()
		setLoading(true)
	

		axios.post('/api/contact', {
			email: data.email,
			message: data.message,
			subject: data.subject,
			phone: data.phone,
			name: data.name
		}
	).then  ((response) => {
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
			setData({
				email: '',
		        message: '',
		        subject: '',
		        phone: '',
		        name: ''

			})
          setLoading(false)
		}
		
	})


		
	

	}
  return (
    <>
					  <AnimationOnScroll animateIn="animate__slideInUp" animateOut="animate__fadeOut" animateOnce={true} duration={1}>       


<section className="site-section" id ={id}>
		<div className="container">
			<div className="row">
				<div className="col-md-12 mb-5">
        <div className="heading_container">
            <strong>
      <h2 className="main-heading blue ">
										  Sponsorship and Enquiries<hr />
              </h2>
              </strong>
      </div>
					  </div>
					  
				<div className="col-md-7 mb-5 mb-md-0">
					
							  <form action="" className="site-form" onSubmit={handleSubmit}>
								  
						<div className="form-group">
							<input type="text" name='name' className="form-control px-3 py-4" placeholder="Your Name" value={data.name} onChange={handleChange} required/>
									  </div>
									  
						<div className="form-group">
								  <input type="email" name='email' className="form-control px-3 py-4" placeholder="Your Email" value={ data.email} onChange={handleChange} required/>
						</div>
							  <div className="form-group">
							<input type="text" name='subject' className="form-control px-3 py-4" placeholder="Subject" value={data.subject} onChange={handleChange} required/>						</div>
						<div className="form-group mb-5">
							<textarea className="form-control px-3 py-4"cols="30"  name='message' rows="10" placeholder="Write a Message" value={data.message} onChange={handleChange} required></textarea>
						</div>
							  <div className="form-group">
							  {
                          loading ?
                     
                          <ColorRing
                          visible={true}
                          height="80"
                               width="80"
                                 ariaLabel="blocks-loading"
                          wrapperStyle={{}}
                          wrapperclassName="blocks-wrapper"
                          colors={['#b8c480', '#ffc107', '#F4442E', '#082465', '#429EA6']}
                          
                        />    : 
							<input type="submit" className="call_to-btn btn-warning blue  px-4 py-3" value="Send Message"/>
                      }
						</div>
					</form>
							  </div>

				<div className="col-md-5 pl-md-5">
					<h3 className="mb-5 blue">Contact Us</h3>
					<ul className="site-contact-details">
						<li>
							<span className="text-uppercase blue">   Email</span>
							<span className="blue"><FaEnvelope/>  contact@rhythmandlyricsproject.com</span>
						</li>
						<li>
							<span className="text-uppercase ">Phone</span>
							<span className="blue"><FaPhone/>  +2348093948949</span>
						</li>
						<li>
							<span className="text-uppercase">Fax</span>
							<span className="blue"><FaFax/>  +234706058066 </span>
						</li>
						<li>
							<span className="text-uppercase">Address</span>
                  <span className="blue">
                  <FaAddressBook /> 34, Kayode Shenowo Street, Ifako Ijaiye, Ogba, Ikeja, Lagos.<br />
							
                  </span>
						</li>
					</ul>
				</div>
			</div>
		</div>
			  </section>
			  </AnimationOnScroll>
			

    </>
  )
}

export default Contact