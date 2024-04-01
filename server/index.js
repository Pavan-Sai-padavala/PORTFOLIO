const express=require("express")
const app=express();
var cors = require('cors');

app.use(cors({
    origin:'https://pavanpps.biz'
}));

app.use(express.json());

const mailConfig=require("./controllers/sendMail");
app.post("/mail",(req,res)=>{
        mailConfig(req.body,(err)=>{
            if(err)
                res.status(500).send(err.message);
            else
                res.status(200).json({ message: 'Recruiter Email Sent Successfully' });
        });
   
})

const port=process.env.PORT || 3000;
app.listen(port,(err)=>{
    if(err)
      console.log(err);
    console.log("Server running on port ${port}");
}
);