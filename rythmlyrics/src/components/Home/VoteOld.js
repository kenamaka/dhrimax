import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import PaystackPop from "@paystack/inline-js";
import axios from "../../Api/axios";
import logo from "../assets/images/logow.png";
import ReactPlayer  from "react-player";
const Vote = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [firstLink, setFirstLink] = useState("");
  const [secondLink, setSecondLink] = useState("");
  const [craft, setCraft] = useState("");
  const [message, setMessage] = useState("");
  const [id, setId] = useState(null);
  const navigate = useNavigate()

  const location = useLocation();
  const user_id = location.pathname.split("/")[2];
  const amount = 10000;

  const handleVote = (e) => {
    e.preventDefault();
    const paystack = new PaystackPop();

    paystack.newTransaction({
      key:"pk_live_5e3c204d636150b44f8962627e1c04a36c1189ca",
      // key: "pk_test_e78da199af88d830aadeaeec3586586193c825d3",
      amount: amount,
      email,
      onSuccess() {
        axios.post("/api/payment", { id }).then((response) => {
        });
      },
    });
  };
  
  
  useEffect(() => {
    const res = axios.get(`/api/voting/${user_id}`).then((response) => {
      if (response.data.error) {
        navigate("/unknown")
      }

      setFirstLink(response.data[0].first_link);
      setSecondLink(response.data[0].second_link);
      setCraft(response.data[0].craftname);
      setFullname(response.data[0].fullname);
      setId(response.data[0].id);
    });
  }, []);

  return (
    <>
       <section className="contact_section  bgblue pb-3">
      <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 text-center mt-2">
              <div className="site-logo  mt-5 mb-5">
                <img src={logo} alt="site logo" className="logo"  />
              </div>

              <div className="card shadow-lg border-0 rounded-lg mt-4 pt-5 p-3">
                  <h4
                    className="modal-title blue text-center"
                    style={{ fontWeight: 700 }}
                  >
                    Participant
                  </h4>
                <div className="card-body">
                  {firstLink && !secondLink ?
                    
                    <ReactPlayer url={firstLink}
                      controls
                      width="100%"
                      height="200px"
                      playing
                      config={{
                        youtube: {
                          playerVars: { autoplay: 1 },
                        },
                      }}
                    />
                    :
                    ""
                  }

{firstLink && secondLink ?
                    
                    <ReactPlayer url={secondLink}
                      controls
                      width="100%"
                      height="200px"
                      playing
                      config={{
                        youtube: {
                          playerVars: { autoplay: 1 },
                        },
                      }}
                    />
                    :
                    ""
                  }

                  <div className="mb-3 mt-3 text-center text-muted blue">
                    <div>
                      <h5 className=" blue" style={{ fontWeight: 500 }}>
                        {fullname}
                      </h5>
                    </div>
                    <div>
                      <h6
                        className="  text-warning"
                        style={{ fontWeight: 500 }}
                      >
                        {craft}
                      </h6>
                    </div>
                  </div>
                  <form
                    action="#"
                    className="  text-left"
                    onSubmit={handleVote}
                  >
                    <div className="col-md-12">
                      <div className="row form-group text-left ">
                        <input
                          type="email"
                          className="form-control  text-left"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          autofocus
                          required
                        />
                      </div>
                      <div className="row form-group text-left ">
                        <input
                          type="text"
                          className=" text-info text-left form-control"
                          disabled
                          placeholder="Amount = 100 Naira"
                        />
                      </div>
                      <div className="row form-group text-left ">
                        <input
                          className="btn mt-2 btn-success"
                          type="submit"
                          value="Pay Now"
                        />
                      </div>
                    </div>
                  </form>
                  <div className="card-footer center bg-white">
                    <h6>
                      
                      </h6>
                      <h6 className="col-12 text-center blue">
                      Copyright &copy; {new Date().getUTCFullYear()} &nbsp; All rights reserved | <NavLink to="/" className="text-Primary"> The Rhythm and Lyrics Project </NavLink>
				</h6>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <br/>
                  <br/>
                  <br/>
        </div>
      </section>
    </>
  );
};

export default Vote;
 