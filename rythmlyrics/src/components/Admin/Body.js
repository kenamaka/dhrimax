import React from 'react'
import Featured from '../Home/Featured'
import Post from '../Home/Post'
import header from '../assets/images/head.jpg'

const Body = ({setSupport}) => {
  return (
      <>
          <section
        className="site-hero  "
        style={{ backgroundImage: `url(${header})` }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12 col-lg-8 headcenter pt-5 text-center">
              <h1 className=" text-light site-animate text-center">
                <strong>
                  RHYTHM <span className="text-warning">&</span>LYRICS
                </strong>
              </h1>
              <strong
                className="d-block text-light text-uppercase letter-spacing text-center"
                style={{ color: "whitesmoke", fontWeight: 600 }}
              >
                <p className="text-light">
                  Our team of experienced traders are happy to aid conduct all
                  research and trading for all ours members with our winning
                  business models to skyrocket earnings
                </p>
              </strong>
              <br />
            </div>
          </div>
        </div>
      </section>

      <section className="about-area about1 section-padding30">
        <div className="container">
          <div className="row justify-content-between">
            <div className=" col-md-6">
              <div className="section-heading">
                <h2 className="text-light">
                  <strong>
                    YOU ARE BORN FOR GREATNESS, YOU ARE TALENTED
                    <span className="text-warning">.</span>{" "}
                  </strong>
                </h2>
                <p className="lead">
                  We Can Help You Become A Consistently Profitable Trader. Or if
                  you are just starting out on your journey? We can help you
                  become an expert. You are just a step away. Signup and start
                  earning.{" "}
                </p>
                <br />
                <br />
              </div>
            </div>

            <div className="col-xl-5 col-lg-5">
              <div className="about-caption mb-50">
                <h3>
                  You can’t use up creativity. The more you use, the more you
                  have in your signifant mind.
                </h3>
                <p className="pera1">
                  <span>MR FAVOUR</span> Music Producer
                </p>
                <div className="experience">
                  <div className="year">
                    <span>05</span>
                  </div>
                  <div className="year-details">
                    <p>
                      YEARS OF
                      <br /> DIGITAL EXPERIENCE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-shape d-none d-xl-block">
          <img src="assets/img/gallery/about_shape.png" alt="" />
        </div>
      </section>
<Featured/>
      <Post />
          
         
      <br />
      <br />
     <br />
    
  <section className="landing_section layout_padding">
    <div className="container">
      <h2 className="main-heading blue">
        We are aimed at Producing CHAMPIONS in the world

      </h2>
      <h2 className="main-heading number_heading">
        With exceptional academic excellence via online and on onsite learning

      </h2>
      <p className="blue text-center">
        There are many variations of passages of Lorem Ipsum available, but the majority There are many variations of
        passages of Lorem Ipsum available, but the majority h

      </p>
    </div>
  </section>

      </>
  )
}

export default Body