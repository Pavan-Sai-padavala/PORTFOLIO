import React from 'react'
import BottomNav from './BottomNav'
import { IconButton, Link, Typography } from '@mui/material'
import { SocialIcon } from 'react-social-icons'

export const Projects = () => {
  return (
    <><div className="cardContainer">
      <Typography variant='h4' component='h4'>Projects</Typography>
      <div className="project_container">
        <div className="projectTitle">Portfolio Resume</div>
        <ul className="projectDetails">
          <li>Built from scratch using HTML,CSS,JavaScript and Jquery</li>
          <li>added dynamic features such as mouse-click events,page loading and animation</li>
        </ul>
        <div className="projectLinks">
          <Link href="https://github.com/Pavan-Sai-padavala/Pavan-sai-padavala.github.io" target="_blank" rel="noopener noreferrer"><SocialIcon style={{width:'2rem',height:'2rem'}} network='github' /></Link>
          <Link href="https://www.youtube.com/@pavansaipadavala46" target="_blank" rel="noopener noreferrer"><SocialIcon style={{width:'2rem',height:'2rem'}} network='youtube' /></Link>  
        </div>
      </div>
    </div><BottomNav back={'/Home/About'} next={'/Home/Skills'} nextName={'SKILLS'} backName={'ABOUT'} /></>      
  )
}
