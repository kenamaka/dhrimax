import axios from "axios";
import React, { useEffect, useState } from "react";
import contact from '../assets/images/shape-2.png'
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import judge1 from "../assets/images/judges.png";
import {AnimationOnScroll} from 'react-animation-on-scroll'

const Featured = () => {
  return (
    <>
    <AnimationOnScroll animateIn='animate__fadeIn' animateOut='animate_fadeOUt' duration={4}>
      
      <section className="contact_section layout_padding-bottom white justify-content-center " style={{ backgroundImage: `url(${contact})` }}>
        <br/>
        <div className="container ">


      <div className="judges" id="judges">
        <h2 className="section_tittle sectionhd blue">
          Meet Our Judges<hr />
            </h2>
          <div className="slider">
          <div className="slide">
            <img src={judge1} alt="Judge 2" />
          </div>
          <div className="slide">
            <img src={judge1} alt="Judge 1" />
          </div>
          <div className="slide">
            <img src={judge1} alt="Mark Harry" />
          </div>
          <div className="slide">
            <img src={judge1} alt="Adesola Markson" />
          </div>
        </div>
      </div>
      
      
        </div>
        </section>
        </AnimationOnScroll>
    </>
  );
};

export default Featured;
