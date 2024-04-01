import { Divider, Link, Stack } from '@mui/material'
import { SocialIcon } from 'react-social-icons'

const SocialBar2 = () => {
  return (
    <div className='socialBarItems'>
    <div style={{flexGrow:1,color:'grey'}}>April@2024</div>
    <Stack direction='row' spacing={1} divider={<Divider orientation='vertical'/>}>
      <Link href="https://twitter.com/Pavan_pps" target="_blank" rel="noopener noreferrer"><SocialIcon style={{height:'2rem',width:'2rem'}} network="x"/></Link>
      <Link href="https://www.linkedin.com/in/pavan-sai-padavala" target="_blank" rel="noopener noreferrer"><SocialIcon style={{height:'2rem',width:'2rem'}} network='linkedin'/></Link>
      <Link href="https://github.com/Pavan-Sai-padavala" target="_blank" rel="noopener noreferrer"><SocialIcon style={{height:'2rem',width:'2rem'}} network='github'/></Link>
    </Stack>
  </div>
  )
}

export default SocialBar2