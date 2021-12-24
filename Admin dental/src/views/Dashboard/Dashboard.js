import React, { useEffect } from "react";
// react plugin for creating charts
// @material-ui/core
import { Form, Input,} from 'antd';
import { makeStyles } from "@material-ui/core/styles";

import Button from "components/CustomButtons/Button.js";

// core components
import axios from "axios";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { useState } from "react";



const useStyles = makeStyles(styles);
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */


export default function Dashboard() {
  //gallery upload
  const [image, setImage] = useState("")
  const submitImage = async () => {
    // e.preventDefault()
    var imagedata = {image}

    console.log(typeof(imagedata));

    //services post
   var res = await  fetch('http://localhost:4000/Gallery/',{
    method : "POST",
    headers: {
       "Content-type": "application/json",
       "Accept" : "application/json",
      },
     body  : JSON.stringify(imagedata)

  })
   console.log(res)

}


  //services set state
  const [headline, setHeadline] = useState("")
  const [discription, setDiscription] = useState("")
  const [icon, setIcon] = useState("")
  const submitData = async () => {
    // e.preventDefault()
    var servicesdata = {headline, discription, icon}

    console.log(typeof(servicesdata));

    //services post
   var res = await  fetch('http://localhost:4000/Services/',{
    method : "POST",
    headers: {
       "Content-type": "application/json",
       "Accept" : "application/json",
      },
     body  : JSON.stringify(servicesdata)

  })
   console.log(res)

}

//Doctor data
const [docdata,setDocdata] = useState([])


const [id, setId] = useState("")
const [email, setEmail] = useState("")
  const onUpdate = async () => {
    // e.preventDefault()
    var emailUpdate = {id , email}
    console.log(emailUpdate);
    //Update Doc Data
    // axios
    // .patch(`http://localhost:4000/DentalAdmin/${id}`,email)
    //   .then(res => {
    //     alert('Doctor Email Id updated')
    //   })
      var config = {
        method: 'PATCH',
        url: `http://localhost:4000/DentalAdmin/${id}`,
        headers: { 
          'Content-Type': 'application/json'
        },
        EmailId : email
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.EmailId));
      })

}


//Delete Data
const onSubmit =(id)=>{
  

  axios

  .delete(`http://localhost:4000/DentalAdmin/${id}`)
  .then(res => {  
   alert('Doctor deleted')
  }) 

}
var config ={
 headers: {
   "Access-Control-Allow-Origin": "*",
   "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
 }
}
useEffect(() => {
 axios

     .get("http://localhost:4000/DentalAdmin/")
     .then(res => {
       setDocdata(res.data)
       
      
     })
}, [])
console.log("test",docdata)


  //appointment
  const classes = useStyles();
  const [data,setData] = useState([])
   var config ={
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  }
  useEffect(() => {
    axios
  
        .get("http://localhost:4000/Appointment/")
        .then(res => {
          setData(res.data)
          
         
        })
  }, [])
  console.log(data)
    
  return (
    <div>
     
      
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>

        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Id</th>
    </tr>
  </thead>
  <tbody>
    {docdata.map((Element)=>(
      <tr>
      <th scope="row">1</th>
      <td>{Element.Name}</td>
      <td>{Element.EmailId}</td>
      <td>{Element._id}</td>
      <td><button onClick={(()=>onSubmit(Element._id))}>
        Delete this Doctor
        </button>
        </td>
        
    </tr>
    ))}
  </tbody>
</table>

<Form {...layout} name="nest-messages" validateMessages={validateMessages}>
        <h1>Update Doctor Email Id</h1>
        <tr>
        <td>{Element._id}</td>
        </tr>
      <Form.Item name={['user', 'id']} label="Id" 
       value={id} onChange={(e) => { setId(e.target.value) }}
      >
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Email" 
       value={email} onChange={(e) => { setEmail(e.target.value) }}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" onClick={(onUpdate)} >
          Update
        </Button>
      </Form.Item>
    </Form>
        
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Appointment Status</h4>
              <p className={classes.cardCategoryWhite}>
                Appointments booked
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Discription", "Timing"]}
                tableData={data}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
      
      <Form {...layout} name="nest-messages" validateMessages={validateMessages}>
        <h1>Upload Services</h1>
      <Form.Item name={['user', 'headline']} label="Headline" 
       value={headline} onChange={(e) => { setHeadline(e.target.value) }}
      >
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'discription']} label="Discription" 
       value={discription} onChange={(e) => { setDiscription(e.target.value) }}
      >
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'icon']} label="Icon" 
       value={icon} onChange={(e) => { setIcon(e.target.value) }}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" onClick={(submitData)} >
          Submit
        </Button>
      </Form.Item>
    </Form>
      <div>
            <h1>Upload images in Gallery</h1>
        {image && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(image)} />
        <br />
        <button onClick={()=>setImage(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setImage(event.target.files[0]);
        }}
      /> 
      <br/>

      <br/>
      
      <Button type="primary" htmlType="submit" onClick={(submitImage)} >
          Submit
        </Button>
      
      </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}




