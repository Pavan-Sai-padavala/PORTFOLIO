import { Button, Input, InputLabel, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate, useSubmit } from 'react-router-dom'
import BottomNav from '../components/BottomNav';
import SocialBar2 from '../components/SocialBar2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import mailSuccessPic from '../mail success.jpg'
const Contact = () => {
    const navigate=useNavigate();
    
    const [processingState, setProcessingState]=useState("Let's work like a pro")
    const [isSubmitted, setIsSubmitted]=useState(false);
    const [formData, setFormData] = useState({
        name: "",
        to: "",
        subject: "",
        body:""
      });
      
      const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      
      const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try{
            setProcessingState("Sending Message");
            const response = await fetch("https://backend-service-c1fx.onrender.com/mail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
              const data = await response.json();
              console.log(data);
              setIsSubmitted(true);
          } else {
              const errorData = await response.json();
              throw new Error('errorData.message');
          }
        } catch(error) {
            setProcessingState("Let's work like a pro");
            console.error('Error:', error);
            toast.error("Error sending mail");
        }
    }
      
  return (
    <><ToastContainer />
      { isSubmitted ? (<div className='cardContainer'>
      <div style={{ position: 'relative', width: '100%', paddingTop: '25%' }}>
    <img src={mailSuccessPic} alt="mail success" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
</div>
      <Typography variant='h4' sx={{fontStyle:'italic'}}>Thankyou for reacing out to me. Your message is received, will contact you shortly. Have a nice day :)</Typography>
      </div>):(<div className='cardContainer'>
          <div>
              <Typography variant='h4' sx={{fontStyle:'italic'}}>Get a Talented in your team</Typography>
          </div>
 <form onSubmit={handleSubmit}>
  <div className='input'>
    <div className='inputId'>01</div>
    <div className='inputField'>
      <InputLabel htmlFor='userName'>What's your name</InputLabel>
      <Input type='text' id='userName' name='name' required placeholder='Pavan Sai Padavala' onChange={handleChange}></Input>
    </div>
  </div>
  <div className='input'>
    <div className='inputId'>02</div>
    <div className='inputField'>
      <InputLabel htmlFor='companyName'>What's your email</InputLabel>
      <Input type='email' id='companyName' name='to' required placeholder='pavansaipadavala@gmail.com' onChange={handleChange}></Input>
    </div>
  </div>
  <div className='input'>
    <div className='inputId'>03</div>
    <div className='inputField'>
      <InputLabel htmlFor='roleOffering'>Current Role / Organization</InputLabel>
      <Input type='text' id='roleOffering' name='subject' required placeholder='Frontend Developer' onChange={handleChange}></Input>
    </div>
  </div>
  <div className='input'>
    <div className='inputId'>04</div>
    <div className='inputField'>
      <InputLabel htmlFor='message'>Message</InputLabel>
      <Input type='text' id='message' name='body' required placeholder='wants to work collab with you' onChange={handleChange}></Input>
    </div>
  </div>
  <div className='formSubmit'>
    <Button type='submit' variant='contained'>{processingState}</Button>
  </div>
</form>

      </div> )}
      <BottomNav nextName={' '} backName={'Back To Home'} back={'/Home'} next={' '} />
      <SocialBar2 /></>
  )
}
export default Contact