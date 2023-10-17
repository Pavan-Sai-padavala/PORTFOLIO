import React from 'react'
import BottomNav from '../components/BottomNav';
import {Stack, Typography } from '@mui/material';
import SkillItem from '../components/SkillItem';

export const Skills = () => {
  return (
    <><div className='cardContainer'>
      <Typography variant='h4' component='h4'>Skills</Typography>
      <Stack spacing={4}>
        <SkillItem title="Programming & Coding" skillItems={["Java","Python","Data Structures"]} />
        
        <SkillItem title="Frontend Development" skillItems={["HTML5","CSS3","JavaScript","Jquery"]} />
        
        <SkillItem title="React Framework" skillItems={["React Hooks","React Router","Reddux"]} />
        
        <SkillItem title="Software Essentials" skillItems={["MySQL","Git","Github","VS Code"]} />
      
      </Stack>
    </div><BottomNav back={'/Home/Projects'} next={'/Home/Education'} nextName={'EDUCATION'} backName={'PROJECTS'} /></>
  )
}