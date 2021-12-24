import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useState } from "react";

const images = [
  { bgimages: "assets/images/bg/bg1.jpg" },
  { bgimages: "assets/images/bg/bg2.jpg" },
  { bgimages: "assets/images/bg/bg3.jpg" },
  { bgimages: "assets/images/bg/bg4.jpg" }
]


const Home = () =>
  {
   const [value, setValue] = useState(images)
    return (
        <div>
                  <section id="home" className="divider parallax layer-overlay overlay-white-5">
          <div className="maximage-slider">
            <div id="maximage" className="z-index--1">
            <Fade>
                {
                  value.map((val, i) => (
                    <div className="each-fade img-full banner" key={i}>
                      <img src={val.bgimages} className="slider-img h-100 w-100" alt="" />
                    </div>
                  ))
                }
              </Fade>
              {/* <img src="assets/images/bg/bg4.jpg" alt="" />
              <img src="assets/images/bg/bg2.jpg" alt="" />
              <img src="assets/images/bg/bg3.jpg" alt="" /> */}
            </div>
            <div className="fullscreen-controls"> <a className="img-prev"><i className="pe-7s-angle-left"></i></a> <a className="img-next"><i className="pe-7s-angle-right"></i></a> </div>
          </div>
          <div className="display-table">
            <div className="display-table-cell">
              <div className="container pt-100 pb-100">
                <div className="row">
                  <div className="col-md-10 col-md-offset-1">
                    <div className="bg-white-transparent text-center pt-20 pb-50 outline-border">
                      <h1 className="text-black-222 text-uppercase font-54">Fullscreen <br />Background <span className="text-theme-colored">Slideshow</span></h1>
                      Every day we bring hope to millions of children in the world's hardest places as a sign of God's unconditional love, so just stay with us.
                      <a className="btn btn-colored btn-theme-colored btn-lg smooth-scroll-to-target mt-15" href="#">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}

export default Home

