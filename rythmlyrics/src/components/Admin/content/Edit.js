import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from "../../../Api/axios";
import {
  FaArrowLeft,
  FaCheckDouble,
  FaGreaterThanEqual,
  FaPassport,
  FaPeopleCarry,
  FaYoutube,
  FaYoutubeSquare,
} from "react-icons/fa";
import Unknown from "../../Unknown";
import "../../Admin/Admin.css";
import { ToastContainer, toast } from 'react-toastify';
import CopyToClipboard from "react-copy-to-clipboard";
import ReactPlayer from "react-player";



const Edit = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [firstLink, setFirstLink] = useState("");
  const [secondLink, setSecondLink] = useState("");
  const [fullname, setFullname] = useState("");
  const [craft, setCraftname] = useState("");
  const [regdate, setRegdate] = useState(null);
  const [email, setEmail] = useState("");
  const [stagename, setStagename] = useState("");
  const [selected, setSelected] = useState("");
  const [category, setCategory] = useState("");
  const [picture, setPicture] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [votes, setVotes] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [origin, setOrigin] = useState("");
  const [youtubeOne, setYoutubeOne] = useState("")
  const [youtubeTwo, setYoutubeTwo] = useState("")
  
  let voting = `https://rhythmandlyricsproject.com/rythmlyrics.participant1153680/${stagename} ` 
  // let voting = `http://localhost:3000/rythmlyrics.contestants1153680/${stagename} ` 

    const navigate = useNavigate();
    
    const copied = () => {
        toast.info('Link Copied', {
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

  const goBack = () => {
    window.history.back()

  }

  const handleInvite = async (e) => {
    e.preventDefault()

    axios.post('/api/invite', { email,stagename,voting })
      .then((response) => {

        if (response.data.message) {
          toast.success('Invitaion Message Sent', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          
          
        }
        else {
          throw new Error(response.data.verify)
        }

    
      }).catch((error) =>{
        toast.error(error.message, {
          position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          
        })
      })

  
    
  }

  


  const handleFirstLink = (e) => {
    e.preventDefault();

    if (!youtubeOne) {
      toast.error("Youtube Link Field can not be empty", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
      return false;
    }

    axios
      .put("/api/firstlink", { id, youtubeOne, email, stagename, voting })

      .then((response) => {
        if (response.data.message) {
          toast.success('Youtube Link Uploaded Successfully', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
        else  {
          throw new Error(response.data.error)
        }
        
        }).catch((error) =>{
          toast.error(error.message, {
            position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            
          })
        })
  
  };

  const handleSecondLink = (e) => {
    e.preventDefault();

    if (!youtubeOne) {
      toast.error("Youtube Link Field can not be empty", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
      return false;
    }

    axios
      .put("/api/secondlink", {id,youtubeTwo})

      .then((response) => {
        if (response.data.message) {
          toast.success('Youtube Link Uploaded Successfully', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
    
        }
        else {
          throw new Error(response.data.error)
        }

      }).catch((error) =>{
        toast.error(error.message, {
          position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          
        })
      })
  };

  const handleSelect = async (e) => {
    e.preventDefault()

    axios.put('/api/selected', { email,stagename,id,selected})
      .then((response) => {

        if (response.data.message) {
          toast.success('Invitaion Message Sent', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          
          
        }
        else {
          throw new Error(response.data.verify)
        }

    
      }).catch((error) =>{
        toast.error(error.message, {
          position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          
        })
      })

  
    
  }


  useEffect(() => {
    const res = axios.get(`/api/edit/${id}`).then((response) => {
      setFullname(response.data[0].fullname);
      setCraftname(response.data[0].craftname);
      setEmail(response.data[0].email);
      setPicture(response.data[0].picture);
      setCategory(response.data[0].stage);
      setWhatsapp(response.data[0].whatnumber);
      setVotes(response.data[0].votes);
      setFirstLink(response.data[0].first_link);
      setSecondLink(response.data[0].second_link);
      setSelected(response.data[0].selected);
      setRegdate(response.data[0].created_at);
      setStagename(response.data[0].stagename);
      setPhone(response.data[0].phone);
      setOrigin(response.data[0].stateoo);
      setCountry(response.data[0].nationality);
    });
  }, []);
  if (!email) {
    return <Unknown />;
  }
  return (
    <>
      <>
        <section className=" black">
          <div className="container p-3 pb-5">
            <div className="row p-4 back-btn">
              <NavLink className="btn btn-primary" to="#" onClick={goBack}>
                {" "}
                <FaArrowLeft />
              </NavLink>
            </div>
          </div>
          <div className="container center pt-5">
            <div className="row justify-content-center pb-5">
              <div className="col-md-12 col-lg-6 border-bottom">
                <div className="heading_container">
                  <strong>
                    <h4 className="main-heading text-light  text-left">
                      Profile Info
                      <hr style={{ borderBottom: "3px solid #ff3f3f" }} />
                    </h4>
                  </strong>
                </div>
                <div className="admin-pic-container ">
                  <img
                    src={`../uploads/images/${picture}`}
                    className="admin-pic"
                    alt="profile picture"
                  />
                </div>
                <h4 className="mt-2 blue">
                  {" "}
                  <b className="text-danger">{fullname}</b>
                </h4>
                <p className="text-light">
                  <b>{craft}</b>
                </p>
              </div>

              <div className="col-md-12 col-lg-6 border-bottom pt-2 text-left">
                <div className="heading_container">
                  <strong>
                    <h4 className="main-heading text-light text-left">
                      Bio Data
                      <hr style={{ borderBottom: "3px solid #ff3f3f" }} />
                    </h4>
                  </strong>
                </div>

                <div className="text-white">
                  Stage Name = <span className="text-danger">{stagename}</span>
                </div>
                <div className="text-white">
                  Nationality = <span className="text-danger">{country}</span>
                </div>
                <div className="text-white">
                  State of Origin ={" "}
                  <span className="text-danger">{origin}</span>
                </div>
                <div className="text-white">
                  Account Created on ={" "}
                  <span className="text-danger">
                    {new Date(regdate).toDateString()}
                  </span>
                </div>
                <div className="text-white">
                  Phone Number = <span className="text-danger">{phone}</span>
                </div>
                <div className="text-white">
                  Whatsapp Number ={" "}
                  <span className="text-danger">{whatsapp}</span>
                </div>
                <div className="text-white">
                  Email = <span className="text-danger">{email}</span>
                </div>
                <div className="text-white">
                  Votes = <span className="text-danger">{votes}</span>
                </div>
                <br />
              </div>
                      </div>
                      <ToastContainer/>
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="heading_container">
                  <strong>
                    <h4 className="main-heading text-light text-left">
                      Uploads
                      <hr style={{ borderBottom: "3px solid #ff3f3f" }} />
                    </h4>
                  </strong>
                </div>
              </div>
              <div className="col-md-12 col-lg-6  align-center text-center border-bottom">
                <div className="upload">
                  {firstLink ? 
                         <ReactPlayer url={firstLink}
                         controls
                         width="100%"
                         height="500px"
                        
                        />
                  : (
                    <FaYoutubeSquare className="text-dark" size={250} />
                  )}
                </div>
                <div className=" text-dark  text-center col-md-12 ">
                  {firstLink ? (
                    <p className="text-secondary">Video One</p>
                  ) : (
                    <p className="text-secondary">Waiting for First Video</p>
                  )}
                </div>
              </div>
              <div className="col-md-12 col-lg-6 align-center text-center border-bottom">
                <div className="upload">
                  {secondLink ? 
                           <ReactPlayer url={secondLink}
                           controls
                           width="100%"
                           height="500px"
                          
                          />
                    :
                    (
                    <FaYoutubeSquare className="text-dark" size={250} />
                  )}
                </div>
                <div className=" text-dark  text-center col-md-12">
                  {secondLink ? (
                    <p className="text-secondary">Video Two</p>
                  ) : (
                    <p className="text-secondary">Waiting for Second Video</p>
                  )}
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-md-12 pt-5">
                <div className="heading_container">
                  <strong>
                    <h4 className="main-heading text-light text-left">
                      Account Details
                      <hr style={{ borderBottom: "3px solid #ff3f3f" }} />
                    </h4>
                  </strong>
                </div>
              </div>
            </div>
            <div className="row pb-4 pt-4 border  m-2">
              <div className="col-md-12 col-lg-6 details">
                <FaPassport color="#ff3f3f" size={25} />{" "}
                <span className="account_title">Voting Link</span>
              </div>
              <div className="col-md-12 col-lg-6 text-left">
                <input
                  type="text"
                  className="text text-info"
                  value={voting}
                  disabled
                              />
                  <CopyToClipboard text={voting}>
                            
                                  <button class="btn btn-primary" onClick={copied}>Copy</button>
                                  </CopyToClipboard>
              </div>
            </div>
            <div className="row pb-4 pt-4 border m-2">
              <div className="col-md-12 col-lg-6 details">
                <FaYoutube color="#ff3f3f" size={25} />{" "}
                <span className="account_title">Stage one YouTube Link</span>
              </div>
              <div className="col-md-12 col-lg-6 text-left">
                {firstLink ? (
                  <>
                    <input
                      type="text"
                      className="text text-info"
                      value={firstLink}
                      disabled
                    />
                   <CopyToClipboard text={firstLink}>
                            
                            <button class="btn btn-primary" onClick={copied}>Copy</button>
                            </CopyToClipboard>
                  </>
                ) : (
                  <>
                    <input
                        type="text"
                        className="text "
                        placeholder="First Youtube link goes here"
                        value={youtubeOne}
                        onChange={(e) => { setYoutubeOne(e.target.value) }}
                        required
                    />
                    <button class="btn btn-primary" type="submit" onClick={handleFirstLink}>Submit</button>
                  </>
                )}
              </div>
            </div>

            <div className="row pb-4 pt-4 border m-2">
              <div className="col-md-12 col-lg-6 details">
                <FaYoutube color="#ff3f3f" size={25} />{" "}
                <span className="account_title"> Stage Two YouTube Link</span>
              </div>
              <div className="col-md-12 col-lg-6 text-left">
                {secondLink ? (
                  <>
                    <input
                      type="text"
                      className="text text-info"
                      placeholder=""
                      disabled
                      value={secondLink}
                    />
                   <CopyToClipboard text={secondLink}>
                            
                            <button class="btn btn-primary" onClick={copied}>Copy</button>
                            </CopyToClipboard>
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      className="text "
                        placeholder="Youtbe link goes here"
                        value={youtubeTwo}
                        onChange={(e) => { setYoutubeTwo(e.target.value) }}
                        required
                    />
                    <button class="btn btn-primary" type="submit" onClick={handleSecondLink}>Submit</button>
                  </>
                )}
              </div>
            </div>
            <div className="row pb-4 pt-4 border m-2">
              <div className="col-md-12 col-lg-6 details">
                <FaPeopleCarry color="#ff3f3f" size={25} />{" "}
                <span className="account_title">Category</span>
              </div>
              <div className="col-md-12 col-lg-6  ">
                <span className="text-info">{ category}</span>
              </div>
            </div>
            <div className="row pb-4 pt-4 border m-2 ">
              <div className="col-md-12 col-lg-6 details">
                <FaCheckDouble color="#ff3f3f" size={25} />{" "}
                <span className="account_title">Selected</span>
              </div>
              <div className="col-md-12 col-lg-6 text-left">
              <select className="text text-secondary" value={selected} onChange={(e) => {setSelected(e.target.value)}} >
              <option>None</option>
                <option>True</option>
                <option>False</option>
      
                        </select>
                {votes >= 80 ?
                  <button class="btn btn-primary" onClick={handleSelect}>Select</button>
                  :
                  <button class="btn btn-primary" disabled>Select</button>
                }
              </div>
            </div>
            <div className="row border-bottom pt-5"></div>
            <div className="row pt-5 pb-5">
              <div className="col-md-12">
                <p className="text-light">
                  Invite participants for stage two of the competition.
                </p>
                <p style={{ color: "#ff3f3f" }}>
                                  Note: The invite button is enabled for participants with votes (<span className="text-light">{votes} </span>) {" "}
                  <FaGreaterThanEqual /> 40
                </p>{" "}
                              <br />
                              {votes >= 40 ?
                                  <button className="btn btn-primary pr-5 pl-5  " onClick={handleInvite}>
                                      <span style={{ fontSize: 20 }}>Invite</span>
                                  </button>
                                :  
                                <button className="btn btn-primary pr-5 pl-5 " disabled>
                                      <span style={{ fontSize: 20 }}>Invite</span>
                                  </button>
                                }
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Edit;
