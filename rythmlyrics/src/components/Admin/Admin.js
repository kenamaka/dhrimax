import React, { useEffect, useRef, useState } from "react";
import { Fa500Px, FaAccusoft, FaBars, FaBriefcase, FaClipboard, FaClipboardCheck, FaClosedCaptioning, FaCreativeCommonsSamplingPlus, FaDotCircle, FaPlusCircle, FaReceipt, FaRegAddressCard, FaRegHandPointLeft, FaSearch, FaStop, FaTimes, FaUser, FaUserCircle, FaUserTag, FaUserTimes, FaVial, FaVimeo, FaVimeoSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Admin.css";
import admin from '../assets/images/judge3.png'
import axios from "../../Api/axios";
import Users from "./content/Users";
import Active from "./content/Active";
import Stageone from "./content/Stageone";
import Stagetwo from "./content/Stagetwo";
import Final from "./content/Final"
import { ToastContainer, toast } from 'react-toastify';
import Found from "./content/Found";

const Admin = ({profile,username}) => {

  const [click, setClick] = useState(false);
  const [userpage, setUserpage] = useState(true);
  const [activepage, setActivepage] = useState(false);
  const [stage1page, setStage1page] = useState(false);
  const [stage2page, setStage2page] = useState(false);
  const [finalpage, setFinalpage] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [data, setData] = useState('');
  const [found, setFound] = useState([]);
  const [foundpage,setFoundPage] = useState(false)

  // navigation

  const handleUsers = () => {
    setUserpage(true)
    setClick(!click)
    setActivepage(false)
    setStage1page(false)
    setStage2page(false)
    setFinalpage(false)
    setFoundPage(false)

  }
  const handleActive = () => {
    setUserpage(false)
    setClick(!click)
    setActivepage(true)
    setStage1page(false)
    setStage2page(false)
    setFinalpage(false)
    setFoundPage(false)

  }
  const handleStage1 = () => {
    setUserpage(false)
    setClick(!click)
    setActivepage(false)
    setStage1page(true)
    setStage2page(false)
    setFoundPage(false)
    setFinalpage(false)
  }
  const handleStage2 = () => {
    setUserpage(false)
    setClick(!click)
    setActivepage(false)
    setStage1page(false)
    setStage2page(true)
    setFinalpage(false)
    setFoundPage(false)

  }
  const handleFinal = () => {
    setUserpage(false)
    setClick(!click)
    setActivepage(false)
    setStage1page(false)
    setStage2page(false)
    setFinalpage(true)
    setFoundPage(false)

  }
  const handleFound = () => {
    setFoundPage(true)
    setUserpage(false)
    // setClick(!click)
    setActivepage(false)
    setStage1page(false)
    setStage2page(false)
    setFinalpage(false)
  }
  
  
  const handleLogout = async () => {
    setClick(false)
    localStorage.clear()
      toast.success("Logged out successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })

      window.location.reload()

  };
  const drawerRef = useRef(null)
  const [active,setActive] = useState([])
  const [users,setUsers] = useState([])
  const [stage1,setStage1] = useState([])
  const [stage2,setStage2] = useState([])
  const [final, setFinal] = useState([])
  
  const[numUsers,setNumusers] = useState(null)
  const[numActive,setNumActive] = useState(null)
  const[numStage1,setNumStage1] = useState(null)
  const[numStage2,setNumStage2] = useState(null)
  const[numFinal,setNumFinal] = useState(null)

  const handleClick = () => {
    setClick(!click);
  }

  function handleClickOut  (event)  {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      setClick(false)
    }
  
  }

  
  document.addEventListener('mousedown', handleClickOut);

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({behavior:'smooth'});
  
  };

  window.addEventListener("scroll", handleScroll);



  const handleSearch = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.get(`/api/search?term=${data}`);
      
      setFound(response.data);
      handleFound()

    } catch (error) {
    }
  };





  useEffect(() => {
    // all registered users
    const resUser = axios.get('/api/users')
      .then((response) => {
        if (response) {
          setUsers(response.data)
          setNumusers(response.data.length)
        }
        else {
          throw new Error(response.data.error)
        }
      })
      .catch((error) => {
      })
    
    // all users who have successfully uploaded their video
      const resActive = axios.get('/api/active')
      .then((response) => {
        if (response) {
          setActive(response.data)
          setNumActive(response.data.length)

        }
        else {
          throw new Error(response.data.error)
        }
      })
      .catch((error) => {
      })
    
    //users whose vote is >= 50
      const resStageone = axios.get('/api/stage1')
      .then((response) => {
        if (response.data) {
          setStage1(response.data)
          setNumStage1(response.data.length)
        }
        else {
          throw new Error(response.data.error)
        }
      })
      .catch((error) => {
      })
    
    // users whose vote is >=100
      const resStagetwo = axios.get('/api/stage2')
      .then((response) => {
        if (response.data) {
          setStage2(response.data)
          setNumStage2(response.data.length)
        }
        else {
          throw new Error(response.data.error)
        }
      })
      .catch((error) => {
      })
    
    //users that are sellectd
      const resFinal = axios.get('/api/final')
      .then((response) => {
        if (response.data) {
          setFinal(response.data)
          setNumFinal(response.data.length)

        }
        else {
          throw new Error(response.data.error)
        }
      })
      .catch((error) => {
      })
    

  },[])


  return (
    <>
      
      <main className={click ? "body drawer" : "body"}>
      <nav className={scrolled ? "topbar topbar-bg " : "topbar"} ref={drawerRef}>
            <div className="menu-btn">
              <button onClick={handleClick} className={scrolled ? "menu-btn scroll" : "menu-btn"}>
              {click ? <FaTimes size={20} color="#ffc107"   /> : <FaBars size={20} color="#ffc107" />}
                </button> &nbsp;&nbsp;
              </div>
              
              <div className="search-box">
            <form className="center" onSubmit={handleSearch}>
            <input type="text" className="search" placeholder="Search..." value={data} onChange={(e) => setData(e.target.value)}   required />
              <button className="btn " type="submit"><FaSearch size={20} color="#ff3f3f"/></button>
              </form>
          </div>
          
      {click && (
              <div className="menu-options center">
             <ul className="">
                  <li className="nav-item" onClick={handleUsers}>
                  <button className="btn">
                        <FaUserCircle className="admin-icon"/> 
                    </button>
                    <p>All Users &nbsp;</p>
                    <p className="text-danger " style={{ fontWeight: 700 }}>{ numUsers ? `${ numUsers}` : "0"}</p>
                  </li>
                  <li className="nav-item" onClick={handleActive}>
                      <button className="btn" >
                      <FaCreativeCommonsSamplingPlus className="admin-icon" /> 
                    </button>
                    <p>Active &nbsp;</p> 
                    <p className="text-danger " style={{ fontWeight: 700 }}>{ numActive ? `${ numActive}` : "0"}</p>
                  </li>
                  <li className="nav-item" onClick={handleStage1}>
                      <button className="btn" >
                      <FaClipboardCheck className="admin-icon" /> 
                    </button>
                    <p>Stage 1 &nbsp;</p>
                    <p className="text-danger " style={{ fontWeight: 700 }}>{ numStage1 ? `${ numStage1}` : "0"}</p>

                  </li>
                  <li className="nav-item" onClick={handleStage2}>
                      <button className="btn" >
                      <FaReceipt className="admin-icon" /> 
                    </button>
                    <p>Stage 2 &nbsp;</p> 
                    <p className="text-danger " style={{ fontWeight: 700 }}>{ numStage2 ? `${ numStage2}` : "0"}</p>
                  </li>
                    <li className="nav-item" onClick={handleFinal}>
                      <button className="btn" >
                      <FaRegAddressCard className="admin-icon" /> 
                    </button>
                    <p>Final &nbsp;</p>
                    <p className="text-danger " style={{ fontWeight: 700 }}>{ numFinal ? `${ numFinal}` : "0"}</p>
                  </li>
                  <li className="center p-3" onClick={handleLogout}>
                      <button className="btn btn-danger text-dark" >
                    Logout 

                    </button>
                  </li>
          </ul>
        </div>
        
       
      )}
          
 
        </nav><br/><br/>
        <div className={ click ? 'overlay show': ""} ></div>
        <div className="container">
          <br />
          <br />
          <div className="row  align-item-center justify-content-center">
            <div className="col-md-12 center">
              <div className="admin-pic-container ">
                <img src ={ `../uploads/images/${profile}`} className="admin-pic" alt="admin profile"/>
              </div>
              <h3 className="mt-2 blue">
                {" "}
                <b className="text-light">
                  Welcome Back !!
                  <br /> <span className="text-secondary">{ username}</span>
                </b>
              </h3>
            </div>
          </div><br/><br/>
          <div className="row  justify-content-center align-item-center">
            <ToastContainer />

            {userpage && <Users users={users} />}          
          {activepage && <Active  users={active}  />}          
          {stage1page && <Stageone  users={stage1} />}          
          {stage2page && <Stagetwo  users={stage2} />}          
          {finalpage && <Final     users={final} />}          
          {foundpage && <Found     users={found} />}          
            
          </div>
        </div>
      </main>
    </>
  );
};

export default Admin;
