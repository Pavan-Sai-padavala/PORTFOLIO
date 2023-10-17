import React, { useState } from 'react';
type eduDetails={
    education:String;
    percent:String;
    college:String;
    stream?:String;
    batch:String;
}
const EducationItem = (props:eduDetails) => {
  const [expand,setExpand]=useState(false);
  return (
    <>
        <div className="Education_container" onClick={()=>setExpand(prevexpand=>!prevexpand)}>
        <div className="Education_title" >
          <div className="Education_header">{props.education}</div> <div className="percent">{props.percent}</div>
        </div>
        { (expand) && (<div className="Education_details">
          <div className="collegeName">{props.college}</div>
          <div className="stream">{props.stream}</div>
          <div className="batch">{props.batch}</div>
        </div>)}
      </div>
    </>
  )
}

export default EducationItem