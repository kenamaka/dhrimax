import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import img1 from '../assets/images/imgone.jpg'
import img2 from '../assets/images/imgtwo.jpg'
import img3 from '../assets/images/imgthree.jpg'
import img4 from '../assets/images/imgfour.jpg'
import img5 from '../assets/images/imgfive.png'
import img6 from '../assets/images/imgsix.jpg'

const Post = ({id}) => {
  return (
    <>
    <AnimationOnScroll animateIn='animate__fadeIn' animateOut='animate_fadeOUt' duration={3}>
      
          <div className="site-section layout_padding  white" id={id}>
				  <div className='container'>
				  <div className="heading_container">
            <strong>
      <h2 className="main-heading blue ">
    Our Gallery <hr/>
              </h2>
              </strong>
      </div>
			</div>
    <div className="container ">
   <br/>
      <div className="row">
					<div class="single-portfolio col-sm-4 p-2">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src={img1} alt=""/>
							</div>
							<a href={img1} class="img-pop-up">  
					
							</a>                                  
						</div>
					                                         
					</div>
					<div class="single-portfolio col-sm-4 p-2">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src={img2} alt=""/>
							</div>
							<a href={img2} class="img-pop-up">  
							</a>                                  
						</div>
					                                        
					</div>                            
					<div class="single-portfolio col-sm-4 p-2">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src={img3} alt=""/>
							</div>
							<a href={img3} class="img-pop-up">  
						
							</a> 

						</div>
					</div>
					<div class="single-portfolio col-sm-4 p-2">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src={img4} alt=""/>
							</div>
							<a href={img4} class="img-pop-up">  
							</a>                                
						</div> 
					</div>
					<div class=" col-sm-4 p-2">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src={img5} alt=""/>
							</div>
							<a href={img5} class="img-pop-up">  
							</a>                                
						</div>
					</div>
					<div class="single-portfolio col-sm-4  p-2">
						<div class="relative">
							<div class="thumb">
								<div class="overlay overlay-bg"></div>
								<img class="image img-fluid" src={img6} alt=""/>
							</div>
							<a href={img6} class="img-pop-up">  
						
							</a>                                
						</div>
					</div>
    </div>
        </div>
        </div>
        </AnimationOnScroll>
      </>
  )
}

export default Post