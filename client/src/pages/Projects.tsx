import React from 'react'
import BottomNav from '../components/BottomNav'
import { Link, Typography } from '@mui/material'
import { SocialIcon } from 'react-social-icons'
import ProjectItem from '../components/ProjectItem'

export const Projects = () => {
  return (
    <><div className="cardContainer">
      <Typography style={{textAlign:'center'}}variant='h4' component='h4'>Work Samples</Typography>
      <ProjectItem title="Portfolio" status={false}
                   description={["Created a Single-page, Dynamic and Responsive application from scratch using React Js","Added bottom navigation bar for smoother navigating experience","Developed a nice interactive UI with Material UI"]}
                   links={["https://github.com/Pavan-Sai-padavala/PORTFOLIO","https://www.youtube.com/@pavansaipadavala46"]} 
                   stack={["React","Material UI","SPA"]}/>
      <ProjectItem title="Digi Pustak" status={true}
                   description={["Developed a Landing page focussed to highlight the product features","working on Login interfaces & profile page"]} 
                   stack={["React","Node Js","Express.js"]}/>
      
      <Typography style={{margin:"40px 0 5px 0",textAlign:'center'}}variant='h4' component='h4'>Open-Source contributions</Typography>
      <ProjectItem title="A Web Based Code Editor" status={false}
                   description={["A code editor that compiles over 40+ Languages","Contributed Coding Focussed UI","Enhanced the footer section and added credits section"]}
                   links={["https://github.com/Pavan-Sai-padavala/PORTFOLIO","https://www.youtube.com/@pavansaipadavala46"]} 
                   stack={["Tailwind CSS","React","Monaco Code Editor","Judge0 API"]}/>
      <ProjectItem title="Web Componentify" status={false}
                   description={["A open-source repository,providing a collection of re-usable react componenets","Contributed bottom navigation componenet to simplify the navigating experience"]}
                   links={["https://github.com/Pavan-Sai-padavala/PORTFOLIO","https://www.youtube.com/@pavansaipadavala46"]} 
                   stack={["React","JSX","CSS3","SPA"]}/>
    </div><BottomNav back={'/Home/About'} next={'/Home/Skills'} nextName={'SKILLS'} backName={'ABOUT'} /></>      
  )
}
