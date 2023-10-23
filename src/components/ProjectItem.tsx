import { Button, Link, Typography } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
type projectItems={
    title:String,
    description:String[];
    status:boolean;
    links?:string[];
    stack:String[]
}
const ProjectItem = (props:projectItems) => {
  const [expand,setExpand]=useState(false);
  return (
    <div className="project_container" onMouseEnter={()=>setExpand(true)} onMouseLeave={()=>setExpand(false)}>
        <div className="projectTitle">
          <Typography variant="h6" style={{padding:"0 20px 0 20px"}}>{props.title}</Typography>
          {props.status && <div className='projectStatus'>Working</div>}
        </div>
        <ul className="projectDetails">
          {props.description.map((line)=><li>{line}</li>)}
        </ul>
        {expand && props.links && <div className="projectLinks">
          <Link href={props.links[0]} target="_blank" rel="noopener noreferrer"><SocialIcon style={{width:'2rem',height:'2rem'}} network='github' /></Link>
          <Link href={props.links[1]} target="_blank" rel="noopener noreferrer"><SocialIcon style={{width:'2rem',height:'2rem'}} network='youtube' /></Link>
        </div>}
        <div className='projectTechStack'>
          <div style={{padding:"5px 0 5px 0"}}>Tech Stack</div>
          <div>{props.stack.map((stackItem)=><Button>{stackItem}</Button>)}</div>
        </div>
    </div>
  )
}

export default ProjectItem