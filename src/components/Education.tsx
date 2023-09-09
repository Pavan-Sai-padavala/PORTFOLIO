import React, { useState } from 'react'
import BottomNav from './BottomNav'
import { Typography } from '@mui/material';
var expanded="";
export const Education = () => {
  const [expanded,setExpanded]=useState(' ');

  return (
          <><div className="cardContainer">
      <Typography variant='h4' component='h4'>Education</Typography>
      <div className="Education_container" onClick={()=>setExpanded('B.Tech')}>
        <div className="Education_title" >
          <div className="Education_header">B.Tech</div> <div className="percent">73%</div>
        </div>
        { (expanded==="B.Tech") && (<div className="Education_details">
          <div className="collegeName">Velagapudi RamaKrishna Siddhartha Engineering College</div>
          <div className="stream">Electronics and Communication Engineering</div>
          <div className="batch">2019-2023</div>
        </div>)}
      </div>
      <div className="Education_container" onClick={()=>setExpanded('Inter')}>
        <div className="Education_title">
          <div className="Education_header">Intermediate</div> <div className="percent">92.3%</div>
        </div>
        {(expanded==='Inter')&&(<div className="Education_details">
          <div className="collegeName">Sri Chaitanya Junior College</div>
          <div className="stream">M.P.C</div>
          <div className="batch">2017-19</div>
        </div>)}
      </div>
      <div className="Education_container" onClick={()=>setExpanded('10th')}>
        <div className="Education_title">
          <div className="Education_header">10<sup>th</sup></div> <div className="percent">98%</div>
        </div>
        {(expanded==='10th')&&( <div className="Education_details">
          <div className="collegeName">Sri Sai High School</div>
          <div className="batch">2016-17</div>
        </div>)}
      </div>
    </div>
    <BottomNav back={'/Home/Skills'} next={'/Contact'} nextName={'HIRE ME'} backName={'SKILLS'} /></> 
  )
}
