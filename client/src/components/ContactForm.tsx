import React, { useState } from 'react'
import { Button, Input, InputLabel} from '@mui/material';
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import { formState } from '../Redux Store/features/formSlice';
type Inputs={
  Name: string,
  Email: string,
  profession: string,
  role:string,
  organization:string,
  message:string
  social: string,
  mobile:number
}
const mapStateToProps = (state: { form: any; }) => ({
  formState: state.form,
});
const ContactForm = () => {
    const {register, handleSubmit,formState:{errors}, watch}=useForm<Inputs>();
    const professionValue=watch("profession")
    const dispatch=useDispatch();
    const  [submit, setsubmit] = useState("Submit");
    const onSubmit: SubmitHandler<Inputs> = async(data) =>{ 
      setsubmit("Submitting");
      try{
        const response = await fetch("https://backend-service-c1fx.onrender.com/mail", { 
        method: "POST",
          headers: {
             "Content-Type": "application/json",
            },
          body: JSON.stringify(data),
        });
  
        if (response.status===200) {
          dispatch(formState("Email Sent Successfully"));
          const data = await response.json();
          console.log(data);
        } 
        else {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }
    } 
    catch(error) {
      dispatch(formState("Error Sending Email"));
          console.error('Error:', error);
          toast.error("Error sending mail");
    }
    
    }
    return (
      <div className='cardContainer'>
        <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>

      <div className='inputField'>
      <InputLabel htmlFor='userName'>What's your name <span style={{color:"red"}}>&#42;</span></InputLabel>
      <Input type="text" {...register("Name",{required:"Please Enter your good name"})} placeholder='Pavan Sai Padavala' id='userName' />
      {errors.Name && <p style={{color:'orange'}}>&#9432; {errors.Name.message}</p>}
      </div>

      <div className='inputField'>
      <InputLabel htmlFor='email'>What's your E-Mail<span style={{color:"red"}}>&#42;</span></InputLabel>
      <Input type="email" {...register("Email",{required:"Enter a valid email id"})} id='email' placeholder='pavansaipadavala@gmail.com' />
      {errors.Email && <p style={{color:'orange'}}>&#9432; {errors.Email.message}</p>}
      </div>

      <InputLabel style={{margin:'1rem 0 0 1rem'}}>Please Select Your Role<span style={{color:"red"}}>&#42;</span></InputLabel>
      <div style={{display:'flex', justifyContent:'space-around'}}>
      <div className='inputRadio'>
      <Input type="radio" {...register("profession",{required:"This is a mandatory field"})} value="Recruiter" id='profession' />
      <InputLabel htmlFor='profession'>Recruiter</InputLabel>
      </div>

      <div className='inputRadio'>
      <Input type="radio" {...register("profession",{required:"This is an mandatory field"})} value="Developer" id='profession1' />
      <InputLabel htmlFor='profession1'>Developer</InputLabel>
      </div>
      </div>
      {(professionValue==="Recruiter") && (<>
        <div className='inputField'>
        <InputLabel htmlFor='role'>Role Offered<span style={{color:"red"}}>&#42;</span></InputLabel>
        <Input type="text" id='role' {...register("role",{required:"Kindly, Enter the role you offered"})} placeholder='MERN Stack / Software Developer' />
        {errors.role && <p style={{color:'orange'}}>&#9432; {errors.role.message}</p>}
        </div>

        <div className='inputField'>
        <InputLabel htmlFor='organization'>Organization<span style={{color:"red"}}>&#42;</span></InputLabel>
        <Input type="text" id="organization" {...register("organization",{required:"Kindly, Enter the Organization Name"})} placeholder='Startup'/>
        {errors.organization && <p style={{color:'orange'}}>&#9432; {errors.organization.message}</p>}
        </div>

        </>
      )}
      {(professionValue==="Developer") && (<>
        <div className='inputField'>
        <InputLabel htmlFor='message'>Message<span style={{color:"red"}}>&#42;</span></InputLabel>
        <Input type="text" id="message" {...register("message",{required:"Please, Enter any message to me"})} placeholder='I Have an opportunity for you...' />
        {errors.message && <p style={{color:'orange'}}>&#9432; {errors.message.message}</p>}
        </div>
        </>
      )}
      <div className='inputField'>
      {errors.profession && <p style={{color:'orange'}}>&#9432; {errors.profession.message}</p>}
      <InputLabel htmlFor='social'>LinkedIn</InputLabel>
      <Input type='url' {...register("social")} id='social' placeholder='https://www.linkedin.com/Pavan-Sai-padavala'/>
      </div>
      
      <div className='inputField'>
      <InputLabel htmlFor='mobile'>Contact Number</InputLabel>
      <Input type='number' {...register("mobile",)} id='mobile' placeholder='8332078948' />
      {errors.mobile && <p style={{color:'orange'}}>&#9432; {errors.mobile.message}</p>}
      </div>
      
      <div className='formSubmit'>
      <Button type="submit" variant='outlined'>{submit}</Button>
      </div>
      
      </form>
      </div>
  )
}

export default connect(mapStateToProps)(ContactForm);