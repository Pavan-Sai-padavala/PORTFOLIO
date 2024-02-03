import { useNavigate } from 'react-router-dom';
import {Typography, Button} from '@mui/material';

import SocialBar from '../components/SocialBar';

const Welcome = () => {
    const newLocal = useNavigate();
    const navigate=newLocal;
  
    const Func=() =>{
      navigate('/Home');
    }
  
    return(
      <>
        <div className='welcome'>
          <Typography component='h2' variant='h2' gutterBottom>Welcome to My World</Typography>
          <Typography component='h6' variant='h6' gutterBottom>
            A Passionate Software Developer, graduated in 2023 with expertise in MERN Stack
          </Typography>
          <Button variant='contained' component='button' size='large' onClick={Func}>Click here to explore more...</Button>
        </div>
        <SocialBar />
      </>
  )
}

export default Welcome