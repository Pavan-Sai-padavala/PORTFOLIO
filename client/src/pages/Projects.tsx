import {Typography } from '@mui/material'

import BottomNav from '../components/BottomNav'
import ProjectItem from '../components/ProjectItem'

export const Projects = () => {
  return (
    <>
      <div className="cardContainer">
        <Typography style={{textAlign:'center'}}variant='h4' component='h4'>Work Samples</Typography>
        
        <ProjectItem title="Portfolio" 
                   description={["Developed a fully functional, responsive single-page application from the ground up, integrating dynamic content and achieving a load time of under 2 seconds",
                   " Streamlined internal navigation and crafted an impressive user interface utilizing Material UI.",
                   "Implemented mailer feature to facilitate real-time communication with viewers"]}
                   links={["https://github.com/Pavan-Sai-padavala/PORTFOLIO","https://www.youtube.com/@pavansaipadavala46"]} 
                   stack={["React.js","Material UI","Type Script","Node Mailer"]}/>
        
        <ProjectItem title="Digi Pustak" 
                   description={["Constructed a comprehensive full-stack application for efficient note organization across various folders.",
                   "Engineered an engaging landing page and am presently developing the design for a backend REST API"]} 
                   stack={["React.js","REST API","Node.Js","Express.js","MongoDB"]}/>
      
        <Typography style={{margin:"40px 0 5px 0",textAlign:'center'}}variant='h4' component='h4'>Open-Source contributions</Typography>
        
        <ProjectItem title="A Web Based Code Editor" 
                   description={["A code editor that compiles over 40+ Languages","Contributed Coding Focussed UI","Enhanced the footer section and added credits section"]}
                   links={["https://github.com/Pavan-Sai-padavala/PORTFOLIO","https://www.youtube.com/@pavansaipadavala46"]} 
                   stack={["Tailwind CSS","React","Monaco Code Editor","Judge0 API"]}/>
        
        <ProjectItem title="Web Componentify" 
                   description={["A open-source repository,providing a collection of re-usable react componenets","Contributed bottom navigation componenet to simplify the navigating experience"]}
                   links={["https://github.com/Pavan-Sai-padavala/PORTFOLIO","https://www.youtube.com/@pavansaipadavala46"]} 
                   stack={["React","JSX","CSS3","SPA"]}/>
      </div>
      <BottomNav back={'/Home/About'} next={'/Home/Skills'} nextName={'SKILLS'} backName={'ABOUT'} />
    </>      
  )
}
