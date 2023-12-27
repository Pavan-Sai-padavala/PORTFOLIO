import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleState } from '../Redux Store/features/toggleSlice';
type eduDetails={
    education:String;
    percent:String;
    college:String;
    stream?:String;
    batch:String;
}
const EducationItem = (props:eduDetails) => {
  const state=useSelector((state: { toggle: any; })=>state.toggle);
  const dispatch=useDispatch();
  return (
    <>
        <div className="Education_container" onClick={()=>dispatch(toggleState(props.education))}>
        <div className="Education_title" >
          <div className="Education_header">{props.education}</div> <div className="percent">{props.percent}</div>
        </div>
        { (state ==props.education) && (<div className="Education_details">
          <div className="collegeName">{props.college}</div>
          <div className="stream">{props.stream}</div>
          <div className="batch">{props.batch}</div>
        </div>)}
      </div>
    </>
  )
}

export default EducationItem