import React from 'react'
import Apply from '../Apply'
import Footer from '../Footer'
import Subpages from '../Subpages'
import b1 from './assets/images/blog1.jpg'
import b2 from './assets/images/blog2.jpg'
import b3 from './assets/images/blog3.jpg'

const Blog = React.forwardRef ((props,ref) => {
  return (
    <>

    <Subpages/>

      <section className="blog_section layout_padding contact_section " ref={ref} >
    <div className="container" id='latest'>
      <div className="heading_container heading_center">
      <h2 className="main-heading ">
    From Our Blog
  </h2>
  <p className="text-center">
    There are many variations of passages of Lorem Ipsum available, but the majority hThere are many variations of
    passages of Lorem Ipsum available, but the majority h
  </p>
      
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="box">
            <div className="img-box">
              <img src={b1} alt=""/>
              <h4 className="blog_date">
                <span>
                  19 January 2021
                </span>
              </h4>
            </div>
            <div className="detail-box">
              <h5>
                Eius, dolor? Vel velit sed doloremque
              </h5>
              <p>
                Incidunt magni explicabo ullam ipsa quo consequuntur eveniet illo? Aspernatur nam dolorem a neque? Esse eaque dolores hic debitis cupiditate, ad beatae voluptatem numquam dignissimos ab porro
              </p>
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="box">
            <div className="img-box">
              <img src={b2} alt=""/>
              <h4 className="blog_date">
                <span>
                  19 January 2021
                </span>
              </h4>
            </div>
            <div className="detail-box">
              <h5>
                Minus aliquid alias porro iure fuga
              </h5>
              <p>
                Officiis veritatis id illo eligendi repellat facilis animi adipisci praesentium. Tempore ab provident porro illo ex obcaecati deleniti enim sequi voluptas at. Harum veniam eos nisi distinctio! Porro, reiciendis eius.
              </p>
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div> <div className="col-md-4">
          <div className="box">
            <div className="img-box">
              <img src={b3} alt=""/>
              <h4 className="blog_date">
                <span>
                  19 January 2021
                </span>
              </h4>
            </div>
            <div className="detail-box">
              <h5>
                Minus aliquid alias porro iure fuga
              </h5>
              <p>
                Officiis veritatis id illo eligendi repellat facilis animi adipisci praesentium. Tempore ab provident porro illo ex obcaecati deleniti enim sequi voluptas at. Harum veniam eos nisi distinctio! Porro, reiciendis eius.
              </p>
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <Apply />
      <Footer />
      
    </>
  )
})

export default Blog