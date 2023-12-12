const handlebars = require('handlebars');
const fs = require('fs');

const transporter=require("../config/nodemailer").transporter;

module.exports=function mailConfig(name,to,subject,body){
    let source = fs.readFileSync('Templates\\HelloEmailTemplate.html', 'utf8');
    let template = handlebars.compile(source);
    let replacements = {
      name: name,
      body: body
  };
  
  // replace the variables in the template with the actual values
  let htmlToSend = template(replacements);
    let mailOptions={
        from: "pavansaipadavala@gmail.com",
        to: to,
        subject:subject,
        html: htmlToSend
    }


transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
      res.sendStatus(200);
    }
  })
}