import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import PaystackPop from "@paystack/inline-js";
import axios from "../../Api/axios";
import logo from "../assets/images/logow.png";
import ReactPlayer  from "react-player";
import {useFlutterwave,closePaymentModal} from 'flutterwave-react-v3';
import { InstagramEmbed } from 'react-social-media-embed';
import Embed from 'react-embed';


const Vote = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [socialLink, setSocialLink] = useState("");
  const [craft, setCraft] = useState("");
  const [message, setMessage] = useState("");
  const [id, setId] = useState(null);
  const navigate = useNavigate()
  const [amount,setAmount] = useState(1000)
  const [points, setPoints] = useState(0)


  const location = useLocation();
  const user_id = location.pathname.split("/")[2];

  const config = {
    public_key: 'FLWPUBK_TEST-42fd3b90ff938f063184cd0bbc4d9279-X',
    tx_ref: Date.now(),
    amount: parseInt(amount),
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email,
       phone_number: '070********',
      name: `Participant : ${fullname}`,
    },
    customizations: {
      title: 'Rhythm and Lyrics Talent Quest 2023',
      description: 'Payment for points',
      logo:'https://rhythmandlyricsproject.com/static/media/logow.4aabb080248d29fba8a6.png'

      // logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };
const handleFlutterPayment = useFlutterwave(config)

  const handleChange = (e) => {
    e.preventDefault()
    setAmount(e.target.value)
    parseInt(amount)

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(amount)
    handleFlutterPayment({
      callback: (response) => {
        console.log(response)
        console.log(response.status)
      

        if (response.status === "completed"){
          // setPoints((response.charged_amount)/200)
          // console.log(points)
          console.log(response.charged_amount)
          let point = response.charged_amount

          point=point/200

          console.log(point)


          console.log("the payment was successfull")
          axios.post("/api/payment", { id,point }).then((response) => {
          });
        }



        closePaymentModal()

      },
      onClose: () => {
        alert("Payment not Successful")
      }
    })

  }
console.log(amount)
  useEffect(() => {
    const res = axios.get(`/api/voting/${user_id}`).then((response) => {
      // console.log(response)
      if (response.data.error) {
        navigate("/unknown")
      }

    setSocialLink(response.data[0].social_link);
      setCraft(response.data[0].craftname);
      setFullname(response.data[0].fullname);
      setId(response.data[0].id);
      setEmail(response.data[0].email)
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
                  <h3
                    className="modal-title blue text-center"
                    style={{ fontWeight: 700 }}
                  >
{fullname}
                  </h3>
                  <h5 className="text-danger font-weight-bold">{craft}</h5>
                <div className="card-body" width="500px" height="400px" >
                  {socialLink?
                    
                    // <ReactPlayer 
                    // url={socialLink}
                    //   controls
                    //   width="100%"
                    //   height="200px"
                    //   playing
                    //   config={{
                    //     instagram: {
                    //       playerVars: { autoplay: 1 },
                    //     },
                    //   }}
                    // />
                    <InstagramEmbed url={socialLink} />
                    
                  
                    :
                    ""
                  }

                  <div className="mb-3 mt-3 text-center text-muted blue">
                    <div>
                      <h5 className=" blue font-weight-bold" style={{ fontWeight: 500 }}>
                        Obtain more points for your favorite Participant.
                      </h5>
                    </div>
                    <div>
                      <h6
                        className="  text-info"
                        style={{ fontWeight: 500 }}
                      >
                        The more the points the better the chance.
                      </h6>
                    </div>
                  </div>
                  <form
                    action="#"
                    className="  text-left"
                    onSubmit={handleSubmit}
                  >
                    <div className="col-md-12">
                      <div className="row form-group text-left ">
                        <input
                          type="email"
                          className="form-control  text-left"
                          placeholder="Enter your email address"
                          value={email}
                          autofocus
                          disabled
                          required
                        />
                      </div>
                      <div className="row form-group text-left ">
                <label for="category">Amount</label>
                 <select name="amount" className="form-control" value={amount} onChange={handleChange} required>
                      <option value="1000" >₦1000 (5 Points)</option>
                      <option value="2000">₦2000 (10 Points)</option>
                      <option value="5000">₦5000 (25 Points)</option>
                      <option value="8000">₦8000 (40 Points)</option>
                      <option value="10000">₦10000 (50 Points)</option>
                  <option value="15000">₦15000 (75 Points)</option>
                  <option value="20000">₦20000 (100 Points)</option>
                  <option value="30000">₦30000 (150 Points)</option>
                  <option value="40000">₦40000 (200 Points)</option>
                  <option value="50000">₦50000 (250 Points)</option>
                  <option value="60000">₦60000 (300 Points)</option>
                  <option value="70000">₦70000 (350 Points)</option>
                  <option value="80000">₦80000 (400 Points)</option>
                  <option value="90000">₦90000 (450 Points)</option>
                  <option value="100000">₦100000 (500 Points)</option>
                  
                  
                    </select>
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
 