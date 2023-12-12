import Button from '@mui/material/Button/Button'
import React, { useState } from 'react'
type skillTags={
    title:String,
    skillItems:String[]
}
const SkillItem = (props:skillTags) => {
  const [expand,setExpand]=useState(false);
  const skillGen=props.skillItems.map((skill)=><div className='skillItems'>{skill}</div>)
  return (
    <div className='skillName'>
          <Button component='button' variant='outlined' size='large'onClick={() => setExpand(prevexpand=>!prevexpand)}>{props.title}</Button>
          {(expand) && (<div className='skillContainer'>{skillGen}</div>)}
        </div>
  )
}

export default SkillItem