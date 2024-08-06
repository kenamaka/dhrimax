import React, { useEffect, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import Main from "./Main";
import { FaArrowLeft, FaEye, FaEyeSlash, FaHome } from "react-icons/fa";
import {  ColorRing } from "react-loader-spinner";
import './Form.css'
import login from '../assets/images/logow.png'
import axios from "../../Api/axios";

const Login = ({ handleMain, handleReg, handleForgot }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cancel, setCancel] = useState("");
  const [verify, setVerify] = useState("");
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loggedIn,setLoggedIn] = useState(false)

  Axios.defaults.withCredentials = true;

  const handleVisible = () => {
    setVisible(!visible);
  };

  const handleGoback = () => {
       window.history.back()
  }

  // if (localStorage.getItem('jwtToken')) {
  //   navigate('/')
  // }

  // email validation
  const validateEmail = (email) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      setVerify("Invalid email format");
      return false;
    }
    setVerify("");
    return true;
  };

  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    validateEmail(e.target.value);
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
try {
  const response = await axios.post('/api/login',{email,password});
  const token = response.data.token;
  localStorage.setItem('token',token);
  navigate('/')
} catch (error) {
  // console.error(error);
  // console.log(error)
}
  };

  
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      navigate('/')
    }

},[])
  

if (loggedIn){
  // return navigate('/')
  
}
  
  return (
    <>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOut="animate_fadeOUt"
        duration={1}
      >
        <div className="myform">
          <div className="col-left bgblue pb-5">
            <img src={login} alt="illustration" style={{ width: "50%",  height:"50%"}} /> 
          </div>
          
          
          <div className="col-right">
            <div className="header">
                          <NavLink className="backNav" to="#" onClick={handleGoback}>
            <svg width="1em" height="1em" viewBox="0 0 48 48">
              <path clip-rule="evenodd" d="M44 40.836c-4.893-5.973-9.238-9.362-13.036-10.168c-3.797-.805-7.412-.927-10.846-.365V41L4 23.545L20.118 7v10.167c6.349.05 11.746 2.328 16.192 6.833c4.445 4.505 7.009 10.117 7.69 16.836z" stroke="currentColor" stroke-width="4" stroke-linejoin="round" fill="none">
              </path>
            </svg>
          </NavLink>
          
            </div>
            <form className="form" onSubmit={handleSubmit}>
        
              <div className="title">
              {/* <img src={logo} className="logo " alt="brand"/> */}

                <h2 className="blue">Login</h2>
              </div>
              <div className="input-group">
                <label className="blue">E-mail </label>
                <input type="Email" value={ email} onChange={handleChange} required />
              </div>
              <div className=" text-danger  text-center col-md-12">
                            {verify}
                          </div>
              <div className="input-group">
                <label  className="blue">Password &nbsp;<span onClick={handleVisible}>
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
                <input type={visible ? "text" : "password"} id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}  required/>
              </div>
              <div className=" text-danger  text-center col-md-12">
                         <p className="small "> <strong>{cancel}</strong></p>
                        </div>
              <div className="input-end">
                <div>
              
                  <NavLink className="externalLink" to="/agree">
                    <span className="blue">Need an account? </span> Signup
                  </NavLink>
              
              </div>
                <NavLink to="/forgot">Forgot password?</NavLink>
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
                <button className="submit_btn blue" type="submit">Sign In</button>
              )}
            </form>
          </div> 
          
        </div>

      </AnimationOnScroll>
    </>
  );
};

export default Login;
