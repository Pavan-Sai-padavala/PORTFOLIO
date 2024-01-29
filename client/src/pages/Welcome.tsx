import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Typography, Button} from '@mui/material';

import SocialBar from '../components/SocialBar';

const Welcome = () => {
    const [state,statefunc]=useState(3);
    const newLocal = useNavigate();
    const navigate=newLocal;
  
    const Func=() =>{
      statefunc(state-1);
      if(state==1)
        navigate('/Home');
    }
  
    return(
      <>
        <div className='welcome'>
          <Typography component='h2' variant='h2' gutterBottom>Welcome to My World</Typography>
          <Typography component='h6' variant='h6' gutterBottom>2023 Graduate, passionate in tech having strong enthusiasm to learn new things,looking for challenging job roles in tech sector</Typography>
          <Button variant='contained' component='button' size='large' onClick={Func}>{state} steps away</Button>
        </div>
        <SocialBar />
      </>
  )
}

export default Welcome