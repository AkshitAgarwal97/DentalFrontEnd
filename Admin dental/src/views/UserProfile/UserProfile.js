
import { makeStyles } from "@material-ui/core/styles";
import { Form, Input, InputNumber,Upload} from 'antd';
import Button from "components/CustomButtons/Button.js";
import { useState} from 'react';



const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

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



const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};
//  useEffect(() => {
//    axios

//        .post("http://localhost:4000/DentalAdmin/")
//        .then(res => {
//          setData(res.onFinish)
        
       
//        })
//  }, [])
const useStyles = makeStyles(styles);

export default function UserProfile() {
  const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [phone, setPhone] = useState('')
const [instagram, setInstagram] = useState('')
const [facebook, setFacebook] = useState('')
const [twitter, setTwitter] = useState('')
const [linkedin, setLinkedin] = useState('')
const [introduction, setIntroduction] = useState('')
const [image, setImage] = useState('')
  


const submitData = async () => {
    // e.preventDefault()
    var userdata = {name,email,phone,instagram, facebook, twitter, linkedin, introduction, pimage:{
      'lastModified'     : image.lastModified,
      'lastModifiedDate' : image.lastModifiedDate,
      'name'             : image.name,
      'size'             : image.size,
      'type'             : image.type
   }}

    console.log(userdata.pimage,"pimage");



    
    // axios

    // .post('http://localhost:4000/DentalAdmin',

    //  userdata,

    //  {

    //   headers: { "content-type": "application/json" },

    // })

    // .then(function (response) {

    //   // handle success

    //   console.log("response", response);
    // })

    console.log(typeof(userdata));


   var res = await  fetch('http://localhost:4000/DentalAdmin/',{
    method : "POST",
    headers: {
       "Content-type": "application/json",
       "Accept" : "application/json",
      },
     body  : JSON.stringify(userdata)

  })
   console.log(res)




    //  axios.post("http://localhost:4000/DentalAdmin/", {

    //      headers: {
    //          "Content-type": "application/json",
    //          "Accept": "application/json",
    //      },
    //      body: JSON.stringify(userdata)

    //  })
    //      .then(res => {
    //          console.log(res)


    //      })

//console.log(userdata,  "hello");
//  useEffect(() => {
//    axios

//        .post("http://localhost:4000/DentalAdmin/")
//        .then(res => {
//          setData(res.userdata)
        
       
//        })
//  }, [])
}



  return (
    <Form {...layout} name="nest-messages" validateMessages={validateMessages}>
      <Form.Item
        id="name"
        name='name'
        label="Name"
        value={name}
        type="text"
        rules={[
          {
            required: true,
          },
        ]}
        onChange={(e) => { setName(e.target.value) }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        value={email}
        rules={[
          {
            type: 'email',
          },
        ]}
        onChange={(e) => { setEmail(e.target.value) }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'phone']}
        label="Phone"
        value={phone}
        rules={[
          {
            type: 'number',
            min: 1000000000,
            max: 9999999999,
          },
        ]}
        onChange={(e) => { setPhone(e.target.value) }}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'instagram']} label="Instagram" value={instagram} onChange={(e) => { setInstagram(e.target.value) }}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'facebook']} label="FaceBook" value={facebook} onChange={(e) => { setFacebook(e.target.value) }}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'twitter']} label="Twitter" value={twitter} onChange={(e) => { setTwitter(e.target.value) }}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'linkedin']} label="LinkedIn" value={linkedin} onChange={(e) => { setLinkedin(e.target.value) }}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Introduction" value={introduction} onChange={(e) => { setIntroduction(e.target.value) }}>
        <Input.TextArea />
      </Form.Item>
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
          // console.log(event.target.files[0]);
          setImage(event.target.files[0]);
        }}
      />     
      {/* <Upload {...props}>
     <Button icon={<UploadOutlined />} Input value={image} onChange={(e) => {setImage(e.target.file) }}>Click to Upload</Button>
   </Upload> */}
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" onClick={(submitData)} >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}



// ReactDOM.render(
//  
//   mountNode,
// );