import Button from '@mui/material/Button/Button'
import { useSelector,useDispatch } from 'react-redux'
import { toggleState } from '../Redux Store/features/toggleSlice'

type skillTags={
    title:String,
    skillItems:String[]
}

const SkillItem = (props:skillTags) => {
  const state=useSelector((state: { toggle: any; })=>state.toggle);
  const dispatch=useDispatch();
  const skillGen=props.skillItems.map((skill)=><div className='skillItems'>{skill}</div>)
  return (
    <div className='skillName'>
          <Button component='button' variant='outlined' size='large'onClick={() => dispatch(toggleState(props.title))}>{props.title}</Button>
          {(state==props.title) && (<div className='skillContainer'>{skillGen}</div>)}
    </div>
  )
}

export default SkillItem