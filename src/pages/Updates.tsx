import React, { useEffect, useState } from 'react'
import UpdateItem from '../components/UpdateItem'
import banner from '../banner.png.jpg';
import BottomNav from '../components/BottomNav';
import { AppBar, Toolbar, IconButton, Avatar,Link ,Typography, Button } from '@mui/material';
import logo from '../components/logo.jpg';
import SocialBar from '../components/SocialBar';
import SendIcon from '@mui/icons-material/Send';
import { SocialIcon } from 'react-social-icons';
const Updates = () => {
        const text1='PAVAN SAI PADAVALA';
        const [title, settitle] = useState(text1);
        const text2='Creative Fronend Developer';
        useEffect(() => {
            const interval = setInterval(() => {
                settitle((prevTitle) => (prevTitle === text1 ? text2 : text1));
              }, 1000);
            return () => clearInterval(interval);  
        });
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
        <div id="updateTitle">
            <Typography variant='h4' style={{textAlign:'center'}}>Know more about me, to hire me</Typography>
            
            <Typography variant='body1'>Let's have a quick chat here <Link href="https://api.whatsapp.com/send?phone=918332078948&Hello%2C%20World!" target="_blank" rel="noopener noreferrer"><Button endIcon={<SendIcon />}>Send Message</Button></Link>  </Typography>
            <Typography variant='body1'>Please do connect with me</Typography>
            <Link href="https://github.com/Pavan-Sai-padavala" target="_blank" rel="noopener noreferrer">
                <Button>twitter<SocialIcon style={{height:'2rem',width:'2rem'}} network='twitter'/></Button>
            </Link>
            <Link href="https://www.linkedin.com/in/pavan-sai-padavala-6024a0194" target="_blank" rel="noopener noreferrer">
                <Button>linkedin<SocialIcon style={{height:'2rem',width:'2rem'}} network='linkedin'/></Button>
            </Link>
        </div>
        <div id='updateContainer' style={{height:'40vh',overflowY:'scroll'}}>
            <UpdateItem imgPath={banner} title="Got my custom Domain from GoDaddy"
                        info="I have claimed my custum domain from GODaddy as part of MLH GLobal Hack Week" 
                        link="https://x.com/Pavan_pps/status/1714190511702225046?s=20"/>
            
            <UpdateItem imgPath={banner} title="My First Merge Request got accepted"
                        info="Contributed a customized bottom navigation to an open-sourced ready-to use react componenets" 
                        link="https://github.com/vaishnavi-3969/Web-Componentify/pull/36" />
            
            <UpdateItem imgPath={banner} title="Partcipated on HactoberFest 2023"
                        info="My first ever open-source competition where i learn the 
                        writing clean code, code documentation and Networking" 
                        link="https://www.holopin.io/userbadge/clnbv57wp03660gl96haeewld" />
            <UpdateItem imgPath={banner} title="My first open-source contribution"
                        info="Developed coding focussed UI to the react code 
                        editor that compiles over 40+ Languages" link="https://x.com/Pavan_pps/status/1712467434333225384?s=20"/>
        </div>
        <BottomNav nextName={'Hire me'} backName={'Back To Home'} back={'/Home'} next={'/Contact'} />
        <SocialBar />
    </>
  )
}

export default Updates;