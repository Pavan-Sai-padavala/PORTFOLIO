import { Divider, Link, Stack } from '@mui/material'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

const SocialBar2 = () => {
  return (
    <div className='socialBarItems'>
    <div style={{flexGrow:1,color:'grey'}}>October@2023</div>
    <Stack direction='row' spacing={1} divider={<Divider orientation='vertical'/>}>
      <Link href="https://github.com/Pavan-Sai-padavala" target="_blank" rel="noopener noreferrer"><SocialIcon style={{height:'2rem',width:'2rem'}} network='twitter'/></Link>
      <Link href="https://www.linkedin.com/in/pavan-sai-padavala-6024a0194" target="_blank" rel="noopener noreferrer"><SocialIcon style={{height:'2rem',width:'2rem'}} network='linkedin'/></Link>
      <Link href="https://github.com/Pavan-Sai-padavala" target="_blank" rel="noopener noreferrer"><SocialIcon style={{height:'2rem',width:'2rem'}} network='github'/></Link>
    </Stack>
  </div>
  )
}

export default SocialBar2