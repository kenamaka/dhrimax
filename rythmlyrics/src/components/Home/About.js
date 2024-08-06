import React from 'react'
import about from '../assets/images/about.jpg'
import { AnimationOnScroll } from 'react-animation-on-scroll'
const About = React.forwardRef((props,ref) => {
  return (
      <>
      <AnimationOnScroll animateIn='animate__fadeIn' animateOut='animate_fadeOUt' duration={2}>
        
        
      <section className="about_section layout_padding" ref={ref}>
              <br/>
              <br/>
              <br/>
    <div className="container ">
          <div className="row">
         
       
            <div className="col-md-12 col-lg-6">
              
        <div className="detail-box">
          <div className="heading_container">
            <h2>
              About Rhythm and Lyrics Project
            </h2>
          </div>
          <p>
                  RHYTHM & LYRICS PROJECT is a music reality show iwth a niche to 
                  project musicians, through series fo auditions and stage performance in an in
                  group sergregation performance.<br/>
                  It is a TV music reality show. Our uniqueness tends to award excellence in music renditions as music instrumentalists and singers are
                  to engage in a competition in ONE BIG MUSIC PLATFORM in a bid to attain stardom for winning contestants. <br />
                  The project creates a platform for uniformity in music symphony and enhances creativiy in the music industry, by bringing singers and musical instrumentalist to a common ground of performance.

                </p>
         
        </div>
            </div>
     <div className="col-md-12 col-lg-6">

<div className="img-box">
  <img src={about} alt=""/>
    </div>
    </div>
        
      </div>
        </div>
        <br/>
              <br/>
              <br/>
  </section>
 </AnimationOnScroll>
      

      </>
  )
})

export default About