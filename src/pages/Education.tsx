import React from 'react'
import BottomNav from '../components/BottomNav'
import { Typography } from '@mui/material';
import EducationItem from '../components/EducationItem';
export const Education = () => {

  return (
          <><div  className="cardContainer">
      <Typography variant='h4' component='h4'>Education</Typography>

      <EducationItem education="B.Tech" percent="73%" college="Velagapudi Ramakrishna Siddhartha Engineering College"
                     stream="Electronics and Communication Engineering" batch="2019-23"/>

      <EducationItem education="Intermediate" percent="92.3%" college="Sri Chaitanya Junior College" 
                     stream="M.P.C" batch="2017-19" />

      <EducationItem education="10" percent="93.1%" college="Sri Chaitanya High School"
                     batch="2016-17" />
      </div>
    <BottomNav back={'/Home/Skills'} next={'/Contact'} nextName={'HIRE ME'} backName={'SKILLS'} /></> 
  )
}
