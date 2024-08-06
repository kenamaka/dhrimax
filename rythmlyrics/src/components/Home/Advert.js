import React from "react";
import steps from "../assets/images/steps.png";
import grand_price from "../assets/images/grandp.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
const Advert = ({ id }) => {
  return (
    <>
          <AnimationOnScroll
        animateIn="animate__bounceIn"
        animateOut="animate_fadeOUt"
        duration={1}
      >
           <section className="about-area bgblue " id={id}>
        <div className="container-fluid position-relative" id="advert">
          <div className="row">
            <div className="container center">
                  <div className="add-cont">
                    <img src={grand_price} className="add-img" alt="Grand price"/>
                </div>
                
              </div>
              
              
            </div>
            
          </div>
        </section>
        
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__slideInUp"
        animateOut="animate_fadeOUt"
        animateOnce={true}
        duration={1}
      >
      <section className="about-area " id={id}>
        <div className="container-fluid position-relative" id="advert">
          <div className="row">
            <div className="container center">
                  <div className="add-cont">
                    <img src={steps} className="add-img" alt="Grand price"/>
                </div>
                
              </div>
              
              
            </div>
            
          </div>
        </section>
        </AnimationOnScroll>
    </>
  );
};

export default Advert;
