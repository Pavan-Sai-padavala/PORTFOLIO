import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AppBar,Avatar,Box,Button,Drawer,Icon,IconButton,Menu,Stack,Toolbar, Typography } from "@mui/material";
import SocialBar2 from "./SocialBar2";
import MenuIcon from '@mui/icons-material/Menu';
import logo from './logo.jpg';

function Home(){
    const text1='PAVAN SAI PADAVALA';
    const [title, settitle] = useState(text1);
    
    const text2='Creative Fronend Developer';
    const [isDrawerOpen, setisDrawerOpen]=useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            settitle((prevTitle) => (prevTitle === text1 ? text2 : text1));
          }, 1000);
        return () => clearInterval(interval);   
        
    });
    return(
        <><AppBar position="static">
            <Toolbar>
                <IconButton>
                    <Avatar src={logo} />
                </IconButton>
                <Typography variant="h6" sx={{flexGrow:1}}>
                    {title}
                </Typography>
                <Stack direction='row' spacing={2} sx={{display:{xs:"none",md:"flex"}}}>
                    <Button variant="outlined"><Link className="link" to='About'>About</Link></Button>
                    <Button variant="outlined"><Link className="link" to='Projects'>Projects</Link></Button>
                    <Button variant="outlined"><Link className="link"to='Skills'>Skills</Link></Button>
                    <Button variant="outlined"><Link className="link" to='Education'>Education</Link></Button>
                    <Button variant="outlined"><Link className="link"to='/Contact'>Hire me</Link></Button>
                </Stack>
                <div className="menuIcon">
                <IconButton className="menuIcon" onClick={()=>setisDrawerOpen(!isDrawerOpen)}>
                    <MenuIcon  />
                </IconButton>
                </div>
            </Toolbar>
        </AppBar>
        {isDrawerOpen &&
                    <Stack spacing={15}  sx={{margin:'2rem',justifyContent:'center'}} width='fit-content' height='100' textAlign='center' onClick={()=>setisDrawerOpen(false)}>
                        <Button variant="outlined"><Link className="link" to='About'>About</Link></Button>
                        <Button variant="outlined"><Link className="link" to='Projects'>Projects</Link></Button>
                        <Button variant="outlined"><Link className="link"to='Skills'>Skills</Link></Button>
                        <Button variant="outlined"><Link className="link" to='Education'>Education</Link></Button>
                        <Button variant="outlined"><Link className="link" to='/Contact'>Hire me</Link></Button>
                    </Stack>
                }
        <Outlet />
        <SocialBar2 />
        </>
    )
}
export default Home;