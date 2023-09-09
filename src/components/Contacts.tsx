import { Button, Input, InputLabel, Typography } from '@mui/material';
import React from 'react'
import { useNavigate, useSubmit } from 'react-router-dom'
import BottomNav from './BottomNav';
import SocialBar2 from './SocialBar2';
const Contact = () => {
    const navigate=useNavigate();
    function Func(){
        navigate('/Home');
    }
  return (
    <><div className='cardContainer'>
          <div>
              <Typography variant='h4' sx={{fontStyle:'italic'}}>Get a Talented in your team</Typography>
          </div>
          <form>
              <div className='input'>
                  <div className='inputId'>
                      01
                  </div>
                  <div className='inputField'>
                      <InputLabel htmlFor='name'>Whats your name</InputLabel>
                      <Input type='text' id='name' required placeholder='Pavan Sai Padavala'></Input>
                  </div>
              </div>

              <div className='input'>
                  <div className='inputId'>
                      02
                  </div>
                  <div className='inputField'>
                      <InputLabel htmlFor='name'>Company name</InputLabel>
                      <Input type='text' id='name' required placeholder='ABC'></Input>
                  </div>
              </div>
              <div className='input'>
                  <div className='inputId'>
                      03
                  </div>
                  <div className='inputField'>
                      <InputLabel htmlFor='name'>Role Offering</InputLabel>
                      <Input type='text' id='name' required placeholder='Frontend Developer'></Input>
                  </div>
              </div>
              <div className='formSubmit'>
              <Button  type='submit' variant='contained'>Let's work like a pro</Button>
              </div>
          </form>
      </div>
      <BottomNav nextName={' '} backName={'Back To Home'} back={'/Home'} next={' '} />
      <SocialBar2 /></>
  )
}
export default Contact