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
          <li>Created a Responsive, Dynamic Single-page application using react js framework</li>
          <li>Added bottom navigation bar for smoother user experience</li>
          <li>Developed a nice UI with Material UI</li>
        </ul>
        <div className="projectLinks">
          <Link href="https://github.com/Pavan-Sai-padavala/PORTFOLIO" target="_blank" rel="noopener noreferrer"><SocialIcon style={{width:'2rem',height:'2rem'}} network='github' /></Link>
          <Link href="https://www.youtube.com/@pavansaipadavala46" target="_blank" rel="noopener noreferrer"><SocialIcon style={{width:'2rem',height:'2rem'}} network='youtube' /></Link>  
        </div>
      </div>
    </div><BottomNav back={'/Home/About'} next={'/Home/Skills'} nextName={'SKILLS'} backName={'ABOUT'} /></>      
  )
}
