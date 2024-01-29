import { useState } from 'react'
import { Button, Link} from '@mui/material'
import { SocialIcon } from 'react-social-icons'


import BottomNav from './BottomNav'

export const About = () => {
  const [visible, setvisible] = useState(false)
  return (
      <><div className='cardContainer'>
      <div className='title'>
        <h1>PAVAN SAI PADAVALA</h1>
        <div className="contactHeading" onClick={()=>setvisible(!visible)}>
          <Button > Contact At </Button>
          {(visible) && (<div className="contactDetails">
            <span>&#x1F4DE; 8332078948 </span>
            <span>&#x2709; pavansaipadavala@gmail.com</span>
          </div>)}
        </div>
      </div>

      <div className='banner'>
        <div className="animie1">
          <span>Tech Enthusiast - Fresher - Continous Learner</span> 
          <span className='mobileOnly'>- Self Motive - Tech Enthusiast  - Fresher - Continous Learner - </span>
        </div>
        <div className="animie2" >
          <span>Frontend Developer-Tech Savy- UI Developer</span><span className='mobileOnly'>- Frontend Developer - 
          Tech Savy - UI/UX Developer - </span></div>
      </div>

      <div className='portfolio' style={{textAlign:'center'}}>
        <h2 >Portfolio Links</h2>
        <div className="portfolioContainer">
          <Link href="https://github.com/Pavan-Sai-padavala" target="_blank" rel="noopener noreferrer"><SocialIcon  network='github'/><span className='mobileOnly'>Github</span></Link>
          <Link href="https://leetcode.com/pavan_pps" target="_blank" rel="noopener noreferrer"> <SocialIcon  network='leetcode'/><span className='mobileOnly'>Leetcode</span></Link>
          <Link href="https://www.linkedin.com/in/pavan-sai-padavala-6024a0194" target="_blank" rel="noopener noreferrer"><SocialIcon network='linkedin'/><span className='mobileOnly'>Linkedin</span></Link>
        </div>
      </div>
    </div><BottomNav back={' '} next={'/Home/Projects'} nextName={'PROJECTS'} backName={''} /></>  
  )
}
