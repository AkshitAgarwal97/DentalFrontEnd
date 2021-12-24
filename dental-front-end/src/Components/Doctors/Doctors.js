import { useState, useEffect } from "react"
import axios from "axios"

const Doctor = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
axios.get("http://localhost:4000/DentalAdmin").then((res)=>{
  setData(res.data)
})
},[])

console.log("test",data)
  return(
<section id="doctors">
         <div className="container">
           <div className="section-title text-center">
             <div className="row">
               <div className="col-md-8 col-md-offset-2">
                 <h2 className=" mt-0 line-height-1">
                   Our <span className="text-theme-colored">Dentist</span>
                 </h2>
                 <div className="title-icon">
                   <img className="mb-10" src="images/title-icon.png" alt="" />
                 </div>
                 <p>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                   autem
                   <br /> voluptatem obcaecati!
                 </p>
               </div>
             </div>
           </div>
           <div className="row mtli-row-clearfix">
             <div className="col-md-12">
               <div className="owl-carousel-4col">
                   <div /* style={{maxWidth: "300px"}}*/ className="Dentist" >
                    {data.map((Element,i)=>(
                       <div className="item" key={i} style={{width:"100%"}}>
             <div className="team-members border-bottom-theme-color-2px text-center maxwidth450">
               <div className="team-thumb">
                 <img  src={Element.DoctorImage} className="img-fullwidth" alt="" />
                 <div className="team-overlay"></div>
               </div>
               <div className="team-details bg-silver-light pt-10 pb-10">
                 <h4 className="text-uppercase font-weight-600 m-5">{Element.Name}</h4>
                 <h6 className="text-theme-colored font-15 font-weight-400 mt-0">{Element.Discription}</h6>  
                 <ul className="styled-icons icon-theme-colored icon-dark icon-circled icon-sm">
                   <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                   <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                   <li><a href="#"><i className="fab fa-instagram"></i></a></li>    
                   <li><a href="#"><i className="fab fa-skype"></i></a></li>
                 </ul>
               </div>
             </div>
           </div>
                    ))}
                     </div>
               </div>
             </div>
           </div>
         </div>
       </section>
       
  )
  
}
export default Doctor


  // return(
        
        
        
//   )
// })

//   return (
//     <>

//       
//                     </>
//     );
