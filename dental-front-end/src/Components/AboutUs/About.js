import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const About = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [discription, setDiscription] = useState('')
    const [timings, setTimings] = useState('')
    const submitData = async (event) => {
        event.preventDefault()
        var userdata = { name, email, discription, timings }
        console.log(userdata);
        var res = await  fetch('http://localhost:4000/Appointment/',{
    method : "POST",
    headers: {
       "Content-type": "application/json",
       "Accept" : "application/json",
      },
     body  : JSON.stringify(userdata)

  })
    }
    return (
        <div>
            <section id="about">
                <div class="container pt-0">
                    <div class="section-content">
                        <div class="row">
                            <div class="col-md-8">
                                <h2 class="text-theme-colored2 mb-0">Dr. Corvin Adams</h2>
                                <p class="text-gray-aaa">Doctor of Dental Surgery (DDS)</p>
                                <h2 class="mt-0">A dentist, also known as a dental surgeon, The dentist's supporting team aids in providing oral health services.</h2>
                                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi molestiae autem fugit consectetur dolor ullam illo ipsa numquam, quod iusto enim ipsum amet iusto amet consec Lorem ipsum dolor sit amet</p>
                                <div class="row mb-sm-30">
                                    <div class="col-sm-6 col-md-6">
                                        <div class="icon-box icon-left">
                                            <a class="icon bg-theme-colored icon-circled icon-border-effect effect-circled pull-left flip sm-pull-none" href="#">
                                            <i class="flaticon-medical-first32 text-white"></i>
                                            </a>
                                            <h4 class="icon-box-title mt-10">Teeth Whitening</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur ipsum dolor.</p>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <div class="icon-box icon-left">
                                            <a class="icon bg-theme-colored icon-circled icon-border-effect effect-circled pull-left flip sm-pull-none" href="#">
                                                <i class="flaticon-medical-brush18 text-white"></i>
                                            </a>
                                            <h4 class="icon-box-title mt-10">Teeth Cleaning</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur ipsum dolor.</p>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <div class="icon-box icon-left">
                                            <a class="icon bg-theme-colored2 icon-circled icon-border-effect effect-circled pull-left flip sm-pull-none" href="#">
                                                <i class="flaticon-medical-microscope13 text-white"></i>
                                            </a>
                                            <h4 class="icon-box-title mt-10">Oral surgery</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur ipsum dolor.</p>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <div class="icon-box icon-left">
                                            <a class="icon bg-theme-colored2 icon-circled icon-border-effect effect-circled pull-left flip sm-pull-none" href="#">
                                                <i class="flaticon-medical-teeth2 text-white"></i>
                                            </a>
                                            <h4 class="icon-box-title mt-10">Quality Brackets</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur ipsum dolor.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="border-3px p-30 pt-10 pb-20 border-theme-colored bg-theme-colored2">
                                    <h3 class="text-white">Request An Appointment!</h3>
                                    <p class="text-white mt-0">Just make an appointment to get help from our experts</p>
                                    <form id="appointment_form_at_home" name="appointment_form_at_home" class="" method="post" action="http://html.kodesolution.live/h/dentalpro/v3.0/demo/includes/appointment.php">
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="form-group mb-10">
                                                    <input id="form_name " value={name} name="form_name" className="form-control" type="text" required="" placeholder="Enter Name" aria-required="true" marginleft="900dp" onChange={(e) => { setName(e.target.value) }} />
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="form-group mb-10">
                                                    <input id="form_email" value={email} name="form_email" className="form-control required email" type="email" placeholder="Enter Email" aria-required="true" onChange={(e) => { setEmail(e.target.value) }} />
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="form-group mb-10">
                                                    <input name="form_appontment_date" value={timings} className="form-control required datetime-picker" type="text" placeholder="Appoinment Date & Time" aria-required="true" onChange={(e) => { setTimings(e.target.value) }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group mb-10">
                                            <textarea name="form_message" value={discription} className="form-control required" placeholder="Enter Message" rows="4" aria-required="true" onChange={(e) => { setDiscription(e.target.value) }}></textarea>
                                        </div>
                                        <div class="form-group mb-0 mt-20">
                                            <input name="form_botcheck" className="form-control" type="hidden" value="" />
                                            <button type="submit" className="btn btn-dark btn-theme-colored" data-loading-text="Please wait..." onClick={(submitData)}>Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default About
