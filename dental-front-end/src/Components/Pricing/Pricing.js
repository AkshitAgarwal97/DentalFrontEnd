import React from 'react'

function Pricing() {
    return (
        <div>
            <section id="pricing">
          <div class="container pb-50">
            <div class="section-title text-center mb-60">
              <div class="row">
                <div class="col-md-8 col-md-offset-2">
                  <h2 class="text-uppercase mt-0">Pricing</h2>
                  <div class="title-icon">
                    <img class="mb-10" src="assets/images/title-icon.png" alt="" />
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem<br /> voluptatem obcaecati!</p>
                </div>
              </div>
            </div>
            <div class="section-content mt-20">
              <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-4 hvr-float-shadow mb-sm-30 wow fadeInLeft animation-delay1">
                  <div class="pricing-table border-3px border-theme-colored bg-white text-center">
                    <div class="p-40 bg-white">
                      <div class="pricing-icon">
                        <i class="flaticon-medical-hammers5 text-theme-colored"></i>
                      </div>
                      <h3 class="package-type font-24 text-uppercase">Dental Whitening</h3>
                      <h1 class="price text-theme-colored mb-10 font-36">$33</h1>
                      <h4 class="discount">First Time</h4>
                      <p>Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Rem autem voluptatem obcaecati! </p>
                      <a class="btn btn-colored btn-theme-colored text-uppercase mt-30" href="#">Request an Appointment</a>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 hvr-float-shadow mb-sm-30 wow fadeInUp animation-delay1">
                  <div class="pricing-table border-3px border-theme-colored bg-white text-center">
                    <div class="p-40 bg-white">
                      <div class="pricing-icon bg-theme-colored">
                        <i class="flaticon-medical-human3 text-white"></i>
                      </div>
                      <h3 class="package-type font-24 text-uppercase">Root Treatment</h3>
                      <h1 class="price text-theme-colored mb-10 font-36">$15</h1>
                      <h4 class="discount">First Time</h4>
                      <p>Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Rem autem voluptatem obcaecati! </p>
                      <a class="btn btn-colored btn-theme-colored text-uppercase mt-30" href="#">Request an Appointment</a><br />
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 hvr-float-shadow mb-sm-30 wow fadeInRight animation-delay1">
                  <div class="pricing-table border-3px border-theme-colored bg-white text-center">
                    <div class="p-40 bg-white">
                      <div class="pricing-icon">
                        <i class="flaticon-medical-scalpel3 text-theme-colored"></i>
                      </div>
                      <h3 class="package-type font-24 text-uppercase">Dental Implant</h3>
                      <h1 class="price text-theme-colored mb-10 font-36">$29</h1>
                      <h4 class="discount">First Time</h4>
                      <p>Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Rem autem voluptatem obcaecati! </p>
                      <a class="btn btn-colored btn-theme-colored text-uppercase mt-30" href="#">Request an Appointment</a><br />
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

export default Pricing
