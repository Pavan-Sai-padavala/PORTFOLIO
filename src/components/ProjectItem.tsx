import { Link } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
type projectItems={
    title:String,
    description:String[],
    links:String[]
}
const ProjectItem = (props:projectItems) => {
  return (
    <div className="project_container">
        <div className="projectTitle">{props.title}</div>
        <ul className="projectDetails">
          {props.description.map((line)=><li>{line}</li>)}
        </ul>
        <div className="projectLinks">
        {/* 
          {props.links.map((link)=><Link href={link} target="_blank" rel="noopener noreferrer">link</Link>)} */}
          {/* <Link href="https://github.com/Pavan-Sai-padavala/PORTFOLIO" target="_blank" rel="noopener noreferrer"><SocialIcon style={{width:'2rem',height:'2rem'}} network='github' /></Link>
          <Link href="https://www.youtube.com/@pavansaipadavala46" target="_blank" rel="noopener noreferrer"><SocialIcon style={{width:'2rem',height:'2rem'}} network='youtube' /></Link>   */}
        </div>
      </div>
  )
}

export default ProjectItem