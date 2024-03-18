import { AppBar, Avatar, IconButton, Toolbar, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import BottomNav from '../components/BottomNav';
import SocialBar2 from '../components/SocialBar2';
import mailSuccessPic from '../Assets/mail success.jpg'
import { useSelector } from 'react-redux';
import ContactForm from '../components/ContactForm';
import logo from '../Assets/logo.jpg';
const Contact = () => {
  const text1='PAVAN SAI PADAVALA';
        const [title, settitle] = useState(text1);
        const text2='Creative Fronend Developer';
  useEffect(() => {
    const interval = setInterval(() => {
        settitle((prevTitle) => (prevTitle === text1 ? text2 : text1));
      }, 1000);
    return () => clearInterval(interval);  
});
   const state=useSelector((state: { form: any; })=>state.form);
    return (
      <>
      <AppBar position="static">
                    <Toolbar>
                        <IconButton>
                            <Avatar src={logo} />
                        </IconButton>
                        <Typography variant="h6" sx={{flexGrow:1}}>
                            {title}
                        </Typography>
                    </Toolbar>
                </AppBar>
      {(state =="Email Sent Successfully")? <div className='cardContainer'>
              <div style={{ position: 'relative', width: '100%', paddingTop: '25%' }}>
                <img src={mailSuccessPic} alt="mail success" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
              </div>
              <Typography variant='h4' sx={{fontStyle:'italic'}}>Thankyou for reacing out to me. Your message is received, will contact you shortly. Have a nice day :)</Typography>
            </div>  : <ContactForm />}
      <BottomNav nextName={' '} backName={'Back To Home'} back={'/Home'} next={' '} />
      <SocialBar2 />
      </>
  )
}
export default Contact