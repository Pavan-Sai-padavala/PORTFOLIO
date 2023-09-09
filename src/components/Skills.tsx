import React, { useState } from 'react'
import BottomNav from './BottomNav';
import { Box, Button, Stack, Typography } from '@mui/material';

export const Skills = () => {
  const [expanded,setExpanded]=useState(' ')
  return (
    <><div className='cardContainer'>
      <Typography variant='h4' component='h4'>Skills</Typography>
      <Stack spacing={4}>
        <div className='skillName'>
          <Button component='button' variant='outlined' size='large'onClick={() => setExpanded('programming')}>Programming & Coding</Button>
          {(expanded ==='programming') && (<div className='skillContainer'>
            <div className='skillItems'>Java</div><div className='skillItems'>Python</div><div className='skillItems'>Data Structures</div>
          </div>)}
        </div>
        <div className='skillName'>
          <Button variant='outlined' onClick={() => setExpanded('frontend')}>Frontend Develeopment</Button>
          {(expanded ==='frontend') && (<div className='skillContainer'>
            <div className='skillItems'>HTML5</div><div className='skillItems'>CSS3</div><div className='skillItems'>JavaScript</div>
          </div>)}
        </div>
        <div className='skillName'>
          <Button variant='outlined' onClick={() => setExpanded('react')}>React Framework</Button>
          {(expanded ==='react') && (<div className='skillContainer'>
            <div className='skillItems'>React Hooks</div><div className='skillItems'>React Router</div><div className='skillItems'>React MUI</div>
          </div>)}
        </div>
        <div className='skillName'>
          <Button component='button' variant='outlined' onClick={() => setExpanded('software')}>Software Essentials</Button>
          {(expanded ==='software') && (<div className='skillContainer'>
            <div className='skillItems'>Git & Github</div><div className='skillItems'>SQL</div><div className='skillItems'>Visual Studio</div>
          </div>)}
        </div>
      </Stack>
    </div><BottomNav back={'/Home/Projects'} next={'/Home/Education'} nextName={'EDUCATION'} backName={'PROJECTS'} /></>
  )
}