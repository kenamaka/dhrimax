import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Post from "./Post";
import signup from '../assets/images/signup.png'
import judges from '../assets/images/judges.png'
// import latest from '../assets/images/contact.png'
import contact from '../assets/images/contact.png'
import price from '../assets/images/prices.png'
import about from '../assets/images/sponsor.png'
import back from '../assets/images/shape-1.png'
import audio from '../assets/images/gingle.mpeg'
import "../App.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import Hero from "./Hero";
import Footer from "./Footer";
import Userpanel from "../Admin/Userpanel";
import AboutArea from "./AboutArea";
import Judges from "./Judges";
import Advert from "./Advert";
import Myvote from "../Admin/Myvote";
import Upload from "../Admin/Upload";
import Support from "../Admin/Support";
import Contact from "./Contact";
import logo from "../assets/images/logow.png"
import axios from "../../Api/axios";
import Dashboard from "../Admin/Dashboard";
import Admin from "../Admin/Admin";
import Content from "./Content";
import "animate.css/animate.min.css";
import { toast,ToastContainer } from "react-toastify";

const Main = () => {
  const [main, setMain] = useState(true);
  const [myvoting, setMyvoting] = useState(false);
  const [profile, setProfile] = useState("");
  const [stage, setStage] = useState("");
  const [role, setRole] = useState("");
  const [vote, setVote] = useState(false);
  const [fullname, setFullname] = useState("");
  const [stagename, setStagename] = useState("");
  const [craft, setCraft] = useState("");
  const [userdata, setUserdata] = useState(null);
  const [votes, setVotes] = useState("");
  const [email, setEmail] = useState("");
  const [socialLink, setSocialLink] = useState("");
  const [user_token, setUser_token] = useState("");
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [upload, setUpload] = useState(false);
  const [support, setSupport] = useState(false);
  const [id, setId] = useState(null);
  const [voteId, setVoteId] = useState(null);
  const drawerRef = useRef(null)
  // User Navigations
  const [dash, setDash] = useState(false);
  const [dabout, setDAbout] = useState(false);
  const [content, setContent] = useState(false);
  const [dsmj, setDSmj] = useState(false);
  const [dbjazz, setDBjazz] = useState(false);
  const [dclare, setDClare] = useState(false);
  const [dsheyi, setDSheyi] = useState(false);
  const [dnaomi, setDNaomi] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setScrolled(true);
  };
  function handleClickOut  (event)  {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setClick(false)
    }
  
  }

  document.addEventListener('mousedown', handleClickOut);
  const handleSupport = () => {
    setSupport(true)
  }

  const handleClose = () => {
    setDAbout(false)
    setDBjazz(false)
    setDSheyi(false)
    setDClare(false)
    setDSmj(false)
    setContent(false)
    // setMain(true)
    
  }
  const handleDash = () => {
    setDash(true);
    setClick(false);
  };
  const handleUpload = () => {
    setUpload(true);
    setClick(false);
  };
  const handleMain = () => {
    setMain(true);
    setClick(false);
    setVote(false);
    setDash(false);
  };

  
  const userVote = () => {
    setMyvoting(true);
  };
  const handleVote = () => {
    setVote(true);
    setMain(false)
  };
  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
      setClick(false)
    }
  };

 

