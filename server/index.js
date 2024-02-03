const express=require("express")
const app=express();
var cors = require('cors');

app.use(cors());

app.use(express.json());

const mailConfig=require("./controllers/sendMail");
app.post("/mail",(req,res)=>{
    if (!req.body.to || !req.body.subject || !req.body.body) {
        return res.status(400).send('Required field is missing');
    }
    mailConfig(req.body.name,req.body.to,req.body.subject,req.body.body,(err)=>{
        if(err)
           res.status(500).send(err.message);
        else
           res.status(200).json({ message: 'Email sent successfully' });
    });
})

const port=System.env.PORT || 3000;
app.listen(port,(err)=>{
    if(err)
      console.log(err);
    console.log("Server running on port",port)
}
);