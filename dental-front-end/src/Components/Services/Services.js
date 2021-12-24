import {useEffect, useState} from 'react'
import axios from 'axios'


function Services() {

  
    const [data, setData] = useState([])
    useEffect(()=>{
axios.get("http://localhost:4000/Services").then((res)=>{
  setData(res.data)
})
},[])

console.log(data)

    return (
        <div>
            <section id="services" class="divider parallax layer-overlay overlay-theme-colored-9" data-bg-img="assets/images/bg/bg3.jpg">
          <div class="container pb-50">
            <div class="section-title text-center">
              <div class="row">
                <div class="col-md-8 col-md-offset-2">
                  <h2 class="text-uppercase text-white mt-0 line-height-1">Our Services</h2>
                  <div class="title-icon">
                    <img class="mb-10" src="assets/images/title-icon-white.png" alt="" />
                  </div>
                  <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem<br /> voluptatem obcaecati!</p>
                </div>
              </div>
            </div>
            <div class="section-content">
              <div class="row" >
                {data.map((Element)=>(
                  <div class="col-sm-6 col-md-4">
                  <div class="icon-box text-center p-30 bg-white mb-30 border-3px">
                    <a href="#">{Element.icon}</a>
                    <div class="features-details">
                      <h3>{Element.Headline}</h3>
                      <p>{Element.Discription}</p>
                    </div>
                    <a href="#" class="btn btn-flat btn-sm btn-theme-colored mt-15  text-theme-color-2">Read More</a>
                  </div>
                </div>

                ))}
                {/* <div class="col-sm-6 col-md-4">
                  <div class="icon-box text-center p-30 bg-white mb-30 border-3px">
                    <a href="#"><i class="flaticon-medical-teeth2 text-theme-colored"></i></a>
                    <div class="features-details">
                      <h3>Dental Implants</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum consectetur sit ullam perspiciatis, deserunt.</p>
                    </div>
                    <a href="#" class="btn btn-flat btn-sm btn-theme-colored mt-15  text-theme-color-2">Read More</a>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4">
                  <div class="icon-box text-center p-30 bg-white mb-30 border-3px">
                    <a href="#"><i class="flaticon-medical-microscope13 text-theme-colored"></i></a>
                    <div class="features-details">
                      <h3>Root Canal</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum consectetur sit ullam perspiciatis, deserunt.</p>
                    </div>
                    <a href="#" class="btn btn-flat btn-sm btn-theme-colored mt-15  text-theme-color-2">Read More</a>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4">
                  <div class="icon-box text-center p-30 bg-white mb-30 border-3px">
                    <a href="#"><i class="flaticon-medical-brush18 text-theme-colored"></i></a>
                    <div class="features-details">
                      <h3>Teeth Whitening</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum consectetur sit ullam perspiciatis, deserunt.</p>
                    </div>
                    <a href="#" class="btn btn-flat btn-sm btn-theme-colored mt-15  text-theme-color-2">Read More</a>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4">
                  <div class="icon-box text-center p-30 bg-white mb-30 border-3px">
                    <a href="#"><i class="flaticon-medical-first32 text-theme-colored"></i></a>
                    <div class="features-details">
                      <h3>Wisdom Teeth</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum consectetur sit ullam perspiciatis, deserunt.</p>
                    </div>
                    <a href="#" class="btn btn-flat btn-sm btn-theme-colored mt-15  text-theme-color-2">Read More</a>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4">
                  <div class="icon-box text-center p-30 bg-white mb-30 border-3px">
                    <a href="#"><i class="flaticon-medical-dentist text-theme-colored"></i></a>
                    <div class="features-details">
                      <h3>Crowns Bridges</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum consectetur sit ullam perspiciatis, deserunt.</p>
                    </div>
                    <a href="#" class="btn btn-flat btn-sm btn-theme-colored mt-15  text-theme-color-2">Read More</a>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4">
                  <div class="icon-box text-center p-30 bg-white mb-30 border-3px">
                    <a href="#"><i class="flaticon-medical-dentist1 text-theme-colored"></i></a>
                    <div class="features-details">
                      <h3>Cosmetic Dentis</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum consectetur sit ullam perspiciatis, deserunt.</p>
                    </div>
                    <a href="#" class="btn btn-flat btn-sm btn-theme-colored mt-15  text-theme-color-2">Read More</a>
                  </div>
                </div> */}


              </div>
            </div>
          </div>
        </section>

        </div>
    )
}

export default Services
