import { useEffect, useState } from 'react'
import { AppBar, Toolbar, IconButton, Avatar,Link ,Typography, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { SocialIcon } from 'react-social-icons';

import UpdateItem from '../components/UpdateItem'
import SocialBar from '../components/SocialBar';
import BottomNav from '../components/BottomNav';

import firstOpenSource from '../Assets/first_open_source.jpg';
import hactoberfest from '../Assets/hactoberfest.jpg';
import github from '../Assets/github.jpg';
import domain from '../Assets/godaddy domain.jpg';
import blog from '../Assets/blog.jpg';
import portfolio from '../Assets/portfolio.jpg';
import logo from '../Assets/logo.jpg';

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
                    
                    <Link href="https://twitter.com/Pavan_pps/" target="_blank" rel="noopener noreferrer">
                        <Button>X(formerly, twitter)<SocialIcon style={{height:'2rem',width:'2rem'}} network='x'/></Button>
                    </Link>
                    
                    <Link href="https://www.linkedin.com/in/pavan-sai-padavala" target="_blank" rel="noopener noreferrer">
                        <Button>linkedin<SocialIcon style={{height:'2rem',width:'2rem'}} network='linkedin'/></Button>
                    </Link>
                </div>

                <div id='updateContainer' style={{height:'40vh',overflowY:'scroll'}}>
                    <UpdateItem imgPath={portfolio} title="Grand Launch of My Portfolio"
                        info="Launched my portfolio across my Linkedin Network to showcase my skills expertise in tech" 
                        link="https://x.com/Pavan_pps/status/1714190511702225046?s=20"/>

                    <UpdateItem imgPath={blog} title="Started Blogging on web applications architecture"
                        info="Composing blogs on web applications to enagage with the tech community and build professional brand" 
                        link="https://x.com/Pavan_pps/status/1714190511702225046?s=20"/>

                    <UpdateItem imgPath={domain} title="Got my custom Domain from GoDaddy"
                        info="I have claimed my custum domain from GODaddy as part of MLH GLobal Hack Week" 
                        link="https://x.com/Pavan_pps/status/1714190511702225046?s=20"/>

                    <UpdateItem imgPath={github} title="My First Merge Request got accepted"
                        info="Contributed a customized bottom navigation to an open-sourced ready-to use react componenets" 
                        link="https://github.com/vaishnavi-3969/Web-Componentify/pull/36" />
            
                    <UpdateItem imgPath={hactoberfest} title="Partcipated on HactoberFest 2023"
                        info="My first ever open-source competition where i learn the 
                        writing clean code, code documentation and Networking" 
                        link="https://www.holopin.io/userbadge/clnbv57wp03660gl96haeewld" />
                    
                    <UpdateItem imgPath={firstOpenSource} title="My first open-source contribution"
                        info="Developed coding focussed UI to the react code 
                        editor that compiles over 40+ Languages" link="https://x.com/Pavan_pps/status/1712467434333225384?s=20"/>
                
                </div>
                <BottomNav nextName={'Hire me'} backName={'Back To Home'} back={'/Home'} next={'/Contact'} />
                <SocialBar />
            </>
  )
}

export default Updates;