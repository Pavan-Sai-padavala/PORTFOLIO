import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
type navprops={
    nextName: string;
    backName: string;
    back:string;
    next:string;
}

const BottomNav = (props:navprops) => {
    const navigate=useNavigate();
    const back=props.back;
    const next=props.next;
    const backname=props.backName;
    const nextname=props.nextName;
    function Func1(){
        navigate(back);
    }
    function Func2(){
        if(next !==' ')
            navigate(next)
    }
    if(back ==' ' )
        return(
            <div className='bottomNav'>
                <div style={{width:'34px',height:'40px',padding:'6px 16px'}}></div>
                <Button variant='contained' className='bottomNavItem2' onClick={Func2}>{nextname}</Button>
            </div>
            )
    if(next ==' ' )
            return(
                <div className='bottomNav'>
                    <Button variant='contained' className='bottomNavItem1' onClick={Func1}>{backname}</Button>
                    <div style={{width:'34px',height:'40px',padding:'6px 16px'}}></div>
                </div>
                )
  return (
    <div className='bottomNav'>
            <Button variant='contained' className='bottomNavItem1' onClick={Func1}>{backname}</Button>
            <Button variant='contained' className='bottomNavItem2' onClick={Func2}>{nextname}</Button>
    </div>
  )
}

export default BottomNav

