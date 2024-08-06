import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import signup from '../assets/images/logow.png'
import axios from "../../Api/axios";
import { Circles, ColorRing } from 'react-loader-spinner'
import {
  FaEye,
  FaEyeSlash,
  FaHome,
} from "react-icons/fa";
import "../App.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Registration = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [cancel, setCancel] = useState("")
  const [verify, setVerify] = useState("");
  const [email, setEmail] = useState("")
  const [confirm, setConfirm] = useState("")
  const [loading, setLoading] = useState(false)
const [loggedIn,setLoggedIn] = useState(false)
  const [data, setData] = useState({
    fullName: "",
    stageName: "",
    craftName: "",
    stateofOrigin: "",
    passWord: "",
    phoneNumber: "",
    whatsappNumber: "",
    nationality: "",
  });



  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    setLoading(false)
    setCancel('')
  };
  const handleVisible = () => {
    setVisible(!visible);
  };
  const validateEmail = (email) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      setVerify('Invalid email format');
      return false;
    }       
    setVerify('');
    return true;
  };

  const handleEmail = (e) => {
    e.preventDefault()
    setEmail(e.target.value);
    validateEmail(e.target.value);
    setCancel('')
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();

    // form validation

    setLoading(true)

    if (data.passWord.length < 8) {
      setCancel("Password must be 8 characters or more");
    setLoading(false)

      return false;
    } else {
      setCancel("");
    }

    if (data.fullName.length < 8) {
      setCancel("must be More than 8 characters");
    setLoading(false)

      return false;
    } else {
      setCancel("");
    }

    if (data.phoneNumber.length !== 11) {
      setCancel("Mobile Number must be 11 digits");
    setLoading(false)

      return false;
    } else {
      setCancel("");
    }

    if (data.whatsappNumber.length !== 11) {
      setCancel("Whatsapp Number must be 11 digits");
      setLoading(false)

      return false;
    } else {
      setCancel("");
    }

    

    axios
      .post("/api/register", {
        fullname: data.fullName,
        stagename: data.stageName,
        emailadd: email,
        craftname: data.craftName,
        stateoo: data.stateofOrigin,
        password: data.passWord,
        phonenum: data.phoneNumber,
        whatsappnum: data.whatsappNumber,
        nationality: data.nationality,
      
      })
      .then((response) => {
        if (response.data.error) {
          setCancel(response.data.error);
          setLoading(false)
          setVerify("")
          setConfirm('')

          return false;
        }
        if (response.data.verify) { 
          setConfirm(response.data.verify)
          setCancel('')
          setLoading(false)
          return false
        }
          else {

          setMessage(response.data.message);
          navigate('/confirmation')

        }
      });
  };

  const goBack = () => {
    window.history.back()
  }


useEffect(() => {
  const token = localStorage.getItem('token')
  if (token){
    navigate('/')
  }

},[])
  
if (loggedIn){
  return navigate('/')
}
  return (
    <>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOut="animate_fadeOUt"
        duration={3}
      >
        <div className="myform signup ">

          <div class="col-left  pb-5">
              <img src={signup} style={{ width: "50%", height: "50%" }} alt="illustration" />
        </div>
          <div class="col-right">
            <div class="header">
            <NavLink class="backNav" to="/" >
          <svg width="1em" height="1em" viewBox="0 0 48 48" className="notfixed">
            <path clip-rule="evenodd" d="M44 40.836c-4.893-5.973-9.238-9.362-13.036-10.168c-3.797-.805-7.412-.927-10.846-.365V41L4 23.545L20.118 7v10.167c6.349.05 11.746 2.328 16.192 6.833c4.445 4.505 7.009 10.117 7.69 16.836z" stroke="currentColor" stroke-width="4" stroke-linejoin="round" fill="none">
            </path>
          </svg>
        </NavLink>
        </div>
          <form class="form" onSubmit={handleSubmit}>
            <div class="title">
                <h2 className="blue">Sign Up</h2>
            </div>
              <div class="input-group">
              <label  className="blue">Full Name</label>
                <input type="text" name="fullName" value={ data.fullName} onChange={handleChange} required />
            </div>
              <div class="input-group">
                <label className="blue">Stage Name</label>
                <input type="text" name="stageName" value={ data.stageName} onChange={handleChange} required />
          </div>
        
              <div class="input-group">
                <label for="category" className="blue">Category</label>
                 <select name="craftName"   value={data.craftName} 
                              
                            onChange={handleChange} required>
                      <option value="Drummer">Drummer</option>
                      <option value="Guitarist">Guitarist</option>
                      <option value="Violinist">Violinist</option>
                      <option value="Vocalist">Vocalist</option>
                      <option value="Base Guitarist">Base Guitarist</option>
                  <option value="Saxophonist">Saxophonist</option>
                  <option value="Trumpeter">Trumpeter</option>
              <option value="Keyboardist">Keyboardist</option>
                  
                  
                    </select>
              </div>
              <div class="input-group">
                <label for="email" className="blue">State of Origin</label>
              <input type="text" name="stateofOrigin" value={data.stateofOrigin} onChange={handleChange}  required/>
              </div>
              
              <div class="input-group">
                <label for="email" className="blue">Nationality</label>
              <input type="text" name="nationality" value={data.nationality} onChange ={handleChange} required />
              </div>
              <div class="input-group">
                <label for="phone" className="blue">Phone number</label>
                <input type="number" name="phoneNumber" value={ data.phoneNumber} onChange={handleChange} required />
              </div>
              <div class="input-group">
                <label for="phone" className="blue">Whatsapp number</label>
                <input type="number" name="whatsappNumber" value={ data.whatsappNumber} onChange={handleChange} required />
            </div>
              <div class="input-group">
                <label for="email" className="blue">E-mail</label>
              <input type="email" name="email"  value={email} onChange = {handleEmail} required />
              </div>
              <div class="input-group">
                <label for="password" className="blue">Password &nbsp;  <span onClick={handleVisible}>
                {visible ? (
                                <FaEyeSlash
                                  size="25"
                                  className="form-control1 hover"
                                />
                              ) : (
                                <FaEye
                                  size="25"
                                  className="form-control1 hover"
                                />
                  )
                  }
        </span>
          </label>
                <input type={visible ? "text" : "password"} name="passWord" value={ data.passWord} onChange={handleChange} required />
          </div>
          <div className="input-end">
                <div>
              
                  <NavLink className="externalLink" to="/signin">
                    <span className="blue">Have an account? </span> Signin
                  </NavLink>
              
              </div>
                <NavLink to="/"> <FaHome/> Back to Home</NavLink>
              </div>
     
          

              <div className=" form-group d-flex    "> 
                        {cancel &&
                          <div className=" text-danger  text-center col-md-12" style={{ fontWeight: 600 }}>
                            {cancel}
                          </div>
                        }
                        {confirm &&
                         <div className=" text-danger  text-center col-md-12" style={{ fontWeight: 600 }}>
                         {confirm}
                       </div>
                        }
                    </div>
              {loading ? (
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
              ) : (
              
                <button class="submit_btn blue" type="submit">Let’s Go</button>
              )}
          </form>
          </div>
          </div>
      </AnimationOnScroll>
    </>
  );
};

export default Registration;
