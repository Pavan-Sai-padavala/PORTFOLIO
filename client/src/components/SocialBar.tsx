import {Divider, Link, Stack } from '@mui/material'

const SocialBar = () => {
  return (
    <div className='socialBar'>
      <div className='socialBarTitle'>
        <div>Version</div>
        <div>Socials</div>
      </div>
      <div className='socialBarItems1'>
        <div style={{flexGrow:1}}>April@2024</div>
        <Stack direction='row' spacing={2} divider={<Divider orientation='vertical'/>}>
          <Link href='https://twitter.com/Pavan_pps' target="_blank" rel="noopener noreferrer">Twitter</Link>
          <Link href="https://www.linkedin.com/in/pavan-sai-padavala" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
          <Link href="https://github.com/Pavan-Sai-padavala" target="_blank" rel="noopener noreferrer">Github</Link>
        </Stack>
      </div>
    </div>
  )
}

export default SocialBar