import {Stack, Typography } from '@mui/material';

import BottomNav from '../components/BottomNav';
import SkillItem from '../components/SkillItem';

export const Skills = () => {
  return (
    <>
      <div className='cardContainer'>
        <Typography variant='h4' component='h4'>Skills</Typography>
        
        <Stack spacing={4}>
          <SkillItem title="Programming & Coding" skillItems={["Java","Python","Data Structures"]} />
        
          <SkillItem title="Frontend Development" skillItems={["Java Script","React.js","Redux","Material UI"]} />
        
          <SkillItem title="Backend Development" skillItems={["REST API","Node.js","Express.js","MongoDB"]} />
        
          <SkillItem title="Software Essentials" skillItems={["MySQL","Git","Github","VS Code"]} />
        </Stack>

      </div>
      <BottomNav back={'/Home/Projects'} next={'/Home/Education'} nextName={'EDUCATION'} backName={'PROJECTS'} />
    </>
  )
}