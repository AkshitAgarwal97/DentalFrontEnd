import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function AppointmentForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [discription, setDiscription] = useState('')
  const [timings, setTimings] = useState('')
  const submitData = async (event) => {
    event.preventDefault()
    var userdata = { name, email, discription, timings }
    axios.post("http://localhost:4000/Appointment/", {

      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(userdata)

    })
      .then(res => {
        console.log(res)


      })


  }


  return (
    <div>
      <div className="col-md-4 col-md-offset-4">
        <div className="border-3px p-30 pt-10 pb-20 border-theme-colored bg-theme-colored2" >
          <h3 className="text-white">Request An Appointment!</h3>
          <p className="text-white mt-0">Just make an appointment to get help from our experts</p>
        </div>
      </div>
      <form id="appointment_form_at_home" name="appointment_form_at_home" className="" onSubmit={submitData}>
        <div className='container' >
          <div className='row'>
                <div className="col-sm-4 col-md-offset-4 ">
                  <div className="form-group mb-10" >
                    <input id="form_name " value={name} name="form_name" className="form-control" type="text" required="" placeholder="Enter Name" aria-required="true" marginleft="900dp" onChange={(e) => { setName(e.target.value) }} />
                  </div>
                </div>
                <div className="col-sm-4 col-md-offset-4">
                  <div className="form-group mb-10">
                    <input id="form_email" value={email} name="form_email" className="form-control required email" type="email" placeholder="Enter Email" aria-required="true" onChange={(e) => { setEmail(e.target.value) }} />
                  </div>
                </div>
                <div className="col-sm-4 col-md-offset-4">
                  <div className="form-group mb-10">
                    <input name="form_appontment_date" value={discription} className="form-control required datetime-picker" type="text" placeholder="Appoinment Date & Time" aria-required="true" onChange={(e) => { setDiscription(e.target.value) }} />
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-offset-4">
                <textarea name="form_message" value={timings} className="form-control required" placeholder="Enter Message" rows="4" aria-required="true" onChange={(e) => { setTimings(e.target.value) }}></textarea>
              </div>
              <div className="col-sm-4 col-md-offset-4">
                <input name="form_botcheck" className="form-control" type="hidden" value="" />
                <button type="submit" className="btn btn-dark btn-theme-colored" data-loading-text="Please wait...">Send Message</button>
              </div>
            </div>

        
      </form>

      {/* <!-- Appointment Form Validation--> */}
      {/* <script>
                  $("#appointment_form_at_home").validate({
                    submitHandler: function(form) {
                      var form_btn = $(form).find('button[type="submit"]');
                      var form_result_div = '#form-result';
                      $(form_result_div).remove();
                      form_btn.before('<div id="form-result" className="alert alert-success" role="alert" style="display: none;"></div>');
                      var form_btn_old_msg = form_btn.html();
                      form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
                      $(form).ajaxSubmit({
                        dataType:  'json',
                        success: function(data) {
                          if( data.status == 'true' ) {
                            $(form).find('.form-control').val('');
                          }
                          form_btn.prop('disabled', false).html(form_btn_old_msg);
                          $(form_result_div).html(data.message).fadeIn('slow');
                          setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
                        }
                      });
                    }
                  });
                </script> */}
    </div>
  )
}

export default AppointmentForm
