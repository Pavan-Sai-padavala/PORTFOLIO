const nodemailer=require('nodemailer');

let transporter=nodemailer.createTransport({
  service:'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: 'pavansaipadavala@gmail.com',
    pass: 'heik nrpl poyw vnvf'
  }
})

/* let renderTemplate=(data,relativePath)=>{
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname,'../views/mailers',relativePath),
        data,
        function(err,template){
            if(err){
              console.log(err);
              return;
            }
            mailHTML=template;
        }
    )
    return mailHTML;
}
 */
module.exports={
    transporter: transporter
}