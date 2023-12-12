import { Button, Link, ThemeProvider, Typography, createMuiTheme } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download';
import React from 'react'

const theme = createMuiTheme({
    typography: {
      h4: {
        '@media (max-width:600px)': {
          fontSize: 'medium',
        },
      },
      button: {
        '@media (max-width:600px)': {
            padding:'0',
            fontSize: 'medium',
          },
      },
  }});
const Resume = () => {
  return (
    <ThemeProvider theme={theme}>
    <div className="resumeContainer">
        <Typography variant='h4' style={{color:'white'}}>1 click away to hire &#129321;	&#128522;</Typography>
        <Link href="https://drive.google.com/file/d/1qJzXZRDwl236nLThxoXG0QpD4OnkMm7v/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><Button variant='contained'endIcon={<DownloadIcon />}>Download My Resume</Button></Link>
    </div>
    </ThemeProvider>
  )
}

export default Resume