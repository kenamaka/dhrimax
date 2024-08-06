import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import loan from "../assets/svg/loan.svg";
import paylink from "../assets/svg/paybill.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import refer from "../assets/svg/credit-card.svg";
import airtime from "../assets/svg/airtime.svg";
import { Circles, ColorRing } from "react-loader-spinner";
import back from '../assets/images/panel.jpg'
import "./styles.css";
import 'react-circular-progressbar/dist/styles.css'
import {CircularProgressbar,buildStyles} from 'react-circular-progressbar'
import {
  FaInstagram,
  FaInstagramSquare,
  FaPlus,
  FaYoutubeSquare,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import ReactPlayer from "react-player";
import "react-toastify/dist/ReactToastify.css";

import axios from "../../Api/axios";
import { InstagramEmbed } from "react-social-media-embed";
const Userpanel = ({
  support,
  socialLink,
  token,
  id
}) => {


  const UserPoints = ({pointCount}) => {
    const percentage = Math.min((pointCount/100) * 100);

    const getColor = () => {
      if (percentage >= 100) {
        return '#4CAF50'; // Green
      } else if (percentage >= 50) {
        return '#2196F3'; // Blue
      } else {
        return '#F44336'; // Red
      }
    }
    return(
      <>
      <div style={{ width: '100px', margin: 'auto' }}>
      <CircularProgressbar
        value={percentage}
        text={`${Math.min(percentage, 100)}%`}
        styles={buildStyles({
          rotation: 0.25,
          strokeLinecap: 'butt',
          textSize: '16px',
          pathTransitionDuration: 0.5,
          pathColor: getColor(),
          textColor: getColor(),
          trailColor: '#d6d6d6',
          backgroundColor: '#3e98c7',
        })}
      />
    </div>
      </>
    )

  }

  const [votes,setVotes] = useState(0)
  // let voteLink = `https://rhythmandlyricsproject.com/rythmlyrics.participant1153680/${token} `
  let voteLink = `http://localhost:3000/rythmlyrics.participant1153680/${token} `;
  const copied = () => {
    toast.info("Voting Link Copied", {
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


  const fetchVotes = async  () => {
    const response = await  fetch (`http://localhost:8000/api/votes/${id}`);
    // const response = await  fetch (`https://rhythmandlyricsproject.com/api/votes/${id}`);
    const data = await response.json();
    setVotes(data.voteCount)
    // console.log(response)
  }
  
  useEffect(()=>{
    fetchVotes()

    const voteInterval = setInterval(fetchVotes,5000);
    return () => clearInterval(voteInterval)
  
  },[]
  
  );

  return (
    <>
      <div className="layoutSidenav_content ">
        <main className="black">
        <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOut="animate_fadeOUt"
        duration={2}
      >
          <div className="container">
            <br />
            <br />
            <br />

            <h1 className="mt-5 blue pt-5">
              {" "}
              <b className="text-info">Dashboard</b>
            </h1>
            <ol className="breadcrumb mb-4">
              <li className="breadcrumb-item text-dark blue active">
                You can go through the competition procedures and  requirements. Congratulations!! once again. 
              </li>
              </ol>
            <br />
            <br />
            <br />
              
            <div className="row px-2 ">
              <div className="col-lg-4 mb-4">
                <div className="card ">
                  <div className="card-body wallet ">
                    <div className="row ">
                      <div className="col-8">
                        <h4 className=" small text-uppercase blue">
                          Details about your competition progress goes here
                        </h4>
                      </div>
                      <div className="col-4 icon">
                        <img src={loan} alt="pics" />
                      </div>
                    </div>
                    <div className="row bottom ">
                      <br/>
                      <br/>
                      <br/>
                      <div className="col-12">
                        <p className="text-muted mb-1 small text-uppercase blue float-left">
                          Category
                        </p>
                        <p className="text-muted mb-1 small float-right blue ">
                          Competition in Progress
                        </p>
                      </div>
                      <div className="col-12 ">
                        <h3
                          className="mb-0 text-blue float-left blue"
                          style={{ fontWeight: 500 }}
                        >
                        </h3>
                        <div className="  float-right ">
                          <Circles
                            visible={true}
                            height="50"
                            width="100"
                            ariaLabel="blocks-loading"
                            color="#28a745"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card wallet ">
                  <div className="card-body">
                    <div className="row ">
                      <div className="col-12">
                        <h4
                          className="text-muted  dash-info blue "
                          style={{ fontWeight: 500 }}
                        >
                          Your current number points is  
                          &nbsp;
                          <span className="text-info font-weight-bold">{votes}</span>
                        </h4>

                      </div>
                      <div className="col-12 icon">
                        <img src={airtime} alt="pics" />
                      </div>
                    </div>
                    <div className="votes blue">
                    <UserPoints pointCount={votes} />

                      {/* <span>{votes}</span> */}
                    </div>
                      <div className="col-12">
                        <p className="text-muted mb-1 blue small ">
                          You would need atleast 100 points to qualify for the next stage of the competition. Use the link to buy points.
                      
                        </p>
                      </div>
                      <ToastContainer />
                      <div className="col-12 ">
                        <CopyToClipboard text={voteLink}>
                          { socialLink ?
                            <button
                              className=" btn-info text-center btn  float-right "
                              onClick={copied}
                            
                            >
                              {" "}
                              + Share Link
                            </button>
                            :

                            <button
                              className=" btn-secondary text-center btn  float-right "
                              onClick={copied}
                              disabled
                            
                            >
                              {" "}
                              + Share Link
                            </button>
                          }

                        </CopyToClipboard>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card">
                  <div className="card-body ">
                    <div className="row ">
                      <div className="col-12">
                        <h4
                          className="text-muted  dash-info text-uppercase blue"
                          style={{ fontWeight: 700 }}
                        >
                          24/7 support{" "}
                        </h4>
                      </div>
                      <div className="col-4 icon">
                        <img src={paylink} />
                      </div>
                    </div>
                    <br />
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                      <div className="col-12">
                        <p className="text-muted  small blue">
                          {" "}
                          You can always get in touch with us. Our technical
                          support team are available to respond to you.
                        </p>
                      </div>
                      <div className="col-12 ">
                        <button
                          className=" text-white text-center btn btn-danger float-right "
                          onClick={support}
                        >
                          + Get Started
                        </button>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            </div>
            </AnimationOnScroll>
          <br/>
          <br />
          <br />
          <br />
          

        </main>
        
      </div>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOut="animate_fadeOUt"
        duration={2}
      >
      <section className="about_section   cover" style={{ backgroundImage: `url(${back})` }}>
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
              <div className="detail-box">
                <div className="heading_container">
          <br/>
          <br/>

                  <h2 className="text-info">
                    Rhythm and Lyrics Season 1
                  </h2>
                </div>
                <p className="text-light">
                  <span className="text-info">RHYTHM & LYRICS PROJECT</span>  is a music reality show with a niche
                  to project musicians, through series of auditions, stage
                  performance, and group performances.
                  <br />
                  It is a TV music reality show that awards
                  excellence in music renditions. As music instrumentalists and
                  singers you are engaged in a competition in <span className="text-info">ONE BIG MUSIC
                  PLATFORM</span> in a bid to attain stardom for winning contestants.{" "}
                  <br />
                  The project creates a platform for uniformity in music
                  symphony and enhances creativiy in the music industry, by
                  bringing singers and musical instrumentalist to a common
                  ground of performance.
                </p>
                <p className="text-light">
                <span className="text-info">DEMOGRAPHY: 18-45 Years:</span> All interested participants are required to register for this
                  music competition with all requirements in the registration
                  fields fully and correctly filled. On successful registration,
                  a voting link is automatically given. This link will be used by
                  participants during all stages of the audition. AUDITIONS STAGES
                  are categorized in THREE STAGES. A Congratulatory message will
                  be sent to participants when they qualified for the next stage
                    of audition. <br /><br />
                    
                    <span className="text-info">SILVER STAGE AUDITIONS (STAGE 1):</span> Here, every participant
                 is expected to upload a performance video of their crafts not more than
                  60 secs . UPON REVIEW by our online screening team, all
                  participants in this category must not have less than 40 votes
                  to qualify for the next stage of our online auditions.<br />
                  <span className="text-info">NOTE: </span> All votes are activated with the voting link at one hundred
                  naira (<span className="text-danger">#100</span>) per vote . All uploads are activated with the Telegram
                    link on the uploads portal. The guideline for each upload is stated in the file upload portal. <br/><br/>
                    
                    <span className="text-info">GOLD STAGE AUDITIONS (STAGE 2):</span> At this stage all participants who received our
                  congratulatory message of qualification to the next stage, are
                  required to upload a performance video of their crafts, not more than two minutes(2mins). Here,any form of accompainment is
                  required for your upload but at a reduced volume level in
                  other to optimize your performance.... Dexterity is key here .
                  Also,same voting and uploads conditions are applicable on this
                  stage of auditions. That is, to qualify for the next stage your total votes must not be less than 80 <span className="text-danger"> 
                      (40 votes in Stage 1 and 40 votes in Stage 2)</span> <br /><br />
                    
                      <span className="text-info">PREMIUM STAGE AUDITIONS (STAGE 3): </span>  This is the
                  final stage of our online auditions where the qualified
                  participants from Gold stage auditions will interface with our
                  judges via performance video uploads for final selection to
                  the SUPER HOUSE. The uploads at this stage are properly
                  screened by our judges.At this point THE COMPETITION BEGINS.
                  All selected participants will be notified via email, and are now automatically contestants
                  and they will all come to LAGOS for OUR ONE BIG COMPETITION.
                  The invasion of sound and vocals is triggered to produce great
                  talents for global visibility. No voting conditions are
                  applicable here apart from congratulatory messages.
                </p>
              </div>
            </div>
            

           
          </div>
        </div>
        <br />
        <br />
        <br />
        </section>
        
        </AnimationOnScroll>

        <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOut="animate_fadeOUt"
        duration={2}
      >
      <section className="about_section  black">
        <div className="container ">
          <div className="row">
          <div className="col-md-12  pt-5 align-center text-center">
              <h2 className="text-warning">Performance Art</h2>
              <div className="upload">
                {socialLink ? (
                                 <InstagramEmbed url={socialLink} />

                ) : (
                  <FaInstagram className="text-dark" size={300} />
                )}
              </div>
              <div className=" text-dark  text-center col-md-12">
                {socialLink ? (
                  <>
                   
                  </>
                ) : (
                  <>
                    {" "}
                    <p className="text-secondary">
                      Your performance art goes here, Once your video link is submited, you can also share.
                    </p>
                    <button className="btn btn-primary call_to-btn" disabled>
                      Share <FaPlus />
                    </button>
                  </>
                )}
              </div>
            </div>
                        </div>
          <br/>
          <br/>
          <br/>
        </div>
        </section>
        </AnimationOnScroll>
    </>
  );
};

export default Userpanel;
