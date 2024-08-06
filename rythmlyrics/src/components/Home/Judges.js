import React from 'react'
import judges1 from "../assets/images/judge1.jpg";
import host from "../assets/images/host.jpg";
import judges2 from "../assets/images/judge2.jpg";
import judges3 from "../assets/images/judge.jpg";
import judges4 from "../assets/images/Naomi.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";




const Judges = ({id,setContent,setDSmj,setDBjazz,setDSheyi,setDClare,setDNaomi}) => {
  return (
      <>
      <div className="site-section white " id={id}>
        
          <div className="container">
            <div>
              <h2 className="section_tittle sectionhd blue" >
                Meet Our Judges <hr />
              </h2>

              <div className="row">

                <div className="col-md-12 col-lg-6 mb-5 ">
                <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut" animateOnce={true} duration={3}>       

                  <div className="person text-center shadow-lg">
                    <img
                      src={judges1}
                      alt="Image"
                      className="img-fluid   mb-5"
                    />
                    <h3 style={{ fontWeight: 600 }} className="blue">
                      BJAZZ
                    </h3>
                    <p className="position text-muted" style={{ fontWeight: 500 }}>
                    Music Director, Vocal Coach, Producer
                      
                    </p>
                   
                    <ul className="ul-social-circle pb-4">
                      <li>
                        <button className="call_to-btn btn-warning blue" onClick={() => { setContent(true); setDBjazz(true);}}>More+</button>
                      </li>

                    </ul>
                  </div>
                  </AnimationOnScroll>
              </div>
                                
              <div className="col-md-12 col-lg-6 mb-5 ">
            <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut" animateOnce={true} duration={3}>       

                  <div className="person text-center shadow-lg ">
                    <img
                      src={judges4}
                      alt="Image"
                      className="img-fluid   mb-5 "
                    />
                    <h3 style={{ fontWeight: 600 }} className="blue">
                      Naomi Classik
                    </h3>
                    <p className="position text-muted" style={{ fontWeight: 500 }}>
                    Gospel Artist, Vocal Coach
                    </p>
                   
                    <ul className="ul-social-circle pb-4">
                      <li>
                        <button className="call_to-btn btn-warning blue"  onClick={() => { setContent(true); setDNaomi(true)}}>More+</button>
                      </li>

                    </ul>
                    </div>
                    </AnimationOnScroll>
                </div>
                  
                <div className="col-md-12 col-lg-6 mb-5 ">
            <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut" animateOnce={true} duration={3}>       

                  <div className="person text-center shadow-lg">
                    <img
                      src={judges3}
                      alt="Image"
                      className="img-fluid   mb-5"
                    />
                    <h3 style={{ fontWeight: 600 }} className="blue">
                      SMJ
                    </h3>
                    <p className="position text-muted" style={{ fontWeight: 500 }}>
                      Music Producer, Director, Pianist
                    </p>
                   
                    <ul className="ul-social-circle pb-4">
                      <li>
                        <button className="call_to-btn btn-warning blue"  onClick={() => { setContent(true); setDSmj(true)}}>More+</button>
                      </li>

                    </ul>
                    </div>
                    </AnimationOnScroll>
                </div>
                <div className="col-md-12 col-lg-6 mb-5 ">
            <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut" animateOnce={true} duration={3}>       

                  <div className="person text-center shadow-lg">
                    <img
                      src={judges2}
                      alt="Image"
                      className="img-fluid  mb-5"
                    />
                    <h3 style={{ fontWeight: 600 }} className="blue">
                      SHEYI HUNTERS
                    </h3>
                    <p className="position text-muted" style={{ fontWeight: 500 }}>
                      Content Creator, Nollywood filmmaker
                    </p>
                   
                    <ul className="ul-social-circle pb-4">
                      <li>
                        <button className="call_to-btn btn-warning blue"  onClick={() => { setContent(true); setDSheyi(true);}}>More+</button>
                      </li>

                    </ul>
                    </div>
                    </AnimationOnScroll>
                </div>
                <div className="col-md-12 col-lg-6 mb-5 ">
            <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut" animateOnce={true} duration={3}>       

                  <div className="person text-center shadow-lg">
                    <img
                      src={host}
                      alt="Image"
                      className="img-fluid  mb-5"
                    />
                    <h3 style={{ fontWeight: 600 }} className="blue">
                      CLARE
                    </h3>
                    <p className="position text-muted" style={{ fontWeight: 500 }}>
                      Filmmaker, Content Developer
                    </p>
                    <ul className="ul-social-circle pb-4">
                      <li>
                        <button className="call_to-btn btn-warning blue " onClick={() => { setContent(true); setDClare(true);}}>More+</button>
                      </li>

                    </ul>
                    </div>
                    </AnimationOnScroll>
                 
                </div>
              </div>
            </div>
          </div>
        </div>

      </>
  )
}

export default Judges