axios.defaults.withCredentials = true

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({behavior:'smooth'});
  
  };

  window.addEventListener("scroll", handleScroll);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getUser(token)
    }
    window.scrollTo(0, 0);
  }, [ support,content]);
  

  const getUser = async (token) => {
    try{
      const response = await axios.get('/api/loggedin',{
        headers:{
          Authorization: `Bearer ${token}`
        }
      });
      setUserdata(response.data)

          setUserdata(response.data);
          setVotes(response.data[0].votes);
          setCraft(response.data[0].craftname);
          setProfile(response.data[0].picture);
          setStagename(response.data[0].stagename);
          setFullname(response.data[0].fullname);
          setRole(response.data[0].role);
  
          setSocialLink(response.data[0].social_link);
          setUser_token(response.data[0].token)

          setEmail(response.data[0].email);
          setId(response.data[0].id)
          

    } catch (error){
      // console.error(error)
    }
    
  };

  const handleLogout = async () => {
    setClick(false)
    localStorage.removeItem('token')
   
    window.location.reload()
    toast.success('Logged Out Successfully', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
 //Naviagations
  const User = () => {
    return (
      <>
        <li className="nav-item text-center">
          <div className={click ? "user-small " : "user-pic-container "}>
          <img src={ `../uploads/images/${profile}`} alt="profile"  className="user-pic"/>


          </div>
        </li>
        
 <li className="nav-item  btn text-light"><span style={{ fontWeight: 700 }}>Welcome <span className="text-warning"> {stagename} </span></span>&nbsp;</li>
 <li className="nav-item"><NavLink className="btn nav-link " style={{ fontWeight: 500 }} to="#" onClick={handleMain}>Home</NavLink></li>
        <li className="nav-item"><NavLink className="btn nav-link " style={{ fontWeight: 500 }} to="#" onClick={handleDash}>Dashboard</NavLink></li>

        {
          socialLink 
          ?
          ""
          : 
        <li className="nav-item"><NavLink className="btn nav-link" style={{ fontWeight: 500 }} to="#" onClick={handleUpload}>Participate</NavLink></li>
        }
       
        <li className="nav-item"><NavLink className="btn nav-link" style={{ fontWeight: 500 }} to="#" onClick={handleSupport}>24/7 Support</NavLink></li>
        <li className=" nav-item text-center"><NavLink className=" nav-link"style={{ fontWeight: 500 }}to="#"onClick={userVote}>Buypoint</NavLink></li>
        <li className=" nav-item text-center"><NavLink className=" btn btn-danger text-dark call_to-btn  nav-link"style={{ fontWeight: 500 }}to="#"onClick={handleLogout}>Logout</NavLink></li>
      </>
    )
  
}   
  const Nav = () => {
    return (
      <>
      <li className="nav-item active">
          <Link activeClass="active" to="hero" spy={true} smooth={true} offset={-100} duration={600} onClick={() => { setClick(false);handleClose() }}>
       <span className="text-light nav-link my-link">Home</span>           
      </Link>
      </li>
      <li className="nav-item">
       <Link  activeClass="active" to="judges" spy={true} smooth={true} offset={-100} duration={600}  onClick={() => { setClick(false);handleClose() }}>
        <span className="text-light nav-link my-link">Judges</span></Link>
              </li>
              <li className="nav-item">
      <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={600} onClick={() => { setClick(false);handleClose() }}>
      <span className="text-light nav-link my-link">About Us</span>
      </Link>
      </li> 
        <li className="nav-item">
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={600} onClick={() => { setClick(false);handleClose() }}>
        <span className="text-light nav-link my-link">Contact</span></Link>
              </li> 
              <li className="nav-item">
      <NavLink style={{ fontWeight: 500 }} to="/signin">
            <span className= "  text-light nav-link my-link ">Login</span>
            
       </NavLink>
        </li>
        <li className="nav-item">
      <NavLink style={{ fontWeight: 500 }} to="/agree">
            <span className= " call_to-btn btn btn-warning my-link blue"> Register</span>
            
       </NavLink>
        </li>
     
       </>
    )
  
}
  if (support) {
    return (
      <>
        <Support setSupport={ setSupport } email={email} setClick={setClick} stagename={stagename} />

      </>
    )
  }
  
  if (role === "Editor") {
    return (
      <Dashboard/>
    )
  }

  if(content) {
    
    return (
      <>
        
        <Content dclare={dclare} dabout={dabout} dbjazz={dbjazz} dsheyi={dsheyi} dsmj={dsmj} dnaomi={dnaomi} handleClose={handleClose} id="judges" />
        <Footer/>
        </>
    )
  }

  if (role === "Moderator") {
    return (
      <Admin username={stagename} profile={ profile} />
      )
    }
  
  if (myvoting) {
    return (
      <Myvote
        setVote={setMyvoting}
        setMain={setMain}
        setClick={setClick}
        fullname={fullname}
        craft={craft}
        id={id}
        email={email}
      />
    );
  }

  if (upload) {
    return (
      <Upload
        picture={profile}
        name={fullname}
        socialLink={socialLink}
        token={user_token}
        setUpload={setUpload}
        stagename={stagename}
        setMain={setMain}
        handleMain={handleMain}
        email={email}
        id={id}

      />
    )
  }

if (main)
  return (
    <>
      <audio controls autoPlay preload="auto">
        <source src={ audio} type="audio/mpeg"/>
      </audio>
      <nav className={scrolled ? "header header-bg " : "header"} ref={drawerRef}>
          <div className="container">
          <div className={scrolled ? "site-logo-small " : "site-logo "}>
                                <NavLink to="/" onClick={handleMain}><img src={logo} className="logo" alt=""/></NavLink>
                                </div>

          <ul className={click ? "navbar active" : "navbar"}>

{userdata ? <User/> : <Nav/>}
            &nbsp;
                
            </ul>

            <div className="dropdown" onClick={handleClick}>
              {click ? (
                <FaTimes size={25} style={{ color: "#fff" }} />
              ) : (
                <FaBars size={25} style={{ color: "#fff" }} />
              )}
            </div>
          </div>
        </nav>
        <div className={ click ? 'overlay show': ""} ></div>
    
      {dash ? (
        <Userpanel
          stage={stage}
          socialLink={socialLink}
          stagename={stagename}
          support={handleSupport}
          id={id}
          token={user_token}
        />
      ) : (
        <>
            <Hero  setMain={setMain} user={userdata} id="hero" click={ click} />
            <AnimationOnScroll animateIn='animate__fadeIn' animateOut='animate_fadeOUt' duration={4}>
            
              <section className="client_section  layout_padding white" style={{ backgroundImage: `url(${back})` }}>
                          <div className='container'>
                      <div className="explore " >
                          <h2 className="section_tittle sectionhd blue">
                              Explore <br/>by Category <hr/></h2>
                                  <div className="grid">
                      <a className="col1 call_nav" href="#">
                 <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={600}  onClick={() => setClick(false)}>
                        
                                          <div className="card navblue">
                                              <img src={about} alt="About Us" width="100" />
                                                  <p className='text-white' style={{ fontWeight:400 }}> About Us</p>
                                          </div>
                                          </Link>
                      </a>
                      
                <a className="col2 call_nav" href="#">
                 <Link activeClass="active" to="judges" spy={true} smooth={true} offset={-100} duration={600}  onClick={() => setClick(false)} >
                        
                        <div className="card">
                                          <img src={judges} alt="Our Judges" />
                                          <p className='blue' style={{ fontWeight:400 }}>Our Judges</p>
                          </div>
                      </Link>
                          
                         </a>
                                      <a className="col3 call_nav" href="">
                 <Link activeClass="active" to="advert" spy={true} smooth={true} offset={-100} duration={600}  onClick={() => setClick(false)}>

                                          <div className="card navigation" >
                                              <img src={price} alt="Our Price" />
                                              <p className='blue' style={{ fontWeight:400 }}>Grand Price</p>
                                          </div>
                      </Link>

                                      </a>

                      
                    {/* <a className="col4 call_nav " href="#">
                 <Link activeClass="active" to="post" spy={true} smooth={true} offset={-100} duration={600}  onClick={() => setClick(false)}>

                                          <div className="card navigation">
                                              <img src={latest} alt="Latest Upload" />
                                              <p className='blue' style={{ fontWeight:400 }}>Gallery</p>
                                          </div>
                      </Link>

                                      </a> */}
                      
                      <a className="col4 call_nav " href="#">
                 <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={600}  onClick={() => setClick(false)}>

                                          <div className="card navigation">
                                              <img src={contact} alt="Latest Upload"  />
                                              <p className='blue' style={{ fontWeight:400 }}>Contact Us</p>
                                          </div>
                      </Link>

                                      </a>
                      {userdata ? ""
                        :
                                            
                        <a className="col5 call_nav" href="/">
                          <NavLink to="/agree">

                            <div className="card navigation">
                              <img src={signup} alt="Register Now" />
                              <p className='blue' style={{ fontWeight: 400 }}>Register Now</p>
                            </div>
                          </NavLink>

                        </a>
                      }
                                  </div>
                                  </div>
                      </div>
                          </section>
          </AnimationOnScroll>
            <AboutArea id="about" setDAbout={setDAbout} setContent={ setContent} />
          
            <Judges id="judges" setContent={ setContent} setDSmj = {setDSmj} setDAbout = {setDAbout} setDSheyi = {setDSheyi} setDBjazz = {setDBjazz} setDClare = {setDClare} setDNaomi={setDNaomi} />
              <Advert id="advert" fullname={fullname} />
            {/* <Post id="post" /> */}
              <Contact id="contact" />
          <br />
          <br />
          <br />
        </>
      )}
        <ToastContainer/>

        <Footer vote={handleVote} />
    </>
    )
  
};

export default Main;
