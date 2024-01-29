import { Button, Typography ,Link} from '@mui/material';

type updateProps={
    imgPath:string;
    title:String;
    info:String;
    link:string;
}

const updateItem = (props:updateProps) => {
  return (
    <div className='updateItem' style={{display:'flex',justifyContent:'space-evenly', margin:'20px'}}>
       <div>
          <img src={props.imgPath} height="100vh" width='100vh' />
       </div>
       <div style={{margin:'10px'}}>
           <Typography variant='h6'>{props.title}</Typography>
           <Typography>{props.info}</Typography>
           <div style={{textAlign:'right'}}>
           <Link href={props.link} target="_blank" rel="noopener noreferrer">
                <Button>check out</Button>
           </Link>
           </div>
       </div>
       
    </div>
  )
}

export default updateItem